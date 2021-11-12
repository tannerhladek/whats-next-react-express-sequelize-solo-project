import { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewFormModal({ review }) {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <button onClick={() => setShowModal(true)}>Edit</button>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <EditReviewForm review={review}/>
            </Modal>
         )}
      </>
   );
}

export default EditReviewFormModal;
