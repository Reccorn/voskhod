import Link from "next/link"
import { itemProps } from "@/app/types"

export default function ListItem({ id, name }: itemProps) {
    return (
        <li className=" relative flex w-full items-center py-5 px-3 cursor-pointer font-medium text-lg rounded-xl border-2 mb-3 last:mb-0 border-transparent hover:border-sky-600 hover:text-sky-600">
            <Link href={`/item/${id}`} scroll={false} className="after:absolute after:inset-0">
                { name }
            </Link>
        </li>
    )
}