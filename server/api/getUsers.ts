import { getUsers } from "../db/methods";
import { dbConnect } from "../db/mongoose";

export default defineEventHandler(async () => {
  await dbConnect();

  const users = await getUsers();

  return { status: true, data: users };
});
