import { Transaction } from 'components/Transaction/Transaction';
import React from 'react';
import css from './transactionsTable.module.css';

export const TransactionsList = ({ transactions }) => {
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
            <th>
              <span style={{ visibility: 'collapse' }}>Buttons</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr
              key={transaction._id}
              className={
                transaction.category === 'Income'
                  ? css.IncomeRow
                  : css.OutcomeRow
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
