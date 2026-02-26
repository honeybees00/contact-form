import React, { useState } from 'react'
import {useState} from 'react'
export const contactForm = () => {
  const [name,setName]=useState('');
  const [message,setMessage]=('');
  function onnameChange(event){
    setName(e.target.value)
  }
  function onMessageChange(){
    setMessage(e.target.value)
  }
  
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className='mb-3'>
          <label htmlFor='name'></label>
          <input type='text' value={name} onChange={onNameChange}/>
          </div>
          function handleSubmit(event){
            event className ="preventDefault"();
            alert(`Thank You ${name}!Your messgae:${message}has been sent!`);
            setName('');
            setMessage('');
          }
          
          <div className="mb-3">
            <label htmlFor='message'>"Message"</label>
            <textarea name='message'id='message' value={message} onChange={onMessagechange}></textarea>
        </div>
        <button type='submit' className='btn btn-success'>send</button>
        </form>
        </div>
      
  )
}
