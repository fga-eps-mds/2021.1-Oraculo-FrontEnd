import { APIProcess } from "./BaseService";
import GenericBlueButton from "../../Components/GenericBlueButton";
const erroTotal = "Erro ao buscar total de registros!";

export async function getAllProcess(toast) {
  try {
    const response = await APIProcess.get("/records", {});
    return response.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 400) {
      toast.error("Requisição inválida");
    } else {
      toast.error("Não foi possivel realizar a requisição");
    }

    return err;
  }
}

export async function getProcessByID(ID, toast) {
  try {
    const response = await APIProcess.get(`/records/${ID}`);
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");
    return error;
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
    const response = await APIProcess.post(`/records/${id}/status`, {
      situation: situation_record,
    });
    if (response) {
      toast.success("Sucesso!");
    }
  } catch (error) {
    toast.error("Erro ao tentar concluir registro");
  }
}
export async function getProcessByPage(page, toast, body) {
  try {
    const response = await APIProcess.post(`/records/page/${page}`, {
      ...body,
    });

    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar registro!");

    console.error(error);
    return error;
  }
}

export async function getProcessTotalNumber(toast) {
  try {
    const response = await APIProcess.get("/count/records");
    return response.data;
  } catch (error) {
    toast.error(erroTotal);
    return error;
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
          onClick={() => toast.dismiss(t.id)}
        ></GenericBlueButton>
      </span>
    ));

    return record.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 500) {
      toast.error("Não foi possível criar o registro");
    }

    return err;
  }
}

export async function getAllFields(toast) {
  try {
    const response = await APIProcess.get("/records/fields");
    console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(erroTotal);
    return error;
  }
}

export async function getAllDepartmentRecords(toast, id) {
  try {
    const response = await APIProcess.get("/records/department/" + id);
    console.log(response.data, "hm");
    return response.data;
  } catch (error) {
    toast.error(erroTotal);
    return error;
  }
}

export async function forwardRecordInfo(toast, forwardRecInfo) {
  try {
    const response = await APIProcess.post(
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
    const response = await APIProcess.get(`/records/${id}/history`);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Não foi possível buscar histórico do registro!");
    return error;
  }
}

export async function editRecord(recordInfo, id, toast) {
  try {
    // Edit record with the id and the new information
    const record = await APIProcess.post(`/records/${id}/edit`, recordInfo);
    toast.success((t) => (
      <span style={{ textAlign: "center" }}>
        <p>Registro editado com sucesso!</p>
      </span>
    ));

    return record.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 500) {
      toast.error("Não foi possível editar o registro");
    }

    return err;
  }
}

export async function createUser(user, toast) {
  if (user.sectionName !== "none") {
    //Add user to record api
    try {
      const response = await APIProcess.post(`/users`, {
        name: user.name,
        email: user.email,
        department_id: user.departmentID,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export async function closeRecord(infoRecord) {
  try {
    const response = await APIProcess.post(`/records/${infoRecord.id}/close`, {
      closed_by: infoRecord.closed_by,
      reason: infoRecord.reason,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function reopenRecord(infoRecord) {
  try {
    const response = await APIProcess.post(`/records/${infoRecord.id}/reopen`, {
      reopened_by: infoRecord.reopened_by,
      reason: infoRecord.reason,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUserByEmail(email) {
  try {
    const response = await APIProcess.post(`/user/by-mail/`, { email });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function findRecordWithSei(seiNumber) {
  try {
    console.log(seiNumber);
    const response = await APIProcess.post(`/records/with-sei`, {
      sei_number: seiNumber,
    });
    console.log(response);
    return [response.data, response.status];
  } catch (err) {
    const statusCode = err.response?.status;
    return [err, statusCode];
  }
}

export async function createTag(name, color, toast) {
  try {
    const response = await APIProcess.post(`/tag/new`, {
      name: name,
      color: color,
    });
    toast.success("Tag criada com sucesso", { duration: 3000 });
    return response.data;
  } catch (error) {
    toast.error("Tag não foi criada, tente novamente mais tarde");
    return error;
  }
}

export async function getAllTags() {
  try {
    const response = await APIProcess.get(`/tags/all`);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function editTag(id, name, color, toast) {
  try {
    const response = await APIProcess.post(`/tag/${id}/edit`, {
      name: name,
      color: color,
    });
    toast.success("Tag editada com sucesso", { duration: 3000 });
    return response.data;
  } catch (error) {
    toast.error("Não foi possível editar esta tag, tente novamente mais tarde");
    return error;
  }
}
