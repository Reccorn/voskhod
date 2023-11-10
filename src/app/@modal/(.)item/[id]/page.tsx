import Modal from "@/app/components/Modal"

export default async function Item({ params }: { params: { id: string } }) {
    const data = await fetch(`https://taxivoshod.ru/testapi/?w=item&id=${params.id}`, { cache: 'no-cache' })
        .then(res => res.json())

    return (
        <Modal>
            <h1 className="font-semibold text-3xl mb-8">{data.name}</h1>
            <p className="text-base">
                {data.text}
            </p>
        </Modal>
    )
}