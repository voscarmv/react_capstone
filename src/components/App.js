import React from 'react';
import BreedMenu from './BreedMenu';
import BreedFilter from './BreedFilter';
import Cat from './Cat';

const App = () => (
  <div>
    <BreedFilter />
    <BreedMenu />
    <Cat />
  </div>
);

export default App;
