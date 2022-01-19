import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

// thunk import
import { createActivity } from '../../store/activities';

import styles from './CreateActivityForm.module.css';

const CreateActivityForm = () => {
   const history = useHistory();
   const dispatch = useDispatch();

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [address, setAddress] = useState('');
   const [city, setCity] = useState('Los Angeles');
   // const [state, setState] = useState ('CA');
   // const [country, setCountry] = useState('United States');
   const [url, setImageUrl] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const payload = {
         name,
         description,
         address,
         city,
         state: 'CA',
         country: 'United States',
         url
      };

      return dispatch(createActivity(payload))
               .then((activity) => history.push(`/activities/${activity.id}`))
               .catch(async (res) => {
                  const data = await res.json();
                  if (data && data.errors) setErrors(data.errors);
               })

   }

   return (
      <div className={styles.createActivityFormContainer}>
         <form onSubmit={handleSubmit}>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <input
               placeholder='Activity Name'
               type='text'
               value={name}
               onChange={e => setName(e.target.value)}
               required={true}
            />
            <input
               placeholder='Activity Description'
               type='text'
               value={description}
               onChange={e => setDescription(e.target.value)}
               required={true}
            />
            <input
               placeholder='Address'
               type='text'
               value={address}
               onChange={e => setAddress(e.target.value)}
               required={true}
            />
            <input
               placeholder='City'
               type='text'
               value={city}
               onChange={e => setCity(e.target.value)}
               required={true}
            />
            {/* <input
               placeholder='State'
               type='text'
               value={state}
               onChange={e => setState(e.target.value)}
            />
            <input
               placeholder='Country'
               type='text'
               value={country}
               onChange={e => setCountry(e.target.value)}
            /> */}
            <input
               placeholder='Cover Image URL'
               type='text'
               value={url}
               onChange={e => setImageUrl(e.target.value)}
               required={true}
            />
            <button type='submit' id={styles.createActivityFormButton}>Submit Activity</button>
         </form>
      </div>
   );
};

export default CreateActivityForm;
