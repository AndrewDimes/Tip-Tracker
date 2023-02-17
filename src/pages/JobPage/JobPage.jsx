import React, { useState, useEffect } from 'react';
//Components
import Header from '../../components/Header/Header';
import jobService from '../../utils/jobService';
import wageService from '../../utils/wageService';
import WageForm from '../../components/Wage/WageForm';
import WageDetail from '../../components/Wage/WageDetail';
import WageChart from '../../components/Wage/WageChart';
import WageChartMobile from '../../components/Wage/WageChartMobile';
import Calendar from 'react-calendar';

//Styles
import './JobPage.scss';
import './Calender.scss';
import { Container, Wrapper, WageChartContainer, WageChartContainerMobile } from './JobPage.styles';
import { Header3 } from '../../styles/type';
import Button from '../../components/Form/Button/Button';

const JobPage = ({ handleLogOut }) => {
  // Set state
  const [error, setError] = useState('');
  const [job, setJob] = useState({});
  const [jobSwitch, setJobSwitch] = useState(false);
  const [value, onChange] = useState(new Date());
  const [logIncome, setLogIncome] = useState(false);
  const [wageFormView, setWageFormView] = useState(false);
  const [viewIncome, setViewIncome] = useState(false);
  const [wageData, setWageData] = useState({});
  const [viewBy, setViewBy] = useState('m');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monday, setMonday] = useState('');
  const [sunday, setSunday] = useState('');
  const [weekView, setWeekView] = useState(false);
  const [monthView, setMonthView] = useState(false);
  const [yearView, setYearView] = useState(false);
  const [data, setData] = useState([]);
  const [submitMsg, setSubmitMsg] = useState(false);

  async function getJob() {
    try {
      // Fetch job data from server
      const data = await jobService.getJob(
        window.location.pathname.substring(1)
      );
      // Update state with job data
      setJob(data);
      setJobSwitch(true);   
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  async function getWages() {
    try {
      // Fetch wages data from server
      const data = await wageService.getWages(
        window.location.pathname.substring(1),
        viewBy
      );
      // Update state with wages data
      setWageData(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function getGraphData() {
    const month = [];
    month[1] = 'Jan';
    month[2] = 'Feb';
    month[3] = 'Mar';
    month[4] = 'Apr';
    month[5] = 'May';
    month[6] = 'Jun';
    month[7] = 'Jul';
    month[8] = 'Aug';
    month[9] = 'Sep';
    month[10] = 'Oct';
    month[11] = 'Nov';
    month[12] = 'Dec';
    console.log(wageData.wages.sort((a, b) => b.date - a.date))
    // Sort wages by date and format for display
    const sortedData = wageData.wages.sort((a,b) => new Date(b.date) < new Date(a.date) ? 1: -1)
    const wage = wageData.wages
      .sort((a, b) => b.date - a.date)
      .map((wage, index) => ({
        name: parseInt(wage.date.slice(5, 7)) > 9 ? month[wage.date.slice(5, 7)] + ' ' + wage.date.slice(8, 10) : month[wage.date.slice(6, 7)] + ' ' + wage.date.slice(8, 10),
        wage: wage.wage * wage.hours,
        tips: wage.tips,
        total: wage.tips + wage.wage * wage.hours,
      }));
    // Update state with formatted wage data
    setData(wage);
  }

  // Run getJob function on page load and whenever jobSwitch state changes
  useEffect(() => {
    getJob();
  }, [jobSwitch]);

  // Run the getGraphData function if there is wage data
  useEffect(() => {
    if (wageData.wages) {
      if (wageData.wages.length > 0) {
        getGraphData();
      }
    }
  }, [wageData]);
  
  // Run the getWages and getDate functions when viewBy changes
  useEffect(() => {
    getWages();
    getDate();
  }, [viewBy]);

  // Hide the success message after 4 seconds when a user submits a wage form
  if (submitMsg) {
    setTimeout(() => {
      setSubmitMsg(false);
    }, 4000);
  }

  // Submit the wage form and set state
  async function wageFormSubmit(wageInfo) {
    const info = {
      wage: wageInfo.wage,
      tips: wageInfo.tips,
      hours: wageInfo.hours,
      date: value,
    };
    try {
      await wageService.createWage(info, window.location.pathname.substring(1));
      setLogIncome(false);
      setWageFormView(false);
      setJobSwitch(true);
      setSubmitMsg(true);
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  function goBack() {
    window.history.back();
  }

  // Set the view based on the selected option(week,month,year) in income view
  function theWageView(select) {
    if (select === 'm') {
      setMonthView(true);
      setWeekView(false);
      setYearView(false);
    } else if (select === 'w') {
      setWeekView(true);
      setMonthView(false);
      setYearView(false);
    } else if (select === 'y') {
      setYearView(true);
      setWeekView(false);
      setMonthView(false);
    }
    setViewBy(select);
  }


  function getDate() {
    const date = new Date(); // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    setYear(year);
    setMonth(month);
    let curr = new Date();
    let week = [];
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first));
      week.push(day);
    }
    let mondayRaw = week[0];
    let sundayRaw = week[6];
    function getFormattedDate(date) {
      let year = date.getFullYear();

      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;

      let day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      return month + '/' + day + '/' + year;
    }
    let mondayFormatted = getFormattedDate(mondayRaw);
    let sundayFormatted = getFormattedDate(sundayRaw);
    setMonday(mondayFormatted);
    setSunday(sundayFormatted);
  }


  if (viewIncome !== true) { // If user is not viewing income
    if (wageFormView !== true) { // If user is not loggin income
      return ( // display options log income/view income
        <>
          {logIncome ? (
            <Header
              handleLogOut={handleLogOut}
              job={job}
              jobSwitch={jobSwitch}
              jobPage={true}
              goBack={() => {
                setLogIncome(false);
              }}
            />
          ) : (
            <Header
              handleLogOut={handleLogOut}
              job={job}
              jobSwitch={jobSwitch}
              jobPage={true}
              goBack={goBack}
            />
          )}
          {submitMsg ? ( // Displayed after user logs income
            <div className="submit-successful">
              Your form for has been submitted successfully!
            </div>
          ) : (
            ''
          )}
          {logIncome ? (
            ''
          ) : (
            <Wrapper justify="left">
              <Container>
                <Header3 style={{ marginBottom: '2rem' }}>
                  Just finished work?
                </Header3>
                <span
                  onClick={() => {
                    setLogIncome(true);
                  }}
                >
                  <Button label="Log Income" />
                </span>
              </Container>
              <Container>
                <Header3 style={{ marginBottom: '2rem' }}>
                  How much have you earned?
                </Header3>
                <span
                  onClick={() => {
                    setViewIncome(true);
                  }}
                >
                  <Button label="View Income" />
                </span>
              </Container>
            </Wrapper>
          )}
          {logIncome ? <Calendar onChange={onChange} value={value} /> : ''}
          <br />
          {logIncome ? (
            <span
              onClick={() => {
                setWageFormView(true);
              }}
            >
              <Button label="Enter" />
            </span>
          ) : (
            ''
          )}
        </>
      );
    } else {
      return ( // User is logging income
        <>
          <Header
            handleLogOut={handleLogOut}
            job={job}
            jobSwitch={jobSwitch}
            jobPage={true}
            goBack={() => {
              setWageFormView(false);
            }}
          />
          <WageForm
            wageFormSubmit={wageFormSubmit}
            dateValue={value.toString()}
          />
        </>
      );
    }
  } else { // User is viewing income
    return (
      <>
        <Header
          goBack={() => {
            setViewIncome(false);
          }}
          handleLogOut={handleLogOut}
          job={job}
          jobSwitch={jobSwitch}
          jobPage={true}
        />

        <div className='WageChart'>
        <WageChartContainer >
          <WageChart data={data} />
        </WageChartContainer>
        </div>
        <div className='WageChart-Mobile'>
        <WageChartContainerMobile >
          <WageChartMobile data={data} />
        </WageChartContainerMobile>
        </div>
        <br />
        <br />
        <br />
        <WageDetail
          monday={monday}
          sunday={sunday}
          year={year}
          month={month}
          wageData={wageData}
          theWageView={theWageView}
          weekView={weekView}
          monthView={monthView}
          yearView={yearView}
        />
      </>
    );
  }
};
export default JobPage;
