import { GET_AUTOCOMPLETE_FAILED, GET_AUTOCOMPLETE_SUCCESS, GET_AUTOCOMPLETE_REQUESTED, SAVE_CHOSEN_CITY_OBJECT} from "../actions/autocompleteActions"

const initialState = {
    autoCompleteSuggestions: [],
    loading: false,
    error: null,
  }
  
  export default function autocomplete(state = initialState, action) {
    switch (action.type) {
      case GET_AUTOCOMPLETE_REQUESTED:
        return {
          ...state,
          loading: true,
          payload: action.payload,
        }
      case GET_AUTOCOMPLETE_SUCCESS:
        return {
          ...state,
          loading: false,
          autoCompleteSuggestions: action.payload
        }
      case GET_AUTOCOMPLETE_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
  }
