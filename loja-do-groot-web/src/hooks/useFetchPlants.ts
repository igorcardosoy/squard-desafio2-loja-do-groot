import axios from 'axios'
import { useEffect, useState } from 'react'
import { Plant } from '../models/Plant'

interface UseFetchPlants {
  plants: Plant[]
  loading: boolean
  error: string | null
}

const useFetchPlants = () => {
  const [plants, setPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/plants/')
        setPlants(response.data)
      } catch (err) {
        setError('Failed to fetch plants: ' + err)
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  return { plants, loading, error } as UseFetchPlants
}

export default useFetchPlants
