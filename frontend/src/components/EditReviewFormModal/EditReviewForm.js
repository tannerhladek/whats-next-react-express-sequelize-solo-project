import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import

import styles from './EditReviewForm.module.css'

const EditReviewForm = ({ review }) => {
   const dispatch = useDispatch();

   const [content, setContent] = useState(review.content);
   const [errors, setErrors] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      // const review = await
   }


   return (
      <div className={styles.editReviewFormContainer}>
         <form
            onSubmit={handleSubmit}
         >
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <input
               type='text'
               placeholder='Username or Email'
               value={content}
               onChange={(e) => setContent(e.target.value)}
               required
            />
            <button type='submit'>Submit Edits</button>
         </form>
      </div>
   );
};


export default EditReviewForm;
