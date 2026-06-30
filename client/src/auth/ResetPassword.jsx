import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { api, ApiError } from '../lib/api.js';
import './auth.css';

export default function ResetPassword() {
  const [params]          = useSearchParams();
  const navigate          = useNavigate();
  const token             = params.get('token');

  const [form, setForm]   = useState({ password: '', confirm: '' });
  const [error, setError] = useState('');
  const [busy, setBusy]   = useState(false);

  if (!token) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <h1 className="auth-title">Invalid Link</h1>
          <p className="auth-subtitle">This reset link is missing or malformed. Please request a new one.</p>
          <Link to="/forgot-password" className="auth-btn" style={{ display: 'block', textDecoration: 'none', marginTop: '8px' }}>
            Request New Link
          </Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    if (form.password.length < 8)  return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(form.password)) return 'Password must include at least one uppercase letter.';
    if (!/[0-9]/.test(form.password)) return 'Password must include at least one number.';
    if (form.password !== form.confirm) return 'Passwords do not match.';
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }

    setBusy(true);
    setError('');
    try {
      await api.post(`/auth/reset-password?token=${token}`, { password: form.password });
      navigate('/login', { state: { message: 'Password reset successfully. Please sign in.' } });
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : 'Reset failed. The link may have expired — request a new one.'
      );
    } finally {
      setBusy(false);
    }
  };

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-eyebrow">Account Recovery</span>
        <h1 className="auth-title">Set new password</h1>
        <p className="auth-subtitle">Choose a strong password you haven't used before.</p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={submit} noValidate>
          <div className="auth-field">
            <label className="auth-label" htmlFor="password">New Password</label>
            <input
              id="password" name="password" type="password"
              className="auth-input" placeholder="Min. 8 chars, 1 uppercase, 1 number"
              value={form.password} onChange={handle}
              autoComplete="new-password" autoFocus
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="confirm">Confirm New Password</label>
            <input
              id="confirm" name="confirm" type="password"
              className="auth-input" placeholder="Repeat your new password"
              value={form.confirm} onChange={handle}
              autoComplete="new-password"
            />
          </div>

          <button className="auth-btn" type="submit" disabled={busy} data-magnetic>
            {busy ? <><span className="btn-spinner" /> Saving…</> : 'Reset Password'}
          </button>
        </form>

        <p className="auth-footer">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
