import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import rightPlant from '../assets/right_plant.png'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { PlantLabel } from '../models/Plant'
import '../styles/Register.css'

const plantSchema = z.object({
  plantName: z.string(),
  plantSubtitle: z.string(),
  plantType: z.string(),
  plantPrice: z.number().positive(),
  plantDiscountPercentage: z.number().int().min(0).max(100),
  plantLabel: z.nativeEnum(PlantLabel),
  plantFeatures: z.string(),
  plantDescription: z.string(),
})

type IFormInput = z.infer<typeof plantSchema>

const Register = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    resolver: zodResolver(plantSchema),
  })

  const handlePlantRegistration = (data: IFormInput) => {
    // Send data to the backend
    console.log(data)
  }

  return (
    <div className='register'>
      <div className='form-container'>
        <h1>Plant registration</h1>
        <form onSubmit={handleSubmit(handlePlantRegistration)} method='post'>
          <Input label='Plant name' {...register('plantName')} />
          <Input label='Plant subtitle' {...register('plantSubtitle')} />
          <Input label='Plant type' {...register('plantType')} />

          <div className='flex-row'>
            <Input label='Price' name='plantPrice' type='number' />
            <Input
              label='Discount percentage'
              type='number'
              {...register('plantDiscountPercentage')}
            />
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
          <TextArea label='Description' {...register('plantDescription')} />
          <button type='submit'>Register</button>
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
