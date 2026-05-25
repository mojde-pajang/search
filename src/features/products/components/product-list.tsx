import { Spinner } from "#components/ui/spinner";
import useProducts from "../hooks/useProducts";
import ProductCard from "./product-card";

const ProductList = () => {
  const { isError, isLoading, error, products } = useProducts();

  if (isLoading) return <Spinner className="size-20" />;

  if (isError) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductList;
