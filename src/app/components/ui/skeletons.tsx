import { v4 as uuidv4 } from 'uuid';
interface ISkeletonCardProps{
  number: number
}

export const SkeletonCard: React.FC<ISkeletonCardProps> = ({number}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(number).fill(0).map((_el) => (
      <div key={uuidv4()} className="flex items-center  px-4">
        <div className="mt-12 w-72 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>))}
    </div>
  );
};
