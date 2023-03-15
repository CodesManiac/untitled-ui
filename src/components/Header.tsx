import React, { useState, useEffect, useRef } from 'react';
import { Logo, NavMenu } from '../assets/icons';
import Sidebar from './Sidebar';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNavSwitch = () => {
    setNav(!nav);
  };

  const hamburgerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hamburgerRef]);
  return (
    <header className='flex justify-between p-6  bg-white'>
      <img src={Logo} alt='Untitled UI' />
      <div onClick={handleNavSwitch} className='block md:hidden cursor-pointer'>
        <img src={NavMenu} alt='menu' />
      </div>
      <ul
        ref={hamburgerRef}
        className={
          nav
            ? 'fixed flex flex-col right-0 top-0 w-4/5 h-full overflow-auto p-2 space-y-2 bg-white rounded-l-md ease-in-out duration-500 z-30'
            : 'ease-in-out duration-500 fixed hidden'
        }
      >
        <Sidebar />
      </ul>
    </header>
  );
};

export default Header;
