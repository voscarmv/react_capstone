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
        <div className="container-fluid">
          <div className="ml-auto">
            Show breed:
          </div>
          <div className="p-3">
            <BreedMenu />
          </div>
          <div className="">
            <Button
              onClick={() => { setOpen(!open); }}
              aria-controls="collapse-filter-form"
              aria-expanded={open}
            >
              Filter
            </Button>
          </div>
        </div>
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
