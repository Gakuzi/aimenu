// Комментарий: Хук для запросов к Gemini API с react-query. Кэширует ответы, добавляет retry и error handling. Использует zod для validation JSON.

import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { geminiGenerateMenu } from '../services/geminiService';
import { MenuItem } from '../types';

const MenuSchema = z.array(z.object({
  day: z.string(),
  meal: z.enum(['breakfast', 'lunch', 'dinner']),
  dish: z.string(),
  ingredients: z.array(z.object({ name: z.string(), quantity: z.number(), unit: z.string() })),
  calories: z.number(),
  recipe: z.string(),
}));

export function useGeminiApi(familyData: any) {
  return useQuery<MenuItem[], Error>({
    queryKey: ['menu', familyData],
    queryFn: async () => {
      const response = await geminiGenerateMenu(familyData);
      const parsed = MenuSchema.safeParse(response);
      if (!parsed.success) {
        throw new Error('Неверный формат ответа от Gemini');
      }
      return parsed.data;
    },
    retry: 2,  // Retry при ошибке
  });
}