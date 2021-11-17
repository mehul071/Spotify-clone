import React,{useState} from 'react'
import './Sidebar.css';
import {AiFillHome} from 'react-icons/ai'
import { BsSearch } from "react-icons/bs";
import {VscLibrary} from 'react-icons/vsc'
import {GoDiffAdded} from 'react-icons/go'
import {AiTwotoneLike} from 'react-icons/ai'
import {FaPodcast} from 'react-icons/fa'
import SidebarOptions from './SidebarOptions';
import MainContent from './MainContent'

function Sidebar() {
    const [active,setActive] = useState(false);
    const ToggleSelected = ()=>{
        active?setActive(false):setActive(true);
        console.log(active);
    }
    return (
        <div className='bg-black-800 w-64 h-screen flex'>
            <div className="Sidebar">
                <img className="h-20 mb-5 cursor-pointer"src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
                <SidebarOptions Icon={AiFillHome} title="Home"/>
                <SidebarOptions Icon={BsSearch} title="Search"/>
                <SidebarOptions Icon={VscLibrary} title="Your Library"/>

                <span className="mb-9">.</span>

                <SidebarOptions Icon={GoDiffAdded} title="Create Playlist"/>
                <SidebarOptions Icon={AiTwotoneLike} title="Liked Songs"/>
                <SidebarOptions Icon={FaPodcast} title="Your Episodes"/>
                <hr className="w-52 ml-4 line"/>
            </div>
            <div className="flex-1">
                <MainContent/>
            </div>
        </div>
    )
}

export default Sidebar
