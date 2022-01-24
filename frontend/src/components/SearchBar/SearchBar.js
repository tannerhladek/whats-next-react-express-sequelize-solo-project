import { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

import styles from './SearchBar.module.css'

const SearchBar = () => {
   const history = useHistory();
   const [results, setResults] = useState([]);
   const [showResults, setShowResults] = useState(false);

   useEffect(() => {
      if (!showResults) return;
      const closeMenu = () => {
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
            type='text'
            onChange={debouncedSearch}
         />
         {showResults && (
            <div className={styles.resultsContainer}>
               {results.map((result, i) => (
                  <div key={i}>
                     {result.name}
                  </div>
               ))}
            </div>
         )}
      </>
   );
};

export default SearchBar;
