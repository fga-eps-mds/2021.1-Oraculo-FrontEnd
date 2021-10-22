import { APIProcess } from "./BaseService";
import axios from "axios";

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
    toast.error("Erro ao buscar registro!");
  }
}

export async function getProcessByPage(page, toast) {
  try {
    console.log("dentro da funcao");
    const response = await APIProcess.get(`/records/page/${page}`);

    console.log(`"papapapap",${JSON.stringify(response)}`);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");

    console.log(error);
  }
}

export async function getProcessTotalNumber(toast) {
  try {
    const response = await APIProcess.get("/count/records");
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}
