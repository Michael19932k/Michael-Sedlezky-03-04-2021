export const GET_DEFAULT_REQUESTED = 'GET_DEFAULT_REQUESTED';
export const GET_DEFAULT_SUCCESS = 'GET_DEFAULT_SUCCESS';
export const GET_DEFAULT_FAILED = 'GET_DEFAULT_FAILED';



export function getDefaultWeather(chosenCity) {
  return {
    type: GET_DEFAULT_REQUESTED,
    payload: chosenCity,
  }
}
