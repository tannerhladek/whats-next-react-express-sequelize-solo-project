import { useState } from 'react';
import { useDispatch } from 'react-redux'

// thunk import
import { createReview } from '../../store/activities';

import styles from './ReviewsDiv.module.css';

const ReviewForm = ({ activityId }) => {
   const dispatch = useDispatch();

   const [content, setContent] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      const review = await dispatch(createReview({activityId, content: content}));
      setContent('')
      return;
   }

   return (
      <div className={styles.reviewFormContainer}>
         <form className={styles.reviewForm} onSubmit={handleSubmit}>
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
