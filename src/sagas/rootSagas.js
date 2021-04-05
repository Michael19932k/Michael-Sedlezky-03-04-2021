import { all } from 'redux-saga/effects';
import {watchGetDefaultWeather} from '../sagas/GetDefaultWeather'
import {watchGetAutocomplete} from '../sagas/GetAutoComplete'



export default function* rootSaga() {
    yield all([
        watchGetDefaultWeather(),
        watchGetAutocomplete(),
    ])
   
  }