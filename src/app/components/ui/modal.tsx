'use client'
import Modal from 'react-modal'
import clsx from 'clsx';

interface IModalProps{
  isOpen: boolean,
  closeModal: () => void;
  children: React.ReactNode;
  title?: string,
  className?: string
}

const CustomModal: React.FC<IModalProps> = ({ isOpen, closeModal, children, title, className }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="fixed w-11/12 h-screen m-auto overflow-hidden inset-0 flex items-center justify-center overflow-x-hidden outline-none"
      overlayClassName="fixed overflow-y-hidden inset-0 bg-space-image opacity-100"
    >
      <div className={clsx(
        "bg-white p-8 rounded max-w-90vw flex flex-col",
      className
      )}>
        <h5 className="leading-normal text-center text-3xl font-bold mb-3">
          {title}
        </h5>
        <button className="absolute top-2 right-4 cursor-pointer text-lg" onClick={closeModal}>
          &times;
        </button>
        <div className='h-5/6 min-h-fit overflow-y-auto no-scrollbar'>
            {children}
        </div>
      </div>
    </Modal>
  )
}

export default CustomModal