import React from "react"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean, 
  isSelected?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, onClick, isDisabled, isSelected }) => {
  return <button
    onClick={onClick}
    className={`bg-blue-600 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${isSelected ? 'bg-gray-700': ''} text-white shadow-[0_4px_9px_-4px_#3b71ca]  hover:bg-primary-600`}
    disabled={isDisabled}
  >
    {children}
  </button>
}

export default Button