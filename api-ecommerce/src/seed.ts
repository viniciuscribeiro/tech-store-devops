// /api-ecommerce/src/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const productsToSeed = [
  {
    name: 'Notebook Gamer Avançado',
    description: 'Notebook com placa de vídeo RTX 4090 e 32GB de RAM.',
    price: 15000.0,
    imageUrl: 'https://i.imgur.com/Hff3oLI.jpeg',
  },
  {
    name: 'Mouse Gamer Pro',
    description: 'Mouse com 16000 DPI e 10 botões programáveis.',
    price: 450.0,
    imageUrl: 'https://i.imgur.com/uT24rqB.jpeg',
  },
  {
    name: 'Teclado Mecânico RGB',
    description: 'Teclado com switches blue e iluminação RGB customizável.',
    price: 600.0,
    imageUrl: 'https://i.imgur.com/y30rYp5.jpeg',
  },
  {
    name: 'Monitor UltraWide 4K',
    description: 'Monitor curvo de 34 polegadas com resolução 4K.',
    price: 3500.0,
    imageUrl: 'https://i.imgur.com/L3r0A2F.jpeg',
  },
  {
    name: 'Headset Gamer 7.1',
    description: 'Headset com som surround 7.1 e microfone com cancelamento de ruído.',
    price: 800.0,
    imageUrl: 'https://i.imgur.com/j8n6mHq.jpeg',
  },
];

export async function seedDatabase() {
  const productCount = await prisma.product.count();
  if (productCount === 0) {
    console.log('Banco de dados vazio, populando com dados...');
    for (const product of productsToSeed) {
      await prisma.product.create({ data: product });
    }
    console.log('Dados inseridos com sucesso!');
  } else {
    console.log('Banco de dados já contém dados.');
  }
}