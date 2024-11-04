import React from 'react'

export default function alert(props) {
    function capitalize(word){
        // let str='hello'
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (

    <div className="" style={{height:"50px"}}>
     {props.alert &&  <div className={`alert alert-${props.alert.type}`}  role="alert">
         <strong>{capitalize(props.alert.type)}!</strong><span> {props.alert.msg}</span>
    </div>}
    </div>
  )
}
