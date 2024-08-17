import { useContext } from "react";
import { ProductsContext } from "./Products";

const Filter = () => {
  const { categoriesLoading, categories, setCategory, productsLoading, brands, priceRangeHandler } = useContext(ProductsContext);
  return (
    <>
      {/* Category */}
      <div>
        <h3 className="text-xl font-semibold mb-5">Category</h3>

        {categoriesLoading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="cursor-pointer flex items-center gap-2">
              <input type="radio" name="category" value="" onChange={(e) => setCategory(e.target.value)} />
              <span>All</span>
            </label>
            {categories.map((category, i) => (
              <label key={i} className="cursor-pointer flex items-center gap-2">
                <input type="radio" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <span>{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price range */}
      <h3 className="text-xl font-semibold mt-7 mb-5">Price Range</h3>
      <form onSubmit={priceRangeHandler}>
        <div className="flex gap-4">
          <input type="number" name="min_price" placeholder="Min" className="w-full input input-bordered" min={0} step={1} required />
          <input type="number" name="max_price" placeholder="Max" className="w-full input input-bordered" min={0} step={1} required />
        </div>
        <button className="btn btn-primary border-none bg-primary-color w-full mt-4">Apply</button>
      </form>

      {/* Brands */}
      <div>
        <h3 className="text-xl font-semibold mt-7 mb-5">Brands</h3>

        {productsLoading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <div className="flex flex-col gap-2">
            {brands.map((brand, i) => (
              <label key={i} className="cursor-pointer flex items-center gap-2">
                <input type="checkbox" name="brand" value={brand} />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
