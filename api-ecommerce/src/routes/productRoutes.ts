import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import axios from 'axios'; // Importamos o axios para fazer chamadas HTTP

const prisma = new PrismaClient();
export const productRoutes = Router();

// ROTA ORIGINAL: Para listar todos os produtos
productRoutes.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// NOVA ROTA: Para obter recomendações para um produto específico
productRoutes.get('/products/:id/recommendations', async (req, res) => {
  try {
    const { id: productId } = req.params;

    // 1. Buscar TODAS as interações do nosso banco de dados.
    // A IA precisa de todo o histórico para encontrar padrões.
    const allInteractions = await prisma.interactionEvent.findMany();

    // 2. Chamar o serviço de IA em Python que está rodando na porta 8000
    console.log(`Consultando serviço de IA para o produto: ${productId}`);
    const recommendationResponse = await axios.post('http://servico-ia:8000/recommendations', {
      productId: productId,
      interactions: allInteractions,
    });

    // O serviço de IA nos devolve uma lista de IDs: ['id1', 'id2', ...]
    const recommendedProductIds = recommendationResponse.data as string[];

    // Se a IA não retornou nenhum ID, devolvemos uma lista vazia.
    if (recommendedProductIds.length === 0) {
      return res.json([]); 
    }
    
    console.log(`IDs recomendados recebidos:`, recommendedProductIds);

    // 3. Com os IDs em mãos, buscamos os dados completos desses produtos no nosso banco.
    const recommendedProducts = await prisma.product.findMany({
      where: {
        id: {
          in: recommendedProductIds,
        },
      },
    });

    // 4. Enviamos a lista de produtos completos como resposta.
    res.json(recommendedProducts);

  } catch (error) {
    console.error("Erro ao buscar recomendações:", error);
    res.status(500).json({ message: "Não foi possível obter as recomendações." });
  }
});