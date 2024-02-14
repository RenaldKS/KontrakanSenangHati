import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
