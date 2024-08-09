import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 text-gray-900"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-600">
            Contact
          </h2>
          <p className="py-6">
            Feel free to reach out if you want to discuss a project,
            collaborate, or just say hi!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/lbkmvoxb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 mb-4 bg-white border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 mb-4 bg-white border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-white border-2 border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-gray-600"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-gray-600 to-gray-800 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 transition-transform duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
