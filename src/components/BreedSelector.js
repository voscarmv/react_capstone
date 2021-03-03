/* eslint-disable no-console */
import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import propTypes from 'prop-types';

const BreedSelector = ({ breedsData, handleSelectChange }) => (
  <Form inline>
    <FormControl as="select" onChange={handleSelectChange}>
      {breedsData.map(
        breed => (
          <option value={breed.id} key={breed.id}>{ breed.name }</option>
        ),
      )}
    </FormControl>
  </Form>
);

BreedSelector.propTypes = {
  breedsData: propTypes.arrayOf(propTypes.any).isRequired,
  handleSelectChange: propTypes.func.isRequired,
};

export default BreedSelector;
