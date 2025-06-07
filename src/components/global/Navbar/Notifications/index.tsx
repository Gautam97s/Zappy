import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notification = (props: Props) => {
  return (
    <Button className='bg-slate-100 rounded-full py-6'>
      <Bell color='#3352CC'
        fill='#3352CC' />
    </Button>
  )
}

export default Notification