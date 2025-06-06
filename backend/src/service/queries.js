import { db } from "../db/db.js";
import { clientTable } from "../db/schema.js";
import { eq, like } from "drizzle-orm";

export async function getClients() {
  const res = await db.select().from(clientTable).orderBy(clientTable.id);
  return res;
}

export async function createClient(ClientData) {
  await db.insert(clientTable).values(ClientData);
}

export async function updateClient(ClientData, clientId) {
  await db
    .update(clientTable)
    .set(ClientData)
    .where(eq(clientTable.id, clientId));
  const [updatedUser] = await db
    .select()
    .from(clientTable)
    .where(eq(clientTable.id, clientId));
  return updatedUser;
}

export async function deleteClient(clientId) {
  const results = await db
    .delete(clientTable)
    .where(eq(clientTable.id, clientId));
  return results.rowCount > 0 ? true : false;
}

export async function searchClients(clientName) {
  const pattern = `%${clientName}%`;
  const results = await db
    .select()
    .from(clientTable)
    .where(like(clientTable.name, pattern))
    .orderBy(clientTable.id);
  return results;
}
