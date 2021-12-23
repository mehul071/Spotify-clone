import React from 'react'
import Fotter from './Fotter';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './Player.css'

function Player({spotify}) {
    return (
        <div>
            <div className='player-body'>
                <Sidebar/>
                <MainContent/>
                
            </div>
            <Fotter/> 
        </div>
    )
}

export default Player
