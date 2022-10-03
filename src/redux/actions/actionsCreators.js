import axios from 'axios';
import { GET_CARD, GET_DETAIL, DELETE, CLEAN_DETAIL } from './actionType';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const getCard = ciudad => {
  return async function (dispatch) {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
      )
      .then(recurso => {
        if (recurso.data.main !== undefined) {
          const city = {
            min: Math.round(recurso.data.main.temp_min),
            max: Math.round(recurso.data.main.temp_max),
            humidity: recurso.data.main.humidity,
            img: recurso.data.weather[0].icon,
            id: recurso.data.id,
            wind: recurso.data.wind.speed,
            temp: Math.round(recurso.data.main.temp),
            name: recurso.data.name,
            weather: recurso.data.weather[0].main,
            clouds: recurso.data.clouds.all,
            latitud: recurso.data.coord.lat,
            longitud: recurso.data.coord.lon,
          };
          dispatch({ type: GET_CARD, payload: city });
        }
      })
      .catch(error => console.log(error));
  };
};

export const getDetail = payload => {
  return {
    type: GET_DETAIL,
    payload,
  };
};
export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
    payload: {},
  };
};

export const deleteCard = payload => {
  return {
    type: DELETE,
    payload,
  };
};
