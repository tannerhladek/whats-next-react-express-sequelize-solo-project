import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// importing styles
import styles from './NavBar.module.css';

// import other components
import ProfileButton from './ProfileButton';
import DemoUserButton from './DemoButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import SearchBar from '../SearchBar';


const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <li>
            <ProfileButton user={session.user} />
         </li>
      )
   } else {
      sessionLinks = (
         <>
            <li>
               <DemoUserButton />
            </li>
            <li>
               <SignUpFormModal />
            </li>
            <li>
               <LoginFormModal />
            </li>
         </>
      )
   }

   return (
      <div className={styles.navBarContainer}>
         <div className={styles.navBarContent}>
            <ul className={styles.navBarLeft}>
               <li>
                  <NavLink to='/'>Home</NavLink>
               </li>
            </ul>
            <div className={styles.navBarMiddle}>
               <SearchBar />
            </div>
            <ul className={styles.navBarRight}>
               {isLoaded && sessionLinks}
            </ul>
         </div>
      </div>
   );
};

export default NavigationBar;
