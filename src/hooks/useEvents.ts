import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { EventItem } from "@/types/event";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await api.get<EventItem[]>("/events");
      return res.data;
    },
  });
}
