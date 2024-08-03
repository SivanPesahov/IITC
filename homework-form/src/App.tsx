import { useEffect, useState } from "react";
import { ProductCardComponent } from "./components/productCardComponent";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { CartRowComponnent } from "./components/cartRowComponnent";
import { Product } from "./components/productCardComponent";
import { Button } from "./components/ui/button";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productName: string) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
  };

  const cartSummary = cart.reduce((acc, curr) => {
    const existingProduct = acc.find(
      (product: Product) => product.name === curr.name
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...curr, quantity: 1 });
    }
    return acc;
  }, []);

  function returnSum() {
    return cartSummary.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <div className="App bg-rose-50 ">
      <h1 className="text-6xl m-6 font-bold">Deserts</h1>
      <div className="sm:flex">
        <ul className=" sm:grid grid-cols-3">
          {products.map((product: Product) => (
            <li key={product.name}>
              <ProductCardComponent {...product} addToCart={addToCart} />
            </li>
          ))}
        </ul>

        <div className=" px-10  ">
          {cart.length > 0 ? (
            <Card>
              <CardHeader className="">
                <p>Your cart {cart.length}</p>
              </CardHeader>
              <CardContent>
                <ul>
                  {cartSummary.map((product: Product) => (
                    <li key={product.name}>
                      <CartRowComponnent
                        name={product.name}
                        quantity={product.quantity}
                        price={product.price}
                        removeFromCart={removeFromCart}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <div>
                  <p>Total: {returnSum()}$</p>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button>Confirm order</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Order confirmed</AlertDialogTitle>
                        <AlertDialogDescription>
                          <ul>
                            {cartSummary.map((product) => (
                              <li key={product.name} className="my-4 flex">
                                <img src={product.image.thumbnail} alt="" />
                                <div>
                                  <p>{product.name}</p>
                                  <p>
                                    {product.quantity}x {product.price} $
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <p>total order: {returnSum()}$</p>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction onClick={resetCart}>
                          start new order
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader className="">
                <p>Your cart 0</p>
              </CardHeader>
              <CardContent>cake image</CardContent>
              <CardFooter>
                <p>your items will apear here</p>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
