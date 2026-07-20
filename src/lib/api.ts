// Client for the Interval360 Node.js API (code/nodejs in ProjectSuez).
// Login/signup endpoints require these headers (see
// src/middlewares/authSecurity.middleware.js requireWebsiteAccess) and rely
// on httpOnly cookies for the session, hence `credentials: "include"`.

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9415/api";

export class ApiError extends Error {
  status: number;
  /** Per-field validation messages, when the backend returns them (e.g. weak password). */
  errors?: string[];
  constructor(message: string, status: number, errors?: string[]) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

async function apiFetch(path: string, body: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Client": "interval360-web",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data?.status === false) {
    const detail = Array.isArray(data?.errors) && data.errors.length ? data.errors.join(" ") : null;
    throw new ApiError(detail || data?.message || `Request failed (${res.status})`, res.status, data?.errors);
  }

  return data;
}

export type LoginPayload = { email: string; password: string };

export function login(payload: LoginPayload) {
  return apiFetch("/user/login", payload);
}

// Regular users have no password — login is email + one-time code, verified
// in two steps (see code/nodejs sendLoginOTP / verifyLoginOTP controllers).
export type SendLoginOtpPayload = { email: string };

export function sendLoginOtp(payload: SendLoginOtpPayload) {
  return apiFetch("/user/sendLoginOTP", payload);
}

export type VerifyLoginOtpPayload = { email: string; otp: string };

export function verifyLoginOtp(payload: VerifyLoginOtpPayload) {
  return apiFetch("/user/verifyLoginOTP", payload);
}

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
  company_name: string;
  total_employees: string | number;
};

export function signup(payload: SignupPayload) {
  return apiFetch("/user/register-admin", payload);
}
