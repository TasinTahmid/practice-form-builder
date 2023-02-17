import '../styles/static.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Name from '../components/name.field';
import Email from '../components/email.field';
import Address from '../components/address.field';
import Radio from '../components/radio.field';
import Select from '../components/select.field';

function StaticForm() {
  // const fields = [];
  const navigate = useNavigate();
  const params = useParams();
  const formId = params.id;
  
  useEffect(()=>{
    fetch('http://localhost:5000/api/form-fields/'+formId)
    .then(res => res.json())
    .then(data => {
      setFields(data.fields);
      setFormName(data.name);
    })
  },[]);

  
  const [formName, setFormName] = useState([]);
  const [fields, setFields] = useState([]);
  const [occupation, setOccupation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    email: '',
    occupation: '',
    gender: '',
  })

  async function onSubmitHandler (event) {
    event.preventDefault();
    
    console.log(formData);
    const response = await fetch('http://localhost:5000/api/add-submission',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({formName,formId,formData}),
    });

    const data = await response.json();
    console.log(data);
  }
  const saveFormData = () =>{
    setFormData(
      { 
        username: name,
        address,
        email,
        occupation,
        gender,
      }
    );
  }
  return (
    <div className="static-form">
      <h2>Form: {formName}</h2><br />
      <form onSubmit={onSubmitHandler}>
        
        { 
          fields.map((x,i)=>{
            if(x==1)return <Name key={i} pset = {setName} name/>
            if(x==2) return <Address key={i} padd = {setAddress} address/>
            if(x==3) return <Email key={i} pmail = {setEmail} email/>
            if(x==4) return <Radio key={i} pgen = {setGender} gender/>
            if(x==5) return <Select key={i} pocc = {setOccupation} occupation/>
          })
        }        
        <div className="form-group">
          <button className="btn" onClick={saveFormData} >Save</button>
          <button className="btn" type="submit" >Submit</button>
        </div>
        
      </form>
      
    </div>
  );
}

export default StaticForm;
