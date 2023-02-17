import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Email = ({pmail,email}) => {
  const navigate = useNavigate();

  return (
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input className="form-control" name="email" onChange={(e)=>{pmail(e.target.value)}} />
    </div>
  )
  
}


export default Email;