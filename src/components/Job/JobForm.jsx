import React, {useState} from 'react'
import jobService from '../../utils/jobService'
import { useHistory} from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const JobForm = ({handleSubmit}) => {
  const [error, setError ] = useState('')
    const [state, setState] = useState({
        companyName: '',
        jobTitle: '',
    })
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }

    return (
<div style={{marginLeft:'20%', marginRight:'20%'}} className="ui form">
    <h1>Add Job</h1>
  <div className="field">
    <label>Company Name</label>
    <input name="companyName" onChange={handleChange} type="text"></input>
  </div>
  <div className="field">
    <label>Job Title</label>
    <input name="jobTitle" onChange={handleChange} type="text"></input>
  </div>
  <div onClick={() => handleSubmit(state)} className="ui submit button">Submit</div>
</div>
    )
}

export default JobForm
