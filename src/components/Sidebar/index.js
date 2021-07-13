import React from 'react'
import { Drawer } from '@material-ui/core'
import './style.scss'

const Sidebar = props => {
    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={props.open}
        >
            aueba?
        </Drawer>
    )
}

export default Sidebar