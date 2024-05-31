import { readdir, stat } from "fs/promises";
import path from "path";

import { imageExtensions } from "./consts";

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
      // Recursively traverse subdirectories
      const recurse = await findAllImages(filePath);
      filePaths.push(...recurse);
    } else if (path.extname(filePath) in imageExtensions) {
      // Check for JPG or PNG extensions (case-insensitive)
      filePaths.push(filePath);
    }
  }

  return filePaths;
}
