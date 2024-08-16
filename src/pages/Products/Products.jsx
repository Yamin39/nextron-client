import useAuth from "../../hooks/useAuth";
import { useState,  useEffect } from "react"; 
import ProductsCard from "../../components/general/ProductsCard/ProductsCard"; 

const Products = () => {
  const { user } = useAuth();
const [products,setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
         setProducts(data);
        setLoader(false);
      });
  }, []);
  
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

      {loader ? (
        <div className="min-h-screen mx-auto w-fit">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductsCard
              key={product._id}
             product={product}
            ></ProductsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
