import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginRegister.css';



function App() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  async function registerUser(event){
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data.status);
    
    if(data.status === 'ok'){
      navigate('/login');
    }
  }

  return (
    <>
      <nav className="nav-bar">
          <div id="portfolio"> FormKit</div>
          <ul className='main-elements'>
            <li><Link to='/'>Go back</Link></li>
          </ul>
      </nav>
      <div className="App">
        <h1> Register </h1>
        <form className="register-form" onSubmit = {registerUser}>
          <input 
          value = {name}
          onChange = {(e)=>setName(e.target.value)}
          type="text"
          placeholder = "name"
          />
          <br /><br />
          <input 
          value = {email}
          onChange = {(e)=>setEmail(e.target.value)}
          type="email"
          placeholder = "Email"
          /> <br /><br />
          <input 
          value = {password}
          onChange = {(e)=>setPassword(e.target.value)}
          type="Password"
          placeholder = "Password"
          />
          <br /><br />
          <input type="submit" value = "Register" />
        </form>
        <button className="link-btn" onClick={() => navigate('/login')}>Already have an account? Login here.</button>
      </div>
    </>
  );
}

export default App;
