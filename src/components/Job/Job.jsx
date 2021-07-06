import React from 'react';
import './Job.scss';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Job = ({ company, title, deleteJob, id, goToJob }) => {
  return (
    <div className="job">
      <div className="job-item" onClick={() => goToJob(id)}>
        <div className="job-item__icon">
          <div className="job-item__icon-icon" onClick={() => goToJob(id)}>
            <AddOutlinedIcon style={{ fontSize: 32 }} />
          </div>
        </div>
        <div className="job-item__details">
          <div className="job-item__details-info company">{company}</div>
          <div className="job-item__details-info job-title">{title}</div>
        </div>
      </div>
      <div className="job-item__delete" onClick={() => deleteJob(id)}>
        <DeleteForeverOutlinedIcon style={{ fontSize: 48 }} />
      </div>
    </div>
  );
};

export default Job;
