import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      {/* Google login */}
      <button 
        className="btn w-full py-3 h-auto min-h-0 text-base rounded-2xl bg-[#d3d3d360]">
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;