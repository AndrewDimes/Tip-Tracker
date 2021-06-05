import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Job from '../../components/Job/Job';
import JobForm from '../../components/Job/JobForm';
import jobService from '../../utils/jobService';
import { useHistory } from 'react-router-dom';

export default function HomePage({ handleLogOut }) {
  const [error, setError] = useState('');
  const [jobs, setJobs] = useState(null);
  const [jobForm, setJobForm] = useState(false);
  const [mySwitch, setMySwitch] = useState(false);
  const history = useHistory();
  let jobItems;

  useEffect(() => {
    jobIndex();
  }, [jobForm]);

  useEffect(() => {
    jobIndex();
  }, [mySwitch]);

  async function jobIndex() {
    try {
      const data = await jobService.getJobs();
      setJobs(data);
      // Route to wherever you want!
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }
  async function handleSubmit(state) {
    try {
      await jobService.createJob(state);
      // Route to wherever you want!
      setJobForm(false);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  const addJob = () => {
    setJobForm(true);
    setMySwitch(true);
  };

  const goBack = () => {
    setJobForm(false);
    setMySwitch(false);
  };

  const goToJob = (id) => {
    console.log(id);
    history.push(`${id}`);
  };

  async function deleteJob(id) {
    try {
      await jobService
        .deleteJob(id)
        .then(mySwitch ? setMySwitch(false) : setMySwitch(true));
      mySwitch ? setMySwitch(false) : setMySwitch(true);
    } catch (err) {
      setError(err.message);
    }
  }

  if (jobs !== null) {
    jobItems = jobs.jobs.map((job, index) => {
      return (
        <Job
          goToJob={goToJob}
          id={job._id}
          deleteJob={deleteJob}
          key={index}
          company={job.companyName}
          title={job.jobTitle}
        />
      );
    });
  } else {
    jobItems = null;
  }

  return (
    <>
      <Header
        handleLogOut={handleLogOut}
        addJob={addJob}
        jobForm={jobForm}
        goBack={goBack}
      />
      {jobForm ? '' : jobItems}
      {jobForm ? <JobForm handleSubmit={handleSubmit} /> : ''}
    </>
  );
}
