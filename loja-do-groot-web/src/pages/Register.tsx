import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import rightPlant from '../assets/images/right_plant.png'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import {
  createDefaultPlantType,
  createPlantTypeIfNotExists,
  getPlantLabelId,
} from '../services/plantService'
import '../styles/Register.css'
import { IFormInput, plantSchema } from '../validation/plantSchema'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(plantSchema),
  })

  const handlePlantRegistration = async (data: IFormInput) => {
    try {
      const plantTypes = await createDefaultPlantType()
      const plantLabelId = getPlantLabelId(data.plantLabel)

      let plantTypeId: number = 0
      try {
        plantTypeId = await createPlantTypeIfNotExists(plantTypes, data)
      } catch (error) {
        console.error('Failed to create plant type:', error)
        window.location.href = '/'
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

      await axios.post('http://localhost:3000/plants/', payload)
      window.location.href = '/'
    } catch (error) {
      console.error('Failed to register plant:', error)
      window.location.href = '/'
    }
  }

  return (
    <div className='register'>
      <div className='form-container'>
        <h1>Plant registration</h1>
        <form onSubmit={handleSubmit(handlePlantRegistration)} method='post'>
          <Input
            label='Plant name'
            placeholder='Echinocereus Cactus'
            {...register('plantName')}
          />
          {errors.plantName?.message && (
            <p className='error'>{errors.plantName?.message}</p>
          )}

          <Input
            label='Plant subtitle'
            placeholder='A majestic addition to your plant collection'
            {...register('plantSubtitle')}
          />
          {errors.plantSubtitle?.message && (
            <p className='error'>{errors.plantSubtitle?.message}</p>
          )}

          <Input
            label='Image URL'
            placeholder='https://example.com/plant.jpg'
            {...register('plantImgUrl')}
          />
          {errors.plantImgUrl?.message && (
            <p className='error'>{errors.plantImgUrl?.message}</p>
          )}

          <Input
            label='Plant type'
            placeholder='Cactus'
            {...register('plantType')}
          />
          {errors.plantType?.message && (
            <p className='error'>{errors.plantType?.message}</p>
          )}

          <div className='flex-row'>
            <Input
              label='Price'
              type='number'
              step={0.01}
              placeholder='$139.99'
              {...register('plantPrice', { valueAsNumber: true })}
            />
            {errors.plantPrice?.message && (
              <p className='error'>{errors.plantPrice?.message}</p>
            )}

            <Input
              label='Discount percentage'
              type='number'
              step={1}
              placeholder='20%'
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

          <TextArea
            label='Features'
            placeholder='Species: Echinocereus...'
            {...register('plantFeatures')}
          />
          {errors.plantFeatures?.message && (
            <p className='error'>{errors.plantFeatures?.message}</p>
          )}

          <TextArea
            label='Description'
            placeholder='Ladyfinger cactus...'
            {...register('plantDescription')}
          />
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
