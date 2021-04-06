import { GET_DEFAULT_FAILED, GET_DEFAULT_SUCCESS, GET_DEFAULT_REQUESTED } from "../actions/homeActions"
import { SAVE_CHOSEN_CITY_OBJECT } from "../actions/autocompleteActions"

const initialState = {
  defaultWeather: [],
  loading: false,
  error: null,
  chosenCity: {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel"
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv"
    }
  },
}

export default function weather(state = initialState, action) {
  switch (action.type) {
    case GET_DEFAULT_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case GET_DEFAULT_SUCCESS:
      return {
        ...state,
        loading: false,
        defaultWeather: action.payload
      }
    case GET_DEFAULT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
      case SAVE_CHOSEN_CITY_OBJECT:
        return {
          ...state,
          chosenCity: action.payload,
        }
    default:
      return state
  }
}