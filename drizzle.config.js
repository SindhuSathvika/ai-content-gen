import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  // out: "./drizzle",
  dbCredentials: {
    url: "postgresql://AIContentGeneratorDb_owner:xiItKEA2Vs0r@ep-empty-dawn-a1wf7iiv.ap-southeast-1.aws.neon.tech/AIContentGeneratorDb?sslmode=require"
  }
});
