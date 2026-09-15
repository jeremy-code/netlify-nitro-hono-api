import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    nitro(),
    viteStaticCopy({
      targets: [
        {
          src: fileURLToPath(
            import.meta.resolve("libexif-wasm/output/libexif.wasm"),
          ),
          dest: "../.netlify/edge-functions/server/_libs",
          rename: { stripBase: true },
        },
      ],
      environment: "nitro",
    }),
  ],
});
