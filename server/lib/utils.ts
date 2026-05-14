import type { UserType } from "./types";

export const fAddUser = async ({ fullName, phoneNumber, email }: UserType) => {
  const res = await (
    await fetch("/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        phoneNumber,
        email: email || "",
      }),
    })
  ).json();

  return res;
};
