import { GoogleGenerativeAI, GenerationConfig } from "@google/generative-ai";

// Function to generate a weekly menu using the Gemini API
export const generateWeeklyMenu = async (apiKey: string, userPromptData: any) => {
  if (!apiKey) {
    throw new Error("API ключ не предоставлен.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI ? genAI.getGenerativeModel({ model: "gemini-1.0-pro" }) : null;

  const generationConfig: GenerationConfig = {
    temperature: 0.7,
    topK: 1,
    topP: 1,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  // Constructing the detailed prompt
  const prompt = `
    Пожалуйста, создай подробный план меню на 7 дней для семьи.

    Вот информация о семье:
    - Название семьи: ${userPromptData.familyName || 'Не указано'}
    - Члены семьи: ${userPromptData.familyMembers.join(', ') || 'Не указано'}

    Вот их предпочтения и ограничения:
    - Общие предпочтения: ${userPromptData.preferences || 'Нет особых предпочтений'}
    - Диетические ограничения или аллергии: ${userPromptData.dietaryRestrictions || 'Нет'}
    - Доступная кухонная техника: ${userPromptData.kitchenAppliances || 'Стандартный набор (плита, духовка)'}

    Требования к меню:
    1.  Создай меню на 7 дней, начиная с завтрашнего дня.
    2.  Для каждого дня предоставь три блюда: Завтрак, Обед и Ужин.
    3.  Блюда должны быть разнообразными, здоровыми и сбалансированными.
    4.  Учитывай, что некоторые обеды могут быть остатками ужина предыдущего дня. Если это так, поле "recipe" для этого блюда должно быть null.

    Пожалуйста, верни результат в виде строгого JSON-объекта без какого-либо другого текста или форматирования.
    Структура JSON для каждого блюда должна быть следующей:
    {
      "name": "Название блюда",
      "isLeftover": false,
      "recipe": {
        "description": "Краткое описание блюда.",
        "ingredients": [
          { "name": "Ингредиент 1", "quantity": "1 шт" },
          { "name": "Ингредиент 2", "quantity": "200 г" }
        ],
        "steps": [
          "Шаг 1: Подготовка...",
          "Шаг 2: Приготовление..."
        ],
        "prepTime": "15 минут",
        "cookTime": "30 минут",
        "servings": ${userPromptData.familyMembers.length || 2}
      }
    }

    Общая структура ответа:
    {
      "weekMenu": [
        {
          "day": "Понедельник",
          "date": "YYYY-MM-DD",
          "meals": {
            "breakfast": { ... структура блюда ... },
            "lunch": { ... структура блюда ... },
            "dinner": { ... структура блюда ... }
          }
        },
        // ... и так далее для всех 7 дней
      ]
    }
    Заполни поле "date" актуальными датами для следующих 7 дней.
  `;

  try {
    const result = await model.generateContent(prompt, generationConfig);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/^```json\s*|```\s*$/g, '');
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Ошибка при вызове Gemini API:", error);
    throw new Error("Не удалось сгенерировать меню. Проверьте ваш API-ключ и настройки.");
  }
};
