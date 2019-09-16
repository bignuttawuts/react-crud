import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        จองคิวใช้บริการอนามัยบ้านคลอง
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
        // <nav className="navbar is-transparent">
        //     <div className="navbar-start">
        //         <Link className="navbar-item" to="/">Home</Link>
        //         <Link className="navbar-item" to="/resources">พนักงาน</Link>
        //         <Link className="navbar-item" to="/times">รอบ</Link>
        //         <Link className="navbar-item" to="/settings">ตั้งค่า</Link>
        //     </div>
        //     <div className="navbar-end">
        //         <div className="navbar-item">
        //             <div className="field is-grouped">
        //                 <p className="control">
        //                     <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
        //                         <span>Login</span>
        //                     </a>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar;
