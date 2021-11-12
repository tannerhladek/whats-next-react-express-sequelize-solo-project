import { useSelector, useDispatch } from 'react-redux';

import styles from './ReviewsDiv.module.css';

// thunk imports
import { deleteReview } from '../../store/activities';

const SingleReview = ({ review }) => {
   const dispatch = useDispatch();
   const activities = useSelector(state => state.activities);
   const session = useSelector(state => state.session);


   // edit a review
   const handleEdit = () => {
      //  TO DO = creatid edit review function/thunk
      return
   };

   // delete a review
   const handleDelete = () => {
      dispatch(deleteReview(review.id))
   };


   let buttons
   if (review.user_id === session.user.id) {
      buttons = (
         <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
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
