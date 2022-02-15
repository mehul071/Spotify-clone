import React from "react";
import "./SongRow.css";

function SongRow({ songs }) {
  console.log(songs);
  return (
    <div className="songs mb-4">
      <div className="left flex">
        <div className="flex">
          <img src={songs.track.album?.images[2].url} className="song_img" />
          <div className="song_info">
            <h6>{songs.track.name}</h6>
            <p>{songs.track.album.artists[0].name}</p>
          </div>
        </div>
        <div className="album_detail">
          <p>{songs.track.album.name}</p>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
