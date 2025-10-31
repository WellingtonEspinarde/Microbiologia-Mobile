import axios from 'axios';

import { URL_LOCAL } from "../shared/constants/url";

const axiosPrivate = axios.create({baseURL: URL_LOCAL});

// // TODO: Adicionar logica do token dinâmico
// axiosPrivate.interceptors.request.use((config) => {
//     try {
//         const token = getAuthToken();
//         const newConfig = { ...config };
//
//         newConfig.headers.Authorization = `Bearer ${token}`;
//         return newConfig;
//     } catch (error) {
//         return config;
//     }
// });

axiosPrivate.interceptors.response.use(
    (response) => response,
    (error) => {
        throw error;
    },
);

export { axiosPrivate };
