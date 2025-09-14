// Комментарий: Типы данных приложения. Определяет структуры для членов семьи, элементов меню, списка покупок, бюджета и других сущностей. Используется для строгой типизации и предотвращения ошибок.

export interface FamilyMember {
  id: string;
  name: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
  goal: 'maintain' | 'lose' | 'gain';
  allergies: string[];
  preferences: string[];
}

export interface MenuItem {
  id: string;
  day: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  dish: string;
  calories: number;
  ingredients: string[];
  cooked: boolean;
}

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  price: number;
  category: string;
  purchased: boolean;
  partialQuantities: { [key: string]: number }; // Для частичных покупок
}

export interface Budget {
  limit: number;
  spent: number;
  items: {
    category: string;
    allocated: number;
    spent: number;
  }[];
}

export interface Recipe {
  id: string;
  dish: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
  }[];
  steps: {
    title: string;
    description: string;
    time?: number; // В минутах
  }[];
  totalTime: number;
}

export interface CalendarDay {
  date: Date;
  meals: MenuItem[];
  calories: number;
}