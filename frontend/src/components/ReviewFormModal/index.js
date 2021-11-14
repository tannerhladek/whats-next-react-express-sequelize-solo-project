import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

function ReviewFormModal({ activityId }) {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <button onClick={() => setShowModal(true)}>Create Review</button>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <ReviewForm activityId={activityId} setShowModal={setShowModal}/>
            </Modal>
         )}
      </>
   );
}

export default ReviewFormModal;
