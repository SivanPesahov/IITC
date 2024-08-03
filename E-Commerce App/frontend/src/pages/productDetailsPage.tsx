import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Product } from "./productsPage";
import { getProductById } from "@/crudFunctions";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/crudFunctions";

export const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const queryClient = useQueryClient();

  const { data, error, isLoading, isError } = useQuery<Product>({
    queryFn: () => getProductById(productId!),
    queryKey: ["product", productId],
  });

  const mutation = useMutation({
    onMutate: (productId: string) => addToCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries("product", productId);
    },
  });

  const handleAddToCart = (productId: string) => {
    mutation.mutate(productId);
  };

  if (isLoading) return <div>Loading product...</div>;
  if (isError)
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "Error fetching product"}
      </div>
    );

  return (
    <>
      <div>
        <h2>{data?.name}</h2>
        <p>{data?.price}</p>
      </div>
      <Button
        onClick={() => {
          handleAddToCart(productId!);
        }}
      >
        Add to cart
      </Button>
    </>
  );
};
