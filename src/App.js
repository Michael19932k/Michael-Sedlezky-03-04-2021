import './App.css';
import Home from './components/Home'
import AutocompleteInput from './components/AutocompleteInput'
import Header from './components/Header'
import FavoritesList from './components/Favorites'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
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
    <Router>
      <div>
        <Switch>
          <Route  exact path="/">
            <>
            <Header />
            <Container className={classes.container} maxWidth="lg">
              <AutocompleteInput />
              <Home />
            </Container>
            </>
          </Route>
          <Route path="/favorites">
          <>
            <Header />
            <Container className={classes.container} maxWidth="lg">
              <FavoritesList />
            </Container>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/">
    //         <Header />
    //         <Container className={classes.container} maxWidth="lg">
    //           <AutocompleteInput />
    //           <Home />
    //         </Container>
    //       </Route>
    //       <Route path="/favorites">
    //         <Header />
    //         <Container className={classes.container} maxWidth="lg">
    //           <FavoritesList />
    //         </Container>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router >
  );
}

export default App;
