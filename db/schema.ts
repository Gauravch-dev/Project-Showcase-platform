import { index, integer, json, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),

  name: varchar("name",{ length: 255 }).notNull(),
  slug: varchar("slug",{ length: 255 }).notNull(),
  tagline: varchar("tagline",{ length: 255 }),
  description: text("description"),

  websiteUrl:text("website_url"),
  tags: json("tags").$type<string[]>(),

  voteCount: integer("vote_count").notNull().default(0),

  createdAt: timestamp("created_at",{withTimezone:true}).defaultNow(),
  approvedAt: timestamp("approved_at",{withTimezone:true}),
  status: varchar("status",{length:20}).default("pending"),
  submittedBy: varchar("submitted_by",{length:80}).default("anonymous"),
  userId: varchar("user_id",{length:100}),
  
  organizationId: varchar("organization_id",{length:120}),
},

(table)=>({
    slugIdx:uniqueIndex("products_slug_idx").on(table.slug),
    statusIdx: index("products_status_idx").on(table.status),
    organizationIdx: index("products_organization_idx").on(table.organizationId),
})
);