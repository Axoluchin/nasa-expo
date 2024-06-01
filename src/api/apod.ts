import { NASA_API_KEY } from "../settings";
import instance from "./instance";
import { apodType } from "./interface";

export const getAPOD = async () => {
  try {
    const result = await instance.get<apodType>("planetary/apod", {
      params: {
        thumbs: true,
        api_key: NASA_API_KEY,
      },
    });
    return result.data;
  } catch (error) {
    return null;
  }
};

export const getAPODrandom = async () => {
  try {
    const result = await instance.get<apodType[]>("planetary/apod", {
      params: {
        count: 1,
        thumbs: true,
        api_key: NASA_API_KEY,
      },
    });
    return result.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
