import './App.css';
import Home from './components/Home'
import AutocompleteInput from './components/AutocompleteInput'
import Header from './components/Header'
import FavoritesList from './components/Favorites'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
      justifyContent: "space-between"
    },
    paper: {
      display: 'flex',
      padding: theme.spacing(7),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flexDirection: 'column',
  
    },
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Container className={classes.container} maxWidth="lg">
      <AutocompleteInput />
      <Home />
      <FavoritesList />
      </Container>
    </div>
  );
}

export default App;
