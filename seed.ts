import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { clientTable } from "./db/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const clients: (typeof clientTable.$inferInsert)[] = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      job: "Software Engineer",
      rate: 120.0,
      isActive: true,
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      job: "Product Manager",
      rate: 150.0,
      isActive: true,
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      job: "Designer",
      rate: 90.0,
      isActive: true,
    },
    {
      name: "Dana Lee",
      email: "dana.lee@example.com",
      job: "Data Analyst",
      rate: 110.0,
      isActive: false,
    },
    {
      name: "Eve Martin",
      email: "eve.martin@example.com",
      job: "HR Specialist",
      rate: 100.0,
      isActive: true,
    },
  ];
  const res = await db.select().from(clientTable);
  console.log(res);
}

main();
