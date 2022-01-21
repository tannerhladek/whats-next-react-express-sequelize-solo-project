import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

import styles from './SearchBar.module.css'

const SearchBar = () => {
   const history = useHistory();
   const [results, setResults] = useState([]);

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
      if (value.length < 2) return;
      const response = await csrfFetch(`/api/activities/search/${value}`)
      if (response.ok) {
         const results = await response.json();
         console.log(results)
         return results
      }
   };

   const debouncedSearch = useCallback(debounce(search, 1000));

   return (
      <>
         <input
            placeholder='Search...'
            className={styles.searchInput}
            type='text'
            onChange={debouncedSearch}
         />
      </>
   );
};

export default SearchBar;
