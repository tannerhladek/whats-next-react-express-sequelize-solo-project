import ActivitiesDiv from './ActivitiesDiv';

import styles from './SplashPage.module.css'

const SplashPage = () => {

   return (
      <div id={styles.splashPageContainer}>
         <div className={styles.splashPageImg}>
            <span id={styles.splashPageTagline}>Not sure what's next? Perfect.</span>
         </div>
         <ActivitiesDiv />
      </div>
   );
};


export default SplashPage;
