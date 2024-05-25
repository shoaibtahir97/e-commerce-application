"use client";

import { Badge } from "antd";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to={"/"}>
          {/* <img
           src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
           alt="Flowbite React Logo"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Elliye
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link href="#">
          <Badge className="flex items-center">
            <HiOutlineHeart size="25px" />
            {/* Wishlist */}
          </Badge>
        </Navbar.Link>
        <Navbar.Link href="#">
          <Badge className="flex items-center">
            <HiOutlineShoppingCart size="25px" />
            {/* Cart */}
          </Badge>
        </Navbar.Link>
        <Navbar.Link href="#" className="flex items-center">
          <HiOutlineUser size="25px" />
          {/* Profile */}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

<div className="flex flex-end">
  <Dropdown
    arrowIcon={false}
    inline
    label={
      <Avatar
        alt="User settings"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded
      />
    }
  >
    <Dropdown.Header>
      <span className="block text-sm">Bonnie Green</span>
      <span className="block truncate text-sm font-medium">
        name@flowbite.com
      </span>
    </Dropdown.Header>
    <Dropdown.Item>Dashboard</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Earnings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
</div>;
