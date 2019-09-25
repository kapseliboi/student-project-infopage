import * as React from 'react';
import { Container, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

import * as texts from '../assets/pageTexts.json';

const useStyles = makeStyles((theme: Theme) => createStyles({
    hero: {
        marginTop: theme.spacing(20),
    },
    heroText: {
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    introduction: {
        background: '#4e008e',
        color: '#ffffff',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
    }
}));

const Frontpage: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <section>
                <Container className={classes.hero}>
                    <Typography variant='h2' align='center'>
                        {texts.frontPage.heroHeader}
                    </Typography>
                    <Typography variant='h5' align='center' className={classes.heroText}>
                        {texts.frontPage.heroText}
                    </Typography>
                </Container>
            </section>
            <section className={classes.introduction}>
                <Container>
                    <Typography variant='h6' align='center'>
                        {texts.frontPage.introduction}
                    </Typography>
                </Container>
            </section>
        </>
    );
}

export default Frontpage;