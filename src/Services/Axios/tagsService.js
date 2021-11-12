import { APITags } from "./BaseService/index";

export async function getRecordTagColors(id) {
  try {
    const recordID = Number.parseInt(id);

    const response = await APITags.get(`/records/${recordID}/tags`);

    return [response.status, response.data];
  } catch (err) {
    const response = err.response;
    const status = err.response?.status;
    return [status, response];
  }
}
