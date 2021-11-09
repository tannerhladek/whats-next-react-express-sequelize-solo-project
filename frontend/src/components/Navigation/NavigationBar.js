import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// importing styles
import styles from './NavBar.module.css';

// import other components
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SearchBar from '../SearchBar';


const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <>
            <li>
               <ProfileButton user={session.user} />
            </li>
         </>
      )
   } else {
      sessionLinks = (
         <>
            <li>
               <NavLink to='/signup'>Sign Up</NavLink>
            </li>
            <li>
               <LoginFormModal />
            </li>
         </>
      )
   }

   return (
      <div className={styles.navBarContainer}>
         <ul className={styles.navBarLeft}>
            <li>
               <NavLink to='/'>Home</NavLink>
            </li>
         </ul>
         <ul className={styles.navBarMiddle}>
            <li className={styles.searchInput}>
               <SearchBar />
            </li>
         </ul>
         <ul className={styles.navBarRight}>
            {isLoaded && sessionLinks}
         </ul>
      </div>
   );
};

export default NavigationBar;
