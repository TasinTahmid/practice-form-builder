import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/create.css';

import Name from '../components/name.field';
import Email from '../components/email.field';
import Address from '../components/address.field';
import Radio from '../components/radio.field';
import Select from '../components/select.field';


const create = () => {
  
  const navigate = useNavigate();
  const [selectedFields, setSelectedFields] = useState([]);
  const [name, setName] = useState('');
  const [allfield, setAllField] = useState([]);
  const [formInfo, setFormInfo] = useState(
    {
      name:'',
      fields:[],
    }
  );

  async function onSubmitHandler (event) {
    event.preventDefault()
    console.log(formInfo)
    const response = await fetch('http://localhost:5000/api/create-form',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInfo),
    });

    const data = await response.json();
    console.log(data);
    if(data.status === 'ok'){
      navigate('/formdemo/'+data.form_id);
    }
  }
  return (
    <>
      <nav className="nav-bar">
        <div id="portfolio"> FormKit</div>
        <ul className='main-elements'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Forms</Link></li>
          </ul>
        <ul className='main-elements'>
          <li><Link to='/'>Go back</Link></li>
        </ul>
      </nav>
      <main className='body'>
        <div>
          <h2>Elements</h2>
          <ul>
            <li><button onClick={()=> {setAllField((ps)=>[...ps,1])}} >Name</button>
              <button onClick={()=> {setAllField((ps)=>[...ps,2])}}>Address</button>
            </li>
            <li><button onClick={()=> {setAllField((ps)=>[...ps,3])}}>Email</button>
              <button onClick={()=> {setAllField((ps)=>[...ps,5])}}>Select</button>
            </li>
            <li>
              <button onClick={()=> {setAllField((ps)=>[...ps,4])}}>Radio</button>
            </li>
          </ul>

        </div>
        <div>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Form Name</label>
              <input className="form-control" name="username" onChange={(e)=> setName(e.target.value)}  />
            </div>
            <div>
              {  
               allfield.map((x,i)=>{
                if(x==1)return <Name key={i} name/>
                if(x==2) return <Address key={i}  address/>
                if(x==3) return <Email key={i} email/>
                if(x==4) return <Radio key={i} gender/>
                if(x==5) return <Select key={i} occupation/>
              })    
              }
            </div>
            <div className="form-group">
              <button className="btn" type="submit" onClick={()=> setFormInfo({
                name,
                fields:allfield,
              })} >Submit</button>
            </div>
          </form> 
        </div>
      </main>  
    </>
  )
}

export default create;
