import jwt, { VerifyErrors } from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

import User from "../database/models/user.model";

import { IUser } from "./types";

require("dotenv").config();
const secret: string = process.env.JWT_SECRET as string;

async function authenticate(token: string): Promise<number | null> {
  let id: number | null = null;

  jwt.verify(token, secret, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      throw new Error("Invalid jwt token.");
    }
    id = decoded.id;
  });

  return id;
}

async function login(username: string, password: string): Promise<string> {
  // check for empty field
  if (!username || !password) {
    throw new Error("Cannot leave field empty.");
  }

  // get user corresponding to username
  const user: any = await User.findOne({
    where: { username: username },
  });

  if (!user) {
    throw new Error("Username does not exist.");
  }

  // check if password hashes match
  const match: boolean = await bcrypt.compare(password, user.password_hash);

  if (!match) {
    throw new Error("Incorrect password.");
  }

  // return signed token if no error was thrown
  const token: string = jwt.sign({ id: user.id }, secret, {
    expiresIn: "3d",
  });

  return token;
}

async function register(
  email: string,
  username: string,
  password: string
): Promise<void> {
  // check for empty field
  if (!email || !username || !password) {
    throw new Error("Cannot leave field empty.");
  }

  // validate email
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email input.");
  }

  validator.normalizeEmail(email);

  // check if username or email is already in use
  if (
    (await User.findOne({
      where: { username: username },
    })) ||
    (await User.findOne({
      where: { email: email },
    }))
  ) {
    throw new Error("Username or email already in use.");
  }

  // hash password with salt
  const passwordHash: string = await bcrypt.hash(password, 10);

  await User.create({
    email: email,
    username: username,
    password_hash: passwordHash,
    noctara_points: 0,
  });
}

export { authenticate, login, register };
