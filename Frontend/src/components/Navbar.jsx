import "./Navbar.css";
import { Link } from "react-router-dom";
import Loginhere from "./Loginhere";

function Navbar() {
  return (
    <div>
      <div className="navbar nab">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/old-complex">Old Complex</Link>
              </li>
              <li>
                <Link to="/new-complex">New Complex</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-white">
            <span className="text-yellow-500">NITK</span>SPORTS HUB
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/old-complex">Old Complex</Link>
            </li>
            <li>
              <Link to="/new-complex">New Complex</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn custom-btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            JOIN TO PLAY
          </a>
          <Loginhere />

          {/* <Link to="/register" className="btn custom-btn">
            JOIN TO PLAY
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
