import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import { useScrollTrigger } from '@material-ui/core';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        background: '#4e008e',
    }
});

const HideOnScroll: React.FC = ({children}) => {
    console.log(children);
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
        <div>
            <HideOnScroll>
                <AppBar elevation={0} className={classes.root}>
                    <div>
                        Hello
                    </div>
                </AppBar>
            </HideOnScroll>
            <div>
                { arr.map( line => line )}
            </div>
        </div>
    );
}

export default Navbar;
