import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const NavBarChat = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
    <div className="flex justify-end md:justify-end sm: justify-center bg-transparent">
      <div className="flex gap-4 pb-5 pt-5 pr-5 pl-5">
        <div className="flex items-center px-2 shadow-sm rounded-full bg-white border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Suchen ..."
            value={searchTerm}
            onFocus={() => navigate('/searchchat')}
            className="p-2 w-1/3 bg-white outline-none "
          />
        </div>
        <div className="flex gap-4 ">
          
          <Link to="/add-chat" className="bg-blue-800 shadow-2xl hover:bg-blue-900 text-white w-10 h-10 rounded-full flex justify-center items-center">
            <IoMdAdd />
          </Link>
        </div>
      </div>
    </div>  
    );
  }

  return null;
};

export default NavBarChat;