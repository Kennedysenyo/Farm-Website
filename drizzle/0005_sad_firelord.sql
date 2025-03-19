CREATE TABLE "consultation" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"date" timestamp NOT NULL,
	"message" text
);
