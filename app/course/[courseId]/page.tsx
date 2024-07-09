"use client"
import { NavBar } from "@/components/nav-bar";
import RedirectButton from "@/components/redirect-button";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { quizzes_examples } from "@/constants";
import { TimerIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default async function CoursePage({params}: {params: {courseId: number}}) {
  const course_quizzes = await quizzes_examples.filter((quiz)=>quiz.courseId===+params.courseId)

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
                      <Link href={`/course/${params.courseId}`} className='px-2 text-sm text-muted-foreground hover:text-violet-400'>{params.courseId}</Link>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <SearchBar />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 overscroll-y-auto">
            <h2 className="text-lg font-bold">Quizzes</h2>
            <Separator />
            {course_quizzes.map((quiz)=>(
              <Card>
                <CardHeader>
                  <CardTitle>{quiz.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <RedirectButton label="Start" href={`/course/${quiz.courseId}/quiz/${quiz.id}`} />
                </CardFooter>
              </Card>
            ))}
            <Separator className="mt-24" />
            <h2 className="text-lg font-bold">Lessons</h2>
            <Separator />
            <Card>
              <CardHeader>
                <CardTitle>Course Title</CardTitle>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias, illum quis iure modi delectus quibusdam quas iusto, doloremque nemo pariatur laboriosam facilis omnis perferendis quasi aliquid veritatis enim odit.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Open</Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
