export interface IUser {
  id: number;
  email: string;
  username: string;
  password_hash: string;
  noctara_points: number;
}

export interface IDream {
  id: number;
  user_id: number;
  dream_prompt: string;
  url: string;
}
