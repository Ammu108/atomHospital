// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
	boolean,
	pgTableCreator,
	timestamp,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `atom-hospital_${name}`);

export const users = createTable("user", {
	id: uuid("id").defaultRandom().primaryKey(),
	role: varchar("role", { length: 50 }).default("user").notNull(),
	name: varchar("name", { length: 256 }).notNull(),
	email: varchar("email", { length: 256 }).notNull(),
	password: varchar("password", { length: 256 }).notNull(),
	isDeleted: boolean("is_deleted").default(false),
	deletedAt: timestamp("deleted_at"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
