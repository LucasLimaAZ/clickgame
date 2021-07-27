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
            <Router>
                <Link to={'/monsters/new'}>
                    <Button>Monsters</Button>
                </Link>
            </Router>
        </Drawer>
    )
}

export default Sidebar