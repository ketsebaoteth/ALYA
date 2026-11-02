import { User } from "./model";
import type { UserType } from "~~/shared/types/types";

export const addUser = async (user: UserType) => {
  const userObj = new User(user);
  await userObj.save();
};

export const getUsers = async () => {
  return await User.find();
};
