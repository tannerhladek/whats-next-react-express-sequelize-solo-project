import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { logout } from '../../store/session';

import styles from './NavBar.module.css';

const ProfileButton = ({ user }) => {
   const history = useHistory();
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
      dispatch(logout())
         .then(() => history.push('/'));
   };



   return (
      <div className={styles.profileButtonContainer}>
         <button id={styles.profileButton} onClick={openMenu}>
            <i className="fa fa-bars" />
            <i className="far fa-user" />
         </button>
         {showMenu && (
            <div className={styles.profileDropdown}>
               <ul >
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                  <li>
                     <NavLink to='/activities/new'>Create Activity</NavLink>
                  </li>
                  <li>
                     <NavLink to={`/users/${user.id}/activities`}>My Activities</NavLink>
                  </li>
                  <li>
                     <button id ={styles.logoutBtn} onClick={signOut}>Log Out</button>
                  </li>
               </ul>
            </div>
         )}
      </div>
   );
};

export default ProfileButton;
