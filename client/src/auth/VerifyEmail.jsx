import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { api, ApiError } from '../lib/api.js';
import './auth.css';

export default function VerifyEmail() {
  const [params]   = useSearchParams();
  const token      = params.get('token');

  const [status, setStatus] = useState('loading'); // loading | success | error
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('No verification token found. Please use the link from your email.');
      return;
    }
    api.get(`/auth/verify-email?token=${token}`)
      .then((res) => {
        setStatus('success');
        setMessage(res.message || 'Email verified successfully!');
      })
      .catch((err) => {
        setStatus('error');
        setMessage(
          err instanceof ApiError
            ? err.message
            : 'Verification failed. The link may have expired.'
        );
      });
  }, [token]);

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        {status === 'loading' && (
          <>
            <div className="auth-spinner" style={{ margin: '0 auto 24px' }} />
            <h1 className="auth-title">Verifying your email…</h1>
            <p className="auth-subtitle">Just a moment.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h1 className="auth-title">Email verified!</h1>
            <p className="auth-subtitle">{message}</p>
            <Link
              to="/login"
              className="auth-btn"
              style={{ display: 'block', textDecoration: 'none', marginTop: '8px' }}
            >
              Sign In
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>❌</div>
            <h1 className="auth-title">Verification failed</h1>
            <p className="auth-subtitle">{message}</p>
            <Link
              to="/login"
              className="auth-btn"
              style={{ display: 'block', textDecoration: 'none', marginTop: '8px' }}
            >
              Back to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
