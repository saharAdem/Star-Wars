import React from "react"
import clsx from "clsx"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean, 
  isSelected?: boolean,
  className?: string
}

const Button: React.FC<IButtonProps> = ({ children, onClick, isDisabled, isSelected, className }) => {
  return <button
    onClick={onClick}
    className={clsx(
      `bg-blue-600 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${isSelected ? 'bg-gray-700' : ''} text-white shadow-[0_4px_9px_-4px_#3b71ca]  hover:bg-primary-600`,
      className
    )}
    disabled={isDisabled}
  >
    {children}
  </button>
}

export default Button