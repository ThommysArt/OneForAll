"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useState } from "react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
  

interface searchBarProps {
}

export const SearchBar: React.FC<searchBarProps> = () => {
    const router = useRouter()


    return (
        <div className="flex flex-row items-center">
            <Input className="rounded-l-lg rounded-r-none" placeholder="Search..."/>
            <DropdownMenu>
                <DropdownMenuTrigger><Button size="icon" className="rounded-r-lg rounded-l-none"><MagnifyingGlassIcon /></Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Sneakers</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

