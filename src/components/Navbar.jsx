import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const closeMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false); // Tutup menu saat scroll
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let scrollActive = scroll ? "bg-white shadow-lg py-4" : "bg-transparent py-6";

  return (
    <nav className={`navbar fixed w-full transition-all duration-300 ${scrollActive}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold ">Codingin.</h1>
        </div>
        <div className="md:hidden">
          <button
            className="text-3xl focus:outline-none"
            onClick={handleClick}
          >
            {show ? (
              <i className="ri-close-line "></i>
            ) : (
              <i className="ri-menu-line "></i>
            )}
          </button>
        </div>
        <ul
          className={`fixed md:static top-0 left-0 w-full md:w-auto md:flex md:gap-12 
              transition-transform duration-300 bg-sky-400 md:bg-transparent 
              ${show ? "translate-y-0" : "-translate-y-full"} 
              md:translate-y-0 md:flex-row gap-8 md:p-0 p-6 rounded-md md:rounded-none 
              text-white font-semibold shadow-lg md:shadow-none`}
        >
          <li className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <i className="ri-home-2-line text-2xl"></i>
            <Link to="#home" className="font-medium" onClick={closeMenu}>
              Beranda
            </Link>
          </li>
          <li className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <i className="ri-information-line text-2xl"></i>
            <Link to="#about" className="font-medium" onClick={closeMenu}>
              Tentang kami
            </Link>
          </li>
          <li className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <i className="ri-settings-3-line text-2xl"></i>
            <Link to="#services" className="font-medium" onClick={closeMenu}>
              Layanan
            </Link>
          </li>
          <li className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <i className="ri-image-line text-2xl"></i>
            <Link to="#proyek" className="font-medium" onClick={closeMenu}>
              Course
            </Link>
          </li>
          <li className="flex items-center justify-center mt-4 md:mt-0">
            <Link to="/login">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center mr-2">
                <i className="ri-door-line text-xl"></i>
                <span className="font-medium ml-1">Login</span>
              </button>
            </Link>
          </li>
          <li className="flex items-center justify-center mt-4 md:mt-0">
            <Link to="/register">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center">
                <i className="ri-user-add-line text-xl"></i>
                <span className="font-medium ml-1">Register</span>
              </button>
            </Link>
          </li>
          {show && (
            <button
              className="absolute top-4 right-4 text-3xl text-white md:hidden"
              onClick={closeMenu}
            >
              <i className="ri-close-line"></i>
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
