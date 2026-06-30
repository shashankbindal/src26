import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api, ApiError } from '../lib/api.js';
import './auth.css';

export default function ForgotPassword() {
  const [email, setEmail]     = useState('');
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');
  const [busy, setBusy]       = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError('Please enter your email address.'); return; }
    setBusy(true);
    setError('');
    try {
      await api.post('/auth/forgot-password', { email: email.trim() });
      setSent(true);
    } catch (err) {
      /* Backend always returns 200 to prevent email enumeration, so errors here
         are unexpected (network, server crash). Still show a graceful message. */
      setSent(true);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📬</div>
          <h1 className="auth-title">Check your inbox</h1>
          <p className="auth-subtitle">
            If an account exists for <strong style={{ color: 'var(--primary)' }}>{email}</strong>,
            you'll receive a reset link shortly. Check your spam folder if it doesn't arrive.
          </p>
          <Link to="/login" className="auth-btn" style={{ display: 'block', textDecoration: 'none', marginTop: '8px' }}>
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-eyebrow">Account Recovery</span>
        <h1 className="auth-title">Forgot password?</h1>
        <p className="auth-subtitle">
          Enter the email associated with your account and we'll send a reset link.
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form className="auth-form" onSubmit={submit} noValidate>
          <div className="auth-field">
            <label className="auth-label" htmlFor="email">Email Address</label>
            <input
              id="email" name="email" type="email"
              className="auth-input" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              autoComplete="email" autoFocus
            />
          </div>

          <button className="auth-btn" type="submit" disabled={busy} data-magnetic>
            {busy ? <><span className="btn-spinner" /> Sending…</> : 'Send Reset Link'}
          </button>
        </form>

        <p className="auth-footer">
          Remembered it? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
