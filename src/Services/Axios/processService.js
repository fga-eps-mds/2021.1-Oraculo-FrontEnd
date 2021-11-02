import { APIProcess } from "./BaseService";
import GenericBlueButton from "../../Components/GenericBlueButton";

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
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");
  }
}

export async function getProcessByPage(page, toast) {
  try {
    const response = await APIProcess.get(`/records/page/${page}`);

    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");

    console.log(error);
  }
}

export async function getProcessTotalNumber(toast) {
  try {
    const response = await APIProcess.get("/count/records");
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}

export async function createRecord(recordInfo, toast) {
  try {
    console.log(recordInfo);
    const record = await APIProcess.post("/records", recordInfo);
    toast((t) => (
      <span style={{ textAlign: "center" }}>
        <p>Registro criado com sucesso sob o n°:</p>
        <p style={{ fontSize: "28px" }}>{record.data.register_number}</p>
        <GenericBlueButton
          title="OK"
          onClick={() => toast.dismiss(t.id)}></GenericBlueButton>
      </span>
    ));
  } catch (err) {
    const status = err.response?.status;

    if (status === 500) {
      toast.error("Não foi possível criar o registro");
    }
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

export async function forwardRecordInfo(toast, forwardRecInfo){
  try{
    const response = await APIProcess.post(`/records/${forwardRecInfo.id}/forward`,{
        forwarded_by: forwardRecInfo.forwarded_by,
        origin_id: forwardRecInfo.origin_id,
        destination_id: forwardRecInfo.destination_id,
    });
    toast.success("Registro encaminhado com sucesso!");
    return response.data;
  }catch(error){
    toast.error("Não foi possível encaminhar registro!");
    return error;
  }
}

export async function getRecordHistory(toast, id) {
  try {
    const response = await APIProcess.get(`/records/${id}/history`)
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Não foi possível buscar histórico do registro!");
  }
}