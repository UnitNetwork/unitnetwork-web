import React from 'react'

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles({
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },
})

const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    What to Eat
        </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
