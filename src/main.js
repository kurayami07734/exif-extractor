import { findAllImages, writeToJson } from "./fileUtils.js";
import { extractExif } from "./exif.js";

const parentDirectory = "./tmp";

const imagePaths = await findAllImages(parentDirectory);

const promises = imagePaths.map((path) => extractExif(path));

const exifs = await Promise.all(promises);

const writeProms = exifs.map((e) => writeToJson(`${Math.random()}`, e));

Promise.all(writeProms);

