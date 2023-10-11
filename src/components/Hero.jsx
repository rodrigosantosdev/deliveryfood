import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[800px] relative">
        <div className="absolute flex flex-col w-full h-screen top-32 lg:top-0 lg:justify-center left-4 md:left-10 text-neutral-100">
          <h1 className="text-3xl font-medium md:text-7xl">
            <span className="text-orange-500">The</span> Best
          </h1>
          <h2 className="text-3xl font-medium md:text-7xl">
            Foods <span className="text-orange-500">Delivery</span>
          </h2>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-full max-h-[800px] object-cover object-top"
      />
    </div>
  );
}

export default Hero;
