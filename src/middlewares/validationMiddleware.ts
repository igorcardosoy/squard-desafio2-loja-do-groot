import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

// Define o esquema de validação com Yup
const plantSchema = yup.object().shape({
  name: yup.string().required('O nome da planta é obrigatório'),
  subtitle: yup.string().required('O subtítulo da planta é obrigatório'),
  price: yup.number().required('O preço da planta é obrigatório').positive('O preço deve ser positivo'),
  discountPercentage: yup
    .number()
    .nullable()
    .min(0, 'O desconto não pode ser menor que 0%')
    .max(100, 'O desconto não pode ser maior que 100%'),
  description: yup.string().required('A descrição da planta é obrigatória'),
  imgUrl: yup.string().url('A URL da imagem deve ser válida').required('A URL da imagem é obrigatória'),
  plantTypeId: yup.number().required('O tipo da planta é obrigatório'),
});

// Middleware de validação
export const validatePlant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Valida os dados do corpo da requisição
    await plantSchema.validate(req.body, { abortEarly: false });
    next(); // Continua para o próximo middleware/controlador se a validação passar
  } catch (error: any) {
    res.status(400).json({ errors: error.errors }); // Retorna erros detalhados em formato JSON
  }
};
