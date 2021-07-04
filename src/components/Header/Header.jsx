import React from 'react';
import './Header.scss';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import { BsArrowLeft } from 'react-icons/bs';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

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
            <ExitToAppOutlinedIcon />
          </button>
          <span className="header-span">
            {jobSwitch ? job.job.companyName : ''}
          </span>
          <button onClick={goBack} class="header__button">
            <BsArrowLeft className="icon" />
          </button>
        </h3>
      </section>
    );
  } else {
    return (
      <section class="header">
        <div className="header-container">
          <button onClick={handleLogOut} class="header__button">
            <ExitToAppOutlinedIcon />
          </button>
          <span className="header-span">
            {jobForm ? 'Add a job' : 'Select a job'}
          </span>
          {jobForm ? (
            <button onClick={goBack} class="header__button">
              <BsArrowLeft className="icon" />
            </button>
          ) : (
            <button onClick={addJob} class="header__button">
              {' '}
              <PlaylistAddOutlinedIcon className="icon" />{' '}
            </button>
          )}
        </div>
      </section>
    );
  }
};

export default Header;
