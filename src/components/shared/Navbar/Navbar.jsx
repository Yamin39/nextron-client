import { FiLogIn } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  // log out
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("Log out Successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // navbar links
  const navLinks = (
    <>
      <li>
        <NavLink
          className="hover:text-primary-color hover:bg-transparent"
          to="/"
        >
          Products
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="mb-8">
      <div className="py-3">
        <div className="navbar px-0 justify-between">
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost px-2 md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div>
              <Link to="/" className="flex items-center gap-3">
                <p className="font-semibold text-2xl lg:text-3xl">Nextron</p>
              </Link>
            </div>
          </div>
          <div>
            <ul className="hidden md:flex navLink-container menu menu-horizontal gap-1 2xl:gap-2 2xl:px-1 font-medium lg:text-base">
              {navLinks}
            </ul>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <>
                {user ? (
                  <div className="flex gap-3 justify-center items-center">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="bg-slate-200 rounded-full cursor-pointer"
                      >
                        <img
                          className="size-8 2xl:size-10 rounded-full object-cover"
                          src={user?.photoURL}
                          alt="User"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content w-56 z-[1] menu p-4 gap-4 shadow bg-base-100 rounded-box"
                      >
                        <li
                          className="text-gray-500 mt-2 text-center"
                          title="User name"
                        >
                          {user?.displayName || "Name not found!"}
                        </li>
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="btn h-auto min-h-0 btn-error rounded-md text-xs 2xl:text-base bg-secondary-color text-white py-2 xl:px-7 hover:bg-red-600"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className="login-nav btn bg-primary-color text-white hover:bg-primary-color hover:brightness-90 h-auto min-h-0 lg:text-base rounded-3xl py-2"
                  >
                    <FiLogIn className="text-lg" />
                    Login
                  </NavLink>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
