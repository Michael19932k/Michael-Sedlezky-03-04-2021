export const GET_AUTOCOMPLETE_REQUESTED = 'GET_AUTOCOMPLETE_REQUESTED';
export const GET_AUTOCOMPLETE_SUCCESS = 'GET_AUTOCOMPLETE_SUCCESS';
export const GET_AUTOCOMPLETE_FAILED = 'GET_AUTOCOMPLETE_FAILED';
export const SAVE_CHOSEN_CITY_OBJECT = 'SAVE_CHOSEN_CITY_OBJECT';


export function getAutocomplete(lettersInput) {
  return {
    type: GET_AUTOCOMPLETE_REQUESTED,
    payload: lettersInput,
  }
}
export function saveChosenCity(chosenOne) {
  return {
    type: SAVE_CHOSEN_CITY_OBJECT,
    payload: chosenOne,
  }
}
