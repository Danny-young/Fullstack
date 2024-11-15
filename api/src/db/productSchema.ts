import { integer, pgTable, varchar, text, doublePrecision  } from "drizzle-orm/pg-core";

export const usersTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  description: text(),
  image: varchar({length: 255 }),
  price: doublePrecision().notNull()
});
