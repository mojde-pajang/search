import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { get_products } from "../api/products.api";
import { AxiosError } from "axios";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await get_products();
        setProducts(response);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.message);
        } else {
          setError("Failed to fetch products");
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error, isError };
};

export default useProducts;
