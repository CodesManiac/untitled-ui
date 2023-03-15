import React from 'react';
import { Download } from '../assets/icons';
import Table from './Table';

const BillingHistory = () => {
  return (
    <section className='text-sm font-medium'>
      <div className='flex justify-between'>
        <h1>Billing history</h1>
        <button className='flex items-center text-darkGrey bg-white shadow-input border border-searchBorder rounded-lg '>
          <img src={Download} alt='download' />
          Download all
        </button>
      </div>
      <Table />
    </section>
  );
};
export default BillingHistory;
