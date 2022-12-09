import React, { useState } from 'react';
import './WageForm.scss';
import Btn from '../Buttons/Btn';

const WageForm = ({ wageFormSubmit, dateValue }) => {
  const [state, setState] = useState({
    wage: null,
    tips: null,
    hours: null,
  });
  let month;
  if(dateValue.slice(4, 7) === 'Jan'){
    month="January"
  }else if(dateValue.slice(4, 7) === 'Feb'){
    month="February"
  }else if(dateValue.slice(4, 7) === 'Mar'){
    month="March"
  }else if(dateValue.slice(4, 7) === 'Apr'){
    month="April"
  }else if(dateValue.slice(4, 7) === 'Jun'){
    month="June"
  }else if(dateValue.slice(4, 7) === 'Jul'){
    month="July"
  }else if(dateValue.slice(4, 7) === 'Aug'){
    month="August"
  }else if(dateValue.slice(4, 7) === 'Sep'){
    month="September"
  }else if(dateValue.slice(4, 7) === 'Oct'){
    month="October"
  }else if(dateValue.slice(4, 7) === 'Nov'){
    month="November"
  }else if(dateValue.slice(4, 7) === 'Dec'){
    month="December"
  }

  const theDate = month + ' ' + dateValue.slice(8, 10) + ', '+ dateValue.slice(11, 15)
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }



  return (
    <div className="wage__form">
      <h1 className='wage__date'>{theDate}</h1>
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
