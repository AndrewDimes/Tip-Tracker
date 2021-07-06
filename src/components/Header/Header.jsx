import React, { useState, useEffect } from 'react';
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
  const [showHeader, setShowHeader] = useState(false);

  // show header background on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });
  });

  if (jobPage) {
    return (
      <section className={showHeader ? 'header header-scroll' : 'header'}>
        <h3 className="header-container">
          <button onClick={handleLogOut} class="header__button">
            <ExitToAppOutlinedIcon style={{ fontSize: 32 }} />
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
      <section className={showHeader ? 'header header-scroll' : 'header'}>
        <div className="header-container">
          <button onClick={handleLogOut} class="header__button">
            <ExitToAppOutlinedIcon style={{ fontSize: 32 }} />
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
