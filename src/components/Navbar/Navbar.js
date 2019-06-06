import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

import NavbarDrawer from '../NavbarDrawer/NavbarDrawer'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}))

export default function Navbar(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <ToolBar>
                    <IconButton onClick={NavbarDrawer} edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        WCSIB
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}


