import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // paso 4 importar link
import { getCard } from '../../redux/actions/actionsCreators';

// paso 5 colocar el link que al acer click en navbar nos direccione a home
function Nav() {
  const [msg, setMsg] = useState('');
  const [name, setName] = useState();

  const dispatch = useDispatch();

  const handleImputChange = e => {
    e.preventDefault();
    setName(e.target.value);
    setMsg('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getCard(name));
    setName('');
    setMsg('');
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand text-light fw-bold">Weather App</span>
        </Link>
        <Link to="/about">
          <span className="text-light">About </span>
        </Link>
        <form className="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={name}
            onChange={e => {
              handleImputChange(e);
            }}
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
          {msg.length > 0 && (
            <div className="mensaje">
              <p>{msg}</p>
            </div>
          )}
        </form>
      </div>
    </nav>
  );
}
export default Nav;
