import { APIProfile } from "./BaseService/index";
import { User } from "../../Model/User";

export async function registerUser(User, toast) {
    try {
        APIProfile.post("/register", {
            email: User.email,
            password: User.password,
            departmentID: User.departmentID,
            level: User.level,
            sectionID: User.sectionID,
        });

        toast.success("Usuário cadastrado com sucesso");
    } catch (err) {
        const status = err.response?.status;

        if (status === 401) {
            toast.error(
                "Você não possui privilégios suficientes para realizar esta ação"
            );
        } else if (status === 400) {
            toast.error("Faltam algumas informações para realizar o cadastro do usuário");
        } else {
            toast.warn("Erro ao cadastrar usuário");
        }
    }
}

export async function loginUser(user, toast) {
    try {
        const response = await APIProfile.post("/login", {
            email: user.email,
            pass: user.password,
        });

        if (response.data.error) {
            toast.success("Email e/ou senha inválidos");
        } else {
            APIProfile.defaults.headers = { "x-access-token": response.data.token };
        }

        return response.data;
    } catch (err) {
        toast.success("Não foi possivel fazer login. Tente novamente mais tarde.");
        console.error(err);
        return null;
    }
}

export async function listAllUsers(toast) {
    try {
        const response = await APIProfile.post("/users/all");
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

export async function getUserAccessLevel(user, toast) {
    try {
        const response = await APIProfile.post("/user/access-level");
        return response.data;
    } catch (err) {
        const status = err.response?.status;

        if (status === 500) {
            toast.error("Erro ao obter informações sobre o seu nível de acesso");
        }
    }
}
