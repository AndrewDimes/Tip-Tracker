import React from 'react';
import './Header.scss';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { BsBackspace } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

const Header = ({
  addJob,
  jobForm,
  goBack,
  jobPage,
  job,
  jobSwitch,
  handleLogOut,
}) => {
  if (jobPage) {
    return (
      <div class="ui segment">
        <h3 class="ui center aligned header">
          <span
            onClick={handleLogOut}
            class="ui button"
            style={{ marginRight: '0%' }}
          >
            {' '}
            Log Out{' '}
          </span>
          <span style={{ marginLeft: '10%' }}>
            {jobSwitch ? job.job.companyName : ''}
          </span>
          <span
            onClick={goBack}
            class="ui button"
            style={{ marginLeft: '10%' }}
          >
            {' '}
            Back{' '}
          </span>
        </h3>
      </div>
    );
  } else {
    return (
      <section class="header">
        <div className="header-container">
          <button onClick={handleLogOut} class="header__button">
            <BiLogOut className="icon" />
          </button>
          <span>{jobForm ? 'Add a job' : 'Select a job'}</span>
          {jobForm ? (
            <button onClick={goBack} class="header__button">
              {' '}
              <BsBackspace className="icon" />{' '}
            </button>
          ) : (
            <button onClick={addJob} class="header__button">
              {' '}
              <HiOutlineViewGridAdd className="icon" />{' '}
            </button>
          )}
        </div>
      </section>
    );
  }
};

export default Header;
