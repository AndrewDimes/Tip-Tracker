import React from 'react'

const Job = ({company, title, deleteJob, id, goToJob}) => {
    return (
        <div class="ui celled list">
        <div class="item">
          <div class="right floated content">
          <span class="ui button" onClick={() => deleteJob(id)}><i class="trash icon"></i></span>
            <div class="ui button" onClick={() => goToJob(id)}>Select</div>
          </div>
          <div class="content">
            <div class="header">{company}</div>
            {title}
          </div>
        </div>
      </div>
    )
}

export default Job
