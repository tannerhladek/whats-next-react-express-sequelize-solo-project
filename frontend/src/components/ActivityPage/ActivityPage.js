import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

// import thunks
import { getOneActivity, deleteActivity } from "../../store/activities";

import styles from './ActivityPage.module.css'
import ReviewsDiv from "../ReviewsDiv";

const ActivityPage = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const session = useSelector(state => state.session);

   const [isLoaded, setIsLoaded] = useState(false);
   const [activity, setActivity] = useState({});

   const { id: activityId } = useParams();
   useEffect(() => {
      dispatch(getOneActivity(activityId))
         .then((activity) => setActivity(activity))
         .then(() => setIsLoaded(true));
   }, [dispatch, activityId])

   const { Activity_images, name, description, address, city, state, country, user_id } = activity;


   const handleEdit = () => {
      return history.push(`/activities/${activityId}/edit`);
   };

   const handleDelete = () => {
      dispatch(deleteActivity(activity.id))
         .then(() => history.push('/'))
   }

   let buttons;
   if (session.user && session.user.id === user_id) {
      buttons = (
         <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
         </>
      )
   } else {
      buttons = null;
   }

   return (
      <>
         {isLoaded && (
            <div className={styles.activityContainer}>
               <div className={styles.activityImageContainer}>
                  <img src={Activity_images[0].url} alt={name} />
               </div>
               <div id={styles.activityName}>{name}</div>
               <div id={styles.activityDescription}>{description}</div>
               <div className={styles.activityLocationContainer}>
                  <div>{address}</div>
                  <div>{city}</div>
                  <div>{state}</div>
                  <div>{country}</div>
               </div>
               <div className={styles.activityButtonContainer}>
                  {isLoaded && buttons}
               </div>
               <ReviewsDiv activityId={activityId}/>
            </div>
         )}
      </>
   );
};



export default ActivityPage
