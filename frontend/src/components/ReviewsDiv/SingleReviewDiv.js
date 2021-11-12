import { useSelector, useDispatch } from 'react-redux';

import styles from './ReviewsDiv.module.css';

// thunk imports
import { deleteReview } from '../../store/activities';
import { editReview } from '../../store/activities';

const SingleReview = ({ review }) => {
   const dispatch = useDispatch();
   const reviews = useSelector(state => state.activities[review.activity_id].Reviews);
   const session = useSelector(state => state.session);



   // edit a review
   const handleEdit = () => {
      dispatch(editReview({
         id: 4,
         activity_id: 1,
         content: " Will this work for me this time - test 503 ???!"
      }))
      return
   };

   // delete a review
   const handleDelete = () => {
      dispatch(deleteReview(review.id))
   };


   let buttons
   if (session.user && review.user_id === session.user.id) {
      buttons = (
         <>
            <button onClick={handleEdit} id={styles.reviewButton}>Edit</button>
            <button onClick={handleDelete} id={styles.reviewButton}>Delete</button>
         </>
      )
   } else {
      buttons = null;
   }

   return (
      <div id={styles.singleReviewContainer}>
         <div className={styles.singleReviewContentContainer}>
            {review.content}
         </div>
         <div className={styles.singleReviewButtonsContainer}>
            {buttons}
         </div>
      </div>
   );
};


export default SingleReview;
