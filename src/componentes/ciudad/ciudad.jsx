import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanDetail, getDetail } from '../../redux/actions/actionsCreators';
import './styleCiudad.css';
// paso5: creamos el componente ciudad que va a renderizar una ciudad con el id
export default function Ciudad() {
  const dispatch = useDispatch();
  const { ciudadId } = useParams();
  const city = useSelector(state => state.cityDetail);

  useEffect(() => {
    dispatch(getDetail(parseInt(ciudadId)));

    return () => {
      dispatch(cleanDetail());
    };
  }, [ciudadId]);

  return (
    <div className="container text-center  mt-5 rounded-2 text-light  alto">
      <h2 className=" text-start ms-4 pt-4  display-6">{city.name}</h2>
      <div className="row">
        <div className="col-12 col-lg-6  ">
          <div className="row bordecard m-2">
            <div className="col-12 col-lg-6 contimg">
              <img
                className="imgeciudad "
                src={'http://openweathermap.org/img/wn/' + city.img + '@2x.png'}
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 ">
              <p className="display-2 fw-bold">{city.temp - 273}ºC</p>
              <p>{city.weather}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col text-start ps-5">
              <h4> {city.max - 273}ºC</h4>
              <p>High</p>
              <h4> {city.min - 273}ºC</h4>
              <p>Low</p>
            </div>

            <div className="col  text-start">
              <h4> {city.humidity}%</h4>
              <p>humidity</p>
              <h4> {city.wind} km/h</h4>
              <p>wind</p>
            </div>
            <div className="col  text-start">
              <div className="row">
                <div className="col  text-start">
                  <h4>{city.latitud}º</h4>
                  <p>latitude</p>
                </div>

                <div className="col  text-start">
                  <h4> {city.longitud}º</h4>
                  <p>longitude</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
