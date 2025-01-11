import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log('Signup form submitted:', username,);
    console.log('====================================');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password,
      });

      console.log('User signed up successfully:', response.data);
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      console.log('User signed up successfully:', response.data);
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };

  return (
    <div className='signupPage'>
      <form onSubmit={handleSubmit} className='form'>
        {/* Form Fields */}
        <p>SignUp Page</p>
        <input
          className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        />
        <input
          className='input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className='loginR'>Already have an ?<a>Account</a></p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
