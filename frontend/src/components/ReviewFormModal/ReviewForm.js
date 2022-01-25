import { useState } from 'react';
import { useDispatch } from 'react-redux'

// thunk import
import { createReview } from '../../store/activities';

import styles from './ReviewForm.module.css';

const ReviewForm = ({ activityId, setShowModal }) => {
   const dispatch = useDispatch();

   const [content, setContent] = useState('');
   const [errors, setErrors] = useState([]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      return dispatch(createReview({ activityId, content: content }))
         .then(() => {
            setContent('');
            setShowModal(false);
            return
         })
         .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
         })
      return;
   }

   return (
      <div className={styles.reviewFormContainer}>
         <form className={styles.reviewForm} onSubmit={handleSubmit}>
            <ul>
               {errors.map((error, i) => (
                  <li key={i}>{error}</li>
               ))}
            </ul>
            <textarea
               id={styles.reviewContent}
               onChange={(e) => setContent(e.target.value)}
               value={content}
            />
            <button>Post Review</button>
         </form>
      </div>
   );
}

export default ReviewForm;
