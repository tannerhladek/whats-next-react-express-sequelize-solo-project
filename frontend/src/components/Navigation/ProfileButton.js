import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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


   const logout = async (e) => {
      e.preventDefault();
      await dispatch(logout());
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
                  <button onClick={logout}>Log Out</button>
               </li>
            </ul>
         )}
      </div>
   );
};

export default ProfileButton;
