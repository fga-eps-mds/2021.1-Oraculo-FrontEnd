import { STORAGE_KEY } from "../../Auth/Auth";
import { APIProfile } from "./BaseService/index";

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

async function validateUser(user) {
  const section = Number.parseInt(user.sectionID);
  const department = Number.parseInt(user.departmentID);
  let level = Number.parseInt(user.level);

  level =
    level !== userLevels[0].level && level !== userLevels[1].level
      ? userLevels[1].level
      : level;

  if (section <= 0 || department <= 0) {
    throw new Error("invalid department or section");
  }

  return {
    name: user.name,
    email: user.email,
    departmentID: department,
    level: level,
    sectionID: section,
    password: user.password,
  };
}

export async function registerUser(usr, toast) {
  try {
    const user = await validateUser(usr);

    if (user.departmentID <= 7) {
      // user belongs to a admin sector
      user.sectionID = 0;
    } else {
      // user is a common user
      user.departmentID = 0;
    }

    await APIProfile.post(
      "/register",
      {
        name: user.name,
        email: user.email,
        departmentID: user.departmentID,
        level: user.level,
        sectionID: user.sectionID,
        password: user.password,
      },
      { headers: { "X-Access-Token": getToken() } }
    );

    toast.success("Usuário cadastrado com sucesso");
  } catch (err) {
    const status = err.response?.status;

    if (status === 401) {
      toast.error(
        "Você não possui privilégios suficientes para realizar esta ação"
      );
    } else if (status === 400) {
      toast.error(
        "Faltam algumas informações para realizar o cadastro do usuário"
      );
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
      toast.error(
        "Você não possui privilégios suficientes para realizar esta ação"
      );
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
    const response = await APIProfile.get(`/user/${id}/info`, {
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

export async function changeUser(toast, name, email, sectionID, departmentID) {
  try {
    const response = await APIProfile.post(
      "/user/edit",
      {
        name: name,
        email: email,
        section_id: sectionID,
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
