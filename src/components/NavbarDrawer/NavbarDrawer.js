import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'


const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
})

const NavDrawer = () => {
    const classes = useStyles();

    const [state, setState] = useState({ 
        top: false,
        left: false,
        bottom: false,
        right: false    
    })

    const toggleDrawer = (side, open) => {
        if (window.event.type === 'keydown' && (window.event.type === 'Tab' || window.event.type === 'Shift')){
            return;
        }
        setState({...state, [side]: open})
    }

    const sideList = side => (
        <div
            className={classes.list}
            role='presentation'
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Item1', 'Item2', 'Item3', 'Item4'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <div>


        </div>
    )
}

export default NavDrawer;
