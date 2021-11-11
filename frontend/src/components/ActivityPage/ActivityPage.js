import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// import thunk
import { getOneActivity } from "../../store/activities";

import styles from './ActivityPage.module.css'

const ActivityPage = () => {
   const dispatch = useDispatch();

   const [isLoaded, setIsLoaded] = useState(false);
   const [activity, setActivity] = useState({})

   const { id: activityId } = useParams();

   useEffect(() => {
      dispatch(getOneActivity(activityId))
      .then((activity) => setActivity(activity))
      .then(() => setIsLoaded(true));
   }, [dispatch])

   const { Activity_images, name, description, address, city, state, country } = activity;

   return (
      <>
         {isLoaded && (
            <div className={styles.activityContainer}>
               <div className={styles.activityImageContainer}>
                  {/* <img src={Activity_images[0].url} /> */}
                  <div>{name}</div>
                  <div>{description}</div>
                  <div>{address}</div>
                  <div>{city}</div>
                  <div>{state}</div>
                  <div>{country}</div>
               </div>
            </div>
         )}
      </>
   );
};



export default ActivityPage
