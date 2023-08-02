import React from 'react';
import EditModal from './EditModalTransaction';

const SampleComponent = () => {
  const sampleTransaction = {
    id: 1,
    type: 'income',
    category: 'Car',
    price: 1000,
    date: '2023-07-31',
    comment: 'Monthly salary',
  };

  return (
    <div>
      <EditModal transaction={sampleTransaction} />
    </div>
  );
};

export default SampleComponent;
