import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Migrations need a direct (non-pooled) connection.
    // Left unset (rather than using the throwing `env()` helper) so
    // `prisma generate` keeps working before real credentials exist.
    url: process.env.DIRECT_URL ?? "",
  },
});
