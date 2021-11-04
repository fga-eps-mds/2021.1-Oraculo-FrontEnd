import { APIProfile } from "./BaseService";
import GenericBlueButton from "../../Components/GenericBlueButton";

function getToken() {
  return String(localStorage.getItem(STORAGE_KEY));
}

const userLevels = [
  {
    level: 1,
    description: "admin",
  },
  {
    level: 2,
    description: "common",
  },
];


export async function getAllProcess(toast) {
  try {
    const response = await APIProfile.get("/records", {});
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
    const response = await APIProfile.get(`/records/${ID}`);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");
  }
}

export async function getProcessByPage(page, toast) {
  try {
    const response = await APIProfile.get(`/records/page/${page}`);

    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");

    console.log(error);
  }
}

export async function getProcessTotalNumber(toast) {
  try {
    const response = await APIProfile.get("/count/records");
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}

export async function createRecord(recordInfo, toast) {
  try {
    console.log(recordInfo);
    const record = await APIProfile.post("/records", recordInfo);
    toast((t) => (
      <span style={{ textAlign: "center" }}>
        <p>Registro criado com sucesso sob o n°:</p>
        <p style={{ fontSize: "28px" }}>{record.data.register_number}</p>
        <GenericBlueButton
          title="OK"
          onClick={() => toast.dismiss(t.id)}
        ></GenericBlueButton>
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
    const response = await APIProfile.get("/records/fields");
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar total de registros!");
  }
}

export async function forwardRecordInfo(toast, forwardRecInfo) {
  try {
    const response = await APIProfile.post(
      `/records/${forwardRecInfo.id}/forward`,
      {
        forwarded_by: forwardRecInfo.forwarded_by,
        origin_id: forwardRecInfo.origin_id,
        destination_id: forwardRecInfo.destination_id,
      }
    );
    toast.success("Registro encaminhado com sucesso!");
    return response.data;
  } catch (error) {
    toast.error("Não foi possível encaminhar registro!");
    return error;
  }
}

export async function getRecordHistory(toast, id) {
  try {
    const response = await APIProfile.get(`/records/${id}/history`);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Não foi possível buscar histórico do registro!");
  }
}
