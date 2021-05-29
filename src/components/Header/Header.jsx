import React from 'react'

const Header = ({addJob}) => {
    return (
        <div class="ui segment">
        <h3 class="ui center aligned header">
             <span style={{marginLeft:'30%'}}>Select a job</span>  <span onClick={addJob} class="ui button" style={{marginLeft:'30%'}}> <i class="plus icon">Add </i> </span> 
        </h3>
      </div>
    )
}

export default Header
