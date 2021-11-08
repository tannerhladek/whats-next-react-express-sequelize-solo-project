import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// importing styles
import styles from './NavBar.module.css';

// import other components
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';


const NavigationBar = ({ isLoaded }) => {
   const session = useSelector(state => state.session);

   let sessionLinks;
   if (session.user) {
      sessionLinks = (
         <div>
            <ProfileButton user={session.user} />
         </div>
      )
   } else {
      sessionLinks = (
         <div>
            <NavLink to='/signup'>Sign Up</NavLink>
            <LoginFormModal />
         </div>
      )
   }

   return (
      <div className='nav-bar-container'>
         <ul>
            <li>
               <NavLink to='/'>Home</NavLink>
               {isLoaded && sessionLinks}
            </li>
         </ul>
      </div>
   );
};

export default NavigationBar;
