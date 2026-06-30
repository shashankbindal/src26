/**
 * Thin fetch wrapper.
 * All requests go to /api/v1/* (proxied to the backend by Vite in dev,
 * and served from the same origin in production behind a reverse proxy).
 * Cookies are sent automatically (credentials: 'include').
 */

const BASE = '/api/v1';

class ApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

async function request(method, path, body = null, isFormData = false) {
  const headers = {};
  if (body && !isFormData) headers['Content-Type'] = 'application/json';

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    credentials: 'include',
    body: body
      ? isFormData
        ? body
        : JSON.stringify(body)
      : undefined,
  });

  const data = res.headers.get('content-type')?.includes('application/json')
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw new ApiError(
      data?.message || `HTTP ${res.status}`,
      res.status,
      data?.errors || []
    );
  }

  return data;
}

export const api = {
  get:    (path)          => request('GET',    path),
  post:   (path, body)    => request('POST',   path, body),
  patch:  (path, body)    => request('PATCH',  path, body),
  put:    (path, body)    => request('PUT',    path, body),
  delete: (path)          => request('DELETE', path),
  upload: (path, formData) => request('POST',  path, formData, true),
  uploadPatch: (path, formData) => request('PATCH', path, formData, true),
};

export { ApiError };
