import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const handleLogin = () => {
  loginWithGoogle().then((res)=> console.log(res)).catch(err=> console.log(err))
  }
  return (
    <div>
      {/* Google login */}
      <button 
        onClick={handleLogin}
        className="btn w-full py-3 h-auto min-h-0 text-base rounded-2xl bg-[#d3d3d360]">
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;