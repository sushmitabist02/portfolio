import React from "react";
import Weather from "../assets/portfolio/Weather.jpg";
import FoodRecipe from "../assets/portfolio/FoodRecipe.jpg";
import ECommerce from "../assets/portfolio/ECommerce.jpg";

const Port = () => {
  const portfolios = [
    {
      id: 1,
      src: FoodRecipe,
    },
    {
      id: 2,
      src: Weather,
    },
    {
      id: 3,
      src: ECommerce,
    },
  ];

  const web1 = () => {
    console.log("wev1");
    <a
      href="https://food-recipe-9cd7.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Demo1
    </a>;
  };
  return (
    <div
      name="portfolio"
      className="h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110 h-[250px] w-[100%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Port;
