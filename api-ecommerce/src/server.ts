// /api-ecommerce/src/server.ts
import express from 'express';
import cors from 'cors';
import { productRoutes } from './routes/productRoutes';
import { eventRoutes } from './routes/eventRoutes';
import { seedDatabase } from './seed';

const app = express();
const PORT = 3333;

app.use(cors()); // Permite que o frontend acesse a API
app.use(express.json()); // Habilita o uso de JSON no corpo das requisições

// Registra as rotas
app.use('/api', productRoutes);
app.use('/api', eventRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  // Popula o banco de dados com dados de exemplo ao iniciar
  seedDatabase();
});