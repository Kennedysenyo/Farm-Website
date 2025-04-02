import { pgTable, integer, serial, timestamp, text } from "drizzle-orm/pg-core";


export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  quantity: integer("quantity").notNull(),
  productId: integer("product_id").references(() => products.id, { onDelete: "cascade"}),
  status: text("status").default("processing"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  date: timestamp("date").notNull(),
  message: text("message"),
})