"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfiniteEvents() {
  return useInfiniteQuery({
    queryKey: ["events"],
    initialPageParam: 1, // REQUIRED in React Query v5
    queryFn: async ({ pageParam }) => {
      const res = await fetch(`/api/mock/events?page=${pageParam}`);
      if (!res.ok) throw new Error("Failed to load events");
      return res.json();
    },
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
}
