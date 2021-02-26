import { Navbar, Button, Collapse } from 'react-bootstrap';
import { useState } from 'react';
import BreedFilter from './BreedFilter';
import BreedMenu from './BreedMenu';

const Nav = () => {
  const [open, setOpen] = useState(
    false,
  );
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          CATalog
        </Navbar.Brand>
        <Button
          onClick={() => { setOpen(!open); }}
          aria-controls="collapse-filter-form"
          aria-expanded={open}
        >
          Filter
        </Button>
        <div className="p-4">
          Show breed:
        </div>
        <BreedMenu />
      </Navbar>
      <Collapse in={open}>
        <div id="collapse-filter-form">
          <BreedFilter />
        </div>
      </Collapse>
    </>
  );
};
export default Nav;
