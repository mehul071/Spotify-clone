import React, { useEffect } from "react";
import "./MainContent.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import { AiOutlinePlayCircle, AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import SongRow from "./SongRow";

function MainContent({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <div className="bg-grey-700 player">
      <div className="playlist">
        <Header spotify={spotify} />
        <div className="body_info flex items-end p-4">
          <img src={discover_weekly?.images[0].url} className="poster_img" />
          <div className="body_infoText ml-4">
            <strong>PLAYLIST</strong>
            <h1 className="text-6xl text-bold mb-2">{discover_weekly?.name}</h1>
            <p>{discover_weekly?.description}</p>
            <strong>
              <p>
                Spotify <span> : </span>
                <span>{discover_weekly.tracks.items.length} songs</span>
              </p>
            </strong>
          </div>
        </div>
        <div className="body_songs">
          <div className="body_icons flex items-center">
            <AiOutlinePlayCircle className="playbtn text-6xl cursor-pointer mr-2" />
            <AiFillHeart className="like__btn text-4xl cursor-pointer mr-2" />
            <BsThreeDots className="options__btn text-4xl cursor-pointer mr-2" />
          </div>
          <div className="song_rows">
            {discover_weekly.tracks.items.map((songs) => (
              <SongRow songs={songs} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
