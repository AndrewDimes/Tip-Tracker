import React, {useState} from 'react'

const WageDetail = ({wageData, theWageView, month, weekView, monthView, yearView}) => {
    return (
        <div>
            <div class="three ui buttons">
                <button onClick={() => theWageView('w')} class="ui button">Weekly</button>
                <button onClick={() => theWageView('m')} class="ui button">Monthly</button>
                <button onClick={() => theWageView('y')} class="ui button">Yearly</button>
            </div><br />
            {monthView ? <h1 style={{color:'white'}}>{month}</h1> : ''}
            {weekView ? <h1 style={{color:'white'}}>00/00/0000 - 00/00/0000</h1> : ''}
            {yearView ? <h1 style={{color:'white'}}>0000</h1> : ''}
            <blockquote style={{ color: 'white', backgroundColor: 'gray' }}>Income information</blockquote>
            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> {wageData.totalIncome} </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} >Total Income </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> {wageData.totalWages} </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> From Wage </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> {wageData.totalTips} </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} > From Tips </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> {wageData.totalHours} </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} >Hours Worked </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> Average Income </div>
                </div>
            </div>
            <blockquote style={{ color: 'white', backgroundColor: 'gray' }}>Average income by day</blockquote>
            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} >Mondays </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> Tuesdays </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} > Wednesdays </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} >Thursdays</div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> Fridays </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> Saturdays </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> Sundays </div>
                </div>
            </div>
        </div>
    )
}

export default WageDetail
