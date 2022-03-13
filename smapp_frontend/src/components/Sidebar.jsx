import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill, RiLayoutMasonryFill, RiHome4Line } from "react-icons/ri";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-600 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-blue-800 transition-all duration-200 ease-in-out capitalize";


const SideBar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar shadow-2xl">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 item-center"
          onClick={handleCloseSidebar}
        >
          <p className="text-center text-2xl">NOVA 360</p>
        </Link>
        <div className="flex flex-col gap-5 text-blue-800">
        <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiOutlineHome/>
            Startseite
          </NavLink>
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiLayoutMasonryFill  />
            Moodboard
          </NavLink>

          <NavLink
            to="/chatroom"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <HiOutlineChatAlt2 />
            Chatroom
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <MdSupportAgent />
            Support
          </NavLink>
         
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white-800 text-black rounded-full shadow-2xl mx-3"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
