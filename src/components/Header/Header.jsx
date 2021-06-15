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
      <section class="header">
        <h3 className="header-container">
          <button onClick={handleLogOut} class="header__button">
            Log Out
          </button>
          <span className="header-span">

            {jobSwitch ? job.job.companyName : ''}
          </span>
          <button onClick={goBack} class="header__button">
            <BsBackspace className="icon" />
          </button>
        </h3>
      </section>
    );
  } else {
    return (
      <section class="header">
        <div className="header-container">
          <button onClick={handleLogOut} class="header__button">
            <BiLogOut className="icon" />
          </button>
          <span className="header-span">
            {jobForm ? 'Add a job' : 'Select a job'}
          </span>
          {jobForm ? (
            <button onClick={goBack} class="header__button">
              <BsBackspace className="icon" />
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
