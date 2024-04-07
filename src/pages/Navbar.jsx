import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "../axios";

const Navbar = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("logged");
    setLoggedIn(!!isLoggedIn);
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  // const handleLogoutClick = async () => {
  //   try {
  //     const response = await axios.post("/logout", {
  //       headers: {
  //         Auhtorisation: `Bearer ${sessionStorage.getItem("token")}`,
  //       },
  //     });

  //     console.log(response.data);
  //     handleLogout();
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="min-w-full mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 text-white font-bold">YouCare</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          {!loggedIn && (
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          )}
          {!loggedIn && (
            <Link to="/register" className="text-white hover:text-gray-300">
              Register
            </Link>
          )}
          {loggedIn && (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
