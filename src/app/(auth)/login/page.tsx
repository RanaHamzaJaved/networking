"use client";

import { useState } from "react";
import { login } from "@/lib/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await login({ email, password });
            // Auth successful => redirect to dashboard
            window.location.href = "/dashboard";
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl p-8 shadow-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Sign in to your account
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md bg-slate-800 border border-slate-600 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            required
                            minLength={6}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md bg-slate-800 border border-slate-600 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {error && (
                        <p className="text-xs text-red-400">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-md bg-sky-600 hover:bg-sky-500 disabled:opacity-50 py-2 text-sm font-medium transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </main>
    );
}
