import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "picture");
const outputDir = path.join(rootDir, "src", "optimized-picture");
const imagePattern = /\.(jpe?g|png|webp|avif)$/i;

function safeBaseName(fileName) {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/[^a-z0-9_-]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

await fs.mkdir(outputDir, { recursive: true });

const sourceFiles = (await fs.readdir(sourceDir))
  .filter((fileName) => imagePattern.test(fileName))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

let totalInput = 0;
let totalOutput = 0;

for (const [index, fileName] of sourceFiles.entries()) {
  const inputPath = path.join(sourceDir, fileName);
  const outputName = `${String(index + 1).padStart(2, "0")}-${safeBaseName(fileName)}.webp`;
  const outputPath = path.join(outputDir, outputName);
  const inputStat = await fs.stat(inputPath);

  await sharp(inputPath, { limitInputPixels: false })
    .rotate()
    .resize({
      width: 1200,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 72,
      effort: 5,
    })
    .toFile(outputPath);

  const outputStat = await fs.stat(outputPath);
  totalInput += inputStat.size;
  totalOutput += outputStat.size;

  console.log(
    `${fileName} -> ${outputName} (${(inputStat.size / 1048576).toFixed(2)} MB -> ${(outputStat.size / 1048576).toFixed(2)} MB)`,
  );
}

console.log(
  `Optimized ${sourceFiles.length} images: ${(totalInput / 1048576).toFixed(2)} MB -> ${(totalOutput / 1048576).toFixed(2)} MB`,
);
