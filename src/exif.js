import { parse as parseImage } from "exifr";

export async function extractExif(blob) {
  const fields = [
    "ModifyDate",
    "Make",
    "Model",
    "AbsoluteAltitude",
    "RelativeAltitude",
    "GimbalRollDegree",
    "GimbalYawDegree",
    "GimbalPitchDegree",
    "FlightRollDegree",
    "FlightYawDegree",
    "FlightPitchDegree",
    "Orientation",
    "SerialNumber",
    "GPSAltitude",
    "GPSLatitudeRef",
    "GPSLongitudeRef",
    "GPSLongitude",
    "GPSLatitude",
    "latitude",
    "longitude",
    "CreateDate",
    "BrightnessValue",
    "FNumber",
    "ExposureTime",
    "ImageDescription",
  ];

  const exifData = await parseImage(blob, {
    xmp: true,
    pick: fields,
  });
}
