import { useSelector, useDispatch } from "react-redux";

import styles from './ReviewsDiv.module.css';

const ReviewsDiv = ({ activityId }) => {
   const dispatch = useDispatch();
   const reviews = useSelector(state => state.activities[activityId].Reviews);

   return (
      <div className={styles.reviewsContainer}>
         <h1>Reviews Container!!!</h1>
      </div>
   )

};

export default ReviewsDiv;
