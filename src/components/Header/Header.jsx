import React from 'react'

const Header = ({ addJob, jobForm, goBack, jobPage, job, jobSwitch, handleLogOut }) => {
  if (jobPage) {
    return (
      <div class="ui segment">
        <h3 class="ui center aligned header">
          <span onClick={handleLogOut} class="ui button" style={{ marginRight: '0%' }}> Log Out </span>
          <span style={{ marginLeft: '10%' }}>{jobSwitch ? job.job.companyName : ''}</span>
          <span onClick={goBack} class="ui button" style={{ marginLeft: '10%' }}> Back  </span>
        </h3>
      </div>
    )
  } else {
    return (
      <div class="ui segment">
        <h3 class="ui center aligned header">
          <span onClick={handleLogOut} class="ui button" style={{ marginRight: '0%' }}> Log Out </span>
          <span style={{ marginLeft: '10%' }}>{jobForm ? 'Add a job' : 'Select a job'}</span>
          {jobForm ? <span onClick={goBack} class="ui button" style={{ marginLeft: '10%' }}> Back  </span> : <span onClick={addJob} class="ui button" style={{ marginLeft: '10%' }}> Add </span>}
        </h3>
      </div>
    )
  }
}

export default Header
