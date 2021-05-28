import React from 'react'

const JobForm = () => {

    const [state, setState]       = useState({
        companyName: '',
        jobTitle: '',
    })

    return (
<div style={{marginLeft:'20%', marginRight:'20%'}} class="ui form">
    <h1>Add Job</h1>
  <div class="field">
    <label>Company Name</label>
    <input type="text"></input>
  </div>
  <div class="field">
    <label>Job Title</label>
    <input type="text"></input>
  </div>
  <div class="ui submit button">Submit</div>
</div>
    )
}

export default JobForm
