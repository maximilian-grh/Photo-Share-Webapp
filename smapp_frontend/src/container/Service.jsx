import React, { useState, useRef, useEffect } from 'react';
import { HiMenu, HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar, UserProfile } from '../components';
import { userQuery } from '../utils/data';
import { client } from '../client';
import logo from '../assets/logo.png';

const Service = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const scrollRef = useRef(null);

  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
    <div className="hidden md:flex h-screen flex-initial">
      <Sidebar user={user && user} />
    </div>
    <div className="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md bg-white">
        <HiOutlineMenuAlt1 fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
        <Link to="/">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full " />
        </Link>
      </div>
      {toggleSidebar && (
      <div className="fixed w-4/5 bg-gray-50 h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
        <div className="absolute w-full flex justify-end items-center p-2">
          <IoIosClose fontSize={60} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
        </div>
        <Sidebar closeToggle={setToggleSidebar} user={user && user} />
      </div>
      )}
    </div>
    <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
    
    <header class="bg-slate-900 shadow-md">
  <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-bold text-white">Kundenservice</h1>
  </div>
</header>
<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

    <div class="px-4 py-6 sm:px-0">
      <div class="text-xl">Kundenservice</div>
    </div>

  </div>
</main>

    </div>
  </div>
  );
};

export default Service;