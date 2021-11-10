import { useSelector, useDispatch } from "react-redux";

import styles from './UserActivitiesPage.module.css';


const UserActivitiesPage = () => {
   const dispatch = useDispatch;

   return (
      <div className={styles.userActivitiesContainer}>
         <h1>You made it to the User Activities Page!!!!</h1>
      </div>
   );
};




export default UserActivitiesPage;
