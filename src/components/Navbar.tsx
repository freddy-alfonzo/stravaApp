import { Link } from "react-router-dom";
import userImg from "../assets/userImg.png";
import addImg from "../assets/addImg.png";

const Navbar = () => {
  return (
    <div className=" justify-between p-4 border-b-2 border-orange-600 md:flex block m-auto">
      <Link to="/">
        <img
          src="https://i.gyazo.com/218e4315beb4c22587735a6ed474ec10.png"
          alt="logo"
          className="m-auto"
        />
      </Link>
      <div>
        <nav className="flex flex-wrap justify-center items-center">
          <ul className="flex flex-wrap gap-3 mr-3 items-center justify-center mt-3 md:mt-0">
            <Link to="/">
              <li className="bg-orange-600 rounded-lg text-white py-2 px-4 min-w-[142px] hover:bg-orange-700">
                Activities Page
              </li>
            </Link>

            <Link to="/monthly-stats">
              <li className="bg-orange-600 rounded-lg text-white py-2 px-4 min-w-[142px] hover:bg-orange-700">
                Monthly Stats
              </li>
            </Link>

            <Link to="/favorites">
              <li className="bg-orange-600 rounded-lg text-white py-2 px-4 hover:bg-orange-700 min-w-[142px] text-center">
                Favorites
              </li>
            </Link>
            <img
              className="w-[55px] h-[55px] rounded-full hover:scale-125 transition-all hidden lg:flex"
              src={userImg}
              alt="user-img"
              title="User settings (Decoration)"
            />
            <img
              className="hover:scale-125 transition-all w-[55px] h-[55px] hidden lg:flex"
              src={addImg}
              alt="add-icon"
              title="Add Activity (Decoration)"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
