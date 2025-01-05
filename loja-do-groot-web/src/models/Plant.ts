export interface Plant {
  id: string
  name: string
  subtitle: string
  plantTypeId: Array<number>
  price: number
  isInSale: boolean
  discountPercentage: number
  features: string
  description: string
  imgUrl: string
}

export interface PlantType {
  id: number
  name: string
}
