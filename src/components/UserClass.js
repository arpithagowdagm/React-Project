import React from 'react';

class UserClass extends React.Component {
constructor(props){
    super(props);
    this.state={
        userinfo:{
                name:"Dummy",
                location:"Dummy Location"
        }
    }
}
async componentDidMount(){
    
   try {
    const response = await fetch("https://api.github.com/users/arpithagowdagm");
    const json = await response.json();
    this.setState({userinfo:json})
}
catch(error){
        console.error('----',error);
}

}
componentDidUpdate(){


}
componentWillUnmount(){
}

render(){
    //const {name ,location}= this.props;
    const { name,location ,avatar_url} = this.state.userinfo;


    return (
        <div className="m-4">
            <img  className="w-40" src={avatar_url}></img>
             <h2>{name + " from (Class)"}</h2>
             <h4>Software Engeerie </h4>
             <h4>{"from "+ location }</h4>
        </div>
    )
}

}
export default UserClass;
