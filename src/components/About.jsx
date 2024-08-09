import React from "react";

const About = () => {
  return (
    <section
      name="about"
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
            About me
          </p>
          <p className="text-gray-600 py-6 text-lg leading-relaxed mb-6">
            I’m an ambitious and versatile professional with expertise in React,
            JavaScript, HTML, CSS, Java, and C. I have strong skills in market
            research, sales strategy, and customer relationship management. My
            goal is to leverage my technical expertise and business acumen in
            innovative environments. Adept at creating dynamic web applications
            and driving business growth, I’m seeking opportunities to contribute
            my skills in a forward-thinking environment.
          </p>
          <p className="text-gray-600 py-4 text-lg leading-relaxed">
            Skilled in developing cross-platform mobile applications using
            Flutter and Dart, I have a deep understanding of the framework's
            widget-based architecture and reactive programming model.
            Experienced in building high-performance, visually appealing apps
            that offer a seamless user experience across both iOS and Android
            platforms. Committed to staying updated with the latest trends and
            best practices in mobile development to deliver cutting-edge
            solutions that meet business objectives and enhance customer
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
