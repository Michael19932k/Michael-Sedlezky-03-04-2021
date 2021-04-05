import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoritesListActions"

const initialState = {
  favoriteList: [
    {
      "Version": 1,
      "Key": "2158454",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
          "ID": "IL",
          "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
          "ID": "TA",
          "LocalizedName": "Tel Aviv"
      },
      "LocalObservationDateTime": "2021-04-03T17:11:00+03:00",
      "EpochTime": 1617459060,
      "WeatherText": "Partly sunny",
      "WeatherIcon": 3,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
          "Metric": {
              "Value": 18.7,
              "Unit": "C",
              "UnitType": 17
          },
          "Imperial": {
              "Value": 66,
              "Unit": "F",
              "UnitType": 18
          }
      },
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  },
  {
    "Version": 1,
    "Key": "2158354",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
    },
    "LocalObservationDateTime": "2021-04-03T17:11:00+03:00",
    "EpochTime": 1617459060,
    "WeatherText": "Partly sunny",
    "WeatherIcon": 3,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
        "Metric": {
            "Value": 18.7,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 66,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
},
{
  "Version": 1,
  "Key": "2158s54",
  "Type": "City",
  "Rank": 31,
  "LocalizedName": "Tel Aviv",
  "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
  },
  "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
  },
  "LocalObservationDateTime": "2021-04-03T17:11:00+03:00",
  "EpochTime": 1617459060,
  "WeatherText": "Partly sunny",
  "WeatherIcon": 3,
  "HasPrecipitation": false,
  "PrecipitationType": null,
  "IsDayTime": true,
  "Temperature": {
      "Metric": {
          "Value": 18.7,
          "Unit": "C",
          "UnitType": 17
      },
      "Imperial": {
          "Value": 66,
          "Unit": "F",
          "UnitType": 18
      }
  },
  "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
}
  ],
  error: null,
}

export default function favoriteList(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      console.log(action.payload)
      console.log(state.favoriteList)
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