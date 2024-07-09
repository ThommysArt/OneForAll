"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePicker from "@/components/date-picker";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { handleMouseHover, readCharAloud } from "@/lib/text-to-speech";

export default function SubsForm ({course_id, course_name}: {course_id: number, course_name: string}) {
    const [firstName, setFirstName] = useState<string | null>(null)
    const [lastName, setLastName] = useState<string | null>(null)
    const [cardNumber, setCardNumber] = useState<string | null>(null)
    const [expiryDate, setExpiryDate] = React.useState<Date>()
    const [cvv, setCvv] = useState<string | null>(null)
    const router = useRouter()

    const subscribe = () => {
        if (firstName===null || lastName===null || cardNumber===null || expiryDate===null || cvv===null) {
            toast({
                title: "Subscription Error",
                description: "Please fill out all the required fields",
                variant: "destructive"
            })
        }
        toast({
            title: "Subscription Successful",
            description: `You can now access the course: ${course_name}`
        })
        router.push(`/course/${course_id}`)
    }
    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl" onMouseOver={()=>handleMouseHover("Subscription")}>Subscription</CardTitle>
                <CardDescription onMouseOver={()=>handleMouseHover("Enter your Bank card Details. Visa and Mastercards are supported")}>
                    Enter your Bank card Details. Visa and Mastercards are supported
                </CardDescription>
            </CardHeader>
                <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="first-name" onMouseOver={()=>handleMouseHover("first name")}>First name</Label>
                        <Input id="first-name" placeholder="Ryan" onChange={(e)=>{setFirstName(e.target.value);readCharAloud(e.target.value.slice(-1))}} required />
                        </div>
                        <div className="grid gap-2">
                        <Label htmlFor="last-name" onMouseOver={()=>handleMouseHover("last name")}>Last name</Label>
                        <Input id="last-name" placeholder="Robinson" onChange={(e)=>{setLastName(e.target.value);readCharAloud(e.target.value.slice(-1))}}  required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="Card Number"  onMouseOver={()=>handleMouseHover("Card Number")}>Card Number</Label>
                        <Input
                        id="card"
                        type="card"
                        placeholder="XXXX-XXXX-XXXX-XXXX"
                        onChange={(e)=>{setCardNumber(e.target.value);readCharAloud(e.target.value.slice(-1))}} 
                        required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                        <Label htmlFor="date"  onMouseOver={()=>handleMouseHover("Expiry Date")}>Expiry Date</Label>
                        <DatePicker date={expiryDate!} setDate={setExpiryDate}/>
                        </div>
                        <div className="grid gap-2">
                        <Label htmlFor="cvv" onMouseOver={()=>handleMouseHover("CVV")}>CVV</Label>
                        <Input id="cvv" placeholder="000" onChange={(e)=>{setCvv(e.target.value);readCharAloud(e.target.value.slice(-1))}}  required />
                        </div>
                    </div>
                    <Button type="submit" className="w-full" onClick={subscribe}  onMouseOver={()=>handleMouseHover("Subscribe")}>
                        Subscribe
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm"  onMouseOver={()=>handleMouseHover("Protected by")}>
                    Protected by {" "}
                <Link href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjAnfr605mHAxXGlYMHHY8sBC8YABAAGgJlZg&gclid=Cj0KCQjwv7O0BhDwARIsAC0sjWM1TYsIePemyrTJDnlF6l9NMIccnJKXITk79AsvUv5UZhQ__Lph1g0aAhJlEALw_wcB&ohost=www.google.com&cid=CAESV-D28NSSuPcbQRTHBjkcPhZG3K4jtMkhUTRhMxFemns0iilEwPBgBz6NjZCQop_FfFN2fSfa2EagZSqmn8-SwVuPUQInvaqXGwEJjPsmyRT8xik48GeyYg&sig=AOD64_3N0QqT7Hgr7IqOCUbbv20xyTBdJg&q&adurl&ved=2ahUKEwjk0PL605mHAxXp7rsIHVV7DxsQ0Qx6BAgGEAE" className="underline text-violet-500"onMouseOver={()=>handleMouseHover("Stripe")} >
                    Stripe
                </Link>
                </div>
            </CardContent>
        </Card>
    )
}
