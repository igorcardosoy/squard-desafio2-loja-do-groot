export enum PlantLabel {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

export interface Plant {
  id: string
  name: string
  subtitle: string
  type: string
  price: number
  discountPercentage: number
  label: PlantLabel
  features: string
  description: string
}
