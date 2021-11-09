import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { login } from '../../store/session'

import styles from './LoginForm.module.css'

const LoginForm = () => {
   const dispatch = useDispatch();

   const [credential, setCredential] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      return dispatch(login({ credential, password }))
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
         });
   }


   return (
      <div className={styles.loginFormContainer}>
         <form
            onSubmit={handleSubmit}
            className={styles.loginForm}
         >
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <input
               type='text'
               placeholder='Username or Email'
               value={credential}
               onChange={(e) => setCredential(e.target.value)}
               required
               className={styles.loginFormInput}
            />
            <input
               type='password'
               placeholder='Password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               className={styles.loginFormInput}
            />
            <button type='submit' id={styles.loginButton}>Log In</button>
         </form>
      </div>
   );
};


export default LoginForm;
