export interface UserProfile {
  id: string;
  name: string;
  bio: string;
  avatarUrl?: string;
  stats: {
    friends: number;
    events: number;
  };
}
