import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Job from '../../components/Job/Job';
import JobForm from '../../components/Job/JobForm';
import jobService from '../../utils/jobService'
import { useHistory} from 'react-router-dom';


export default function HomePage() {
  const [error, setError ] = useState('')
  const [job, setJob] = useState(null)
  const [jobForm, setJobForm] = useState(false)
  const history = useHistory();

  async function handleSubmit(state){     
    try {
        await jobService.createJob(state);
        // Route to wherever you want!
        setJobForm(false)
        
      } catch (err) {
        // Invalid user data (probably duplicate email)
        setError(err.message)
      }
  }

  const addJob = () => {
    console.log('here')
    setJobForm(true)
  }

  return (
    <>
    {jobForm ? '' : <Header addJob={addJob} /> }
    {job ? <Job /> : ''}
    {jobForm ? <JobForm handleSubmit={handleSubmit} /> : ''}
    </>
  );
}

