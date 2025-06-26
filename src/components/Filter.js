import React from 'react';

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div style={{ margin: 20 }}>
      <input type="text" placeholder="Search title..." onChange={(e) => setTitleFilter(e.target.value)} />
      <input type="number" placeholder="Min rating" onChange={(e) => setRateFilter(Number(e.target.value))} />
    </div>
  );
};

export default Filter;
