import { GET_DEFAULT_FAILED, GET_DEFAULT_SUCCESS, GET_DEFAULT_REQUESTED } from "../actions/homeActions"
import { SAVE_CHOSEN_CITY_OBJECT } from "../actions/autocompleteActions"

const initialState = {
  defaultWeather: [
    {
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
      "Headline": {
        "EffectiveDate": "2021-04-04T08:00:00+03:00",
        "EffectiveEpochDate": 1617512400,
        "Severity": 4,
        "Text": "Pleasant Sunday",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-04-03T07:00:00+03:00",
          "EpochDate": 1617422400,
          "Temperature": {
            "Minimum": {
              "Value": 10,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 19.5,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-04T07:00:00+03:00",
          "EpochDate": 1617508800,
          "Temperature": {
            "Minimum": {
              "Value": 12.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 21.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-05T07:00:00+03:00",
          "EpochDate": 1617595200,
          "Temperature": {
            "Minimum": {
              "Value": 15.6,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 26.1,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-06T07:00:00+03:00",
          "EpochDate": 1617681600,
          "Temperature": {
            "Minimum": {
              "Value": 16,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 29.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-04-07T07:00:00+03:00",
          "EpochDate": 1617768000,
          "Temperature": {
            "Minimum": {
              "Value": 15.7,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 27.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
      ]
    }
  ],
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
      console.log(action.payload)
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