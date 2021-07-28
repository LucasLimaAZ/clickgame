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
    Route,
    Link
} from 'react-router-dom'

const BaseHome = () => {
    const [openSidebar, toggleOpenSidebar] = useState(false)
    const [login, setLogin] = useState(false)

    if (!login) return <LoginScreen login={setLogin}/>
    
    return (
        <Router>
            <div className='base-home'>
                <Navbar 
                    open={openSidebar} 
                    openSidebar={toggleOpenSidebar} 
                    login={setLogin}
                />
                <Sidebar open={openSidebar} />
                <div className='content' onClick={() => toggleOpenSidebar(false)} >
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/monsters' component={NewMonster} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default BaseHome