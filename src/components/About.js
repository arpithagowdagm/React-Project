import UserClass from './UserClass';
import React, {useContext, useEffect} from 'react';
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
            super(props);
    }
    render(){
        return (
        <div className='m-3'>
            <h2 className='m-4'>I am Arpitha GM Working in Genpact ✌️</h2>
            <UserContext.Consumer>
                    {({loggedInuser})=><h5 className='m-4'>{loggedInuser}</h5>}
                </UserContext.Consumer>
            <UserClass name="first" location="Gollahalli Bidadi"/>
        </div>)
    }

}

export default About;