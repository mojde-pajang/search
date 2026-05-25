import axios from "axios";
import type { Product } from "../types/product";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const get_products = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${BASE_URL}products`);
  if (response.status == 200 || response.status == 201)
    return Promise.resolve(response.data);

  return Promise.reject();
};
