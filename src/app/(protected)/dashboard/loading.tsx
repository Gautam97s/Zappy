import React from 'react'
import Loader from '@/components/global/Loader/Index'


type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='h-screen justify-center items-center'>
        <Loader state>...Loading</Loader>
    </div>
  )
}

export default Loading