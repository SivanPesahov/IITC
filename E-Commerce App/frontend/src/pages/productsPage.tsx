import { fetchProducts } from "@/crudFunctions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
}

export const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page, search],
    queryFn: () => fetchProducts(page, search),
  });

  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setPage((prev) =>
      data?.totalPages ? Math.min(prev + 1, data.totalPages) : prev
    );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setPage(1)}>Search</button>
      </div>
      <ul>
        {data?.products.map((product: Product) => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {data?.totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === data?.totalPages}>
          Next
        </button>
      </div>
    </>
  );
};
