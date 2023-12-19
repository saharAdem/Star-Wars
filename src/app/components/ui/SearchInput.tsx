'use client';
import { Search } from 'lucide-react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import Input from './input';

const SearchInput: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return <div className="w-full">
    <div className="relative">
      <Input 
        type="text" 
        className="border-2 border-gray-50-300 w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" 
        placeholder="Search..." 
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button className='absolute right-0 top-0 mt-2 mr-4'>
        <Search />
      </button>
    </div>

  </div>
}

export default SearchInput