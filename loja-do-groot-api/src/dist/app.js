"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const plant_types_routes_1 = __importDefault(require("./routes/plant-types.routes"));
const plant_routes_1 = __importDefault(require("./routes/plant.routes"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/plants', plant_routes_1.default);
app.use('/plant-types', plant_types_routes_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbConfig_1.default.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        yield dbConfig_1.default.sync();
        console.log('Modelos sincronizados com o banco de dados.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        process.exit(1);
    }
});
startServer();
exports.default = app;
