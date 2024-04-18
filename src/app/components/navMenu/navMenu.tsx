"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";


const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  interface NavItemProps {
    text: string;
  }

  const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return (
      <li className="hover:text-green-600">
        {text}
      </li>
    );
  };
  
  return (
    <header className="mt-[-10vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
        <p className="text-4xl padding-x font-medium text-dark-blue p-10 w-54 fixed left-0">
          Website
        </p>

        <nav className="hidden sm:block">
          <ul className="flex justify-center space-x-10 text-dark-green p-4 hover: cursor-pointer">
            <NavItem text="Начало" />
            <NavItem text="За Нас" />
            <NavItem text="Услуги" />
            <NavItem text="Цени" />
            <NavItem text="Как работи" />
            <NavItem text="Контакти" />
          </ul>
          <div className="flex items-center space-x-4 fixed right-0 mr-5 mt-[-3.5rem]">
            <button className="text-lg text-dark-green p-5">Профил</button>
            <button className="text-lg font-medium border border-2 border-black rounded-md p-4 text-dark-blue">
              Заявка за пратка
            </button>
          </div>
        </nav>

        <div className="sm:hidden flex items-center space-x-4 fixed right-0 mr-5">
          <button
            className="text-lg font-medium p-4 text-dark-blue"
            onClick={toggleMenu}
          >
           <CiMenuFries />
          </button>
        </div>

        {isOpen && (
          <nav className="sm:hidden fixed top-24 right-0 z-10 bg-white w-full">
            <ul className="flex flex-col items-center space-y-4 text-dark-green p-4">
              <NavItem text="Начало" />
              <NavItem text="За Нас" />
              <NavItem text="Услуги" />
              <NavItem text="Цени" />
              <NavItem text="Как работи" />
              <NavItem text="Контакти" />
              <NavItem text="Заявка за пратка" />
              <NavItem text = "Профил" />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavMenu;
