import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import rightPlant from '../assets/right_plant.png'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import '../styles/Register.css'

enum PlantLabel {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

type PlantType = {
  id: number
  name: string
}

const plantSchema = z.object({
  plantName: z.string().min(2),
  plantSubtitle: z.string().min(5),
  plantType: z.string().min(2),
  plantPrice: z
    .number({ message: 'Price must be a number' })
    .positive({ message: 'Price must be positive' }),
  plantDiscountPercentage: z
    .number({ message: 'Discount must be a number' })
    .int({ message: 'Discount must be an integer' })
    .min(0, { message: 'Discount must be positive' })
    .max(100, { message: 'Discount must be less than 100' }),
  plantLabel: z.nativeEnum(PlantLabel),
  plantFeatures: z.string().min(10),
  plantDescription: z.string().min(15),
  plantImgUrl: z.string().min(5),
})

type IFormInput = z.infer<typeof plantSchema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(plantSchema),
  })

  const handlePlantRegistration = async (data: IFormInput) => {
    if (!data) return

    let plantTypes = await axios.get('http://localhost:3000/plant-types/')
    if (plantTypes.data.length === 0) {
      await axios.post('http://localhost:3000/plant-types/', {
        name: 'Indoor',
      })
      await axios.post('http://localhost:3000/plant-types/', {
        name: 'Outdoor',
      })

      plantTypes = await axios.get('http://localhost:3000/plant-types/')
      plantTypes = plantTypes.data
    }

    const plantLabelId = data.plantLabel === 'Indoor' ? 1 : 2

    if (plantTypes.data.length === 0) {
      plantTypes.data.forEach((plantType: PlantType) => {
        if (plantType.name === data.plantType) {
          return
        }
      })
    }

    await axios.post('http://localhost:3000/plant-types/', {
      name: data.plantType,
    })

    plantTypes = await axios.get('http://localhost:3000/plant-types/')

    let plantTypeId: number | undefined
    plantTypes.data.forEach((plantType: PlantType) => {
      if (plantType.name === data.plantType) {
        plantTypeId = plantType.id
      }
    })

    if (!plantTypeId) {
      throw new Error('Plant type not found')
    }

    const payload = {
      name: data.plantName,
      subtitle: data.plantSubtitle,
      plantTypeId: [plantLabelId, plantTypeId],
      price: data.plantPrice,
      isInSale: true,
      discountPercentage: data.plantDiscountPercentage,
      features: data.plantFeatures,
      description: data.plantDescription,
      imgUrl: data.plantImgUrl,
    }

    axios.post('http://localhost:3000/plants/', payload)

    window.location.href = '/'
  }

  return (
    <div className='register'>
      <div className='form-container'>
        <h1>Plant registration</h1>
        <form onSubmit={handleSubmit(handlePlantRegistration)} method='post'>
          <Input label='Plant name' {...register('plantName')} />
          {errors.plantName?.message && (
            <p className='error'>{errors.plantName?.message}</p>
          )}

          <Input label='Plant subtitle' {...register('plantSubtitle')} />
          {errors.plantSubtitle?.message && (
            <p className='error'>{errors.plantSubtitle?.message}</p>
          )}

          <Input label='Image URL' {...register('plantImgUrl')} />
          {errors.plantImgUrl?.message && (
            <p className='error'>{errors.plantImgUrl?.message}</p>
          )}

          <Input label='Plant type' {...register('plantType')} />
          {errors.plantType?.message && (
            <p className='error'>{errors.plantType?.message}</p>
          )}

          <div className='flex-row'>
            <Input
              label='Price'
              type='number'
              step={0.01}
              {...register('plantPrice', { valueAsNumber: true })}
            />
            {errors.plantPrice?.message && (
              <p className='error'>{errors.plantPrice?.message}</p>
            )}

            <Input
              label='Discount percentage'
              type='number'
              {...register('plantDiscountPercentage', { valueAsNumber: true })}
            />
            {errors.plantDiscountPercentage?.message && (
              <p className='error'>{errors.plantDiscountPercentage?.message}</p>
            )}
          </div>

          <div className='flex-row radio-group'>
            <span>Label</span>
            <div className='flex-row'>
              <Input
                label='Indoor'
                type='radio'
                value='Indoor'
                className='radio'
                {...register('plantLabel')}
              />
              <Input
                label='Outdoor'
                type='radio'
                value='Outdoor'
                className='radio'
                {...register('plantLabel')}
              />
            </div>
          </div>

          <TextArea label='Features' {...register('plantFeatures')} />
          {errors.plantFeatures?.message && (
            <p className='error'>{errors.plantFeatures?.message}</p>
          )}

          <TextArea label='Description' {...register('plantDescription')} />
          {errors.plantDescription?.message && (
            <p className='error'>{errors.plantDescription?.message}</p>
          )}

          <Button text='Register' type='submit' />
        </form>
      </div>
      <img
        className='hero-right-plant'
        src={rightPlant}
        alt='A plant on the right side of the page'
        id='right-plant'
      />
    </div>
  )
}
export default Register
