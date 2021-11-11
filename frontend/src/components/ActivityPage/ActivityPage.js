import { useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

// import thunks
import { getOneActivity, deleteActivity } from "../../store/activities";

import styles from './ActivityPage.module.css'

const ActivityPage = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   const [isLoaded, setIsLoaded] = useState(false);
   const [activity, setActivity] = useState({});

   const { id: activityId } = useParams();
   useEffect(() => {
      dispatch(getOneActivity(activityId))
         .then((activity) => setActivity(activity))
         .then(() => setIsLoaded(true));
   }, [dispatch])

   const { Activity_images, name, description, address, city, state, country } = activity;


   const handleEdit = () => {
      return history.push(`/activities/${activityId}/edit`);
   };

   const handleDelete = () => {
      dispatch(deleteActivity(activity.id))
         .then(() => history.push('/'))
   }

   return (
      <>
         {isLoaded && (
            <div className={styles.activityContainer}>
               <div className={styles.activityImageContainer}>
                  <img src={Activity_images[0].url} />
               </div>
               <div>{name}</div>
               <div>{description}</div>
               <div>{address}</div>
               <div>{city}</div>
               <div>{state}</div>
               <div>{country}</div>
               <div className={styles.buttonContainer}>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
               </div>
            </div>
         )}
      </>
   );
};



export default ActivityPage
