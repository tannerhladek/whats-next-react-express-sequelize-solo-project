import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// thunk import
import { signUp } from '../../store/session';

import styles from './SignUpForm.module.css'

const SignUpForm = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session)

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPass, setConfirmPass] = useState('');
   const [errors, setErrors] = useState([]);

   if (session.user) {
      return (
         <Redirect to='/' />
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPass) {
         setErrors([]);
         return dispatch(signUp({ email, username, password }))
            .catch(async (res) => {
               const data = await res.json();
               if (data && data.errors) setErrors(data.errors);
            });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <input
               placeholder='First Name'
               type='text'
               value={firstName}
               onChange={e => setFirstName(e.target.value)}
            />
            <input
               placeholder='Last Name'
               type='text'
               value={lastName}
               onChange={e => setLastName(e.target.value)}
            />
            <input
               placeholder='Email'
               type='email'
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            <input
               placeholder='Username'
               type='text'
               value={username}
               onChange={e => setUsername(e.target.value)}
            />
            <input
               placeholder='Password'
               type='password'
               value={password}
               onChange={e => setPassword(e.target.value)}
            />
            <input
               placeholder="Confirm Password"
               type='password'
               value={confirmPass}
               onChange={e => setConfirmPass(e.target.value)}
            />
            <button type='submit'>Sign Up</button>
         </form>
      </div>
   );
};

export default SignUpForm;
