import { axiosPrivate } from '../../config/axios';

export const cadastrarExame = async (exame) => {
  try {
    return axiosPrivate.post("/api/exame", exame);
  } catch (error) {
    console.error("Erro ao cadastrar exame:", error);
    throw error;
  }
};