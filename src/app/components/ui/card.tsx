interface ICardProps {
  title?: string,
  description?: string,
  children?: React.ReactNode
}

const Card = ({ title, description, children }: ICardProps) => {
  return <div className=" m-auto max-w-screen-md rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    {children && <div className="px-6 pb-4">{children}</div>}

  </div>
}

export default Card