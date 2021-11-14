import { useHistory } from 'react-router-dom';

import styles from './SplashPage.module.css'

const ActivityCard = ({ activity }) => {
   const history = useHistory();

   const { name, city, state, id } = activity
   const imageUrl = activity.Activity_images[0].url

   const handleRedirect = () => {
      return history.push(`/activities/${id}`)
   }


   return (
      <div
         className={styles.activityCard}
         onClick={handleRedirect}
         style={{ backgroundImage: `url(${imageUrl})` }}
      >
         <div className={styles.activityCardContent}>
            <div id={styles.activityCardName}>{name}</div>
            <div id={styles.activityCardLocation}>
               <div>{city},</div>
               <div>{state}</div>
            </div>
         </div>
      </div>
   );
};




export default ActivityCard;
