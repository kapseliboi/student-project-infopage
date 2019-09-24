import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { 
    AppBar,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
    Theme,
    CssBaseline,
 } from '@material-ui/core';
 import * as texts from '../assets/pageTexts.json';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderBottom: `1px solid ${theme.palette.common.white}`
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

const HideOnScroll: React.FC = ( { children } ) => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            { children }
        </Slide>
    );
}

const Navbar: React.FC = () => {
    const classes = useStyles();
    const test = "asdfkljö aadsfjlka asdlkjfalskjödfjlk";
    const arr = [];
    for (let i = 0; i < 1000; ++i) {
        arr.push(test);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll>
                <AppBar elevation={0} className={classes.root}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            {texts.groupName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div>
                { arr.map( line => line )}
            </div>
        </React.Fragment>
    );
}

export default Navbar;
