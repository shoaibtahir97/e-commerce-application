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
      <Link to={"/"}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Elliye
          </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/wishlist">
            <Badge className="flex items-center">
              <HiOutlineHeart size="25px" />
              {/* Wishlist */}
            </Badge>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to={"/cart"}>
            <Badge className="flex items-center">
              <HiOutlineShoppingCart size="25px" />
              {/* Cart */}
            </Badge>
          </Link>
        </Navbar.Link>
        <Navbar.Link className="flex items-center">
          <Link to={"/profile"}>
            <HiOutlineUser size="25px" />
          </Link>
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
