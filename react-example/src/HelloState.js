import { Component } from "react";

class HelloState extends Component{
    constructor (){
        super();
        this.state = {
            empname : 'sutherland',
            salary : 8000
        }
    };
    changeData = () =>{
        this.setState({
            empname : 'sobiya',
            salary : 42000
        })
    }
    render (){
        return (
            <div>
                <h1> welcom   {this.state.empname}
                    your salary is {this.state.salary}
                </h1>
                <button onClick={()=>this.changeData()}>click</button>
            </div>
        )
    }
}; 
export default HelloState; 