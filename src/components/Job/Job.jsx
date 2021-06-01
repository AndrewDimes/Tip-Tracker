import React from 'react'

const Job = ({company, title, deleteJob, id}) => {
    return (
        <div class="ui celled list">
        <div class="item">
          <div class="right floated content">
          <span onClick={() => deleteJob(id)}><i class="trash icon"></i></span>
            <div class="ui button">Select</div>
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
