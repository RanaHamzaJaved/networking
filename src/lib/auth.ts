import { fetchJson } from "./httpClient";
import type { ApiResponse } from "@/types/api";
import type { UserProfile } from "@/types/user";

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  return fetchJson<ApiResponse<UserProfile>>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
