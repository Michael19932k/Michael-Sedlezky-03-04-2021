import { combineReducers } from 'redux';
import weather from './homeReduser';
import autocomplete from './autoCompleteReduser';
import favoriteList from './favoritesListReducers';



const rootReducer = combineReducers({
    weather,
    autocomplete,
    favoriteList,
});

export default rootReducer;