import React from 'react';
import './bucketlist.css';
const bucket=(props)=>{
    return (
        <li>
           <span onClick={props.getBucket}>{props.children}</span> 
           <button className="deleteButton" onClick={props.deleteBucket} id={props.id}>Remove</button>
        </li>
    )
}

export default bucket;