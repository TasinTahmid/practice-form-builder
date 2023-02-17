import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


  const Select = ({pocc, occupation}) => {
  // const navigate = useNavigate();
  const [rad, setRad] = useState('');

  return (
    <div className="form-group">
      <label htmlFor="occupation" className="form-label">Occupation</label>
      <select className="form-select" name="occupation" onChange={(e)=>{pocc(e.target.value);setRad(e.target.value)}} value={rad}>
        <option value="student">Student</option>
        <option value="employee">Employee</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
  
}


export default Select;