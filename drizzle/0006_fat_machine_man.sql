ALTER TABLE "orders" DROP CONSTRAINT "orders_product_id_products_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "status" text DEFAULT 'processing';--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;