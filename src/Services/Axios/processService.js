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

export async function fowardRegisterDep(section_id, id, toast) {
  try {
    console.log(id);
    console.log(section_id);
    await APIProcess.post(`/records/${id}/forward`, {
      section_id: section_id,
    });
    toast.success("Registro encaminhado com sucesso!");
    return true;
  } catch (error) {
    toast.error("Erro ao encaminhar processo!");
    return false;
  }
}

export async function setStatusRecord(id, situation_record, toast) {
  try {
    await APIProcess.post(`/records/${id}/status`, {
      situation_record: situation_record,
    });
    toast.success("Registro concluido!");
  } catch (error) {
    toast.error("Erro ao tentar concluir registro");
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
    const response = await APIProcess.get(
      "http://localhost:8001/count/records"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}
