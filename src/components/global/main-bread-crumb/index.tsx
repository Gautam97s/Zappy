import { Divide } from 'lucide-react'
import React from 'react'

type Props = {
    page: string
    slug?: string
}

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className='flex flex-col item-start'>
        {page === "Home" && <div className='flex justify-center w-full'>
            <div className='w-4/12 py-5 lg:py-10 flex flex-col items-center shadow-md rounded-xl'>
                <p className='text-text-secondary text-lg'>Welcome back</p>
                <h2 className='capitalize text-4xl font-medium'>{slug}!</h2>
            </div>    
        </div>}
    </div>
  )
}

export default MainBreadCrumb