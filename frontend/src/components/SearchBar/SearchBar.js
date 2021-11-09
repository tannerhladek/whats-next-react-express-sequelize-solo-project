import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SearchBar.module.css'

const SearchBar = () => {
   const history = useHistory();
   const [searchString, setSearchString] = useState('');

   const updateSearch = (e) => {
      setSearchString(e.target.value);

      // TO DO: create search funtion for activities

      return
   }

   return (
      <div>
         <input
            placeholder='Search...'
            className={styles.searchInput}
            type='text'
            value={searchString}
            onChange={updateSearch}
         />
      </div>
   );
};

export default SearchBar;
