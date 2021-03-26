import React from 'react';

const Home = () => (
  <div className="m-3">
    <h5>
      Welcome to The Cat-alog!
      <span aria-label="cat" role="img">🐈</span>
    </h5>
    <p>
      You can browse through our database of cat
      breeds by using the filter on the top-right
      corner of this page.
    </p>
    <p>
      Simply select a breed from the drop-down menu
      to display its details here.
      Or if you prefer, filter them first by clicking
      on the Filter button and setting the parameters
      you are looking for!
    </p>
  </div>
);

export default Home;
