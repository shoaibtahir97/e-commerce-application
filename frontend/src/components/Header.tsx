import { Typography } from "antd";
import { Navbar } from "flowbite-react";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand className="text-black hover:text-slate-400 hover:cursor-pointer">
        <HiBars3 size={"25px"} className="mr-1" />
        Categories
        <HiChevronDown size="25px" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">
          <HiOutlineHeart size="25px" />
        </Navbar.Link>
        <Navbar.Link href="#">
          <HiOutlineShoppingCart size="25px" />
        </Navbar.Link>
        <Navbar.Link href="#">
          <HiOutlineUser size="25px" />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
