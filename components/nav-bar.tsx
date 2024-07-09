"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Separator } from './ui/separator'
import { handleMouseHover, speak } from '@/lib/text-to-speech'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

interface NavBarProps {

}
  
const NavBar: React.FC<NavBarProps> = () => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center p-4 gap-20 h-16 backdrop-blur-sm">
                <div className="flex flex-row items-center gap-4">
                    <div className="flex w-10 border rounded-md items-center">
                        <AspectRatio ratio={1/1}>
                            <Image src="/ONE.svg" alt="Image" className="rounded-md object-cover border border-black" fill/>
                        </AspectRatio>
                    </div>
                    <h3 className='text-lg space-x-2 font-bold' onMouseOver={()=>handleMouseHover("one for all")}>OneForAll</h3>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" className='px-2 text-sm text-muted-foreground hover:text-violet-400' onMouseOver={()=>speak("courses")}>Courses</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#" className='px-2 text-sm text-muted-foreground hover:text-violet-400' onMouseOver={()=>speak("quizzes")}>Quizzes</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#" className='px-2 text-sm text-muted-foreground hover:text-violet-400' onMouseOver={()=>speak("lessons")}>Lessons</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle />
            </div>
            <Separator />
        </div>
    )
}

export {NavBar};