import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// thunk import
import { getUserActivities } from '../../store/session';

// import components and styles
import ActivityCard from '../SplashPage/ActivityCard'
import styles from './UserActivitiesPage.module.css';


const UserActivitiesPage = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session);
   const userActivitiesObj = session.userActivities;

   let userActivities = [];
   if (userActivitiesObj) {
      userActivities = Object.values(userActivitiesObj);
   }

   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      dispatch(getUserActivities(session.user.id))
         .then(() => setIsLoaded(true));
   }, [dispatch]);

   return (
      <>
         {!isLoaded && (
            <h1>Loading</h1>
         )}

         {isLoaded && (
            <div className={styles.userPageContainer}>
               <div className={styles.userActivitiesContainer}>
                  <div id={styles.myActivitiesTitle}>My Activities: </div>
                  <div id={styles.userActivityCardsContainer}>
                     {userActivities.map(activity => (
                        <ActivityCard activity={activity} key={activity.id} />
                     ))}
                  </div>
               </div>
            </div>
         )}
      </>
   );
};




export default UserActivitiesPage;
