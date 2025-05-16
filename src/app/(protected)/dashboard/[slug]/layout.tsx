import React from 'react'
import Sidebar from '@/components/global/sidebar'
import Navdbar from '@/components/global/Navbar'

type Props = {
    children: React.ReactNode
    params : { slug: string }
}

const Layout = ({children, params}: Props) => {
  return (
    <div className='p-3'>
        <Sidebar slug={params.slug}/> 
        <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
          <Navdbar slug={params.slug}/>
        </div>
    </div>
  )
}

export default Layout