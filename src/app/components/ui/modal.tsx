'use client'
import Modal from 'react-modal'

interface IModalProps{
  isOpen: boolean,
  closeModal: () => void;
  children: React.ReactNode;
  title?: string
}

const CustomModal: React.FC<IModalProps> = ({ isOpen, closeModal, children, title}) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-black opacity-auto"
    >
        <div className="bg-white p-8 rounded max-w-80vw relative">
          <h5 className="text-xl font-medium leading-normal">
            {title}
          </h5>
          <button className="absolute top-2 right-2 cursor-pointer text-lg" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </Modal>
  )
}

export default CustomModal