import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { EventItem } from "@/types/event";

export function useBookedEvents() {
  return useQuery({
    queryKey: ["booked-events"],
    queryFn: async () => {
      const res = await api.get<EventItem[]>("/booked-events");
      return res.data;
    },
  });
}
