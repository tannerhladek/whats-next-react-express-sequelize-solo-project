import styles from './SplashPage.module.css'

const ActivityCard = ({ activity }) => {

   const {name, city, state } = activity

   return (
      <div className={styles.activityCard}>
         insert Activity image
         <h1>{name}</h1>
         <h2>{city}</h2>
         <h2>{state}</h2>
      </div>
   );
};




export default ActivityCard;
