'use client'

import { FC } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Button from '../ui/button'

interface PaginationProps {
  hasNextPage: boolean
  hasPrevPage: boolean,
  per_page: number,
  elementsNumber: number
}

const Pagination: FC<PaginationProps> = (
  {
    hasNextPage,
    hasPrevPage,
    per_page,
    elementsNumber
  }
) => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(elementsNumber / per_page)

  const createPageURL = (pageNumber: number | string) => {
    router.push(`/?page=${pageNumber}`)
  };


  return (
    <div className='flex gap-2 items-center justify-end mr-20'>
      <Button
        className='!p-1'
        disabled={!hasPrevPage}
        onClick={() => createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
        >
          <ChevronLeft size={25} />
      </Button>

      <div className='text-white'>
        {currentPage} / {totalPages}
      </div>

      <Button
        className='!p-1'
        disabled={!hasNextPage}
        onClick={() => createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        >
          <ChevronRight size={25} />
      </Button>
    </div>
  )
}

export default Pagination