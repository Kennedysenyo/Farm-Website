CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"address" text NOT NULL,
	"quantity" integer NOT NULL,
	"product_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "orders_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"price" integer,
	"ImageUrl" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;