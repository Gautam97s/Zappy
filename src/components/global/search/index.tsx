import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='flex  overflow-hidden gap-x-2 border border-[#3352CC] dark:border-gray-600 rounded-full px-2 py-1 items-center flex-1 bg-white dark:bg-gray-900'>
      <SearchIcon color='#3352CC' className='dark:text-gray-300' />
      <Input
        placeholder='Search by name, email or status'
        className='border-none outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 shadow-none flex-1'
      />
    </div>
  )
}

export default Search
