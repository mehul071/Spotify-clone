import React from 'react'
import './Fotter.css'
import {BiShuffle} from 'react-icons/bi';
import {AiOutlineCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import {BsFillPlayCircleFill,BsArrowRepeat} from 'react-icons/bs'
import {useDataLayerValue} from '../DataLayer'

function Fotter() {
    const [{playlist},dispatch] = useDataLayerValue()
    return (
        <div className='fotter fixed bottom-0 height-16 w-full flex text-white space-x-4'>
            <div className='fotter-left'>
                <p>song detail</p>
            </div>
            <div className='fotter-center'>
                <BiShuffle/>
                <AiFillCaretRight/>
                <BsFillPlayCircleFill className="play_btn"/>
                <AiOutlineCaretLeft/>
                <BsArrowRepeat/>

            </div>
            <div className='fotter-right'>
                <Grid></Grid>
            </div>
        </div>
    )
}

export default Fotter
