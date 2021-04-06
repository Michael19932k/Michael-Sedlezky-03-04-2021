import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoritesListActions"

const initialState = {
  favoriteList: [],
  error: null,
}

export default function favoriteList(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteList: [...state.favoriteList, {...action.payload, isFavorite: true}]
      }
    case DELETE_FAVORITE:
     const newArr = state.favoriteList.filter(city => city.Key !== action.payload)
      return {
        ...state,
        favoriteList: newArr,
      }
    default:
      return state
  }
}