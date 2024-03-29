import clsx from "clsx"
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  type?: React.HTMLInputTypeAttribute | undefined,
  placeholder?: string,
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string, 
  className?: string,
}

const Input = (props: IInputProps) => {
  const { label, type, placeholder, value, onChange, error, className, ...rest } = props
  return (
    <div className="mb-4">
      {label && <label>{label}</label>}
      <input
        className={clsx(`w-full p-2 mt-1 border-b-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`,
          className
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input