import { Search } from 'lucide-react'

const SearchInput: React.FC = () => {
  return <div className="w-full">
    <div className="relative">
      <input type="text" className="border-2 border-gray-50-300 w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" placeholder="Search..." />
      <button className='absolute right-0 top-0 mt-2 mr-4'>
        <Search />
      </button>
    </div>

  </div>
}

export default SearchInput