import { defineConfig } from "sanity";
import schemas from "./sanity/schemas/index";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "eu6g2tj1",
  dataset: "production",
  apiVersion: "2024-04-24",
  title: "Jumpp",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
  useCdn: true,
});

export default config;
