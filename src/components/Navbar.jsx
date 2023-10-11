import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { GrCart } from "react-icons/gr";

import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp, MdWallet } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl">
          Delivery <span className="font-bold">Food</span>
        </h1>
        <div className="items-center hidden p-1 rounded-full md:flex bg-slate-200">
          <p className="px-2 py-2 text-sm rounded-full bg-neutral-900 text-neutral-100">
            Delivery
          </p>
          <p className="px-2 py-1">Pickup</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 py-2 pl-3 rounded-full bg-slate-200">
        <AiOutlineSearch size={20} className="text-slate-700" />
        <input
          type="text"
          placeholder="Search food"
          aria-label="campo de busca"
          className="pr-4 bg-transparent outline-none"
        />
      </div>

      {/* cart */}
      <button className="items-center hidden gap-2 px-3 py-2 rounded-full cursor-pointer md:flex bg-slate-200 text-neutral-900">
        <GrCart size={20} />
        Cart
      </button>

      {/* sidebar draw */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-neutral-50 z-10 duration-300 p-4"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-neutral-50 z-10 duration-300 p-4"
        }
      >
        <AiOutlineClose
          size={20}
          onClick={() => setNav(!nav)}
          className="absolute cursor-pointer right-4 top-4"
          aria-label="Icone de X, para fechar menu"
        />
        <h2>
          <h2 className="px-2 mt-4 text-xl sm:text-3xl">
            Delivery <span className="font-bold">Food</span>
          </h2>
          <nav>
            <ul className="flex flex-col gap-4 mt-8 font-semibold">
              <li className="flex gap-2 cursor-pointer">
                <TbTruckDelivery size={20} /> Order
              </li>
              <li className="flex gap-2 cursor-pointer">
                <MdFavorite size={20} /> Favorites
              </li>
              <li className="flex gap-2 cursor-pointer">
                <MdWallet size={20} /> Wallet
              </li>
              <li className="flex gap-2 cursor-pointer">
                <MdHelp size={20} /> Help
              </li>
              <li className="flex gap-2 cursor-pointer">
                <AiFillTag size={20} /> Promotions
              </li>
              <li className="flex gap-2 cursor-pointer">
                <BsFillSaveFill size={20} /> Best One
              </li>
              <li className="flex gap-2 cursor-pointer">
                <FaUserFriends size={20} /> Invite Friends
              </li>
            </ul>
          </nav>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
