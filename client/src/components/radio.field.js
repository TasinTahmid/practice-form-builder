import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Radio = ({pgen,gender}) => {
  const navigate = useNavigate();

  return (
    <div className="form-group">
      <label htmlFor="gender" className="form-label">Gender</label>
      <div>
        <div>
          <input type="radio" name="gender" value="male" onChange={(e)=>{pgen(e.target.value)}} />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" name="gender" value="female" onChange={(e)=>{pgen(e.target.value)}}/>
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="radio" name="gender" value="other" onChange={(e)=>{pgen(e.target.value)}} />
          <label htmlFor="other">Other</label>
        </div>
      </div>
    </div>
  )
  
}


export default Radio;