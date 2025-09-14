// Комментарий: Клиент для Gemini API. Формирует промпт с учетом персонализации (калории по Harris-Benedict, аллергии), отправляет запрос, парсит JSON.

import { calculateCalories } from '../utils/calorieCalculator';  // Формула Harris-Benedict

export async function geminiGenerateMenu(familyData: any): Promise<any> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error('Отсутствует ключ Gemini API');

  // Формирование промпта с персонализацией
  const prompt = `Генерируй меню на неделю для семьи: ${JSON.stringify(familyData.family)}. Учти калории: ${familyData.family.map((m: any) => calculateCalories(m)).join(', ')}. Аллергии: ${familyData.allergies}. Предпочтения: ${familyData.preferences}. Бюджет: ${familyData.budget}. Формат: JSON массив с объектами {day, meal, dish, ingredients: [{name, quantity, unit}], calories, recipe}.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await response.json();
    // Парсинг JSON из ответа (предполагаем, что в data.candidates[0].content.parts[0].text)
    return JSON.parse(data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error('Ошибка Gemini:', error);
    throw error;
  }
}