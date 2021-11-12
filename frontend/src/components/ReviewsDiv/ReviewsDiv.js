import { useSelector, useDispatch } from "react-redux";

import styles from './ReviewsDiv.module.css';
import SingleReview from "./SingleReviewDiv";
import ReviewForm from "./ReviewForm";

const ReviewsDiv = ({ activityId }) => {
   const dispatch = useDispatch();
   const reviews = useSelector(state => state.activities[activityId].Reviews);

   return (
      <div className={styles.reviewsContainer}>
         <h1>Reviews</h1>
         {reviews.map((review) => (
            <SingleReview key={review.id} review={review}/>
         ))}
         <ReviewForm activityId={activityId}/>
      </div>
   )

};

export default ReviewsDiv;
