import React from 'react';
import {useParams} from 'react-router-dom'

function Contact() {
    let  {no} = useParams();
  return <>
        <h1> contact js : {no}</h1>
  </>;
}

export default Contact;
