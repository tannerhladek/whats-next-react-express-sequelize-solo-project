import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

// thunk import
import { createActivity } from '../../store/activities';

import styles from './CreateActivityForm.module.css';

const CreateActivityForm = () => {
   const history = useHistory();
   const dispatch = useDispatch();
   const activities = useSelector(state => state.activities);

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [address, setAddress] = useState('');
   const [city, setCity] = useState('');
   const [state, setState] = useState ('CA');
   const [country, setCountry] = useState('United States');
   const [url, setImageUrl] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();

      const payload = {
         name,
         description,
         address,
         city,
         state,
         country,
         url
      };

      dispatch(createActivity(payload))
         .then((activity) => history.push(`/activities/${activity.id}`))

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
            />
            <input
               placeholder='Activity Description'
               type='text'
               value={description}
               onChange={e => setDescription(e.target.value)}
            />
            <input
               placeholder='Address'
               type='text'
               value={address}
               onChange={e => setAddress(e.target.value)}
            />
            <input
               placeholder='City'
               type='text'
               value={city}
               onChange={e => setCity(e.target.value)}
            />
            <input
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
            />
            <input
               placeholder='Cover Image URL'
               type='text'
               value={url}
               onChange={e => setImageUrl(e.target.value)}
            />
            <button type='submit' id={styles.createActivityFormButton}>Submit Activity</button>
         </form>
      </div>
   );
};

export default CreateActivityForm;
