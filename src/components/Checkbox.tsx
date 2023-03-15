import React from 'react';
import { CheckboxProps } from '../types/DataType';

const Checkbox = ({
  label,
  details,
  icon,
  checked,
  handleChange,
}: CheckboxProps) => {
  return (
    <div
      className={`flex justify-between items-center border text-sm rounded-lg bg-white border-lightGrey p-4 cursor-pointer${
        checked ? 'border-checkBorder bg-checkWhite' : ''
      } `}
    >
      <label className='ml-2 flex gap-2 font-medium '>
        <img src={icon} alt='alter' className='self-start' />
        <div>
          {' '}
          <div>
            <p className={`text-darkGrey ${checked ? 'text-deepPurple' : ''} `}>
              {label}
            </p>
            <p
              className={`text-gray font-normal ${
                checked ? 'text-purple' : ''
              } `}
            >
              {details}
            </p>
          </div>
          <div className='flex gap-4'>
            <button className={`${checked ? 'text-deepPurple' : ''} `}>
              Set as default
            </button>{' '}
            <button className='text-violet '>Edit</button>
          </div>
        </div>
      </label>

      <input
        type='checkbox'
        className=' form-checkbox border border-searchBorder rounded-full h-5 w-5 text-purple outline-none cursor-pointer'
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;
