import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Job from '../../components/Job/Job';
import JobForm from '../../components/Job/JobForm';

export default function HomePage() {

  const [job, setJob] = useState(null)
  const [jobForm, setJobForm] = useState(false)

  const addJob = () => {
    console.log('here')
    setJobForm(true)
  }

  return (
    <>
    {jobForm ? '' : <Header addJob={addJob} /> }
    {job ? <Job /> : ''}
    {jobForm ? <JobForm/> : ''}
    </>
  );
}

