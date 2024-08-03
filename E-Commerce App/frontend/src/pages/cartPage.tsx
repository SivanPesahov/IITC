import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Product } from "./productsPage";
import { viewCart } from "@/crudFunctions";
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/crudFunctions";

export const CartPage = () => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading } = useQuery({
    queryFn: () => viewCart(),
    queryKey: ["cart"],
  });

  const mutation = useMutation({
    mutationFn: (productId: string) => removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const handleRemove = (productId: string) => {
    mutation.mutate(productId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  console.log(data);

  const handlePrice = () => {
    const sum = data?.reduce(
      (acc: number, curr: Product) => acc + curr.price,
      0
    );
    return sum;
  };

  return (
    <>
      <ul>
        {data?.map((product: Product, index: number) => (
          <li key={index}>
            {product.name} - ${product.price}
            <Button onClick={() => handleRemove(product._id)}> Remove </Button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${handlePrice()}</p>
    </>
  );
};
