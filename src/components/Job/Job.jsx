import React from 'react';
import './Job.scss';
import { BiSelectMultiple } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

const Job = ({ company, title, deleteJob, id, goToJob }) => {
  return (
    <div className="job">
      <div className="job-item">
        <div className="job-item__icon">
          <div className="job-item__icon-icon" onClick={() => deleteJob(id)}>
            <BsTrash />
          </div>
          <div className="job-item__icon-icon" onClick={() => goToJob(id)}>
            <BiSelectMultiple />
          </div>
        </div>
        <div className="job-item__details">
          <div className="job-item__details-info">{company}</div>
          <div className="job-item__details-info">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Job;
