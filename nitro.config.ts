import { defineConfig } from "nitro";

export default defineConfig({
  preset: "netlify-edge",
  serverEntry: "./src/server.ts",
  output: {
    dir: "dist",
  },
});
