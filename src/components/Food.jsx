import React, { useState } from "react";
import { product } from "../data";

function Food() {
  const [foods, setFoods] = useState(product);

  const filterProduct = (category) => {
    setFoods(
      product.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="">
        <h1 className="text-4xl font-bold text-orange-500">
          Top mais pedidos!!
        </h1>
      </div>

      <div className="flex gap-2 my-8 md:gap-8">
        <button
          onClick={() => setFoods(product)}
          className="px-2 py-1 font-medium transition duration-300 border border-orange-500 rounded md:px-4 text-neutral-800 hover:bg-orange-600 hover:text-neutral-100"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("Burguer")}
          className="px-2 py-1 font-medium transition duration-300 border border-orange-500 rounded md:px-4 text-neutral-800 hover:bg-orange-600 hover:text-neutral-100"
        >
          Burguers
        </button>
        <button
          onClick={() => filterProduct("Pizza")}
          className="px-2 py-1 font-medium transition duration-300 border border-orange-500 rounded md:px-4 text-neutral-800 hover:bg-orange-600 hover:text-neutral-100"
        >
          Pizza
        </button>
        <button
          onClick={() => filterProduct("Bebidas")}
          className="px-2 py-1 font-medium transition duration-300 border border-orange-500 rounded md:px-4 text-neutral-800 hover:bg-orange-600 hover:text-neutral-100"
        >
          Bebidas
        </button>
        <button
          onClick={() => filterProduct("Complementos")}
          className="px-2 py-1 font-medium transition duration-300 border border-orange-500 rounded md:px-4 text-neutral-800 hover:bg-orange-600 hover:text-neutral-100"
        >
          Complementos
        </button>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
        {foods.map((produto) => (
          <div key={produto.id} className="overflow-hidden shadow">
            <img
              src={produto.image}
              alt={produto.name}
              className="object-cover w-full transition duration-200 rounded h-80 hover:scale-105"
            />
            <div className="flex items-center justify-between p-2 bg-white">
              <h2 className="my-2 text-xl">{produto.name}</h2>
              <span className="px-2 py-1 font-semibold text-white bg-orange-500 rounded cursor-pointer">
                {produto.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
