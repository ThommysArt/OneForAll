import { SideBar } from "@/components/side-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "OneForAll | Dashboard",
    description: "E-learning platform for outsourcing.",
  };

export default function DashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-row">
            <SideBar mode="default" />
        </div>
    )
}