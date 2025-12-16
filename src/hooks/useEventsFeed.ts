import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { EventItem } from "@/types/event";

export function useEventsFeed() {
  return useQuery({
    queryKey: ["events-feed"],
    queryFn: async () => {
      const res = await api.get<EventItem[]>("/feed-events");
      return res.data;
    },
  });
}
