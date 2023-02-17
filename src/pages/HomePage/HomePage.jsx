import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Job from '../../components/Job/Job';
import JobForm from '../../components/Job/JobForm';
import jobService from '../../utils/jobService';
import { useHistory } from 'react-router-dom';
import './HomePage.scss';

// Displays a list of jobs and allows the user to add and remove jobs.
export default function HomePage({ handleLogOut }) {
    // Set state
  const [error, setError] = useState('');
  const [jobs, setJobs] = useState(null);
  const [jobForm, setJobForm] = useState(false);
  const [mySwitch, setMySwitch] = useState(false);
  const history = useHistory();
  let jobItems;

    // Load the jobs from the server when job form changes.
  useEffect(() => {
    jobIndex();
  }, [jobForm]);

  // Reload the jobs from the server when switch state changes.
  useEffect(() => {
    jobIndex();
  }, [mySwitch]);

    // Get the jobs from the server and store them in the state.
  async function jobIndex() {
    try {
      const data = await jobService.getJobs();
      setJobs(data);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  // Create a new job using the provided state and set the job form state to false.
  async function handleSubmit(state) {
    try {
      await jobService.createJob(state);
      setJobForm(false);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  // Show the job form and set the switch state to true.
  const addJob = () => {
    setJobForm(true);
    setMySwitch(true);
  };

  // Hide the job form and set the switch state to false.
  const goBack = () => {
    setJobForm(false);
    setMySwitch(false);
  };

  // Navigate to the job page with the specified ID.
  const goToJob = (id) => {
    history.push(`${id}`);
  };

  // Delete the job with the specified ID and update the switch state.
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

    // Create a list of job items for rendering, if there are any.
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
          updated={job.updatedAt}
        />
      );
    });
  } else {
    jobItems = null;
  }
  return (
    <>
      <div className="home-body">
        <Header
          handleLogOut={handleLogOut}
          addJob={addJob}
          jobForm={jobForm}
          goBack={goBack}
        />
        <div className="home-job__item-container">
          {jobForm ? '' : jobItems}
          {jobForm ? <JobForm handleSubmit={handleSubmit} /> : ''}
        </div>
      </div>
    </>
  );
}
