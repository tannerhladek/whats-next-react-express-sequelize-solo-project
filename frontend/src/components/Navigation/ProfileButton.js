import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../store/session';

const ProfileButton = ({user}) => {
   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);

   const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
   };

   useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
         setShowMenu(false);
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener("click", closeMenu);

   }, [showMenu]);


   const signOut = (e) => {
      e.preventDefault();
      dispatch(logout());
   }



   return (
      <div>
         <button onClick={openMenu}>
            <i className="far fa-user" />
         </button>
         {showMenu && (
            <ul className='profile-dropdown'>
               <li>{user.username}</li>
               <li>{user.email}</li>
               <li>
                  <NavLink to='/activities/new'>Create Activity</NavLink>
               </li>
               <li>
                  <button onClick={signOut}>Log Out</button>
               </li>
            </ul>
         )}
      </div>
   );
};

export default ProfileButton;
