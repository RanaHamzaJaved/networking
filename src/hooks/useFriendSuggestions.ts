import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { FriendSuggestion } from "@/types/suggestion";

export function useFriendSuggestions() {
  return useQuery({
    queryKey: ["friend-suggestions"],
    queryFn: async () => {
      const res = await api.get<FriendSuggestion[]>("/suggestions");
      return res.data;
    },
  });
}
