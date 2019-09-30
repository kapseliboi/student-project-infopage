import * as React from 'react';
import {
    Container,
    Typography,
    makeStyles,
    Theme,
    createStyles,
    Grid,
} from '@material-ui/core';
import EmojiObjects from '@material-ui/icons/EmojiObjectsOutlined';
import SwapHoriz from '@material-ui/icons/SwapHorizOutlined';
import OutlinedFlag from '@material-ui/icons/OutlinedFlagOutlined';
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAltOutlined';

import CircularImageWithTexts from './CircularImageWithTexts';
import * as texts from '../assets/pageTexts.json';
const heroBackground = require('../assets/kansiareena.jpg');
const akseliImage = require('../assets/akseli.jpg');
const eliasImage = require('../assets/elias.png');
const juhaImage = require('../assets/juha.jpg');
const magomedImage = require('../assets/magomed.png');
const nikovImage = require('../assets/niko.jpg');
const pietariImage = require('../assets/pietari.jpg');

const useStyles = makeStyles((theme: Theme) => createStyles({
    hero: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
        textShadow: '2px 2px #000000',
        color: '#ffffff',
        background: 'rgba(192, 57, 43, 0.2)'
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
        background: 'rgba(192, 57, 43, 0.5)',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5),
    },
    coloredTextBox: {
        background: '#c0392b',
        color: '#ffffff',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    whiteTextBox: {
        background: '#ffffff',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    blockquote: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        paddingRight: '5rem',
        paddingLeft: '5rem',
        position: 'relative',
        maxWidth: '70%',
        width: 'auto',
        margin: 'auto',
        "&::before": {
            content: "'\"'",
            fontSize: '8rem',
            fontStyle: 'italic',
            fontWeight: 500,
            position: 'absolute',
            color: '#ffffff',
            left: '1rem',
            top: "-2rem",
        },
        "&:after": {
            content: "'\"'",
            fontSize: '8rem',
            fontWeight: 500,
            fontStyle: 'italic',
            position: 'absolute',
            color: '#ffffff',
            right: '2rem',
            top: '-2rem',
        },
    },
    cite: {
        textAlign: 'right',
        fontSize: '1.5rem',
        fontStyle: 'italic',
        display: 'block',
        marginRight: '5rem',
    }
}));

interface Props extends NavbarProps {
}

const Frontpage: React.FC<Props> = (props) => {
    const classes = useStyles();
    
    const { aboutId, teamId, contactId } = props;

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
            <section className={classes.coloredTextBox} id={aboutId}>
                <Container>
                    <Typography variant='h5' align='center'>
                        {texts.frontPage.introduction}
                    </Typography>

                </Container>
            </section>
            <section className={classes.whiteTextBox}>
                <Container>
                    <Typography variant='h4' align='center'>
                        {texts.frontPage.why.title}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}  sm={12} md={4}>
                            <CircularImageWithTexts
                                icon={<EmojiObjects />}
                                header={texts.frontPage.why.argument1.title}
                                description={texts.frontPage.why.argument1.description}
                                key={"innovation"}
                            />
                        </Grid>
                        <Grid item xs={12}  sm={12} md={4}>
                            <CircularImageWithTexts
                                icon={<SwapHoriz />}
                                header={texts.frontPage.why.argument2.title}
                                description={texts.frontPage.why.argument2.description}
                                key={"agile"}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                icon={<OutlinedFlag />}
                                header={texts.frontPage.why.argument3.title}
                                description={texts.frontPage.why.argument3.description}
                                key={"determination"}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.coloredTextBox}>
                <blockquote className={classes.blockquote} cite={texts.frontPage.clientCitation.client}>
                    {texts.frontPage.clientCitation.citation}
                </blockquote>
                <cite className={classes.cite}>{texts.frontPage.clientCitation.client}</cite>
            </section>
            <section className={classes.whiteTextBox} id={teamId}>
                <Container>
                    <Typography variant='h3' align='center'>
                        {texts.frontPage.team.header}
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <CircularImageWithTexts
                                image={juhaImage}
                                header={texts.juha.name}
                                description={texts.juha.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                image={nikovImage}
                                header={texts.nikoV.name}
                                description={texts.nikoV.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                image={magomedImage}
                                header={texts.magomed.name}
                                description={texts.magomed.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                image={pietariImage}
                                header={texts.pietari.name}
                                description={texts.pietari.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                image={eliasImage}
                                header={texts.elias.name}
                                description={texts.elias.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                icon={<SentimentSatisfiedAlt />}
                                header={texts.nikoL.name}
                                description={texts.nikoL.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <CircularImageWithTexts
                                image={akseliImage}
                                header={texts.akseli.name}
                                description={texts.akseli.title}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.coloredTextBox}>
                <blockquote className={classes.blockquote} cite={texts.frontPage.memberCitation.member}>
                    {texts.frontPage.memberCitation.citation}
                </blockquote>
                <cite className={classes.cite}>{texts.frontPage.memberCitation.member}</cite>
            </section>
            <section className={classes.whiteTextBox}>
                <Typography variant="h5" align="center">
                    {texts.frontPage.contact}
                </Typography>
            </section>
        </>
    );
}

export default Frontpage;