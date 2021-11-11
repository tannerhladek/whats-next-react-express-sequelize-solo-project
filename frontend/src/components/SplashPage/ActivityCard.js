import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './SplashPage.module.css'

const ActivityCard = ({ activity }) => {
   const history = useHistory();

   const sessionUser = useSelector(state => state.session.user);

   const { name, city, state, id } = activity
   const imageUrl = activity.Activity_images[0].url

   const handleRedirect = () => {
      return history.push(`/activities/${id}`)
   }
   const handleDelete = () => {
      return
   }

   let sessionLinks;
   if (sessionUser.id === activity.user_id) {
      sessionLinks = (
         <div className='button-row'>
            <button onClick={handleDelete} className='delete-button'>Delete</button>
            <button className='update-button'>Update</button>
            <button onClick={handleRedirect}>See More</button>
         </div>
      )
   } else {
      sessionLinks = (
         <div className='button-row'>
            <button onClick={handleRedirect}>See More</button>
         </div>
      )
   }

   return (
      <div className={styles.activityCard}>
         <img src={imageUrl} alt='test' />
         <h1>{name}</h1>
         <h2>{city}</h2>
         <h2>{state}</h2>

         {sessionLinks}
      </div>
   );
};




export default ActivityCard;
