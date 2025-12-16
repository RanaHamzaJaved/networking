const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function httpClient<T>(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

  const url = `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
}

export async function fetchJson<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await httpClient(path, options);

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return (await res.json()) as T;
}
