import React from 'react';
import './Job.scss';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Job = ({ company, title, deleteJob, id, goToJob, updated }) => {
  console.log(updated.slice(0,4))
  let month;
  if(updated.slice(5, 7) === '01'){
    month="January"
  }else if(updated.slice(5, 7) === '02'){
    month="February"
  }else if(updated.slice(5, 7) === '03'){
    month="March"
  }else if(updated.slice(5, 7) === '04'){
    month="April"
  }else if(updated.slice(5,7) === '05'){
    month="May"
  }else if(updated.slice(5, 7) === '06'){
    month="June"
  }else if(updated.slice(5, 7) === '07'){
    month="July"
  }else if(updated.slice(5, 7) === '08'){
    month="August"
  }else if(updated.slice(5, 7) === '09'){
    month="September"
  }else if(updated.slice(5, 7) === '10'){
    month="October"
  }else if(updated.slice(5, 7) === '11'){
    month="November"
  }else if(updated.slice(5, 7) === '12'){
    month="December"
  }
  const theDate = month + ' ' + updated.slice(8, 10) + ', '+ updated.slice(0, 4)
  
  return (
    <div className="job">
      <div className="job-item" onClick={() => goToJob(id)}>
        <div className="job-item__icon-icon" onClick={() => goToJob(id)}>
          <AddOutlinedIcon style={{ fontSize: 32 }} />
        </div>

        <div className="job-item__details">
          <div className="job-item__details-info company">{company}</div>
          <div className="job-item__details-info job-title">{title}</div>
          <div className="job-item__details-info job-title-second">Last updated {theDate} </div>
        </div>
      </div>
      <div className="job-item__delete" onClick={() => deleteJob(id)}>
        <DeleteForeverOutlinedIcon style={{ fontSize: 48 }} />
      </div>
    </div>
  );
};

export default Job;
