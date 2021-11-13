import ActivitiesDiv from './ActivitiesDiv';

import styles from './SplashPage.module.css'

const SplashPage = () => {

   return (
      <div id={styles.splashPageContainer}>
         <div className={styles.splashPageImg}>
            <span id={styles.splashPageTagline}>Not sure what to do? Perfect.</span>
         </div>
         <ActivitiesDiv />
      </div>
   );
};


export default SplashPage;
