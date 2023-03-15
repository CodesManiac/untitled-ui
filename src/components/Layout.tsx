import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <div className='block md:hidden'>
        <Header />
      </div>
      <main className='flex h-screen w-full'>
        <div className=' hidden md:block w-[350px]  bg-white border-r-[1px] border-r-lightGrey'>
          <Sidebar />
        </div>

        <section className='w-full md:w-[100vw-350px] h-full overflow-y-auto scroll pb-12 bg-offWhite  '>
          {' '}
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default Layout;
