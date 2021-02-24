import React from 'react';
import List from './List';
import Form from './Form';
import BreedMenu from './BreedMenu';
import BreedFilter from './BreedFilter';
import Cat from './Cat';

const App = () => (
  <div>
    <List />
    <Form />
    <BreedFilter />
    <BreedMenu />
    <Cat />
  </div>
);

export default App;
