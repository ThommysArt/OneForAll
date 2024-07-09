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

interface NavBarProps {

}
  
const NavBar: React.FC<NavBarProps> = () => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-start items-center p-4 gap-20 h-16 backdrop-blur-sm">
                <h3 className='text-lg space-x-2 font-bold' onMouseOver={()=>handleMouseHover("one for all")}>OneForAll</h3>
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
            </div>
            <Separator />
        </div>
    )
}

export {NavBar};