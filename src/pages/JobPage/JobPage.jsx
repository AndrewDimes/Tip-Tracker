import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import jobService from '../../utils/jobService';
import wageService from '../../utils/wageService';
import WageForm from '../../components/Wage/WageForm';
import WageDetail from '../../components/Wage/WageDetail';
import WageChart from '../../components/Wage/WageChart';
import Calendar from 'react-calendar';
import Btn from '../../components/Buttons/Btn';
import './JobPage.scss';
import './Calender.scss';

const JobPage = ({ handleLogOut }) => {
  const [error, setError] = useState('')
  const [job, setJob] = useState({})
  const [jobSwitch, setJobSwitch] = useState(false)
  const [value, onChange] = useState(new Date());
  const [logIncome, setLogIncome] = useState(false)
  const [wageFormView, setWageFormView] = useState(false)
  const [viewIncome, setViewIncome] = useState(false)
  const [wageData, setWageData] = useState({})
  const [viewBy, setViewBy] = useState('m')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [monday, setMonday] = useState('')
  const [sunday, setSunday] = useState('')
  const [weekView, setWeekView] = useState(false)
  const [monthView, setMonthView] = useState(false)
  const [yearView, setYearView] = useState(false)
  const [data, setData] = useState([])


  async function getJob() {
    try {
      const data = await jobService.getJob(
        window.location.pathname.substring(1)
      );
      setJob(data);
      setJobSwitch(true);
      // Route to wherever you want!
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  async function getWages() {
    try {
      const data = await wageService.getWages(window.location.pathname.substring(1), viewBy)
      setWageData(data)
    } catch (err) {
      setError(err.message)
    }
  }

  async function getGraphData(){
    const wage = wageData.wages.map((wage, index) =>
    ({
      name: wage.date.toLocaleString('default', { month: 'long' }),
      wage: wage.wage * wage.hours,
      tips: wage.tips,
      total: wage.tips + wage.wage * wage.hours
    })
    )
    setData(wage)
  }
  useEffect(() => {
    getJob()
  }, [jobSwitch])
  useEffect(() => {
    getGraphData()
  }, [wageData])
  useEffect(() => {
    getWages()
    getDate()
  }, [viewBy])



  async function wageFormSubmit(wageInfo) {
    const info = {
      wage: wageInfo.wage,
      tips: wageInfo.tips,
      hours: wageInfo.hours,
      date: value
    }
    try {
      await wageService.createWage(info, window.location.pathname.substring(1))
      // Route to wherever you want!
      setLogIncome(false)
      setWageFormView(false)
      setJobSwitch(true)

    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message)
    }


  }

  function goBack() {
    window.history.back()
  }

  function theWageView(select) {
    if (select === 'm') {
      setMonthView(true)
      setWeekView(false)
      setYearView(false)
    } else if (select === 'w') {
      setWeekView(true)
      setMonthView(false)
      setYearView(false)
    } else if (select === 'y') {
      setYearView(true)
      setWeekView(false)
      setMonthView(false)
    }
    setViewBy(select)
  }

  function getDate() {
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    setYear(year)
    setMonth(month)
    function setToMonday(date) {
      let day = date.getDay() || 7;
      if (day !== 1) {
        date.setHours(-24 * (day - 1));
      }

      return date;
    }
    function setToSunday(date) {
      let day = date.getDay() || 7;
      if (day !== 7) {
        date.setHours(24 * (day - 1))
      }
      return date;
    }
    let mondayRaw = setToMonday(new Date())
    let sundayRaw = setToSunday(new Date())
    function getFormattedDate(date) {
      let year = date.getFullYear();

      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;

      let day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;

      return month + '/' + day + '/' + year;
    }
    let mondayFormatted = getFormattedDate(mondayRaw)
    let sundayFormatted = getFormattedDate(sundayRaw)
    setMonday(mondayFormatted)
    setSunday(sundayFormatted)

  }



  if (viewIncome !== true) {
    if (wageFormView !== true) {
      return (
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
          {logIncome ? '' : <div className="job-page__item-container">
            <div className="job-page__item">
              <h1 className="job-page__header">Just finished work?</h1>
              <span onClick={() => { setLogIncome(true) }}><Btn label="Log Income" /></span>
            </div>
            <div className="job-page__item">
              <h1 className="job-page__header">How much have you earned?</h1>
              <span onClick={() => { setViewIncome(true) }}><Btn label="View Income" /></span>
            </div>
          </div>}
          {logIncome ? <Calendar onChange={onChange} value={value} /> : ''}
          {logIncome ? <span onClick={() => { setWageFormView(true) }}><Btn label="Enter" /> </span> : ''}
        </>
      );
    } else {
      return (
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
          <WageForm wageFormSubmit={wageFormSubmit} />
        </>
      );
    }
  } else {

    return (
      <>
        <Header goBack={() => { setViewIncome(false) }} handleLogOut={handleLogOut} job={job} jobSwitch={jobSwitch} jobPage={true} />
        <WageChart data={data} />
        <WageDetail monday={monday} sunday={sunday} year={year} month={month} wageData={wageData} theWageView={theWageView} weekView={weekView} monthView={monthView} yearView={yearView} />
      </>
    )
  }
}
export default JobPage;