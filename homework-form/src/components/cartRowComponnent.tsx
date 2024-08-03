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
          <Button onClick={handleRemove}>x</Button>
        </div>
      </div>
    </div>
  );
};
