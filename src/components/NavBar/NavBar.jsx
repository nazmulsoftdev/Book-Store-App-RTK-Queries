import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { GiBurningBook as LogoIcon } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { searchAc } from "../../features/filters/filterSlice";

function NavBar() {
  const { searched } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  //  search handler

  const searchHandler = (e) => {
    dispatch(searchAc(e.target.value));
  };

  return (
    <Navbar fluid={false} rounded={false}>
      <Navbar.Brand href="/">
        <LogoIcon size={40} color="green" />
        <span className="self-center whitespace-nowrap text-lg ml-2 text-gray-500">
          Book Store
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <TextInput
          placeholder="Filter books"
          type="search"
          value={searched}
          onChange={searchHandler}
        />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className="text-sm text-gray-500">
          Home
        </Link>
        <Link to="/addbook" className="text-sm text-gray-500">
          Add Book
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
