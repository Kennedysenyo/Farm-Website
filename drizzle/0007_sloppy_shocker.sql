ALTER TABLE "orders" DROP CONSTRAINT "orders_product_id_products_id_fk";
--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "product_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;