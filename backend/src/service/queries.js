import { db } from "../db/db.js";
import { clientTable } from "../db/schema.js";

export async function getClients() {
  const res = await db.select().from(clientTable);
  return res;
}

export async function createClient(ClientData) {
  await db.insert(clientTable).values(ClientData);
}
