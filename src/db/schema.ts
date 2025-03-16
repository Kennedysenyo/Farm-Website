import { pgTable, integer, serial, timestamp, text } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  quantity: integer("quantity").notNull(),
  productId: text("productId").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
