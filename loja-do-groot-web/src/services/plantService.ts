import axios from 'axios'
import { PlantType } from '../models/Plant'
import { IFormInput, PlantLabel } from '../validation/plantSchema'

export const createDefaultPlantType = async (): Promise<PlantType[]> => {
  let plantTypes = await fetchPlantTypes()
  if (plantTypes.length === 0) {
    await createPlantType('Indoor')
    await createPlantType('Outdoor')
    plantTypes = await fetchPlantTypes()
  }

  return plantTypes
}

export const createPlantTypeIfNotExists = async (
  plantTypes: PlantType[],
  data: IFormInput
): Promise<number> => {
  let plantTypeId = getPlantTypeId(plantTypes, data.plantType)
  if (!plantTypeId) {
    await createPlantType(data.plantType)
    plantTypes = await fetchPlantTypes()
    plantTypeId = getPlantTypeId(plantTypes, data.plantType)
  }

  if (!plantTypeId) {
    throw new Error('Plant type not found')
  }

  return Number(plantTypeId)
}

export const getPlantLabelId = (plantLabel: PlantLabel): number => {
  return plantLabel === PlantLabel.Indoor ? 1 : 2
}

export const fetchPlantTypes = async (): Promise<PlantType[]> => {
  const response = await axios.get('http://localhost:3000/plant-types/')
  return response.data
}

export const createPlantType = async (name: string): Promise<void> => {
  await axios.post('http://localhost:3000/plant-types/', { name })
}

export const getPlantTypeId = (
  plantTypes: PlantType[],
  plantTypeName: string
): string | undefined => {
  const plantType = plantTypes.find(
    pt => pt.name.toLowerCase() === plantTypeName.toLowerCase()
  )
  return plantType ? String(plantType.id) : undefined
}
