import React, { useState } from 'react';
import './WageForm.scss';
import Btn from '../Buttons/Btn';

const WageForm = ({ wageFormSubmit }) => {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    wage: null,
    tips: null,
    hours: null,
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="wage__form">
      <h1>Wage Form</h1>
      <div className="wage__form-field">
        <label>Hourly Wage</label>
        <input
          className="number-input"
          name="wage"
          onChange={handleChange}
          type="number"
        ></input>
      </div>
      <div className="wage__form-field">
        <label>Tips</label>
        <input name="tips" onChange={handleChange} type="number"></input>
      </div>
      <div className="wage__form-field">
        <label style={{ color: 'white' }}>Hours</label>
        <input name="hours" onChange={handleChange} type="number"></input>
      </div>
      <span
        onClick={() => {
          wageFormSubmit(state);
        }}
        className="wage__form-button"
      >
        <Btn label="Submit" />
      </span>
    </div>
  );
};

export default WageForm;
