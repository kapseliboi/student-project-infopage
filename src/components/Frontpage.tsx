import * as React from 'react';
import { Container, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

import * as texts from '../assets/pageTexts.json';
const heroBackground = require('../assets/kansiareena.jpg');

const useStyles = makeStyles((theme: Theme) => createStyles({
    hero: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
        textShadow: '2px 2px #000000',
        color: '#ffffff',
        background: 'rgba(41, 44, 61, 0.2)'
    },
    heroImage: {
        background: `url(${heroBackground}) center fixed`,
        position: 'absolute',
        width: '100%',
        height: '1000px', // 100% depends on the screen size, causes issues
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '0% 70%',
        zIndex: -1,
    },
    heroText: {
        marginBottom: theme.spacing(5),
        fontWeight: 400,
    },
    heroContainer: {
        background: 'rgba(41, 44, 61, 0.5)',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5),
    },
    introduction: {
        background: '#4e008e',
        color: '#ffffff',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
    },
    why: {
        background: '#ffffff',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}));

const Frontpage: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.heroImage} />
            <section className={classes.hero}>
                <div className={classes.heroContainer}>
                    <Typography variant='h2' align='center'>
                        {texts.frontPage.heroHeader}
                    </Typography>
                    <Typography variant='h5' align='center' className={classes.heroText}>
                        {texts.frontPage.heroText}
                    </Typography>
                </div>
            </section>
            <section className={classes.introduction}>
                <Container>
                    <Typography variant='h5' align='center'>
                        {texts.frontPage.introduction}
                    </Typography>

                </Container>
            </section>
            <section className={classes.why}>
                <Container>
                    <Typography variant='h4' align='center'>
                        {texts.frontPage.why}
                    </Typography>
                </Container>
            </section>
        </>
    );
}

export default Frontpage;