import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import ProductsCard from "../../components/general/ProductsCard/ProductsCard";

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  // const [seacrh, setSearch] = useState("")

  const refetch = (seacrh) => {
    console.log(seacrh);
    setLoader(true);
    fetch(`${import.meta.env.VITE_API_URL}/products?search=${seacrh}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    refetch("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search_box.value;
    console.log(search);
    // setSearch(seacrh)
    refetch(search);
  };

  return (
    <div className="pb-10">
      <div className="pt-8 pb-20 text-center">
        <h4 className="text-4xl font-bold">
          Hey,{" "}
          <span className="text-primary-color">{user?.displayName || ""}</span>!{" "}
          <br />
          We Have The Best Electronic Gadgets For You.
        </h4>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-20 max-w-md mx-auto flex gap-6"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            name="search_box"
            required
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <button className="btn btn-primary bg-primary-color">Search</button>
      </form>

      {loader ? (
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
