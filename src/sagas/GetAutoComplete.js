import { takeEvery, put, call, all } from 'redux-saga/effects';
import { GET_AUTOCOMPLETE_FAILED, GET_AUTOCOMPLETE_SUCCESS, GET_AUTOCOMPLETE_REQUESTED } from '../redux/actions/autocompleteActions'


function getAutocomplete(lettersInput) {
    const getAutocompleteSuggestionsURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Z5Bi2GcN3AAqI4dBkzCJhpHDwB9BvSsk&q=${lettersInput}&language=en-us`;
    console.log('res')
    return fetch(getAutocompleteSuggestionsURL, {
        method: 'GET',
    }).then(response => response.json())
        .catch((error) => { throw error })
}



function* workerGetAutocomplete(action) {

    try {
        const autoCompleteAnswer = yield call(getAutocomplete,action.payload)

        yield put({ type: 'GET_AUTOCOMPLETE_SUCCESS', payload: autoCompleteAnswer });
    } catch (e) {
        yield put({ type: 'GET_AUTOCOMPLETE_FAILED', message: e.message });
    }
}

export function* watchGetAutocomplete() {
    yield takeEvery(GET_AUTOCOMPLETE_REQUESTED, workerGetAutocomplete);
}
