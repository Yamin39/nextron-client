import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ProductsCard from "../../components/general/ProductsCard/ProductsCard";
import useAuth from "../../hooks/useAuth";

const Products = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // get products
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["products", search, category],
    queryFn: () => fetch(`http://localhost:5000/products?search=${search}&category=${category}`).then((res) => res.json()),
  });

  // get categories
  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch(`http://localhost:5000/categories`).then((res) => res.json()),
  });

  // search box handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search_box.value;
    console.log(searchText);
    setSearch(searchText);
  };

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="pt-8 pb-20 text-center">
        <h4 className="text-4xl font-bold">
          Hey, <span className="text-primary-color">{user?.displayName || ""}</span>! <br />
          We Have The Best Electronic Gadgets For You.
        </h4>
      </div>

      {/* search box */}
      <form onSubmit={handleSubmit} className="mb-10 max-w-md mx-auto flex gap-6">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" name="search_box" required />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <button className="btn btn-primary bg-primary-color">Search</button>
      </form>

      {/* filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {/* Category */}
        <select onChange={(e) => setCategory(e.target.value)} className="select select-bordered">
          <option disabled selected>
            Category
          </option>
          <option value="">All</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* products */}
      {productsLoading || categoriesLoading ? (
        <div className="min-h-screen mx-auto w-fit">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
