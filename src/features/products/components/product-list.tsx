
import { Input } from "@/components/ui/input";
import useProducts from "../hooks/use-products";
import ProductCard from "./product-card";
import { useState } from "react";
import type { Product } from "../types/product";
import Error from "@/components/app/error";
import { getProducts } from "../api/products.api";
import { ListProductSkeleton } from "./product-skeleton";

const ProductList = () => {
  const { isError, isLoading, error, products, errorStatus } = useProducts();
  const [searchText, setSearchText] = useState("");

  const searchedData = searchText == "" ? products :  products.filter((product: Product)=> {
   return  product.title.toLocaleLowerCase().includes(searchText)
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)

  };


  if (isLoading) return <ListProductSkeleton />


  if (isError) return <Error errorMessage={error} errorStatus={errorStatus} fallback={getProducts} />;

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
        {searchedData?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
