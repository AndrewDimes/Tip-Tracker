import React, { useState } from 'react';
import './WageDetails.scss';

const WageDetail = ({
  wageData,
  theWageView,
  month,
  weekView,
  monthView,
  yearView,
  year,
  monday,
  sunday,
}) => {
  if (monthView === false && weekView === false && yearView === false) {
    monthView = true;
  }
  return (
    <div className="wage-details" style={{ width: '40%' }}>
      <div className="wage-details__header-buttons">
        <button onClick={() => theWageView('w')} className="ui button">
          Weekly
        </button>
        <button onClick={() => theWageView('m')} className="ui button">
          Monthly
        </button>
        <button onClick={() => theWageView('y')} className="ui button">
          Yearly
        </button>
      </div>
      <div className="wage-details__date">
        {monthView ? (
          <h1 style={{ color: 'white', textAlign: 'center' }}>{month}</h1>
        ) : (
          ''
        )}
        {weekView ? (
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            {monday} - {sunday}
          </h1>
        ) : (
          ''
        )}
        {yearView ? (
          <h1 style={{ color: 'white', textAlign: 'center' }}>{year}</h1>
        ) : (
          ''
        )}
      </div>
      <div className="wage-details__data-header">
        <h1>Income information</h1>
      </div>
      <div class="ui middle aligned divided list">
        <div class="item">
          <div class="right floated content">
            <div className="inputs"> {wageData.totalIncome.toFixed(2)} </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Total Income{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs"> {wageData.totalWages.toFixed(2)} </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            From Wage{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs"> {wageData.totalTips.toFixed(2)}</div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            From Tips{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs"> {wageData.totalHours.toFixed(2)} </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Hours Worked{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.averageIncome
                ? wageData.averageIncome.toFixed(2) + '/hr'
                : ''}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Average Income{' '}
          </div>
        </div>
      </div>
      <div className="wage-details__data-header">
        <h1>Average income by day</h1>
      </div>

      <div class="ui middle aligned divided list">
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.mondayAvg
                ? wageData.mondayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Mondays{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.tuesdayAvg
                ? wageData.tuesdayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Tuesdays{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.wednesdayAvg
                ? wageData.wednesdayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Wednesdays{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.thursdayAvg
                ? wageData.thursdayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Thursdays
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.fridayAvg
                ? wageData.fridayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Fridays{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.saturdayAvg
                ? wageData.saturdayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Saturdays{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div className="inputs">
              {' '}
              {wageData.sundayAvg
                ? wageData.sundayAvg.toFixed(2) + '/hr'
                : '0.00/hr'}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Sundays{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WageDetail;
