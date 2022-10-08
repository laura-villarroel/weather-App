import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteCard } from '../../redux/actions/actionsCreators';
import './styleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// paso 7: crear el link en la ciudad que redireccione a los detalles de la ciudad

export default function Card({
  min,
  max,
  name,
  img,
  id,
  temp,
  weather,
  humidity,
}) {
  const dispatch = useDispatch();
  const onClose = e => {
    dispatch(deleteCard(e));
    console.log(e);
  };
  return (
    <div className=" ">
      <div className=" card h-100 rounded-4 border border-primary cartadiv colorCard bg-success">
        <div className=" card-header p-1 m-1 d-grid gap-2 d-md-flex justify-content-md-end  ">
          <button
            type="button"
            class="btn btn-danger btn-sm boton"
            onClick={e => {
              onClose(id);
            }}
          >
            X
          </button>
        </div>
        <div className="card-body ">
          <div className=" text-center">
            <Link to={`/ciudad/${id}`} className="enlace ">
              <h3 className=" card-title">
                <FontAwesomeIcon icon={faLocationDot} /> {name}
              </h3>
            </Link>

            <img
              className="imgclima ms-5"
              src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
              alt=""
            />
            <h3 className="fw-bold text-light display-5">{temp}ºC</h3>
            <p className="mb-4 text-light">{weather}</p>
          </div>

          <div className="container bg-light rounded-4 border border-secondarys">
            <div className="row pt-3">
              <div className="col">
                <p className="text-start ps-4 text-primary">Low:</p>
              </div>
              <div className="col">
                <p className="text-start ps-5 text-primary">{min}ºC</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-start ps-4 text-primary">high:</p>
              </div>
              <div className="col">
                <p className="text-start ps-5 text-primary">{max}ºC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
