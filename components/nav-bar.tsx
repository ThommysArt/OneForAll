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

interface NavBarProps {

}
  
const NavBar: React.FC<NavBarProps> = () => {

    return (
        <div className="flex flex-row justify-start items-center p-4 gap-20 h-12 backdrop-blur-sm">
            <h3 className='text-lg space-x-2 font-bold'>OneForAll</h3>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/courses" className='px-2 text-sm text-muted-foreground hover:text-violet-200'>Courses</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/quizzes" className='px-2 text-sm text-muted-foreground hover:text-violet-200'>Quizzes</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/lessons" className='px-2 text-sm text-muted-foreground hover:text-violet-200'>Lessons</Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export {NavBar};