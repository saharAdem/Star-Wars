import Image from "next/image"
import clsx from "clsx"

interface IImageProps {
  url: string,
  alt?: string,
  height?: number,
  width?: number,
  className?: string, 

}
interface ICardProps {
  title: string,
  description?: string,
  children?: React.ReactNode,
  imageData?: IImageProps
  className?: string, 
}


const Card = ({ title, description, children, imageData, className }: ICardProps) => {
  return <div className={clsx("block bg-white m-auto max-w-screen-md rounded overflow-hidden shadow-xl", className)}>
    <div className="flex flex-col align-middle items-center ">
      {imageData && <Image src={imageData.url} width={imageData.width || `${100}`} height={imageData.height || `${50}`} alt={imageData.alt || title}/>}
      <h5 className="font-bold text-xl m-2 text-center">{title}</h5>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    {children}

  </div>
}

export default Card