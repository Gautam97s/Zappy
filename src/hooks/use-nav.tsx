'use client'
import { usePathname } from 'next/navigation'

export const usePath = () => {
    const pathName = usePathname()
    const path = pathName.split('/')
    let page = path[path.length - 1]
    return {page, pathName}
}