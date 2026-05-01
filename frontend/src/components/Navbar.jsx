import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (

    <div className="bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
        Team Task Manager
      </h1>


      {/* NAV LINKS */}
      <div className="flex items-center gap-6">

        <Link
          to="/dashboard"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Dashboard
        </Link>

        <Link
          to="/projects"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Projects
        </Link>

        <Link
          to="/tasks"
          className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
        >
          Tasks
        </Link>

        <button
          onClick={logout}
          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-xl shadow hover:scale-105 transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;