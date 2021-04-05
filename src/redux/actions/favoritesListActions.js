export const GET_FAVORITESLIST = 'GET_FAVORITESLIST';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';



export function getFavoritesList() {
  return {
    type: GET_FAVORITESLIST,
  }
}
export function addFavorite(cityDetails,CityWeather) {
  // console.log(cityDetails,CityWeather)
  const addedCity = {...cityDetails, ...CityWeather }
  console.log(addedCity)
  return {
    type: ADD_FAVORITE,
    payload: addedCity,
  }
}
export function deleteFavorite(cityId) {
  return {
    type: DELETE_FAVORITE,
    payload: cityId,
  }
}
