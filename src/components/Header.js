import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Avatar from "react-avatar";
import "./Header.css";
import { useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="Header flex">
      <div className="header_left flex items-center ">
        <AiOutlineSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Enter artist or song"
          className="search"
        />
      </div>
      <div className="header_right flex items-center">
        <Avatar
          name={user?.display_name}
          size="50"
          round={true}
          src={user?.images[0]?.url}
          alt={user?.display_name}
          className="mr-2"
        />
        <p className="font-bold user_name">{user?.display_name}</p>
      </div>
    </div>
  );
}

export default Header;
