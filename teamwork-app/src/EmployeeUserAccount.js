import * as React from 'react';

//submit data - this will have to be an array with all the data from the 10 inputs
function Input () { 
             return (
            <button className="inputDataSubmit">
                Submit
            </button>
        );
}

//collect data
function UserInfo (props) {   
     return (
             <div className="userData">
                <form className="userDataForm">
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>
                <Input></Input>
            </div>
        );
}


//display data
function EmployeeUserAccount () {
        return(
            <div className="display">                                
            <UserInfo></UserInfo>
            <a
            className="App-link"
            href="https://ndutateamwork.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create Employee User Account
          </a>
        </div>
        )
}

export default EmployeeUserAccount;