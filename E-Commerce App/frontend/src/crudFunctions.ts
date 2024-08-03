import api from "./services/api.service";

export async function fetchProducts(
  page: number = 1,
  search: string = "",
  limit: number = 3
) {
  try {
    const { data } = await api.get(`/product`, {
      params: { name: search, page, limit },
    });
    return data;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getProductById(productId: string) {
  try {
    const { data } = await api.get(`/product/${productId}`);
    return data;
  } catch (error: any) {
    console.log(error);
  }
}

export async function viewCart() {
  try {
    const { data } = await api.get("/cart/view");
    return data;
  } catch (error: any) {
    console.log(error);
  }
}

export async function addToCart(productId: string) {
  try {
    await api.patch(`/cart/add/${productId}`);
    console.log("Product added to cart");
  } catch (error: any) {
    console.log(error);
  }
}

export async function removeFromCart(productId: string) {
  try {
    await api.patch(`/cart/remove/${productId}`);
    console.log("Product removed from cart");
  } catch (error: any) {
    console.log(error);
  }
}
