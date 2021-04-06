import { takeEvery, put, call, all } from 'redux-saga/effects';
import { GET_DEFAULT_REQUESTED } from '../redux/actions/homeActions'

function get5DayForecast(chosenCity) {
    const get5DayForecastURL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${chosenCity.Key}?apikey=85u8fNhlAIrpOGA8WhtltpfRbPrvWNY8&metric=true`;
    // const get5DayForecastURL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${chosenCity.Key}?apikey=DTjSB4rlpKHH47IXfr6C98Qm1cMlKkAr&metric=true`;
    // const get5DayForecastURL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${chosenCity.Key}?apikey=qN2BxxC3zI9Wrm1UaFBLQZsh84ZuLFzg&metric=true`;
    return fetch(get5DayForecastURL, {
        method: 'GET',
    }).then(response => response.json())
        .catch((error) => { throw error })
}
function getCurrentConditions(chosenCity) {
    const getCurrentConditionsUrl = `https://dataservice.accuweather.com/currentconditions/v1/${chosenCity.Key}?apikey=85u8fNhlAIrpOGA8WhtltpfRbPrvWNY8&language=en-us&details=false`;
    // const getCurrentConditionsUrl = `https://dataservice.accuweather.com/currentconditions/v1/${chosenCity.Key}?apikey=DTjSB4rlpKHH47IXfr6C98Qm1cMlKkAr&language=en-us&details=false`;
    // const getCurrentConditionsUrl = `https://dataservice.accuweather.com/currentconditions/v1/${chosenCity.Key}?apikey=qN2BxxC3zI9Wrm1UaFBLQZsh84ZuLFzg&language=en-us&details=false`;
    return fetch(getCurrentConditionsUrl, {
        method: 'GET',
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* workerGetDefault(action) {
    try {
        const [default5DayForecast, defaultCurrentConditions] = yield all([
            call(get5DayForecast, action.payload),
            call(getCurrentConditions, action.payload)
        ])
        yield put({ type: 'GET_DEFAULT_SUCCESS', payload: [...defaultCurrentConditions, default5DayForecast] });
    } catch (e) {
        yield put({ type: 'GET_DEFAULT_FAILED', message: e.message });
    }
}

export function* watchGetDefaultWeather() {
    yield takeEvery(GET_DEFAULT_REQUESTED, workerGetDefault);
}
