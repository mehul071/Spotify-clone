import React, { useState } from "react";
import "./Fotter.css";
import { BiShuffle } from "react-icons/bi";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import {
  BsFillPlayCircleFill,
  BsArrowRepeat,
  BsFillVolumeDownFill,
} from "react-icons/bs";
import { useDataLayerValue } from "../DataLayer";
import RangeSlider from "react-bootstrap-range-slider";
import { MdOutlinePlaylistAdd } from "react-icons/md";

function Fotter() {
  const [value, setValue] = useState(0);
  const [{ playlist }, dispatch] = useDataLayerValue();
  return (
    <div className="fotter fixed bottom-0 height-16 w-full flex text-white space-x-4">
      <div className="fotter-left ">
        <img
          src="https://i.scdn.co/image/ab67616d000048514ddf4df172bd6c51173989e9"
          className="song-img"
        />
        <div>
          <h6 className="text-sm">Song name</h6>
          <p className="text-sm">Composer name</p>
        </div>
      </div>
      <div className="fotter-center text-white">
        <BiShuffle className="cursor-pointer  text-xl" />
        <AiFillCaretRight className="cursor-pointer text-xl" />
        <BsFillPlayCircleFill className="play_btn cursor-pointer text-4xl" />
        <AiOutlineCaretLeft className="cursor-pointer text-xl" />
        <BsArrowRepeat className="cursor-pointer text-xl" />
      </div>
      <div className="fotter-right">
        <MdOutlinePlaylistAdd className="text-2xl m-2 cursor-pointer" />
        <BsFillVolumeDownFill className="text-2xl" />
        <RangeSlider
          value={value}
          size="sm"
          max="50"
          className="slider"
          tooltipPlacement="top"
          tooltip="off"
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        />
      </div>
    </div>
  );
}

export default Fotter;
