import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        //state variables
        this.state = {
            count:0,
            count2:0,
        };
    }
render(){
    //destructer
    const { count }=  this.state ;

    return(
    <div>
        <h1>Profile Component Class</h1>
        <h2>Name:{this.props.name}</h2>
        <h3>Count:{count}</h3>
    </div>
    )
}

}

export default  Profile;