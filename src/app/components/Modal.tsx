'use client'

import { modalProps } from "@/app/types"
import { useRouter } from "next/navigation"

export default function Modal({ children }: modalProps) {
    const router = useRouter()

    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50">
            <div className="absolute inset-0 bg-slate-700/50" onClick={() => router.back()}></div>
            <div className="flex relative z-10 w-2/3 h-2/3">
                <button className="absolute z-12 top-5 right-5" onClick={() => router.back()}>
                    Закрыть
                </button>
                <div className="flex flex-col w-full h-full p-8 bg-white">
                    { children }
                </div>
            </div>
        </div>
    )
} 