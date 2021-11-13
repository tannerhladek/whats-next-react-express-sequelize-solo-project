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
         {/* <img src={imageUrl} alt='test' /> */}
         <div className={styles.activityCarcContent}>
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h2>{state}</h2>
         </div>
      </div>
   );
};




export default ActivityCard;
