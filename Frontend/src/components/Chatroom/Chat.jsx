import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

import { AddChat, SearchChat, NavBarChat, Chat } from '../../components/';
import { Chatroom } from '../../container';


import { NavLink, Link } from "react-router-dom";
import { RiHomeFill, RiLayoutMasonryFill, RiHome4Line } from "react-icons/ri";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";



const Chatnav = ( { user }) => {
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <div className="px-2 md:px-5">
            <div className="bg-none">
            <NavBarChat searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
            </div>
            <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full bg-gray-200 shadow-2xl">
            <div className="absolute flex flex-col justify-items-center top-0 right-3/4 left-0 bottom-0">
            

                        <div className="flex flex-col bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar shadow-2xl">
                        <div className="flex flex-col pt-5 pl-2 pr-2 pb-2">
                        <div className="flex flex-col gap-5 text-black-800">
                        <p className="flex px-4 py-12 gap-2 pt-4 item-center font-bold rounded-2xl bg-gray-100">Peter Henson
                        <p className="flex item-center text-gray-400 py-1 text-xs font-extralight">14:09 Uhr</p>
                        </p>
                        
                        
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            
      

    )
}

export default Chatnav;
