import { Card, CardDescription, CardFooter,  CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
const list = new Array(20).fill(0);

export const ListProductSkeleton = () => {
return (
    <>
        <div className="flex w-full py-4 justify-center items-center">
            <Skeleton className="h-8 w-1/3" />
        </div>
        <div className="grid grid-cols-3 gap-4">
            {list?.map((_, index) => {
                console.log(index)
                return <ProductSkeleton key={index} />;
            })}
        </div>
    </>
)

}


const ProductSkeleton = () => {
  return (
      <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Skeleton className="aspect-video w-full" />
      <CardHeader>
        <Skeleton className="h-4 w-1/3" />
        <CardDescription className="grid gap-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  )
}


