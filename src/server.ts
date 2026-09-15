import { Hono } from "hono";

import { ExifData } from "libexif-wasm";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Hono with Nitro!");
});

app.get("/exif", async (context) => {
  const url = context.req.query("url");
  console.log(url);
  if (url !== undefined) {
    const bytes = await (await fetch(url)).bytes();

    const exifData = ExifData.newFromData(bytes);
    const exifDataObject = {
      byteOrder: exifData.byteOrder,
      dataType: exifData.dataType,
    };
    exifData.free();
    return context.json(exifDataObject);
  }

  return context.json({ status: "OK" });
});

app.get("/health", (context) => {
  return context.json({ status: "OK" });
});

export default app;
