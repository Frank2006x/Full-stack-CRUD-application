import { pgTable, serial, varchar, boolean, numeric } from "drizzle-orm/pg-core";

export const clientTable = pgTable("client_tb", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  job: varchar("job", { length: 50 }),
  rate: numeric("rate", { precision: 10, scale: 2 }).default("100.00"),
  isActive: boolean("isActive").default(true)
});
