import React from 'react'

const WageDetail = () => {
    return (
        <div>
            <div class="three ui buttons">
                <button class="ui button">Weekly</button>
                <button class="ui button">Monthly</button>
                <button class="ui button">Yearly</button>
            </div><br /><br />
            <blockquote style={{ color: 'white', backgroundColor: 'gray' }}>Income information</blockquote>
            <div class="ui middle aligned divided list">
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} >Total Income </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}}> From Wage </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
                    </div>
                    <div class="left floated content" style={{color:'white'}} > From Tips </div>
                </div>
                <div class="item">
                    <div class="right floated content">
                    <div style={{color:'white'}}> 0.00 </div>
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
