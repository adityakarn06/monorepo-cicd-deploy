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

// by default, Next.js will statically generate this page at build time (and have to talk to db at build time here).
// if you want to enable 'force-dynamic' (then it doesn't need to talk to db at build time bcs it will not generate statically).
// or you can export `revalidate` to enable incremental static regeneration
// incremental static regeneration (ISR) can be enabled by uncommenting the line below
// export const revalidate = 60 // revalidate every 60 seconds
// or
// to force dynamic rendering, uncomment the line below
// export const dynamic = 'force-dynamic'