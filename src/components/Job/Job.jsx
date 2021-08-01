import React from 'react';
//Icons
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
//Styles
import { Wrapper, JobContainer, Icon, JobDetails, Delete } from './Job.styles';
import { Header3, Small } from '../../styles/type';

const Job = ({ company, title, deleteJob, id, goToJob, updated }) => {
  let month;
  if (updated.slice(5, 7) === '01') {
    month = 'January';
  } else if (updated.slice(5, 7) === '02') {
    month = 'February';
  } else if (updated.slice(5, 7) === '03') {
    month = 'March';
  } else if (updated.slice(5, 7) === '04') {
    month = 'April';
  } else if (updated.slice(5, 7) === '05') {
    month = 'May';
  } else if (updated.slice(5, 7) === '06') {
    month = 'June';
  } else if (updated.slice(5, 7) === '07') {
    month = 'July';
  } else if (updated.slice(5, 7) === '08') {
    month = 'August';
  } else if (updated.slice(5, 7) === '09') {
    month = 'September';
  } else if (updated.slice(5, 7) === '10') {
    month = 'October';
  } else if (updated.slice(5, 7) === '11') {
    month = 'November';
  } else if (updated.slice(5, 7) === '12') {
    month = 'December';
  }
  const theDate =
    month + ' ' + updated.slice(8, 10) + ', ' + updated.slice(0, 4);

  return (
    <Wrapper direction="row">
      <JobContainer onClick={() => goToJob(id)}>
        <Icon onClick={() => goToJob(id)}>
          <AddOutlinedIcon style={{ fontSize: 32 }} />
        </Icon>

        <JobDetails justify="space-around">
          <Header3 weight="900" style={{ textTransform: 'capitalize' }}>
            {company}
          </Header3>
          <Small fontSize="1.5rem" style={{ textTransform: 'capitalize' }}>
            {title}
          </Small>
          <Small
            style={{ textTransform: 'capitalize' }}
            className="job-item__details-info job-title-second"
          >
            Last updated {theDate}
          </Small>
        </JobDetails>
      </JobContainer>
      <Delete onClick={() => deleteJob(id)}>
        <DeleteForeverOutlinedIcon style={{ fontSize: 48 }} />
      </Delete>
    </Wrapper>
  );
};

export default Job;
