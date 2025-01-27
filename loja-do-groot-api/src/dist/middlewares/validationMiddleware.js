"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePlant = void 0;
const yup = __importStar(require("yup"));
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
    features: yup.string().required('A feature da planta é obrigatória'),
    imgUrl: yup.string().url('A URL da imagem deve ser válida').required('A URL da imagem é obrigatória')
});
// Middleware de validação
const validatePlant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Valida os dados do corpo da requisição
        yield plantSchema.validate(req.body, { abortEarly: false });
        next(); // Continua para o próximo middleware/controlador se a validação passar
    }
    catch (error) {
        res.status(400).json({ errors: error.errors }); // Retorna erros detalhados em formato JSON
    }
});
exports.validatePlant = validatePlant;
