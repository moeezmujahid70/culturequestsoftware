import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "/Users/moeezmujahid/Projects/culturequestsoftware";
const appDir = path.join(root, "app");

const png16 = await readFile(path.join(appDir, "favicon-16.png"));
const png32 = await readFile(path.join(appDir, "favicon-32.png"));

const images = [
  { size: 16, buffer: png16 },
  { size: 32, buffer: png32 },
];

const headerSize = 6;
const directoryEntrySize = 16;
const initialOffset = headerSize + directoryEntrySize * images.length;

let offset = initialOffset;
const entries = [];
for (const image of images) {
  const entry = Buffer.alloc(directoryEntrySize);
  entry.writeUInt8(image.size === 256 ? 0 : image.size, 0);
  entry.writeUInt8(image.size === 256 ? 0 : image.size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(image.buffer.length, 8);
  entry.writeUInt32LE(offset, 12);
  entries.push(entry);
  offset += image.buffer.length;
}

const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);

const ico = Buffer.concat([header, ...entries, ...images.map((image) => image.buffer)]);
await writeFile(path.join(appDir, "favicon.ico"), ico);
