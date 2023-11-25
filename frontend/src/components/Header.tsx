import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Funica
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">Add to Cart</Navbar.Link>
        <Navbar.Link href="#">Sign in</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
