"use client";

import { useQuery } from "@tanstack/react-query";

export function useCarouselData() {
  return useQuery({
    queryKey: ["carousel"],
    queryFn: async () => {
      const res = await fetch("/api/mock/carousel");
      if (!res.ok) throw new Error("Failed to fetch carousel data");
      return res.json();
    },
  });
}
