import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res);
        navigate("/");
        toast.success("Success");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error! Please try again");
      });
  };
  return (
    <div>
      {/* Google login */}
      <button onClick={handleLogin} className="btn w-full py-3 h-auto min-h-0 text-base rounded-2xl bg-[#d3d3d360]">
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
