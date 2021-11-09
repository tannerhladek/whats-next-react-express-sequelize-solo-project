import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// thunk import
import { getActivities } from "../../store/activities";

// component import
import ActivityCard from "./ActivityCard";

import styles from './SplashPage.module.css'

const ActivitiesDiv = () => {
   const dispatch = useDispatch();
   const activitiesObj = useSelector(state => state.activities)
   const activities = Object.values(activitiesObj);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      dispatch(getActivities())
         .then(() => setIsLoaded(true));
   }, [dispatch])

   return (
      <>
         {!isLoaded && (
            <h1>Loading</h1>
         )}

         {isLoaded && (
            <div id={styles.activityCardsContainer}>
               {activities.map(activity => (
                  <ActivityCard activity={activity} key={activity.id}/>
               ))}
            </div>
         )}
      </>
   );
};



export default ActivitiesDiv;
