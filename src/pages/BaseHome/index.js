import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Home from '../Home'
import './style.scss'

const BaseHome = () => {
    const [openSidebar, toggleOpenSidebar] = useState(false)

    return (
        <div className='base-home'>
            <Navbar open={openSidebar} openSidebar={toggleOpenSidebar} />
            <Sidebar open={openSidebar} />
            <div className='content' onClick={() => toggleOpenSidebar(false)} >
                <Home />
            </div>
        </div>
    )
}

export default BaseHome