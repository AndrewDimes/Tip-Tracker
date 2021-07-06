import React, { useState } from 'react';

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
    <div>
      <div style={{ marginTop: '15%' }} class="three ui buttons">
        <button onClick={() => theWageView('w')} class="ui button">
          Weekly
        </button>
        <button onClick={() => theWageView('m')} class="ui button">
          Monthly
        </button>
        <button onClick={() => theWageView('y')} class="ui button">
          Yearly
        </button>
      </div>
      <br />
      {monthView ? <h1 style={{ color: 'white' }}>{month}</h1> : ''}
      {weekView ? (
        <h1 style={{ color: 'white' }}>
          {monday} - {sunday}
        </h1>
      ) : (
        ''
      )}
      {yearView ? <h1 style={{ color: 'white' }}>{year}</h1> : ''}
      <blockquote style={{ color: 'white', backgroundColor: 'gray' }}>
        Income information
      </blockquote>
      <div class="ui middle aligned divided list">
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
              {' '}
              {wageData.totalIncome.toFixed(2)}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Total Income{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
              {' '}
              {wageData.totalWages.toFixed(2)}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            From Wage{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
              {' '}
              {wageData.totalTips.toFixed(2)}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            From Tips{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
              {' '}
              {wageData.totalHours.toFixed(2)}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            Hours Worked{' '}
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
              {' '}
              {wageData.averageIncome
                ? wageData.averageIncome.toFixed(2)
                : ''}{' '}
            </div>
          </div>
          <div class="left floated content" style={{ color: 'white' }}>
            {' '}
            Average Income{' '}
          </div>
        </div>
      </div>
      <blockquote style={{ color: 'white', backgroundColor: 'gray' }}>
        Average income by day
      </blockquote>
      <div class="ui middle aligned divided list">
        <div class="item">
          <div class="right floated content">
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
            <div style={{ color: 'white' }}>
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
