import { parse as parseImage } from "exifr";
import { exifFields } from "./consts";

/**
 * Description placeholder
 * @export
 * @async
 * @param {string} fileName
 * @returns {unknown}
 */
export async function extractExif(fileName) {
  const exifData = await parseImage(fileName, {
    xmp: true,
    pick: exifFields,
  });
  return exifData;
}
