import Navbar from 'react-bootstrap/Navbar';
import BreedFilter from './BreedFilter';
import BreedMenu from './BreedMenu';

const Nav = () => (
  <>
    <Navbar>
      <BreedMenu />
    </Navbar>
    <BreedFilter />
  </>
);

export default Nav;
