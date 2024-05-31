import exifr from "exifr";
import { exifFields } from "./consts.js";

/**
 * Description placeholder
 * @export
 * @async
 * @param {string} fileName
 * @returns {unknown}
 */
export async function extractExif(fileName) {
  const exifData = await exifr.parse(fileName, {
    xmp: true,
    pick: exifFields,
  });
  return exifData;
}
