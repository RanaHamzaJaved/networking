import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import type { UserProfile } from "@/types/user";

export function useUserProfile() {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await api.get<UserProfile>("/profile");
      return res.data;
    },
  });
}
