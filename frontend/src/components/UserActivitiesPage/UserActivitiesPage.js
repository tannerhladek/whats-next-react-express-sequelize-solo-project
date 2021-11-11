import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// thunk import
import { getUserActivities } from '../../store/session';

// import components and styles
import ActivityCard from '../SplashPage/ActivityCard'
import styles from '../SplashPage/SplashPage.module.css';


const UserActivitiesPage = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session);
   const userActivitiesObj = session.userActivities;
   const userActivities = Object.values(userActivitiesObj);

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
            <div id={styles.activityCardsContainer}>
               {userActivities.map(activity => (
                  <ActivityCard activity={activity} key={activity.id} />
               ))}
            </div>
         )}
      </>
   );
};




export default UserActivitiesPage;
