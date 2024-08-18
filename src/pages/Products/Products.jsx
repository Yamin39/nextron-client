import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductsCard from "../../components/general/ProductsCard/ProductsCard";
import useAuth from "../../hooks/useAuth";
import Filter from "./Filter";

// filter context
export const FilterContext = createContext();

const Products = () => {
  const { user } = useAuth();

  // states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sorting, setSorting] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 6;

  // get products
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["products", search, category, minPrice, maxPrice, selectedBrands, sorting, currentPage, productsPerPage],
    queryFn: () =>
      fetch(
        `http://localhost:5000/products?search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&brands=${selectedBrands.join(
          ","
        )}&sort=${sorting}&page=${currentPage}&size=${productsPerPage}`
      ).then((res) => res.json()),
  });

  // get categories
  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch(`http://localhost:5000/categories`).then((res) => res.json()),
  });

  // get brands
  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: () => fetch(`http://localhost:5000/brands`).then((res) => res.json()),
  });

  // get products count
  const { data: count = 0 } = useQuery({
    queryKey: ["productsCount", search, category, minPrice, maxPrice, selectedBrands],
    queryFn: () =>
      fetch(
        `http://localhost:5000/products/count?search=${search}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&brands=${selectedBrands.join(
          ","
        )}`
      ).then(async (res) => {
        const data = await res.json();
        console.log(data?.count);
        return data?.count;
      }),
  });

  // search box handler
  const searchHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search_box.value;
    console.log(searchText);
    setSearch(searchText);
  };

  // price range handler
  const priceRangeHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const minPrice = form.min_price.value;
    const maxPrice = form.max_price.value;

    // validation
    if (Number(minPrice) > Number(maxPrice)) {
      toast.error("Min price should be less than max price");
      return;
    }

    console.log(minPrice, maxPrice);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  // select brand handler
  const selectBrandHandler = (e) => {
    const brand = e.target.value;
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // sorting handler
  const sortingHandler = (e) => {
    const sort = e.target.value;
    console.log(sort);
    setSorting(sort);
  };

  // pagination
  // const count = 43;
  const totalPages = Math.ceil(count / productsPerPage);
  const pages = [...Array(totalPages).keys()];

  const handlePrevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    console.log("selected brands: ", selectedBrands);
  }, [selectedBrands]);

  // filter context data
  const filterContextData = { categoriesLoading, categories, setCategory, productsLoading, brands, priceRangeHandler, selectBrandHandler, selectedBrands };
  return (
    <FilterContext.Provider value={filterContextData}>
      <div className="pb-10">
        {/* Header */}
        <div className="pt-8 pb-20 text-center">
          <h4 className="text-4xl font-bold">
            Hey, <span className="text-primary-color">{user?.displayName || ""}</span>! <br />
            We Have The Best Electronic Gadgets For You.
          </h4>
        </div>

        <div className="mb-16 flex flex-col md:flex-row items-center gap-6 justify-between">
          {/* search box */}
          <form onSubmit={searchHandler} className="max-w-md flex gap-6">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" name="search_box" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <button className="btn btn-primary bg-primary-color border-none">Search</button>
          </form>

          {/* Sort */}
          <div className="flex gap-4 justify-center items-center">
            <h3 className="text-lg font-semibold">Sort By:</h3>
            <select onChange={sortingHandler} name="sort" className="select select-bordered">
              <option value="" selected>
                Default
              </option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          {/* filters drawer for small devices */}
          <div className="drawer drawer-end md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn bg-black text-white hover:bg-gray-800 w-full max-w-[10rem]">
                Filter
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="relative z-50 menu bg-white text-base-content min-h-full w-80 p-7">
                {/* Sidebar content here */}
                <Filter />
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* filters sidebar for desktops */}
          <div className="w-full max-w-xs hidden md:block">
            <Filter />
          </div>

          {/* products */}
          {productsLoading ? (
            <div className="min-h-screen mx-auto w-fit">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="w-full h-fit grid gap-10 grid-cols-1 sm:grid-cols-2">
              {products?.map((product) => (
                <ProductsCard key={product._id} product={product}></ProductsCard>
              ))}

              {/* pagination */}
              <div className="mt-16 text-center col-span-2">
                <div className="join">
                  <button className="join-item btn btn-lg bg-primary-color hover:bg-primary-color hover:brightness-90 text-white" onClick={handlePrevBtn}>
                    «
                  </button>
                  {pages.map((page) => (
                    <button onClick={() => setCurrentPage(page)} className={`join-item btn btn-lg ${currentPage === page ? "btn-active" : ""}`} key={page}>
                      {page + 1}
                    </button>
                  ))}
                  <button className="join-item btn btn-lg bg-primary-color hover:bg-primary-color hover:brightness-90 text-white" onClick={handleNextBtn}>
                    »
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </FilterContext.Provider>
  );
};

export default Products;
