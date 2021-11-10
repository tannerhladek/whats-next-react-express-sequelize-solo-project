import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import styles from './CreateActivityForm.module.css';

const CreateActivityForm = () => {
   const dispatch = useDispatch();


   return (
      <div className={styles.createActivityFormContainer}>
         <form>
            <h2>You are in the form!!</h2>
         </form>
      </div>
   );
};

export default CreateActivityForm;
