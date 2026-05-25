import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product.thumbnail}
        alt={product?.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 dark:brightness-40"
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>{product?.title}</CardTitle>
        <CardDescription>{product?.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">More detail</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
