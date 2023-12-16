import { useEffect, useState } from "react";

const UserName = (props) =>{
    const [count] = useState(0);
    useEffect(()=>{
    },[])
    return (
        <div className="aboutList">
            <h2>count = {count}</h2>
             <h2>{props.name}</h2>
             <h4>Software Engeerie </h4>
             <h4>{"from "+ props.location} </h4>
        </div>
    )

}

export  default UserName;