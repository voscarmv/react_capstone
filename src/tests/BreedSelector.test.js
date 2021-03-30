import React from 'react';
import TestRenderer from 'react-test-renderer';
import BreedSelector from '../components/BreedSelector';
import breeds from './BreedsResponse';

const BreedSelectorTest = TestRenderer.create(
  <BreedSelector breedsData={breeds} handleSelectChange={() => true} />,
);

it('Breed Selector renders correctly', () => {
  const tree = BreedSelectorTest.toJSON();
  expect(tree).toMatchSnapshot();
});
