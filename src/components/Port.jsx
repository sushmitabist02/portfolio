import React from "react";
import Weather from "../assets/portfolio/Weather.jpg";
import FoodRecipe from "../assets/portfolio/FoodRecipe.jpg";
import ECommerce from "../assets/portfolio/ECommerce.jpg";

const Port = () => {
  const portfolios = [
    {
      id: 1,
      src: FoodRecipe,
      link: "https://food-recipe-9cd7.onrender.com",
      title: "Food Recipe App",
    },
    {
      id: 2,
      src: Weather,
      link: "https://weather-app.example.com",
      title: "Weather App",
    },
    {
      id: 3,
      src: ECommerce,
      link: "https://ecommerce-site.example.com",
      title: "E-Commerce Site",
    },
  ];

  return (
    <section
      name="portfolio"
      className="text-gray-900 py-10 md:py-16"
      style={{
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 0%;
            }
            100% {
              background-position: 0% 100%;
            }
          }
        `}
      </style>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-800">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="text-gray-600 text-lg py-6 ">
            Check out some of my work right here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, link, title }) => (
            <div
              key={id}
              className="relative shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105 w-full h-[250px] object-cover"
              />
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-xl font-bold">{title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
