import { APIProcess } from "./BaseService";

export async function getAllProcess(toast) {
  try {
    const response = await APIProcess.get("/records", {});
    console.log(`${JSON.stringify(response)}`);
    return response.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 400) {
      toast.error("Requisição inválida");
    } else {
      toast.error("Não foi possivel realizar a requisição");
    }
  }
}

export async function getProcessByID(ID, toast) {
  try {
    const response = await APIProcess.get(`/records/${ID}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar processo!");
  }
}

export async function getProcessByPage(page, toast) {
  try {
    const response = await APIProcess.get(`/records/page/${page}`);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar processo!");
  }
}

export async function getProcessTotalNumber(ID, toast) {
  try {
    const response = await APIProcess.get("/count/records");
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}

export async function getAllFields(toast) {
  try {
    const response = await APIProcess.get("/records/fields");
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}
