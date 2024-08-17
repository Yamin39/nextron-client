import { CgCopyright } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1440px] w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-32 justify-between">
          <div className="flex-1">
            <div className="mb-8">
              <Link to="/" className="font-semibold text-4xl">
                Nextron
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h6 className="text-xl font-medium">Quick Links</h6>
                <ul className="font-light mt-2 space-y-1 text-gray-600">
                  <li>
                    <Link
                      to="/"
                      className="hover:underline hover:text-gray-500"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="hover:underline hover:text-gray-500"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="hover:underline hover:text-gray-500"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h6 className="text-xl font-medium">Contact Info</h6>
                <ul className="font-light mt-2 space-y-1 text-gray-600">
                  <li className="hover:underline hover:text-gray-500">
                    <a href="mailto:contact@nextron.com">contact@nextron.com</a>
                  </li>
                  <li className="hover:underline hover:text-gray-500">
                    <a href="tel:+01734562891">01734562891</a>
                  </li>
                  <li>
                    <p>Zindabazar, Sylhet</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <ul className="flex gap-6 items-center text-3xl text-gray-600">
                <li>
                  <a href="">
                    <TiSocialFacebookCircular />
                  </a>
                </li>
                <li>
                  <a href="">
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-center mt-16">
          <p>
            Copyright <CgCopyright className="inline" /> 2024. Nextron , All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
