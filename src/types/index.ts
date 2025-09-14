// Комментарий: Интерфейсы и типы для строгой типизации. Используются везде для props, state и API-ответов.

export interface FamilyMember {
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number;
  activityLevel: 'low' | 'medium' | 'high';
  allergies: string[];
  preferences: string[];
}

export interface MenuItem {
  day: string;
  meal: 'breakfast' | 'lunch' | 'dinner';
  dish: string;
  ingredients: { name: string; quantity: number; unit: string }[];
  calories: number;
  recipe: string;  // Шаги приготовления
}

export interface AppState {
  family: FamilyMember[];
  menu: MenuItem[];
  budget: number;
  shoppingList: { name: string; quantity: number; price: number; checked: boolean }[];
  // ... другие поля
}