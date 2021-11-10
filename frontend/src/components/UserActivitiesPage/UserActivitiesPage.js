import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// thunk import
import { getUserActivities } from '../../store/session';

import styles from './UserActivitiesPage.module.css';


const UserActivitiesPage = () => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session);
   const userActivities = session.userActivities;

   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      dispatch(getUserActivities(session.user.id))
   }, [dispatch]);

   return (
      <div className={styles.userActivitiesContainer}>
         <h1>You made it to the User Activities Page!!!!</h1>
      </div>
   );
};




export default UserActivitiesPage;
