import Link from "next/link";
import { speak } from "@/lib/text-to-speech";

interface RedirectButtonProps {
    href: string;
    label: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({href, label}) => {
    return (
        <Link href={href} className="text-violet-500 hover:text-violet-600 transition duration-200"  onMouseOver={()=>speak(label)}>
            {label}
        </Link>
    )
}

export default RedirectButton;