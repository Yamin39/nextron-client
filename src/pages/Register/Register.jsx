import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/general/SocialLogin/SocialLogin";

const Register = () => {
  // toggle password visibility
  const [passToggle, setPassToggle] = useState(false);

  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();

    // get form data
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

   console.log(name, photoUrl, email, password);
  };

  return (
    <div className="max-w-[37.5rem] mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Register</h1>
        <p className="text-gray-500 mt-4 pb-2">
          Welcome <br /> Create an account
        </p>
      </div>

      <SocialLogin></SocialLogin>

      <div className="divider before:bg-gray-400 after:bg-gray-400 my-6">OR</div>

      <form onSubmit={handleSubmit} className="card-body p-0">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-base font-semibold">NAME</span>
            </label>
            {/* name */}
            <input name="name" id="name" type="text" placeholder="Enter name" className="input py-7 input-bordered rounded-2xl" required />
          </div>

          <div className="flex-grow form-control">
            <label htmlFor="photoURL" className="label">
              <span className="label-text text-base font-semibold">PHOTO URL</span>
            </label>
            {/* photoURL */}
            <input name="photoURL" id="photoURL" type="text" placeholder="Enter photoURL" className="input py-7 input-bordered rounded-2xl" required />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:items-end">
          <div className="flex-grow form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-base font-semibold">EMAIL</span>
            </label>
            {/* email */}
            <input name="email" id="email" type="email" placeholder="Enter email" className="input py-7 input-bordered rounded-2xl" required />
          </div>

          <div className="flex-grow form-control">
            <label htmlFor="pass" className="label">
              <span className="label-text text-base font-semibold">Password</span>
              <div className="flex items-center gap-2 mt-3">
                <input name="checkbox" onChange={() => setPassToggle(!passToggle)} type="checkbox" id="checkbox" className="checkbox checkbox-sm" />
                <label htmlFor="checkbox">Show</label>
              </div>
            </label>
            {/* password */}
            <input
              name="password"
              id="pass"
              type={passToggle ? "text" : "password"}
              placeholder="Enter password"
              className="input input-bordered py-7 rounded-2xl"
              required
            />
          </div>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-primary-color text-white hover:bg-primary-color hover:brightness-90 h-auto min-h-0 text-base rounded-xl py-3 xl:px-7 mt-4">
            Register
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-600 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;