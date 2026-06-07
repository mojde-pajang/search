import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../api/products.api";
import { AxiosError } from "axios";

type ProductState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; products: Product[] }
  | { status: "error"; error: string; errorStatus?: number };

const useProducts = () => {
  const [data, setData] = useState<ProductState>({
    status: "idle",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setData({ status: "loading" });
      try {
        const response = await getProducts();
        setData({ status: "success", products: response });
      } catch (err) {
        const errorMessage =
          err instanceof AxiosError
            ? err.message
            : "An unexpected error occurred";
        setData({
          status: "error",
          error: errorMessage,
          errorStatus:
            err instanceof AxiosError ? err.response?.status : undefined,
        });
      }
    };

    fetchProducts();
  }, []);

  return {
    products: data.status === "success" ? data.products : [],
    isLoading: data.status === "loading",
    error: data.status === "error" ? data.error : null,
    errorStatus: data.status === "error" ? data.errorStatus : undefined,
    isError: data.status === "error",
  };
};

export default useProducts;
