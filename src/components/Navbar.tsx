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
    Link,
    Button,
 } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import * as texts from '../assets/pageTexts.json';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderBottom: `1px solid ${theme.palette.common.white}`
    },
    toolbar: {
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '5px',
    },
    toolbarTitle: {
        justifyContent: 'space-between'
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

    const frontpageLink = React.forwardRef((props, ref) => <RouterLink {...props} to='/' />)
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll>
                <AppBar elevation={0} className={classes.root}>
                    <Toolbar className={classes.toolbar}>
                        <Link
                            component={frontpageLink}
                            variant='h6'
                            color='inherit'
                            noWrap
                            underline='none'
                            className={classes.toolbarTitle}
                        >
                            {texts.groupName}
                        </Link>
                        <div>
                            <Button variant='text'>
                                {texts.navBar.home}
                            </Button>
                            <Button variant='text'>
                                {texts.navBar.about}
                            </Button>
                            <Button variant='text'>
                                {texts.navBar.team}
                            </Button>
                            <Button variant='text'>
                                {texts.navBar.contact}
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}

export default Navbar;
