import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Logo, PlayButton, Search, User } from '../assets/icons';
import Image from '../assets/images/image.svg';

import { navigationData, sidebarFooterData } from '../data/Data';

const Sidebar = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [searchInput, setSearchInput] = useState('');

  return (
    <aside className='overflow-scroll h-full px-4 py-3 lg:py-6 text-darkGrey text-base font-medium scroll'>
      <div className='hidden md:block mb-10'>
        <img src={Logo} alt='Untitled UI' />
      </div>

      <div className='flex items-center  ml-2 p-2 rounded-md w-5/6 border border-searchBorder shadow-sm gap-2'>
        <img src={Search} alt='search' />
        <input
          type='text'
          placeholder='Search'
          className='outline-none text-gray w-4/5 bg-transparent placeholder:font-normal '
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>

      <div className='space-y-2 my-10'>
        {navigationData.map((navigation) => (
          <Link to={navigation.route}>
            <div
              key={navigation.id}
              onClick={() => setSelectedRoute(navigation.route)}
              className={`flex items-center gap-4 p-2 rounded-md hover:bg-offWhite ${
                navigation.route === selectedRoute
                  ? 'bg-offWhite text-blue'
                  : ''
              }`}
            >
              <img src={navigation.icon} alt={navigation.title} />
              <a
                href={navigation.route}
                className='text-[11px] leading-[14.63px]'
              >
                {navigation.title}
              </a>
            </div>
          </Link>
        ))}
      </div>
      <div className=' space-y-2'>
        {sidebarFooterData.map((footer) => (
          <Link to={footer.route}>
            <div
              key={footer.id}
              onClick={() => setSelectedRoute(footer.route)}
              className={`flex items-center gap-4 p-2 rounded-md hover:bg-offWhite ${
                footer.route === selectedRoute ? 'bg-offWhite text-blue' : ''
              }`}
            >
              <img src={footer.icon} alt={footer.title} />
              <a href={footer.route} className='text-[11px] leading-[14.63px]'>
                {footer.title}
              </a>
            </div>
          </Link>
        ))}
      </div>
      <div className='bg-offWhite rounded-lg text-sm p-4 space-y-3'>
        <p className='text-blue'>New features available!</p>
        <p className='font-normal text-gray'>
          Check out the new dashboard view. Pages now load faster.{' '}
        </p>
        <div className='relative'>
          <img
            src={Image}
            alt='A lady sitting down'
            className='object-cover rounded-md'
          />
          <img
            src={PlayButton}
            alt='Play'
            className='absolute bottom-3 left-3 z-20 cursor-pointer'
          />
        </div>
        <div className='flex gap-4'>
          <button className=' text-gray'>Dismiss</button>
          <button className='text-violet'>What's new?</button>
        </div>
      </div>
      <hr className='border border-lightGrey my-8' />

      <div className='flex justify-between'>
        <img src={User} alt='User' />
        <div className='text-sm'>
          <h4 className='text-blue'>Olivia Rhye</h4>
          <p className='font-normal text-gray'>olivia@untitledui.com</p>
        </div>
        <img src={Button} alt='button' className='cursor-pointer' />
      </div>
    </aside>
  );
};

export default Sidebar;
