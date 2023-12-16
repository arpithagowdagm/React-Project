import UserName from './UserName';
import UserClass from './UserClass';
import React,{ useEffect } from 'react';


class About extends React.Component{

    constructor(props){
            super(props);
    }


    render(){
        return (<div>
            <h2>I am Arpitha GM</h2>
            <h3>Working in Genpact</h3>
            <UserClass name="first" location="Gollahalli Bidadi"/>
        </div>)
    }

}

export default About;