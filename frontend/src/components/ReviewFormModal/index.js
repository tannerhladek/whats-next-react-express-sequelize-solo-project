import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

import styles from './ReviewForm.module.css'

function ReviewFormModal({ activityId }) {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <button
            onClick={() => setShowModal(true)}
            id={styles.createReviewBtn}
         >
            Create Review
         </button>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <ReviewForm activityId={activityId} setShowModal={setShowModal} />
            </Modal>
         )}
      </>
   );
}

export default ReviewFormModal;
