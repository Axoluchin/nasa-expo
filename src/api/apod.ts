import instance from "./instance";
import { apodType } from "./interface";

export const getAPOD = async () => {
  try {
    const result = await instance.get<apodType>("planetary/apod");
    return result.data;
  } catch (error) {
    return null;
  }
};
