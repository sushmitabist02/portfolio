import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";
import dart from "../assets/flutter.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: dart,
      title: "DART",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-yellow-300",
    },
  ];

  return (
    <div
      name="experience"
      className="text-gray-900 py-10 md:py-16"
      style={{
        background:
          "linear-gradient(135deg, #f5f5f5, #e0e0e0, #f5f5f5, #e0e0e0)",
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
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
