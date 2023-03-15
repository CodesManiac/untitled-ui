import React, { useState } from 'react';
import { userProfile } from '../data/Data';
import { MasterCard, Plus, Visa } from '../assets/icons';

import Checkbox from './Checkbox';

const CardDetails = () => {
  const [visaChecked, setVisaChecked] = useState<boolean>(false);
  const [mastercardChecked, setMastercardChecked] = useState<boolean>(false);

  const handleVisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisaChecked(event.target.checked);
    setMastercardChecked(false);
  };

  const handleMastercardChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMastercardChecked(event.target.checked);
    setVisaChecked(false);
  };
  return (
    <section className='p-6'>
      <div className='flex flex-col md:flex-row gap-16'>
        <div>
          <h2 className='font-medium text-darkGrey'>Card details</h2>
          <p>Select default payment method</p>
        </div>
        <form className='flex flex-col space-y-4'>
          <Checkbox
            label={`Visa ending in ${userProfile[0].visa[0]}`}
            details={`Expiry ${userProfile[0].visa[1]}`}
            icon={Visa}
            checked={visaChecked}
            handleChange={handleVisaChange}
          />
          <Checkbox
            label={`Mastercard ending in ${userProfile[0].mastercard[0]}`}
            icon={MasterCard}
            details={`Expiry ${userProfile[0].mastercard[1]}`}
            checked={mastercardChecked}
            handleChange={handleMastercardChange}
          />
          <button className='flex items-center gap-1 text-sm'>
            <img src={Plus} alt='Add' />
            <p className=''>Add new payment method</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default CardDetails;
