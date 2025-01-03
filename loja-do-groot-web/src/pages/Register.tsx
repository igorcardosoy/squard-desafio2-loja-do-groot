import { useForm } from 'react-hook-form'
import rightPlant from '../assets/right_plant.png'
import Input from '../components/Input'
import '../styles/Register.css'

enum PlantLabel {
  Indoor = 'Indoor',
  Outdoor = 'Outdoor',
}

interface IFormInput {
  plantName: string
  plantSubtitle: string
  plantType: string
  plantPrice: number
  plantDiscountPercentage: number
  plantLabel: PlantLabel
  plantFeatures: string
  plantDescription: string
}

const Register = () => {
  const { register, handleSubmit } = useForm<IFormInput>()

  const handlePlantRegistration = (data: IFormInput) => {
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

          <Input label='Features' isTextArea {...register('plantFeatures')} />
          <Input
            label='Description'
            isTextArea
            {...register('plantDescription')}
          />
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
