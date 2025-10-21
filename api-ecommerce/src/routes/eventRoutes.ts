// /api-ecommerce/src/routes/eventRoutes.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
export const eventRoutes = Router();

// Define um "schema" para validar os dados que chegam
const eventSchema = z.object({
  eventType: z.string(),
  productId: z.string().uuid(),
  userId: z.string(),
});

// Rota para registrar um novo evento de interação
eventRoutes.post('/events', async (req, res) => {
  try {
    const data = eventSchema.parse(req.body);
    const newEvent = await prisma.interactionEvent.create({
      data: {
        eventType: data.eventType,
        productId: data.productId,
        userId: data.userId,
      },
    });
    console.log('Evento registrado:', newEvent);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos', details: error });
  }
});