import useAuth from "../../hooks/useAuth";

const Products = () => {
  const { user } = useAuth();
  return (
    <div className="pb-10">
       
      <div className="pt-8 text-center">
        <h4 className="text-4xl font-bold">
          Hey,{" "}
          <span className="text-primary-color">{user?.displayName || ""}</span>!{" "}
          <br />
          We Have The Best Electronic Gadgets For You.
        </h4>
      </div>
    </div>
  );
};

export default Products;
