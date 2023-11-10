import React from "react"

export interface itemProps {
    id: number,
    name: string
}
export interface modalProps {
    children: React.ReactNode
}
export interface paginationProps {
    totalPages: number,
    currentPage: number
}