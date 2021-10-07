import { STORAGE_KEY } from "../../Auth/Auth";
import { APIProfile } from "./BaseService/baseService";
import toast from "react-hot-toast";
function getToken() {
  return String(localStorage.getItem(STORAGE_KEY));
}

export async function getProfile(user) {
  try {
    const response = await APIProfile.get(
      "/user",
      {},
      {
        headers: { "X-Access-Token": getToken() },
      }
    );

    toast.success("Usuário Criado com sucesso");
    return response.data;
  } catch (error) {
    if (error.response?.status === 500) {
      toast.error("Tempo de login excedido, faça login novamente");
    } else if (error.response?.status === 400) {
      console.error(`failed to send request ${error}`);
      toast.error("Requisição inválida");
    } else {
      console.error(`failed to send request ${error}`);
      toast.error("Não foi possivel editar o usuário");
    }

    console.log(error);
    return false;
  }
}
