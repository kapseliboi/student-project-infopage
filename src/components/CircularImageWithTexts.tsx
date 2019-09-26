import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

interface Props {
    image?: any;
    icon?: React.ReactElement;
    header: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    image: {
        borderRadius: '50%',
        width: '11rem',
        height: '11rem',
        border: '1px solid #c0392b',
        display: 'block',
        margin: 'auto',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '2rem',
        
    },
    item: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    '@global': {
        'div.bigSVG > svg': {
            width: '11rem',
            height: '11rem',
            margin: 'auto',
            display: 'block',
            background: '#e04232',
            color: '#ffffff',
            borderRadius: '50%',
        }
    }
}));

const CircularImageWithTexts: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { image, icon, header, description } = props;
    return (
        <Container className={`${classes.container} bigSVG`}>
            { image
                ? <img className={classes.image} src={image} />
                : [ icon ][0] // Oh boy, this is hacky...
            }
            <Typography align='center' variant='h5' className={classes.item}>
                {header}
            </Typography>
            <Typography align='center' variant='body1' className={classes.item}>
                {description}
            </Typography>
        </Container>
    );
}

export default CircularImageWithTexts;