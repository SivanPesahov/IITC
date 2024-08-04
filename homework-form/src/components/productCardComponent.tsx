import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  name: string;
  category: string;
  price: number;
  image: Image;
}

interface ProductCardProps extends Product {
  addToCart: (product: Product) => void;
  removeProductFromCart: (productName: string) => void;
  cart: Product[];
}

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  image,
  addToCart,
  removeProductFromCart,
  cart,
}) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ name, category, price, image });
    setAdded(true);
  };

  const handleRemoveFromCart = () => {
    removeProductFromCart(name);
    const x = checkHowMany(name);
    x === 1 ? setAdded(false) : null;
  };

  const checkHowMany = (productName: string) => {
    const productInCart = cart.find((item) => item.name === productName);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <Card>
      <CardHeader className="relative">
        <img
          src={image.thumbnail}
          alt={name}
          className="w-full h-60 rounded-lg"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
          {added ? (
            <>
              <div className="flex items-center bg-orange-700 rounded-full">
                <Button
                  variant={"ghost"}
                  className="rounded-full"
                  onClick={handleRemoveFromCart}
                >
                  -
                </Button>
                <p className="mx-4">{checkHowMany(name)}</p>
                <Button
                  variant={"ghost"}
                  className="rounded-full"
                  onClick={handleAddToCart}
                >
                  +
                </Button>
              </div>
            </>
          ) : (
            <Button
              variant={"outline"}
              className="rounded-full"
              onClick={handleAddToCart}
            >
              <p className="mx-4">Add to cart</p>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-rose-900 text-sm">{category}</p>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-md font-bold text-orange-700">${price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
};
