import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'

import { Separator } from '@/components/ui/separator'
import { BackButton } from '@/components/back-button'
import { BackpackIcon, HomeIcon, Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from './ui/button'


interface SideBarProps {
    mode: "default" | "host" | "home" | "search"
}
  
const SideBar: React.FC<SideBarProps> = async ({mode}) => {

    return (
        <div className="flex flex-col justify-start items-center p-2 pt-20 gap-2 w-12">
            <Button variant="ghost"><HomeIcon className='h-5 w-5' /></Button>
            <Button variant="ghost"><BackpackIcon className='h-5 w-5' /></Button>
            <Button variant="ghost"><Pencil2Icon className='h-5 w-5' /></Button>
            <Button variant="ghost"><HomeIcon className='h-5 w-5' /></Button>
            <Button variant="ghost"><BackpackIcon className='h-5 w-5' /></Button>
            <Button variant="ghost"><Pencil2Icon className='h-5 w-5' /></Button>
        </div>
    )
}

export {SideBar};