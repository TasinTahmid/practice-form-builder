import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Address = ({padd,address}) => {
  const navigate = useNavigate();

  return (
    <div className="form-group">
      <label htmlFor="address" className="form-label">Address</label>
      <input className="form-control" name="username" onChange={(e)=> padd(e.target.value)}  />
    </div>
  )
  
}


export default Address;