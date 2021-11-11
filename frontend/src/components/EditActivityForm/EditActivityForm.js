import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";

// thunk imports
import { editActivity, getOneActivity } from '../../store/activities';

import styles from './EditActivityForm.module.css';

const EditActivityForm = () => {
   const history = useHistory();
   const dispatch = useDispatch();

   const { id: activityId } = useParams();
   const activity = useSelector(state => state.activities[activityId]);

   const [isLoaded, setIsLoaded] = useState(false);
   const [name, setName] = useState(activity?.name);
   const [description, setDescription] = useState(activity?.description);
   const [address, setAddress] = useState(activity?.address)
   const [city, setCity] = useState(activity?.city)
   const [state, setState] = useState(activity?.state)
   const [country, setCountry] = useState(activity?.country)
   const [url, setImageUrl] = useState(activity?.Activity_images[0].url)
   const [errors, setErrors] = useState([]);

   useEffect(() => {
      dispatch(getOneActivity(activityId))
         .then(() => setIsLoaded(true));
   }, [dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
         activityId,
         name,
         description,
         address,
         city,
         state,
         country,
         url
      };

      dispatch(editActivity(payload))
         .then((activity) => history.push(`/activities/${activity.id}`))
   };

   return (
      <>
         {isLoaded && (
            <div className={styles.editActivityFormContainer}>
               <form onSubmit={handleSubmit}>
                  <ul>
                     {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                     ))}
                  </ul>
                  <input
                     type='text'
                     value={name}
                     onChange={e => setName(e.target.value)}
                  />
                  <input
                     type='text'
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                  />
                  <input
                     type='text'
                     value={address}
                     onChange={e => setAddress(e.target.value)}
                  />
                  <input
                     type='text'
                     value={city}
                     onChange={e => setCity(e.target.value)}
                  />
                  <input
                     type='text'
                     value={state}
                     onChange={e => setState(e.target.value)}
                  />
                  <input
                     type='text'
                     value={country}
                     onChange={e => setCountry(e.target.value)}
                  />
                  <input
                     type='text'
                     value={url}
                     onChange={e => setImageUrl(e.target.value)}
                  />
                  <button type='submit' id={styles.editActivityFormButton}>Submit Edits to Activity</button>
               </form>
            </div>
         )}
      </>
   );
};

export default EditActivityForm;
