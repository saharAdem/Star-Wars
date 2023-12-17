interface IInputProps {
  label?: string,
  type?: React.HTMLInputTypeAttribute | undefined,
  placeholder?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string
}

const Input = (props: IInputProps) => {
  const { label, type, placeholder, value, onChange, error } = props
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-semibold text-gray-600">{label}</label>}
      <input
        className={`w-full p-2 mt-1 border-b-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input