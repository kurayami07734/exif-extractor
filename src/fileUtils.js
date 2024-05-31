import { readdir, stat, writeFile } from "fs/promises";
import path from "path";

import { imageExtensions } from "./consts.js";

/**
 * Recursively locate all file present in parent directory
 * @export
 * @async
 * @param {string} parentDirectory
 * @returns {string[]} paths of all images found in parent directory
 */
export async function findAllImages(parentDirectory) {
  const files = await readdir(parentDirectory);
  const filePaths = [];
  for (const file of files) {
    const filePath = path.join(parentDirectory, file);
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      const recurse = await findAllImages(filePath);
      filePaths.push(...recurse);
    } else if (imageExtensions.includes(fileExtension(filePath))) {
      filePaths.push(filePath);
    }
  }
  return filePaths;
}

function fileExtension(filePath) {
  return path.extname(filePath).slice(1).toLowerCase();
}

export async function writeToJson(fileName, data) {
  return writeFile(`./outputs/exif/${fileName}.json`, JSON.stringify(data, null, 2));
}