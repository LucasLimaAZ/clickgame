import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Home from '../Home'
import './style.scss'
import LoginScreen from '../Login'
import NewMonster from '../Monsters/New'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const BaseHome = () => {
    const [openSidebar, toggleOpenSidebar] = useState(false)
    const [login, setLogin] = useState(false)
    
    return (
        login
            ? (
                <div className='base-home'>
                    <Navbar 
                        open={openSidebar} 
                        openSidebar={toggleOpenSidebar} 
                        login={setLogin}
                    />
                    <Sidebar open={openSidebar} />
                    <div className='content' onClick={() => toggleOpenSidebar(false)} >
                        <Router>
                            <Switch>
                                <Route path='/'>
                                    <Home />
                                </Route>
                                <Route path='/monsters/new'>
                                    <NewMonster />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            )
            : (
                <LoginScreen login={setLogin}/>
            )
    )
}

export default BaseHome