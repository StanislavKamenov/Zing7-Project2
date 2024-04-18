import React from 'react';

const NavMenu = () => {
  return (
    <header className="mt-[-10vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
       
        <p className="text-4xl padding-x font-medium text-dark-blue p-10 w-54 fixed left-0">Website</p>
        
        <nav>
          <ul className="flex justify-center space-x-10 text-dark-green p-4">
            <NavItem text="Начало" />
            <NavItem text="За Нас" />
            <NavItem text="Услуги" />
            <NavItem text="Цени" />
            <NavItem text="Как работи" />
            <NavItem text="Контакти" />
          </ul>
        </nav>
          
        <div className="flex items-center space-x-4 fixed right-0 mr-5">
        <button className="text-lg text-dark-green p-5">Профил</button>
        <button className="text-lg font-medium border border-2 border-black rounded-md p-4 text-dark-blue">Заявка за пратка</button>
        </div>
      </div>
    </header>
  );
}

const NavItem = ({ text }) => {
  return (
    <li>{text}</li>
  );
}

export default NavMenu;
