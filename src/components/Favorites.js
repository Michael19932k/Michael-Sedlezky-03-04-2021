import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Container, Typography, Card, CardContent, ButtonGroup, Button } from '@material-ui/core/';
import TextureIcon from '@material-ui/icons/Texture';
import FavoriteIcon from '@material-ui/icons/Favorite';// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaultWeather } from '../redux/actions/homeActions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '50px auto auto auto',
    },
    wrapper: {
        padding: theme.spacing(6),

    },
    status: {
        padding: '5vw',
    },
    card: {
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
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const defaultWeather5days = useSelector(state => state.weather?.defaultWeather[1]?.DailyForecasts);
    const defaultCurrentConditions = useSelector(state => state.weather?.defaultWeather[0]);
    const chosenCity = useSelector(state => state.weather.chosenCity);

    const favoriteList = useSelector((state) => state.favoriteList.favoriteList);
    // const [usersSorted, setUsersSorted] = useState([users]);
    console.log(favoriteList)

    return (
        <div >
            <Container maxWidth="lg" className={classes.root}>
                <Paper className={classes.wrapper}>
                    <Grid container>
                        {favoriteList && favoriteList.map((favorite, i) => {
                            const { IconPhrase, WeatherIcon, LocalizedName, Temperature } = favorite;
                            return (
                                <Grid className={classes.defaultCity} key={i}>
                                    <Paper className={classes.card}>
                                        <div>{favorite?.Temperature.Metric.Value}{favorite?.Temperature.Metric.Unit}</div>
                                        <div>{favorite.LocalizedName}</div>
                                        <img src={process.env.PUBLIC_URL + `/weatherIcons/${favorite?.WeatherIcon}.png`} draggable="false" />
                                        <div>{favorite.WeatherText}</div>
                                    </Paper>
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