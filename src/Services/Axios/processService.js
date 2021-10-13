import { APIProcess } from "./BaseService";

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
    const response = await APIProcess.post(`/records/${id}/forward`, {
      section_id: section_id,
    });
    toast.success("Registro encaminhado com sucesso!");
    console.log(response.data);
    return true;
  } catch (error) {
    toast.error("Erro ao encaminhar processo!");
    return false;
  }
}
