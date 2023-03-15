import React from 'react';
import { Download } from '../assets/icons';
import Table from './Table';

const BillingHistory = () => {
  return (
    <section className='p-6 text-sm font-medium'>
      <div className='flex justify-between'>
        <h1>Billing history</h1>
        <button className='flex items-center text-darkGrey bg-white shadow-input border border-searchBorder rounded-lg '>
          <img src={Download} alt='download' />
          Download all
        </button>
      </div>
      <div className='overflow-x-auto'>
        <Table />
      </div>
    </section>
  );
};
export default BillingHistory;
