import React, { useState } from 'react';
import './JobForm.scss';
import JobFormSplash from '../../svg/undraw_make_it_rain_iwk4.svg';
import Btn from '../Buttons/Btn';
import AddNotes from '../../svg/undraw_Add_notes_re_ln36.svg';
import jobService from '../../utils/jobService';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const JobForm = ({ handleSubmit }) => {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    companyName: '',
    jobTitle: '',
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="job-form">
      <img src={JobFormSplash} alt="job-form-img" />
      <div className="job-form__field-container">
        <div className="job-form__field">
          <label>Company Name</label>
          <input
            placeholder="Enter Company Name"
            name="companyName"
            onChange={handleChange}
            type="text"
          ></input>
        </div>
        <div className="job-form__field">
          <label>Job Title</label>
          <input
            placeholder="Enter Job Title"
            name="jobTitle"
            onChange={handleChange}
            type="text"
          ></input>
        </div>
        <Btn onClick={() => handleSubmit(state)} label="Submit" />
      </div>
    </div>
  );
};

export default JobForm;
