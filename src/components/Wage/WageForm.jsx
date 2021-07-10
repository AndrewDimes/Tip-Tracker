import React, { useState } from 'react';
import './WageForm.scss';
import Btn from '../Buttons/Btn';

const WageForm = ({ wageFormSubmit, dateValue }) => {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    wage: null,
    tips: null,
    hours: null,
  });
  // const month = new Array();
  // month[1] = 'January';
  // month[2] = 'February';
  // month[3] = 'March';
  // month[4] = 'April';
  // month[5] = 'May';
  // month[6] = 'June';
  // month[7] = 'July';
  // month[8] = 'August';
  // month[9] = 'September';
  // month[10] = 'October';
  // month[11] = 'November';
  // month[12] = 'December';
  console.log(dateValue, dateValue.slice(6, 7))
  const theDate = dateValue.slice(4, 7) + ' ' + dateValue.slice(8, 10) + ', '+ dateValue.slice(11, 15)
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }



  return (
    <div className="wage__form">
      <h1>{theDate}</h1>
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
