import { useSelector, useDispatch } from "react-redux";

import styles from './ReviewsDiv.module.css';
import SingleReview from "./SingleReviewDiv";
import ReviewForm from "./ReviewForm";

const ReviewsDiv = ({ activityId }) => {
   const dispatch = useDispatch();
   const reviews = useSelector(state => state.activities[activityId].Reviews);

   let reviewsContent;
   if (reviews.length === 0) {
      reviewsContent = (
         <div id ={styles.reviewsContentPlaceholder}>There are currently no reviews for this activity... Leave one below!</div>
      );
   } else {
      reviewsContent = (
         <div className={styles.reviewsContainer}>
            {reviews.map((review) => (
               <SingleReview key={review.id} review={review} />
            ))}
         </div>
      );
   }

   return (
      <div className={styles.reviewContainer}>
         <h1>Reviews</h1>
         {reviewsContent}
         <ReviewForm activityId={activityId} />
      </div>
   )

};

export default ReviewsDiv;
