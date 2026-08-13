export type productsDataResp = ProductsData[]

export interface ProductsData {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

export interface Rating {
    rate: number
    count: number
}
