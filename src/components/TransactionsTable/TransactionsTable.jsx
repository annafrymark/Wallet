import { Transaction } from 'components/Transaction/Transaction';
import React from 'react';
//import useMediaQuery from '@mui/material/useMediaQuery';
import css from './transactionsTable.module.css';
export const TransactionsList = () => {
  //i'll delete it later
  const transactions = [
    {
      id: 1,
      date: '19.07.2023',
      type: '-',
      category: 'Food',
      comment: 'Lunch',
      sum: 10.5,
    },
    {
      id: 2,
      date: '18.07.2023',
      type: '+',
      category: 'Income',
      comment: 'Bus fare',
      sum: 2.0,
    },
    {
      id: 3,
      date: '15.07.2023',
      type: '+',
      category: 'Salary',
      comment: 'Monthly salary',
      sum: 2500.0,
    },
    {
      id: 4,
      date: '14.07.2023',
      type: '-',
      category: 'Entertainment',
      comment: 'Movie tickets',
      sum: 15.0,
    },
    {
      id: 5,
      date: '13.07.2023',
      type: '-',
      category: 'Shopping',
      comment: 'Groceries',
      sum: 30.0,
    },
  ];

  return (
    <div>
      <table className={css.TransactionsTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr
              key={transaction.id}
              className={
                transaction.type === '+' ? css.IncomeRow : css.OutcomeRow
              }
            >
              <Transaction transaction={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
