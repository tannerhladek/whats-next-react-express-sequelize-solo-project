import styles from './SplashPage.module.css'

const ActivityCard = ({ activity }) => {

   const { name, city, state } = activity
   const imageUrl = activity.Activity_images[0].url

   return (
      <div className={styles.activityCard}>
         <img src={imageUrl} alt='test'/>
         <h1>{name}</h1>
         <h2>{city}</h2>
         <h2>{state}</h2>
      </div>
   );
};




export default ActivityCard;
