import React, {useState} from 'react'

const WageForm = ({wageFormSubmit}) => {
    const [error, setError] = useState('')
    const [state, setState] = useState({
        wage: null,
        tips: null,
        hours: null
    })
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div style={{ marginLeft: '20%', marginRight: '20%' }} className="ui form">
            <div className="field">
                <label>Hourly Wage</label>
                <input name="wage" onChange={handleChange} type="number"></input>
            </div>
            <div className="field">
                <label>Tips</label>
                <input name="tips" onChange={handleChange} type="number"></input>
            </div>
            <div className="field">
                <label>Hours</label>
                <input name="hours" onChange={handleChange} type="number"></input>
            </div>
            <div onClick={() => {wageFormSubmit(state)}} className="ui submit button">Submit</div>
        </div>
    )
}


export default WageForm
