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
        borderBottom: `1px solid ${theme.palette.common.black}`,
        background: '#e04232',
    },
    toolbar: {
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '5px',
    },
    toolbarTitle: {
        justifyContent: 'space-between'
    },
    navigationButton: {
        color: '#fff'
    }
}));

export interface Props {
    aboutId: string;
    teamId: string;
    contactId: string;
}

const HideOnScroll: React.FC = ( { children } ) => {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            { children }
        </Slide>
    );
}

const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

const Navbar: React.FC<Props> = (props) => {
    const classes = useStyles();

    const { aboutId, teamId, contactId } = props;

    const scrollInto = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

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
                            <Button variant='text' onClick={scrollToTop} className={classes.navigationButton}>
                                {texts.navBar.home}
                            </Button>
                            <Button variant='text' onClick={() => scrollInto(aboutId)} className={classes.navigationButton}>
                                {texts.navBar.about}
                            </Button>
                            <Button variant='text' onClick={() => scrollInto(teamId)} className={classes.navigationButton}>
                                {texts.navBar.team}
                            </Button>
                            <Button variant='text' onClick={() => scrollInto(contactId)} className={classes.navigationButton}>
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
