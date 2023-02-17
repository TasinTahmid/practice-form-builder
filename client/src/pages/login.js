import {useState} from 'react';
import { useAuth } from '../components/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginRegister.css';



function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  async function loginUser(event){
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      
        email,
        password,
      }),
    });
    const data = await response.json();

    if(data.user){ 
      localStorage.setItem('token', data.user);
      alert('Login successful');
      auth.login(true);
      navigate('/dashboard');
      // window.location.href = '/dashboard' 
    }else{
      alert('Please check your username and password');
    }

    const response2 = await fetch('http://localhost:5000/api/login'); 
    const response3 = await response2.json();  

    auth.assignCurrentUser(response3);
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
      <h1> Login </h1>
      <form className="login-form" onSubmit = {loginUser}>
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
        <input type="submit" value = "Login" />
      </form>
      <button className="link-btn" onClick={() => navigate('/register')}>Don't have an account? Register here.</button>
    </div></>
  );
}

export default App;
