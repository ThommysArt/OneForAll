import { NavBar } from "@/components/nav-bar";
import RedirectButton from "@/components/redirect-button";
import { SearchBar } from "@/components/search-bar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses_examples, quizzes_examples, questions_examples, options_examples } from "@/constants";
import Link from "next/link";


export default function Page ({params}: {params: {courseId: number, quizId: number}}) {
    const quiz = quizzes_examples.filter((quiz)=>quiz.id===+params.quizId)[0]
    const questions = questions_examples.filter((question)=>question.quizId===+params.quizId)
    return (
        <div className="flex flex-col">
            <NavBar />
            <Card className="m-4 md:m-8 ">
                <CardHeader>
                    <CardTitle>Quiz</CardTitle>
                    <CardDescription>{quiz.title}</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="flex flex-col gap-4 overscroll-y-auto">
                    
                </div>
                </CardContent>
            </Card>
        </div>
    )
}