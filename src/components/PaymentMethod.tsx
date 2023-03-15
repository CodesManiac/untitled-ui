import React, { useState } from 'react';
import { userProfile } from '../data/Data';
import { Mail } from '../assets/icons';
const PaymentMethod = () => {
  const [selectedEmail, setSelectedEmail] = useState('');
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEmail(event.target.value);
  };
  console.log('User profile is', userProfile[0].email);
  return (
    <section className='py-6'>
      <h1 className='font-medium text-lg text-blue'>Payment method</h1>
      <p>Update your billing details and address.</p>
      <hr className='border border-lightGrey my-4' />

      <div className='flex flex-col md:flex-row gap-16'>
        <div>
          <h2 className='font-medium text-darkGrey'>Contact email</h2>
          <p>Where should invoices be sent?</p>
        </div>
        <form className='flex flex-col space-y-4'>
          <label className='inline-flex'>
            <input
              type='radio'
              className='radio'
              name='email'
              value={userProfile[0].email}
              checked={selectedEmail === userProfile[0].email}
              onChange={handleEmailChange}
            />
            <span className='ml-2'>
              <p className='text-darkGrey font-medium mb-2'>
                Send to my account email
              </p>
              <p>{userProfile[0].email}</p>{' '}
            </span>
          </label>
          <label className='inline-flex '>
            <input
              type='radio'
              className='radio'
              name='email'
              value={userProfile[0].alternativeEmail}
              checked={selectedEmail === userProfile[0].alternativeEmail}
              onChange={handleEmailChange}
            />
            <span className='ml-2'>
              <p className='text-darkGrey font-medium mb-2'>
                Send to an alternative email
              </p>

              <div className='flex gap-2 border border-searchBorder bg-white rounded-lg shadow-input p-2'>
                <img src={Mail} alt='mail' />
                <input
                  type='email'
                  className='text-blue outline-none w-4/5 placeholder:text-blue'
                  placeholder={userProfile[0].alternativeEmail}
                />
              </div>
            </span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default PaymentMethod;
