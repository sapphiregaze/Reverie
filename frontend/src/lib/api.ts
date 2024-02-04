import { ErrorMessage, Token, User } from "./types";

const host: string =
  process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:8000";

export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  const user: User = { username: username, password: password };

  const response: Response = await fetch(`${host}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  const data: Token = await response.json();

  return data.token;
};

export const register = async (
  email: string,
  username: string,
  password: string,
): Promise<string> => {
  const user: User = { email: email, username: username, password: password };

  const response: Response = await fetch(`${host}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  const data: Token = await response.json();

  return data.token;
};
