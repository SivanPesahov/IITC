import React from "react";
import { Button } from "./ui/button";

interface ListItem {
  name: string;
  quantity: number;
  price: number;
}
interface ProductCardProps extends ListItem {
  removeFromCart: (productName: string) => void;
}

export const CartRowComponnent: React.FC<ProductCardProps> = ({
  name,
  quantity,
  price,
  removeFromCart,
}) => {
  const handleRemove = () => {
    removeFromCart(name);
  };

  return (
    <div className="felx justify-between">
      <div>
        <h1 className="font-bold">{name}</h1>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="">{quantity}x</p>
            <p>{price}$</p>
            <p className="mr-16">{price * quantity}$</p>
          </div>
          <Button onClick={handleRemove} variant={"ghost"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#CAAFA7"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
