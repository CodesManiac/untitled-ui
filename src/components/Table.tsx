import React, { useState } from 'react';
import { ArrowDown, Check, Download } from '../assets/icons';
import {
  SelectedRows,
  TableProps,
  userAccountDetailsType,
} from '../types/DataType';
import { userAccountDetails } from './../data/Data';
import BillingHistory from './BillingHistory';

const Table = () => {
  const [selectedRows, setSelectedRows] = useState<SelectedRows>([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    userAccountDetails: userAccountDetailsType
  ) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, userAccountDetails]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row !== userAccountDetails));
    }
  };
  return (
    <table className='table-auto w-max lg:w-full my-4 bg-white'>
      <thead>
        <tr className='text-tableData bg-tableHead text-left text-xs'>
          <th>
            <div className='flex gap-4'>
              <input
                type='checkbox'
                className=' form-checkbox rounded-md w-4 h-4 border border-searchBorder text-purple outline-none cursor-pointer'
                checked={selectedRows.length === userAccountDetails.length}
                onChange={(event) =>
                  setSelectedRows(
                    event.target.checked ? userAccountDetails : []
                  )
                }
              />
              Invoice
              <span>
                <img src={ArrowDown} alt='arrow down' />
              </span>
            </div>
          </th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
          <th>Users on plan</th>
        </tr>
      </thead>
      <tbody>
        {userAccountDetails.map((billingDetails: any) => (
          <tr
            key={billingDetails.id}
            className='border-b border-tableRowBorder bg-offWhite last:border-b-0 text-tableData text-sm'
          >
            <td>
              <div className='flex gap-4'>
                {' '}
                <input
                  type='checkbox'
                  className=' form-checkbox rounded-md w-4 h-4 border border-searchBorder text-purple outline-none cursor-pointer'
                  checked={selectedRows.includes(billingDetails)}
                  onChange={(event) =>
                    handleCheckboxChange(event, billingDetails)
                  }
                />
                <p className='text-blue font-medium'>
                  {billingDetails.invoice}
                </p>
              </div>
            </td>
            <td>{billingDetails.amount}</td>
            <td>{billingDetails.date}</td>
            <td>
              <div className='bg-lightGreen rounded-full flex justify-center items-center px-2 py-1 text-center gap-1 m-4'>
                <img src={Check} alt='check' />
                <p className='text-green'>{billingDetails.status}</p>
              </div>
            </td>
            <td>
              <div className='flex justify-between items-center'>
                <div className={`flex rounded-full items-center `}>
                  {billingDetails.users.map((user: any) => (
                    <img src={user} alt='user' className='-mr-2' />
                  ))}
                  <span>
                    {billingDetails.noOfUsers > billingDetails.users.length
                      ? `+${
                          billingDetails.noOfUsers - billingDetails.users.length
                        }`
                      : ''}
                  </span>
                </div>
                <div className='rounded-full bg-offWhite'>
                  <img src={Download} alt='download' />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
