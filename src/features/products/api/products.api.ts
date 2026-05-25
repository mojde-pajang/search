import axios from "axios";
import type { Product, ProductResponse } from "../types/product";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const get_products = async (): Promise<Product[]> => {
  const response = await axios.get<ProductResponse>(`${BASE_URL}products`);
  if (response.status == 200 || response.status == 201) {
    const data = response.data;
    return Promise.resolve(data.products);
  }

  return Promise.reject();
};
