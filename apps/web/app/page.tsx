import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      <h1>Users</h1>
      {JSON.stringify(users)}
    </div>
  );
}