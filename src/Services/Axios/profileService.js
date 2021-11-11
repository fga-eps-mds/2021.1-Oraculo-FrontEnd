import { STORAGE_KEY } from "../../Auth/Auth";
import { APIProfile } from "./BaseService/index";

export function getToken() {
  return String(localStorage.getItem(STORAGE_KEY));
}

const userLevel = {
  admin: 1,
  common: 2,
};

async function validateUser(user) {
  const department = Number.parseInt(user.departmentID);

  if (department <= 0) {
    throw new Error("invalid department");
  }

  return {
    name: user.name,
    email: user.email,
    departmentID: department,
    level: user.level ? userLevel.admin : userLevel.common,
    password: user.password,
  };
}

export async function registerUser(usr, toast) {
  try {
    const user = await validateUser(usr);
    await APIProfile.post(
      "/register",
      {
        name: user.name,
        email: user.email,
        departmentID: user.departmentID,
        level: user.level,
        password: user.password,
      },
      { headers: { "X-Access-Token": getToken() } }
    );

    toast.success("Usuário cadastrado com sucesso");
  } catch (err) {
    const status = err.response?.status;

    if (status === 401) {
      toast.error("Você não possui privilégios suficientes para realizar esta ação");
    } else if (status === 400) {
      toast.error("Faltam algumas informações para realizar o cadastro do usuário");
    } else {
      toast.error(`Erro ao cadastrar usuário!`);
    }

    console.error(`erro ao cadastrar usuário: ${err}`);
  }
}

export async function loginUser(user, toast) {
  try {
    const response = await APIProfile.post("/login", {
      email: user.email,
      password: user.password,
    });

    APIProfile.defaults.headers.common["x-access-token"] = response.data.token;

    return response.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 401) {
      toast.error("Usuário e/ou senha inválidos");
    } else if (status === 400) {
      toast.error("Requisição inválida");
    } else {
      toast.error("Não foi possivel fazer login. Tente novamente mais tarde.");
    }

    console.error(err);
    return null;
  }
}

export async function listAllUsers(toast) {
  try {
    const response = await APIProfile.get("/users/all", {
      headers: { "X-Access-Token": getToken() },
    });
    return response.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 401) {
      toast.error("Você não possui privilégios suficientes para realizar esta ação");
    }
  }
}

export async function getInfoUser(toast) {
  try {
    const response = await APIProfile.get("user/info", {
      headers: { "X-Access-Token": getToken() },
    });
    return response.data;
  } catch (error) {
    toast.error("Falha ao obter dados do usuário");
  }
}

export async function getUserAccessLevel(user, toast) {
  try {
    const response = await APIProfile.post(
      "/user/access-level",
      {},
      { headers: { "X-Access-Token": getToken() } }
    );
    return response.data;
  } catch (err) {
    const status = err.response?.status;

    if (status === 500) {
      toast.error("Erro ao obter informações sobre o seu nível de acesso");
    }
  }
}

export async function getInfoUserbyID(id) {
  try {
    const response = await APIProfile.get(`/user/info`, {
      headers: {
        "X-Access-Token": getToken(),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function changeUserPassword(toast, password) {
  try {
    await APIProfile.post(
      "/user/change-password",
      { password: password },
      {
        headers: { "X-Access-Token": getToken() },
      }
    );
    toast.success("Senha alterada com sucesso!");
  } catch (err) {
    toast.error("Ocorreu um erro ao tentar mudar a senha");
  }
}

export async function changeUser(toast, name, email, departmentID) {
  try {
    const response = await APIProfile.post(
      "/user/edit",
      {
        name: name,
        email: email,
        department_id: departmentID,
      },
      {
        headers: { "X-Access-Token": getToken() },
      }
    );
    console.log("Cadastro atualizado com sucesso!", response);
    toast.success("Usuário alterado com sucesso!");
  } catch (err) {
    console.log("Erro ao atualizar cadastro!", err);
    toast.error("Ocorreu um erro ao tentar mudar o usuário");
  }
}

export async function getDepartments() {
  try {
    const response = await APIProfile.get("/departments");
    return response.data;
  } catch (err) {
    console.error(`failed to get departments: ${err}`);
  }
}

export async function getDepartmentsTotalNumber(toast) {
  // Count department
  try {
    const response = await APIProfile.get("/count/departments");
    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar o total de Departamentos!");
  }
}

export async function getSections() {
  // See all sections
  try {
    const response = await APIProfile.get("/sections");
    return response.data;
  } catch (err) {
    console.error(`failed to get sections: ${err}`);
  }
}

export async function getDepartmentsByPage(toast) {
  // See all department
  try {
    const response = await APIProfile.get(`/departments`);

    return response.data;
  } catch (error) {
    toast.error("Erro ao buscar departamento!");

    console.log(error);
  }
}

export async function registerDepartment(name, toast) {
  // Add post to create a new department
  try {
    const response = await APIProfile.post(
      `/departments`,
      { name: name },
      { headers: { "X-Access-Token": getToken() } }
    );
    toast.success("Departamento cadastrado com sucesso!");

    return response.data;
  } catch (error) {
    toast.error("Não foi possível cadastrar o departamento!");
  }
}

export async function registerSection(name, toast) {
  // Add post to create a new department
  try {
    const response = await APIProfile.post(
      `/sections`,
      { name: name },
      { headers: { "X-Access-Token": getToken() } }
    );
    toast.success("Seção cadastrado com sucesso!");

    return response.data;
  } catch (error) {
    toast.error("Não foi possível cadastrar o departamento!");
  }
}

export async function editDepartmentById(departmentInfo, id, toast) {
  try {
    // Edit record with the id and the new information
    const temp = await APIProfile.post(`/departments/change-department/${id}`, {
      name: departmentInfo,
    });
    toast.success((t) => (
      <span style={{ textAlign: "center" }}>
        <p>Departamento editado com sucesso!</p>
      </span>
    ));
    return temp;
  } catch (err) {
    const status = err.response?.status;
    if (status === 500) {
      toast.error("Não foi possível editar o departamento");
    }
    if (status === 400) {
      toast.error("Nome de departamento inválido");
    }
    return err;
  }
}
