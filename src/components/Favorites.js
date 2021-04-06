import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Container, Typography, Card, CardContent, ButtonGroup, Button } from '@material-ui/core/';
import TextureIcon from '@material-ui/icons/Texture';
import FavoriteIcon from '@material-ui/icons/Favorite';// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaultWeather } from '../redux/actions/homeActions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '50px auto auto auto',
        textAlign: 'center',
    },
    wrapper: {
        padding: theme.spacing(6),

    },
    status: {
        padding: '5vw',
    },
    card:
    {
        margin: 'auto 50px 50px auto',
        height: '15vh',
        display: 'flex',
        padding: '40px',
        flexDirection: 'column',
    },
    defaultCity: {
        display: 'flex',
        justify: 'center',
        flexDirection: 'column',
        height: '20vh',
        width: '20%',
        lg: 'auto',
    },
    favourite: {
        height: '5vh',
    },
    paper: {
        display: 'flex',
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flexDirection: 'column',
        height: '15vh',
        width: '20vw',
    }
}));

const FavoritesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
    const getChosenCity = (Key) => {
        let chosenCity = { Key }
        dispatch(getDefaultWeather(chosenCity))
    }

   

    return (
        <div >
            <Container maxWidth="lg" className={classes.root}>
                <Paper className={classes.wrapper}>
                    <Grid container>
                        {favoriteList && favoriteList.map((favorite, i) => {
                            const { Key, WeatherIcon, LocalizedName, Temperature, WeatherText } = favorite;
                            return (
                                <Grid className={classes.defaultCity} key={i}>
                                    <Link onClick={(e) => getChosenCity(Key)} style={{ textDecoration: 'none' }} to="/">
                                        <Paper className={classes.card}>
                                            <div>{Temperature.Metric.Value}{Temperature.Metric.Unit}</div>
                                            <div>{LocalizedName}</div>
                                            <img src={process.env.PUBLIC_URL + `/weatherIcons/${WeatherIcon}.png`} draggable="false" />
                                            <div>{WeatherText}</div>
                                        </Paper>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Paper>
            </Container>
        </div>
    );

}
export default FavoritesList