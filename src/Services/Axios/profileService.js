import { APIProfile } from "./baseService/index";

export async function registerUser(user, startModal) {
    try {
        APIProfile.post("/register", {
            email: user.email,
            password: user.password,
            departmentID: user.departmentID,
            level: user.level,
            sectionID: user.sectionID,
        });

        startModal("Usuário cadastrado com sucesso");
    } catch (err) {
        const status = err.response?.status;

        if (status === 500) {
        } else if (status === 401) {
            startModal("Você não possui privilégios suficientes para realizar esta ação");
        } else if (status === 400) {
            startModal("Faltam algumas informações para realizar o cadastro do usuário");
        }
    }
}

export async function loginUser(user, startModal) {
    try {
        const response = await APIProfile.post("/login", {
            email: user.email,
            pass: user.password,
        });

        if (response.data.error) {
            startModal("Email e/ou senha inválidos");
        } else {
            APIProfile.defaults.headers = { "x-access-token": response.data.token };
        }

        return response.data;
    } catch (err) {
        startModal("Não foi possivel fazer login. Tente novamente mais tarde.");
        console.error(err);
        return null;
    }
}

export async function listAllUsers(startModal) {
    try {
        const response = await APIProfile.post("/users/all");
        return response.data;
    } catch (err) {
        const status = err.response?.status;

        if (status === 401) {
            startModal("Você não possui privilégios suficientes para realizar esta ação");
        }
    }
}

export async function getUserAccessLevel(user, startModal) {
    try {
        const response = await APIProfile.post("/user/access-level");
        return response.data;
    } catch (err) {
        const status = err.response?.status;

        if (status === 500) {
            startModal("Erro ao obter informações sobre o seu nível de acesso");
        }
    }
}
