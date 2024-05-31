import { findAllImages } from "./fileUtils.js";
import { extractExif } from "./exif.js";

const parentDirectory = "./tmp";

const imagePaths = await findAllImages(parentDirectory);

const promises = imagePaths.map((path) => extractExif(path));

Promise.all(promises).then(res => console.log(res.length, res));