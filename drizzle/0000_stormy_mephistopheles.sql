CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"tagline" varchar(255),
	"description" text,
	"website_url" text,
	"tags" json,
	"vote_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"approved_at" timestamp with time zone,
	"status" varchar(20) DEFAULT 'pending',
	"submitted_by" varchar(80) DEFAULT 'anonymous',
	"user_id" varchar(100),
	"organization_id" varchar(120)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "products_status_idx" ON "products" USING btree ("status");--> statement-breakpoint
CREATE INDEX "products_organization_idx" ON "products" USING btree ("organization_id");