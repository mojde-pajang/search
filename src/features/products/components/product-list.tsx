import { Spinner } from "#components/ui/spinner";
import { Input } from "@/components/ui/input";
import useProducts from "../hooks/use-products";
import ProductCard from "./product-card";
import { useState } from "react";
import type { Product } from "../types/product";

const ProductList = () => {
  const { isError, isLoading, error, products } = useProducts();
  const [searchText, setSearchText] = useState("");

  const searchedData = searchText == "" ? products :  products.filter((product: Product)=> {
   return  product.title.toLocaleLowerCase().includes(searchText)
  })


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)

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
          value={searchText}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {searchedData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
