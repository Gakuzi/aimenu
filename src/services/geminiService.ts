// Комментарий: Сервис для работы с Google Gemini API. Содержит функции для генерации меню, рецептов, списков покупок и расчета бюджета. Использует @google/generative-ai SDK для взаимодействия с API.

import { GoogleGenerativeAI } from '@google/generative-ai';
import { FamilyMember, MenuItem, Recipe, ShoppingListItem, Budget } from '../types';

// Получаем API ключ из переменных окружения
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Инициализируем Gemini API клиент
const genAI = new GoogleGenerativeAI(API_KEY);

// Модель для генерации
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export class GeminiService {
  // Генерация меню
  async generateMenu(family: FamilyMember[], days: number): Promise<MenuItem[]> {
    try {
      // Формируем промпт для генерации меню
      const prompt = this.createMenuPrompt(family, days);
      
      // Отправляем запрос к Gemini API
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Парсим ответ и возвращаем меню
      return this.parseMenuResponse(text, days);
    } catch (error) {
      console.error('Ошибка при генерации меню:', error);
      throw new Error('Не удалось сгенерировать меню. Проверьте API ключ и подключение к интернету.');
    }
  }

  // Генерация рецепта
  async generateRecipe(dish: string, family: FamilyMember[]): Promise<Recipe> {
    try {
      const prompt = this.createRecipePrompt(dish, family);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return this.parseRecipeResponse(text);
    } catch (error) {
      console.error('Ошибка при генерации рецепта:', error);
      throw new Error(`Не удалось сгенерировать рецепт для ${dish}`);
    }
  }

  // Генерация списка покупок
  async generateShoppingList(menu: MenuItem[]): Promise<ShoppingListItem[]> {
    try {
      const prompt = this.createShoppingListPrompt(menu);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return this.parseShoppingListResponse(text);
    } catch (error) {
      console.error('Ошибка при генерации списка покупок:', error);
      throw new Error('Не удалось сгенерировать список покупок');
    }
  }

  // Расчет бюджета
  async calculateBudget(shoppingList: ShoppingListItem[], family: FamilyMember[]): Promise<Budget> {
    try {
      const prompt = this.createBudgetPrompt(shoppingList, family);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return this.parseBudgetResponse(text);
    } catch (error) {
      console.error('Ошибка при расчете бюджета:', error);
      throw new Error('Не удалось рассчитать бюджет');
    }
  }

  // Создание промпта для генерации меню
  private createMenuPrompt(family: FamilyMember[], days: number): string {
    return `
      Создай меню на ${days} дней для семьи из ${family.length} человек.
      
      Члены семьи:
      ${family.map(member => `
        - ${member.name}, ${member.age} лет, ${member.weight} кг, ${member.height} см
          Уровень активности: ${member.activityLevel}
          Цель: ${member.goal}
          Аллергии: ${member.allergies.join(', ') || 'нет'}
          Предпочтения: ${member.preferences.join(', ') || 'нет'}
      `).join('')}
      
      Требования:
      1. Для каждого дня укажи завтрак, обед, ужин и перекус
      2. Учитывай аллергии и предпочтения каждого члена семьи
      3. Рассчитай калорийность каждого блюда с учетом целей каждого члена семьи
      4. Не повторяй блюда в один день
      5. Возвращай результат в формате JSON с полями: day, mealType, dish, calories, ingredients
      
      Пример формата:
      [
        {
          "day": "Понедельник",
          "mealType": "breakfast",
          "dish": "Овсяная каша с фруктами",
          "calories": 450,
          "ingredients": ["овсянка", "молоко", "банан", "яблоко"]
        }
      ]
    `;
  }

  // Создание промпта для генерации рецепта
  private createRecipePrompt(dish: string, family: FamilyMember[]): string {
    return `
      Создай рецепт для блюда: "${dish}"
      
      Члены семьи:
      ${family.map(member => `
        - ${member.name}: аллергии - ${member.allergies.join(', ') || 'нет'}, предпочтения - ${member.preferences.join(', ') || 'нет'}
      `).join('')}
      
      Требования:
      1. Учитывай аллергии и предпочтения членов семьи
      2. Укажи список ингредиентов с количеством
      3. Опиши пошаговый процесс приготовления
      4. Укажи общее время приготовления
      5. Возвращай результат в формате JSON с полями: dish, ingredients, steps, totalTime
      
      Пример формата:
      {
        "dish": "${dish}",
        "ingredients": [
          {
            "name": "ингредиент",
            "quantity": 100,
            "unit": "г"
          }
        ],
        "steps": [
          {
            "title": "Шаг 1",
            "description": "Описание шага",
            "time": 5
          }
        ],
        "totalTime": 30
      }
    `;
  }

  // Создание промпта для генерации списка покупок
  private createShoppingListPrompt(menu: MenuItem[]): string {
    return `
      Создай список покупок на основе следующего меню:
      
      Меню:
      ${menu.map(item => `
        - ${item.day}: ${item.mealType} - ${item.dish} (${item.calories} ккал)
          Ингредиенты: ${item.ingredients.join(', ')}
      `).join('')}
      
      Требования:
      1. Агрегируй одинаковые ингредиенты
      2. Укажи количество для каждого ингредиента
      3. Добавь примерную цену для каждого ингредиента (в рублях)
      4. Сгруппируй по категориям (мясо, овощи, крупы и т.д.)
      5. Возвращай результат в формате JSON с полями: name, quantity, unit, price, category, purchased
      
      Пример формата:
      [
        {
          "name": "куриная грудка",
          "quantity": 500,
          "unit": "г",
          "price": 150,
          "category": "мясо",
          "purchased": false
        }
      ]
    `;
  }

  // Создание промпта для расчета бюджета
  private createBudgetPrompt(shoppingList: ShoppingListItem[], family: FamilyMember[]): string {
    const totalCost = shoppingList.reduce((sum, item) => sum + item.price, 0);
    
    return `
      Рассчитай бюджет для семьи из ${family.length} человек на основе списка покупок.
      
      Список покупок:
      ${shoppingList.map(item => `
        - ${item.name}: ${item.quantity} ${item.unit} - ${item.price} руб.
      `).join('')}
      
      Общая стоимость: ${totalCost} руб.
      
      Члены семьи:
      ${family.map(member => `
        - ${member.name}: цель - ${member.goal}
      `).join('')}
      
      Требования:
      1. Распредели бюджет по категориям (мясо, овощи, крупы и т.д.)
      2. Укажи лимит по каждой категории
      3. Добавь предупреждения, если бюджет превышен
      4. Возвращай результат в формате JSON с полями: limit, spent, items
      
      Пример формата:
      {
        "limit": ${totalCost},
        "spent": 0,
        "items": [
          {
            "category": "мясо",
            "allocated": 500,
            "spent": 0
          }
        ]
      }
    `;
  }

  // Парсинг ответа с меню
  private parseMenuResponse(text: string, _days: number): MenuItem[] {
    try {
      // Извлекаем JSON из ответа
      const jsonStart = text.indexOf('[');
      const jsonEnd = text.lastIndexOf(']') + 1;
      const jsonString = text.substring(jsonStart, jsonEnd);
      
      // Парсим JSON
      const menu: MenuItem[] = JSON.parse(jsonString);
      
      // Добавляем ID к каждому элементу
      return menu.map((item, index) => ({
        ...item,
        id: `menu-${Date.now()}-${index}`,
        cooked: false
      }));
    } catch (error) {
      console.error('Ошибка при парсинге меню:', error);
      throw new Error('Не удалось распарсить ответ с меню');
    }
  }

  // Парсинг ответа с рецептом
  private parseRecipeResponse(text: string): Recipe {
    try {
      // Извлекаем JSON из ответа
      const jsonStart = text.indexOf('{');
      const jsonEnd = text.lastIndexOf('}') + 1;
      const jsonString = text.substring(jsonStart, jsonEnd);
      
      // Парсим JSON
      const recipe: Recipe = JSON.parse(jsonString);
      
      // Добавляем ID
      return {
        ...recipe,
        id: `recipe-${Date.now()}`
      };
    } catch (error) {
      console.error('Ошибка при парсинге рецепта:', error);
      throw new Error('Не удалось распарсить ответ с рецептом');
    }
  }

  // Парсинг ответа со списком покупок
  private parseShoppingListResponse(text: string): ShoppingListItem[] {
    try {
      // Извлекаем JSON из ответа
      const jsonStart = text.indexOf('[');
      const jsonEnd = text.lastIndexOf(']') + 1;
      const jsonString = text.substring(jsonStart, jsonEnd);
      
      // Парсим JSON
      const shoppingList: ShoppingListItem[] = JSON.parse(jsonString);
      
      // Добавляем ID к каждому элементу
      return shoppingList.map((item, index) => ({
        ...item,
        id: `shopping-${Date.now()}-${index}`,
        purchased: false,
        partialQuantities: {}
      }));
    } catch (error) {
      console.error('Ошибка при парсинге списка покупок:', error);
      throw new Error('Не удалось распарсить ответ со списком покупок');
    }
  }

  // Парсинг ответа с бюджетом
  private parseBudgetResponse(text: string): Budget {
    try {
      // Извлекаем JSON из ответа
      const jsonStart = text.indexOf('{');
      const jsonEnd = text.lastIndexOf('}') + 1;
      const jsonString = text.substring(jsonStart, jsonEnd);
      
      // Парсим JSON
      const budget: Budget = JSON.parse(jsonString);
      
      return {
        ...budget,
        spent: 0
      };
    } catch (error) {
      console.error('Ошибка при парсинге бюджета:', error);
      throw new Error('Не удалось распарсить ответ с бюджетом');
    }
  }
}

// Экземпляр сервиса
export const geminiService = new GeminiService();