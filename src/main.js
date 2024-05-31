import { findAllImages } from "./fileUtils";

const parentDirectory = "/tmp";

const imagePaths = findAllImages(parentDirectory);

console.log(imagePaths)
