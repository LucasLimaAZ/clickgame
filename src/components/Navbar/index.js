import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const Navbar = props => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton 
                    edge='start' 
                    className='menu-button' 
                    color='inherit' 
                    aria-label='menu'
                    onClick={() => props.openSidebar(!props.open)}
                >
                    <Menu />
                </IconButton>
                <Typography variant='h6' className='title'>
                    Navbar
                </Typography>
                <Button onClick={() => props.login(false)} color='inherit'>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar