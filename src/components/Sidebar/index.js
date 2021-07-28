import React from 'react'
import { Button, Drawer } from '@material-ui/core'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './style.scss'

const Sidebar = props => {
    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={props.open}
        >
            <Link to='/'>
                <Button>Home</Button>
            </Link>   
            <Link to='/monsters'>
                <Button>Monsters</Button>
            </Link>   
        </Drawer>
    )
}

export default Sidebar