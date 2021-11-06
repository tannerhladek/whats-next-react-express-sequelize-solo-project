import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

// import other components
import ProfileButton from './ProfileButton';


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
            <NavLink to='/login'>Log In</NavLink>
         </div>
      )
   }

   return (
      <div>
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
