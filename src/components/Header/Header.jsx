import React, { useState, useEffect } from 'react';
import './Header.scss';
//Icons
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import { BsArrowLeft } from 'react-icons/bs';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
//Styles
import { Wrapper, HeaderContainer, Button } from './Header.styles';
import { Header3 } from '../../styles/type';

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
      <Wrapper direction="row" showHeader={showHeader}>
        <h3 className="header-container">
          <Button onClick={handleLogOut}>
            <ExitToAppOutlinedIcon style={{ fontSize: '3rem' }} />
          </Button>
          <Header3 style={{ textTransform: 'capitalize' }}>
            {jobSwitch ? job.job.companyName : ''}
          </Header3>
          <Button onClick={goBack}>
            <BsArrowLeft style={{ fontSize: '3rem' }} />
          </Button>
        </h3>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper direction="row" showHeader={showHeader}>
        <HeaderContainer justify="space-between" direction="row">
          <Button onClick={handleLogOut}>
            <ExitToAppOutlinedIcon style={{ fontSize: '3rem' }} />
          </Button>
          <Header3 style={{ textTransform: 'capitalize' }}>
            {jobForm ? 'Add a job' : 'Select a job'}
          </Header3>
          {jobForm ? (
            <Button onClick={goBack}>
              <BsArrowLeft style={{ fontSize: '3rem' }} />
            </Button>
          ) : (
            <Button onClick={addJob}>
              <PlaylistAddOutlinedIcon style={{ fontSize: '3rem' }} />
            </Button>
          )}
        </HeaderContainer>
      </Wrapper>
    );
  }
};

export default Header;
