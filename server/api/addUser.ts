import { addUser } from "../db/methods";
import { dbConnect } from "../db/mongoose";

export default defineEventHandler(async (event) => {
  await dbConnect();

  const user = await readBody(event);

  await addUser(JSON.parse(user));

  return { status: true };
});
