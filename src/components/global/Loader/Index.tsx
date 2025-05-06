import React from 'react'
import { Spinner } from './spinner'
import { cn } from '@/lib/utils'

type Props = {
    state: boolean
    clasdsName?: string
    children: React.ReactNode
    color?: string
}

const Index = ({state, clasdsName, children, color}: Props) => {
  return (
    state? (
        <div className={cn(clasdsName)}>
            <Spinner color={color}/>
        </div>
    ) : (
        children
    )
  )
}

export default Index