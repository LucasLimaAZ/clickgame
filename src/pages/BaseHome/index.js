import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Home from '../Home'
import './style.scss'
import auth from '../../services/auth.service'
import LoginScreen from '../Login'

const BaseHome = () => {
    const [openSidebar, toggleOpenSidebar] = useState(false)
    const isAuthenticated = auth.isAuthenticated()
    
    return (
        isAuthenticated 
            ? (
                <div className='base-home'>
                    <Navbar open={openSidebar} openSidebar={toggleOpenSidebar} />
                    <Sidebar open={openSidebar} />
                    <div className='content' onClick={() => toggleOpenSidebar(false)} >
                        <Home />
                    </div>
                </div>
            )
            : (
                <LoginScreen />
            )
    )
}

export default BaseHome