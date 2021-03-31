import React from 'react';
import propTypes from 'prop-types';
import { Dropdown, Button } from 'react-bootstrap';

const BreedSelector = ({ breedsData, handleSelectChange }) => (
  <Dropdown>
    <Dropdown.Toggle data-testid="breed_selector" variant="success" id="dropdown-basic">
      Choose
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {breedsData.map(
        breed => (
          <Dropdown.Item key={breed.id}>
            <Button
              data-testid={breed.id}
              type="button"
              classList="dropdown-item"
              key={breed.id}
              onClick={handleSelectChange}
              value={breed.id}
            >
              { breed.name }
            </Button>
          </Dropdown.Item>
        ),
      )}
    </Dropdown.Menu>
  </Dropdown>
);

BreedSelector.propTypes = {
  breedsData: propTypes.arrayOf(propTypes.any).isRequired,
  handleSelectChange: propTypes.func.isRequired,
};

export default BreedSelector;
