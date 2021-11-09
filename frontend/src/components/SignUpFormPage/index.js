import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal() {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <a onClick={() => setShowModal(true)}>Sign Up</a>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <SignUpForm />
            </Modal>
         )}
      </>
   );
}

export default SignUpFormModal;
