import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-b-lg border border-gray-700">
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20 ">
        <h1 className="text-left">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
