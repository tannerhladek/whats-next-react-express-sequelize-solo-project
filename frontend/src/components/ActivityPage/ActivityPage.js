import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// import thunk
import { getOneActivity } from "../../store/activities";

import styles from './ActivityPage.module.css'

const ActivityPage = () => {
   const dispatch = useDispatch();
   const { id: activityId } = useParams();

   useEffect(() => {
      dispatch(getOneActivity(activityId))
   }, [dispatch])

   // const activity = useSelector(state => state.activities[activityId])
   // const { Activity_images, name, description, address, city, state, country } = activity

   return (
      <div className={styles.activityContainer}>
         <div className={styles.activityImageContainer}>
            You are Here
            {/* <img src={Activity_images[0].url} /> */}
         </div>
      </div>
   );
};



export default ActivityPage
