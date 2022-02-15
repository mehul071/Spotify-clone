import React, { useState } from "react";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
import { AiFillLike } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";
import { CgMediaPodcast } from "react-icons/cg";
import { useDataLayerValue } from "../DataLayer";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  const [active, setActive] = useState(false);
  const [{ playlists }, dispatch] = useDataLayerValue();
  const ToggleSelected = () => {
    active ? setActive(false) : setActive(true);
    console.log(active);
  };
  console.log(playlists);
  return (
    <div className="bg-black-800 h-screen Sidebar height-full">
      <div className="options">
        <img
          className="h-20 mb-5 cursor-pointer"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        />
        <div className="main-options">
          <SidebarOptions Icon={AiFillHome} title="Home" />
          <SidebarOptions Icon={BsSearch} title="Search" />
          <SidebarOptions Icon={VscLibrary} title="Your Library" />
        </div>
        <div className="make_playlist">
          <SidebarOptions Icon={BsPlusSquareFill} title="Create Playlist" />
          <SidebarOptions Icon={AiFillLike} title="Liked Songs" />
          <SidebarOptions Icon={CgMediaPodcast} title="Your Episodes" />
        </div>
        <hr></hr>
        {playlists?.items?.map((playlist) => (
          <SidebarOptions title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
