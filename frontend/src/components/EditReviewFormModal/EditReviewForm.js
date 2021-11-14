import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// thunk import
import { editReview } from '../../store/activities';

import styles from './EditReviewForm.module.css'

const EditReviewForm = ({ review, setShowModal }) => {
   const dispatch = useDispatch();

   const [content, setContent] = useState(review.content);
   const [errors, setErrors] = useState([]);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editReview({content: content, id: review.id}))
      setShowModal(false);
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
            <textarea
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
