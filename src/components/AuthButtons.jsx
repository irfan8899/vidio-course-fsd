
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition">
          Register
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
