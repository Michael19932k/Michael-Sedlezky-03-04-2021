import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Container, Typography } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { getDefaultWeather } from '../redux/actions/homeActions';
import AddFavoriteButton from './AddFavoriteButton';



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
    textAlign: 'center',
  },
  defaultCity: {
    display: 'flex',
    flexDirection: 'column',
    height: '20vh',
    width: '60%',
    lg: 'auto',
    textAlign: 'center',
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
  }
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.weather.loading);
  const error = useSelector(state => state.weather.error);
  const defaultWeather5days = useSelector(state => state.weather?.defaultWeather[1]?.DailyForecasts);
  const defaultCurrentConditions = useSelector(state => state.weather?.defaultWeather[0]);
  const chosenCity = useSelector(state => state.weather.chosenCity);


  useEffect(() => {
    dispatch(getDefaultWeather(chosenCity));
  }, [])


  return (
    <div >
      <Container maxWidth="lg" className={classes.root}>
        <Paper className={classes.wrapper}>
          <Grid container spacing={2}>
            <Grid item md container className={classes.location}>
              <Grid item md container>
                <div className={classes.defaultCity}>
                  <div>{chosenCity.LocalizedName}</div>
                  <img alt='Error' src={process.env.PUBLIC_URL + `/weatherIcons/${defaultCurrentConditions?.WeatherIcon}.png`} draggable="false" />
                  <div>{defaultCurrentConditions?.Temperature.Metric.Value}{defaultCurrentConditions?.Temperature.Metric.Unit}
                  </div>
                  <div>{defaultCurrentConditions?.LocalObservationDateTime.slice(0, 10)}</div>
                </div>
              </Grid>
            </Grid>
            <Grid item md={6}>
            </Grid>
            <Grid item xs container className={classes.favourite}>
            <AddFavoriteButton/>
            </Grid>
            <Grid item xs={12}  >
            {loading && <Typography variant={'h3'} color={'primary'} className={classes.status}>loading</Typography>}
            {error && <Typography variant={'h3'} color={'primary'} className={classes.status}>{error}</Typography>}
              <Typography variant={'h3'} color={'primary'} className={classes.status} >{defaultCurrentConditions?.WeatherText}</Typography>
            </Grid>
            {defaultWeather5days && defaultWeather5days.map((day, i) => {
              const {  Day, Date, Temperature } = day;
              return (
                <Grid key={i} item xs sm>
                  <Paper className={classes.paper}>
                    <div>{Date.slice(0, 10)}</div>
                    <img src={process.env.PUBLIC_URL + `/weatherIcons/${Day.Icon}.png`} draggable="false" />
                    <div>{Day.IconPhrase}</div>
                    <div>{Temperature.Maximum.Value}{Temperature.Maximum.Unit} / {Temperature.Minimum.Value}{Temperature.Minimum.Unit}</div>
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


export default Home