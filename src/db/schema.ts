import { pgTable, integer, serial, timestamp, text, pgEnum } from "drizzle-orm/pg-core";

export const orderStatusEnum = pgEnum("status", [
  "pending",
  "shipped",
  "delivered",
])


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
  productId: integer("product_id").references(() => products.id, { onDelete: "cascade"}).notNull(),
  status: orderStatusEnum("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});


// Drizzle views
export const orderDetails = pgTable("order_details", {
  orderId: integer("order_id").primaryKey(),
  customerName: text("customer_name"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  quantity: integer("quantity"),
  // status: statusEnum("status"), because of error
  orderDate: timestamp("order_date"),
  productName: text("product_name"),
  price: integer("price"),
});


export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  date: timestamp("date").notNull(),
  message: text("message"),
})