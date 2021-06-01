import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';
import jobService from '../../utils/jobService'
import wageService from '../../utils/wageService'
import WageForm from '../../components/Wage/WageForm';
import Calendar from 'react-calendar'

const JobPage = () => {
    const [error, setError] = useState('')
    const [job, setJob] = useState({})
    const [jobSwitch, setJobSwitch] = useState(false)
    const [value, onChange] = useState(new Date());
    const [logIncome, setLogIncome] = useState(false)
    const [wageFormView, setWageFormView] = useState(false)



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

    useEffect(() => {
        getJob()
    }, [jobSwitch])




    function goBack() {
        window.history.back()
    }

    if(wageFormView !== true){
        return (
            <>
                {logIncome ? <Header job={job} jobSwitch={jobSwitch} jobPage={true} goBack={() => {setLogIncome(false)}} /> : <Header job={job} jobSwitch={jobSwitch} jobPage={true} goBack={goBack} />}
                <br />
                {logIncome ? '' :
                    <h1>Just finished work?</h1>}
                {logIncome ? '' : <button onClick={() => {setLogIncome(true)}} class="ui primary button">
                    Log Income
                </button>} <br /><br />
                {logIncome ? <Calendar
                    onChange={onChange}
                    value={value}
                /> : ''}<br />
                {logIncome ? <button onClick={() => {setWageFormView(true)}} class="ui button">
                    Enter
                </button> : ''}
                {logIncome ? '' : <h1>How much have you earned?</h1>}
                {logIncome ? '' : <button class="ui primary button">
                    View Income
                </button>}
            </>
        )
    } else {
        return (
            <>
            <Header job={job} jobSwitch={jobSwitch} jobPage={true} goBack={() => {setWageFormView(false)}} />
            <WageForm />
            </>
        )
    }
}

export default JobPage
