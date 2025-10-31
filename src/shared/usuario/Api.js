import { axiosPrivate } from '../../config/axios';

export const validarLogin = async (email, senha) => {
  try {
    const response = await axiosPrivate.get("/api/usuario/login", {
      params: { email, senha }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao validar login:", error);
    throw error;
  }
}

export const cadastrarUsuario = async (usuario) => {
  try {
    await axiosPrivate.post("/api/usuario", usuario);
  } catch (error) {
    console.error("Erro ao cadastrar usuario:", error);
    throw error;
  }
};

export const buscarPacientePorId = async (id) => {
  try {
    return axiosPrivate.get(`/api/usuario/paciente/${id}`);
  } catch (error) {
    console.error("Erro ao cadastrar paciente:", error);
    throw error;
  }
}