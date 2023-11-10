import { paginationProps } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import arrow from '@/app/assets/arrow.svg'

export default function Pagination({ totalPages, currentPage }: paginationProps) {
    const numbers = []

    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i)
    }

    return (
        <div className="flex items-center">
            <Link href={`/list/${currentPage - 1}`} className={(currentPage <= 1 ? 'pointer-events-none opacity-30' : '') + ' rotate-180'} >
                <Image width={20} height={20} src={arrow} alt="Предыдущая страница" />
            </Link>
            <ul className="flex items-center">
                {numbers.map(slug =>
                    <Link href={`/list/${slug}`} key={slug} className={(slug === currentPage ? 'text-sky-500' : '') + ' m-5 font-medium'}>
                        {slug}
                    </Link>
                )}
            </ul>
            <Link href={`/list/${currentPage + 1}`} className={currentPage >= totalPages ? 'pointer-events-none opacity-30' : ''} >
                <Image width={20} height={20} src={arrow} alt="Следующая страница" />
            </Link>
        </div>
    )
}