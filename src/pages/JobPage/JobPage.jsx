import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import jobService from '../../utils/jobService'
import wageService from '../../utils/wageService'
import WageForm from '../../components/Wage/WageForm';
import WageDetail from '../../components/Wage/WageDetail';
import Calendar from 'react-calendar'

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



    async function getJob() {
        try {
            const data = await jobService.getJob(window.location.pathname.substring(1));
            setJob(data)
            setJobSwitch(true)
            // Route to wherever you want!
        } catch (err) {
            // Invalid user data (probably duplicate email)
            setError(err.message)
        }
    }

    async function getWages() {
        try {
            const data = await wageService.getWages(window.location.pathname.substring(1), viewBy)
            console.log(data)
            setWageData(data)
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        getJob()
    }, [jobSwitch])
    useEffect(() => {
        getDate()
        getWages()
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
        if(select === 'm'){
            setMonthView(true)
            setWeekView(false)
            setYearView(false)
        } else if(select === 'w'){
            setWeekView(true)
            setMonthView(false)
            setYearView(false)
        } else if(select === 'y'){
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
        function setToMonday( date ) {
            let day = date.getDay() || 7;  
            if(day !== 1){
                date.setHours(-24 * (day - 1));
            }
                 
            return date;
        }
        function setToSunday( date ){
            let day = date.getDay() || 7;
            if(day !== 7){
                date.setHours(24 * (day + 1))
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
                    {logIncome ? <Header handleLogOut={handleLogOut} job={job} jobSwitch={jobSwitch} jobPage={true} goBack={() => { setLogIncome(false) }} /> : <Header handleLogOut={handleLogOut} job={job} jobSwitch={jobSwitch} jobPage={true} goBack={goBack} />}
                    <br />
                    {logIncome ? '' :
                        <h1 style={{ color: 'white' }}>Just finished work?</h1>}
                    {logIncome ? '' : <button onClick={() => { setLogIncome(true) }} class="ui primary button">
                        Log Income
                </button>} <br /><br />
                    {logIncome ? <h1 style={{ color: 'white' }}>Choose a date</h1> : ''}
                    {logIncome ? <Calendar
                        onChange={onChange}
                        value={value}
                    /> : ''}<br />
                    {logIncome ? <button onClick={() => { setWageFormView(true) }} class="ui button">
                        Enter
                </button> : ''}
                    {logIncome ? '' : <h1 style={{ color: 'white' }}>How much have you earned?</h1>}
                    {logIncome ? '' : <button onClick={() => { setViewIncome(true) }} class="ui primary button">
                        View Income
                </button>}
                </>
            )
        } else {
            return (
                <>
                    <Header handleLogOut={handleLogOut} job={job} jobSwitch={jobSwitch} jobPage={true} goBack={() => { setWageFormView(false) }} />
                    <WageForm wageFormSubmit={wageFormSubmit} />
                </>
            )
        }
    } else {
        return (
            <>
                <Header goBack={() => { setViewIncome(false) }} handleLogOut={handleLogOut} job={job} jobSwitch={jobSwitch} jobPage={true} />
                <WageDetail monday={monday} sunday={sunday} year={year} month={month} wageData={wageData} theWageView={theWageView} weekView={weekView} monthView={monthView} yearView={yearView} />
            </>
        )

    }

}

export default JobPage
