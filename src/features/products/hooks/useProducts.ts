import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { get_products } from "../api/products.api";
import { AxiosError } from "axios";

type ProductState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; products: Product[] }
  | { status: "error"; error: string };

const useProducts = () => {
  const [data, setData] = useState<ProductState>({
    status: "idle",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setData({ status: "loading" });
      try {
        const response = await get_products();
        setData({ status: "success", products: response });
      } catch (err) {
        const errorMessage =
          err instanceof AxiosError
            ? err.message
            : "An unexpected error occurred";
        setData({ status: "error", error: errorMessage });
      }
    };

    fetchProducts();
  }, []);

  return {
    products: data.status === "success" ? data.products : [],
    isLoading: data.status === "loading",
    error: data.status === "error" ? data.error : null,
    isError: data.status === "error",
  };
};

export default useProducts;
