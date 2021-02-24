import React from 'react';
import { useSelector } from 'react-redux';

const Cat = () => {
  const cat = useSelector(state => state.catState);
  // eslint-disable-next-line no-console
  console.log(cat.data[0]);
  if (cat.data[0]) {
    return (
      <div>
        <div>{cat.data[0].breeds[0].description}</div>
        <div><a href={cat.data[0].breeds[0].cfa_url}>CFA website</a></div>
        <div><a href={cat.data[0].breeds[0].wikipedia_url}>Wikipedia page</a></div>
        <img width="50%" alt={cat.data[0].breeds[0].alt_names} src={cat.data[0].url} />
      </div>
    );
  }
  return (
    <div>
      Cat
    </div>
  );
};

// const Cat = () => (<div>Cat</div>);

export default Cat;
