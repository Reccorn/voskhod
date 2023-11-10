import Link from "next/link"

export default async function Item({ params }: { params: { id: string } }) {
    const data = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${params.id}`, { cache: 'no-cache' })
        .then(res => res.json())

    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
            <Link href={'/list/1'} className="absolute inset-0 bg-slate-700/50"></Link>
            <div className="flex relative z-10 w-2/3 h-2/3">
                <Link href={'/list/1'} className="absolute z-12 top-5 right-5">
                    Закрыть
                </Link>
                <div className="flex flex-col w-full h-full p-8 bg-white">
                    <h1 className="font-semibold text-3xl mb-8">{data.name}</h1>
                    <p className="text-base">
                        {data.text}
                    </p>
                </div>
            </div>
        </div>
    )
}