import { api } from "./api";

export const swapi = async (page, search, type) => {
  const { data } = await api.get(`/${type}`, { params: { page, search } });
  return data;
};
