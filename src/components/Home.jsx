import React from "react";
import MyImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-white text-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-10">
        <div className="flex flex-col justify-center h-full w-full md:w-2/3">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm a{" "}
            <span className="text-blue-600">
              <br />
              Frontend Developer
            </span>
          </h2>
          <p className="text-gray-600 py-4 max-w-lg text-lg">
            Ambitious and versatile professional with expertise in React,
            JavaScript, HTML, CSS, Java, and C. <br />
            Skilled in creating dynamic web applications and driving business
            growth. <br />
            I’m passionate about leveraging my technical and business skills in
            innovative environments.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white bg-gradient-to-b from-gray-600 to-gray-800 w-fit px-6 py-3 my-2 flex items-center rounded-md shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              Portfolio
              <span className="group-hover:translate-x-1 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={MyImage}
            alt="My Profile"
            className="rounded-2xl shadow-lg object-cover w-4/5 md:w-3/4 lg:w-2/3 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
