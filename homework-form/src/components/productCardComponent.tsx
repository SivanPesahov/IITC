import React from "react";
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
}

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  image,
  addToCart,
}) => {
  const handleAddToCart = () => {
    addToCart({ name, category, price, image });
  };

  return (
    <Card>
      <CardHeader className="relative">
        <img
          src={image.thumbnail}
          alt={name}
          className="w-full h-60 rounded-lg"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <Button
            variant={"outline"}
            className="rounded-full"
            onClick={handleAddToCart}
          >
            <p className="mx-4">Add to Cart</p>
          </Button>
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
