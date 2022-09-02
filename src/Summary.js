import React from 'react';

const Summary = ({ items, label = 'all' })=> {
  const sum = items.reduce((acc, item)=> {
    return acc + item.data;
  }, 0);
  return (
    <div>
      The sum of { label } items is { sum }.
    </div>
  );
};

export default Summary;
