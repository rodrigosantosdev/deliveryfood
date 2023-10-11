import React from "react";

function HeadlineCard() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute w-full h-full p-6 bg-neutral-900/40 text-neutral-100">
          <p className="mt-8 text-3xl font-bold">Lorem, ipsum.</p>
          <p className="mt-2 text-xl font-bold">Lorem ipsum dolor sit amet.</p>
          <button className="absolute px-4 py-2 font-semibold duration-300 border border-white rounded-full bottom-14 hover:bg-orange-600 hover:border-transparent">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-coque-rosca-pao-de-forma-cheeseburger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute w-full h-full p-6 bg-neutral-900/40 text-neutral-100">
          <p className="mt-8 text-3xl font-bold">X Repolho</p>
          <p className="mt-2 text-xl font-bold">Lorem ipsum dolor sit amet.</p>
          <button className="absolute px-4 py-2 font-semibold duration-300 border border-white rounded-full bottom-14 hover:bg-orange-600 hover:border-transparent">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/572981/pexels-photo-572981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute w-full h-full p-6 bg-neutral-900/40 text-neutral-100">
          <p className="mt-8 text-3xl font-bold">Lorem, ipsum.</p>
          <p className="mt-2 text-xl font-bold">Lorem ipsum dolor sit amet.</p>
          <button className="absolute px-4 py-2 font-semibold duration-300 border border-white rounded-full bottom-14 hover:bg-orange-600 hover:border-transparent">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/3738762/pexels-photo-3738762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute w-full h-full p-6 bg-neutral-900/40 text-neutral-100">
          <p className="mt-8 text-3xl font-bold">Lorem, ipsum.</p>
          <p className="mt-2 text-xl font-bold">Lorem ipsum dolor sit amet.</p>
          <button className="absolute px-4 py-2 font-semibold transition duration-300 border border-white rounded-full bottom-14 hover:bg-orange-600 hover:border-transparent">
            Order Now
          </button>
        </div>
        <img
          src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeadlineCard;
