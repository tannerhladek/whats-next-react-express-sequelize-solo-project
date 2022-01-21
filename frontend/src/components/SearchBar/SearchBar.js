import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { csrfFetch } from '../../store/csrf';

import styles from './SearchBar.module.css'

const SearchBar = () => {
   const history = useHistory();
   const [searchString, setSearchString] = useState('');
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

   const search = async (searchString) => {
      const response = await csrfFetch(`/api/activities/search/${searchString}`)

      if (response.ok) {
         const results = await response.json();
         console.log('===============')
         console.log(results);
         console.log('===============')
      }
   };

   const updateSearch = (e) => {
      setSearchString(e.target.value);
      debounce(search, 1000, searchString)
      return
   };




   return (
      <>
         <input
            placeholder='Search...'
            className={styles.searchInput}
            type='text'
            value={searchString}
            onChange={updateSearch}
         />
      </>
   );
};

export default SearchBar;
