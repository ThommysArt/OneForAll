import { NavBar } from "@/components/nav-bar";
import RedirectButton from "@/components/redirect-button";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubsForm from "./_components/subs-form";
import { courses_examples } from "@/constants";

export default function SubscriptionPage({params}: {params: {courseId: number}}) {
    const course = courses_examples.filter((course)=>course.id===+params.courseId)[0]
    return (
        <div className="flex flex-col">
            <NavBar />
            <Card className="m-4 md:m-8 ">
                <CardHeader>
                <div className="grid">
                    <div className="flex flex-row justify-between items-center px-2 md:px:4">
                    <div className="flex flex-row items-center">
                        <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <Link href="/course" className='px-2 text-sm text-muted-foreground hover:text-violet-400'>Course</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                            <Link href="/subscription" className='px-2 text-sm text-muted-foreground hover:text-violet-400'>Subscription</Link>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <SearchBar />
                    </div>
                </div>
                </CardHeader>
                <CardContent>
                    <SubsForm course_id={course.id} course_name={course.title} />
                </CardContent>
            </Card>
        </div>
    )
}