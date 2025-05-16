'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/use-nav'
import { Menu } from 'lucide-react'
import React, { Children } from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import { Separator } from '@/components/ui/separator'
import { LogoSmall } from '@/svgs/logo-small'
import CreateAutomation from '../create-automation'
import Search from '../search'


type Props = {
    slug: string
}

const Navdbar = ({ slug }: Props) => {
    const { page } = usePath()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
    return (
        currentPage && <div className='flec flex-col'>
            <div className='flex gap-x-3 lg:gap-x-5 justify-end '>
                <span className='lg:hidden flex items-center flex-1 gap-x-2 '>
                    <Sheet trigger={<Menu />} className="lg:hidden" side='left' >
                        <div className="flex flex-col gap-y-5 w-full h-full rounded p-3 bg-[#000000] bg-opacity-90 bg-clip-padding backdrop-blur">
                            {/* Logo Container */}
                            <div className="flex justify-center p-5">
                                <LogoSmall/>
                            </div>
                            {/* Menu Items Container */}
                            <div className="flex-1 flex flex-col px-3">
                                <Items page={page} slug={slug} />
                            </div>
                            <div className="px-16">
                                <Separator
                                    orientation="horizontal"
                                    className="bg-[#333336]"
                                />
                            </div>
                            <div className="flex flex-col gap-y-5 px-2">
                                <div className="flex gap-x-2">
                                    <ClerkAuthState />
                                    <p className="text-[#9B9CA0]">Profile</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <HelpDuoToneWhite />
                                    <p className="text-[#9B9CA0]">Help</p>
                                </div>
                            </div>
                            <div>
                                <SubscriptionPlan type="Free">
                                    <div className="flex-1 flex flex-col justify-end">
                                        <UpgradeCard />
                                    </div>
                                </SubscriptionPlan>
                            </div>
                        </div>
                    </Sheet>
                </span>
                <Search />
                <CreateAutomation />
            </div>
        </div>
    )
}

export default Navdbar