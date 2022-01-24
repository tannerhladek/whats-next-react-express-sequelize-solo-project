import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

// component import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import styles from './SearchBar.module.css'

const SearchBar = () => {
   const history = useHistory();
   const [results, setResults] = useState([]);
   const [showResults, setShowResults] = useState(false);

   useEffect(() => {
      if (!showResults) return;
      const closeMenu = () => {
         document.querySelector(`#searchInput`).value = ''
         setShowResults(false);
      };
      document.addEventListener('click', closeMenu);
      return () => document.removeEventListener("click", closeMenu);
   }, [showResults]);

   const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
         const later = () => {
            clearTimeout(timeout);
            func(...args);
         };
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
      };
   };

   const search = async (e) => {
      const { value } = e.target
      if (value.length < 2) {
         setShowResults(false);
         return;
      }
      const response = await csrfFetch(`/api/activities/search/${value}`)
      if (response.ok) {
         const results = await response.json();
         setResults(results);
         setShowResults(true);
         return
      }
   };

   const debouncedSearch = useCallback(debounce(search, 1000));

   return (
      <>
         <input
            placeholder='Search...'
            className={styles.searchInput}
            id='searchInput'
            type='text'
            onChange={debouncedSearch}
         />
         {showResults && (
            <div className={styles.resultsContainer}>
               <List>
                  {results.map((result, i) => (
                     <>
                        <ListItem alignItems="flex-start" key={i}>
                           <ListItemAvatar>
                              <Avatar alt={`${result.name}`} src={result.Activity_images[0].url} />
                           </ListItemAvatar>
                           <ListItemText
                              primary={`${result.name}`}
                           />
                        </ListItem>
                        {i !== results.length - 1 && (
                           <Divider />
                        )}
                     </>
                  ))}
               </List>
            </div>
         )}
      </>
   );
};

export default SearchBar;
