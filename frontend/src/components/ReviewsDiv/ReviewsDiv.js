import { useSelector, useDispatch } from "react-redux";

import styles from './ReviewsDiv.module.css';
import SingleReview from "./SingleReviewDiv";
import ReviewForm from "./ReviewForm";

const ReviewsDiv = ({ activityId }) => {
   const dispatch = useDispatch();
   const reviews = useSelector(state => state.activities[activityId].Reviews);

   return (
      <div className={styles.reviewContainer}>
         <h1>Reviews</h1>
         <div className={styles.reviewsContainer}>
            {reviews.map((review) => (
               <SingleReview key={review.id} review={review} />
            ))}
         </div>
         <ReviewForm activityId={activityId} />
      </div>
   )

};

export default ReviewsDiv;
