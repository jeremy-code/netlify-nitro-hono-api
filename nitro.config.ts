import { defineConfig } from "nitro";

export default defineConfig({
  preset: "netlify",
  serverEntry: "./src/server.ts",
  output: {
    dir: "dist",
  },
});
