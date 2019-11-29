import { React } from "react";

//submit data - this will have to be an array with all the data from the 10 inputs
class Input extends React.Component {
    render() {
        return (
            <button className="inputDataSubmit">
                {this.props.value}
            </button>
        );
    }
}

//collect data
class UserInfo extends React.Component {
    renderInput(i){
        return <Input value={i} />;
    }
    render () {
        return (
            <div className="userData">
                <form className="userDataForm">
                    {this.renderInput(0)}
                    {this.renderInput(1)}
                    {this.renderInput(2)}
                    {this.renderInput(3)}
                    {this.renderInput(4)}
                    {this.renderInput(5)}
                    {this.renderInput(6)}
                    {this.renderInput(7)}
                    {this.renderInput(8)}
                    {this.renderInput(9)}
                </form>
            </div>
        );
    }
}

//display data
class EmployeeUserAccount extends React.Component {
    render(){
        return (
            <div className = "success">
                <div><UserInfo /></div>
            </div>
            
        );
    }
}

export default EmployeeUserAccount;