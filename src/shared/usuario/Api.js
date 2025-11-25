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

export const atualizarPaciente = async (id, request) => {
  try {
    await axiosPrivate.put(`/api/usuario/paciente/${id}`, request);
  } catch (error) {
    console.error("Erro ao atualizar paciente:", error);
    throw error;
  }
};

export const deletarPacientePorId = async (id) => {
  try {
    await axiosPrivate.delete(`/api/usuario/paciente/${id}`);
  } catch (error) {
    console.error("Erro ao deletar paciente:", error);
    throw error;
  }
}

export const buscarPacientes = async() => {
  try {
    return axiosPrivate.get(`/api/usuario/pacientes`);
  } catch (error) {
    console.error("Erro ao buscar pacientes:", error);
    throw error;
  }
}