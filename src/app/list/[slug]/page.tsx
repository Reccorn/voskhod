import ListItem from "@/app/components/ListItem"
import Pagination from "@/app/components/Pagination"
import { itemProps } from "@/app/types"
import React from "react"

export default async function List({ params }: { params: { slug: string } }) {
    const data = await fetch(`https://taxivoshod.ru/testapi/?w=list&page=${params.slug}`, { cache: 'force-cache' })
        .then(res => res.json())

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ul className="flex flex-col w-full">
                {data.items ? data.items.map((item: itemProps) =>
                    <ListItem id={item.id} name={item.name} key={item.id} />
                )
                    :
                    <h2>
                        Нет данных
                    </h2>
                }
            </ul>
            {data.pages > 1 &&
                <Pagination totalPages={data.pages} currentPage={data.page} />
            }
        </main>
    )
}
