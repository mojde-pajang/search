import { Spinner } from "#components/ui/spinner";
import { Input } from "@/components/ui/input";
import useProducts from "../hooks/useProducts";
import ProductCard from "./product-card";
import { useState } from "react";

const ProductList = () => {
  const { isError, isLoading, error, products } = useProducts();
  const [search_text, set_search_text] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  if (isLoading) return <Spinner className="size-20" />;

  if (isError) return <div>{error}</div>;

  return (
    <>
      <div className="flex w-full py-4 justify-center items-center">
        <Input
          className="max-w-sm"
          placeholder="Insert text to search"
          onChange={handleSearch}
          value={search_text}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
