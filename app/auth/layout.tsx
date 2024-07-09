import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OneForAll | Auth",
    description: "E-learning",
  };

export default function AuthLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex min-h-screen justify-center items-center">
            {children}
        </div>
    )
}