import { NavBar } from "@/components/nav-bar";
import RedirectButton from "@/components/redirect-button";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses_examples } from "@/constants";
import Link from "next/link";

export default function Home() {
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
                      <Link href="/courses" className='px-2 text-sm text-muted-foreground hover:text-violet-400'>Courses</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <Link href="/quizzes" className='px-2 text-sm text-muted-foreground hover:text-violet-400'>Quizzes</Link>
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
            {courses_examples.map((course)=> (
              <Card>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-2 md:flex-row md:gap-8">
                  <RedirectButton label="Open" href={`/course/${course.id}`} />
                  <RedirectButton label="Subscribe" href={`/course/${course.id}/subscription`} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
