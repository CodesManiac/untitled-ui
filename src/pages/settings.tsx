import React from 'react';
import BillingHistory from '../components/BillingHistory';
import CardDetails from '../components/CardDetails';
import PaymentMethod from '../components/PaymentMethod';
import { tabsData } from './../data/Data';

const Settings = () => {
  return (
    <section className='text-base font-normal text-gray'>
      <div className='space-y-6'>
        <div className='px-6'>
          <h1 className='text-2xl md:text-3xl font-medium text-blue pt-6'>
            Settings
          </h1>
          <p>Manage your team and preferences here.</p>
        </div>
        <div className='flex border border-searchBorder rounded-lg overflow-x-auto scroll  drop-shadow-tabs w-full lg:w-5/6 bg-white'>
          {tabsData.map((tabs) => (
            <button
              key={tabs}
              className='border-l  border-searchBorder font-medium text-darkGrey px-3 py-1'
            >
              {tabs}
            </button>
          ))}
        </div>
      </div>
      <PaymentMethod />
      <hr className='border border-lightGrey my-4 px-6' />

      <CardDetails />
      <BillingHistory />
    </section>
  );
};

export default Settings;
