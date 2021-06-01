import React from 'react'
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';

const JobPage = () => {


    function goBack(){
        window.history.back()
    }
    return (
        <>
        <Header jobPage={true} goBack={goBack}  />
      </>
    )
}

export default JobPage
