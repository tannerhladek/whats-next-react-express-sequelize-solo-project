import { useSelector, useDispatch } from 'react-redux';

import styles from './ReviewsDiv.module.css';

// thunk imports
import { deleteReview } from '../../store/activities';

import EditReviewFormModal from '../EditReviewFormModal';

const SingleReview = ({ review }) => {
   const dispatch = useDispatch();
   const session = useSelector(state => state.session);

   // delete a review
   const handleDelete = () => {
      dispatch(deleteReview(review.id))
   };


   let buttons;
   if (session.user && review.user_id === session.user.id) {
      buttons = (
         <>
            <EditReviewFormModal review={review}/>
            <button onClick={handleDelete} id={styles.reviewButton}>Delete</button>
         </>
      )
   } else {
      buttons = null;
   }

   return (
      <div className={styles.singleReviewCard}>
         <div>
            {review.User.username}
         </div>
         <p className={styles.singleReviewContentContainer}>
            {`${review.content}`}
         </p>
         <div className={styles.singleReviewButtonsContainer}>
            {buttons}
         </div>
      </div>
   );
};


export default SingleReview;
