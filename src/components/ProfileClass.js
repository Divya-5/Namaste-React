import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //state variables
        this.state = {
            count:0,
        };
        console.log("Constructor");
    }
    componentDidMount(){
        //API Call
        console.log("componentDidMount");
    }
render(){
    //destructer
    const { count }=  this.state ;
    console.log("render");
    return(
    <div>
        <h1>Profile Component Class</h1>
        <h2>Name:{this.props.name}</h2>
        <h3>Count:{count}</h3>
        

        <button onClick={()=>{
            //We donot mutate state directly
            //Never do this.state= something
            this.setState({
                count:1,
                count2:1,
            })
        }}>SetCount</button>
    </div>
    )
}

}

export default  Profile;