import React from 'react'

type Props = {
    type : 'Free' | 'PRO'
    children: React.ReactNode
}

const SubscriptionPlan = ({children , type}: Props) => {
  return (
    children
  )
}

export default SubscriptionPlan