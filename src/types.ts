export type Screen = 'splash' | 'welcome' | 'setup' | 'main' | 'recipe' | 'settings';

export interface FamilyMember {
  id: string;
  name: string;
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goal: 'lose' | 'maintain' | 'gain';
}

export interface UserSettings {
  apiKey: string | null;
  family: FamilyMember[];
  preferences: string;
  menuDuration: number;
  totalBudget: number;
  cuisine: string;
  difficulty: string;
}

export interface Meal {
  breakfast: string;
  snack1: string;
  lunch: string;
  snack2: string;
  dinner: string;
}

export interface MenuItem {
  day: string;
  meals: Meal;
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface RecipeStep {
  description: string;
  time: number;
  ingredients: Ingredient[];
  imageUrl?: string;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

export interface ShoppingListItem {
  name: string;
  totalNeeded: { qty: number; unit: string };
  shoppingSuggestion: { qty: number; unit: string };
  price: number;
  purchases: { qty: number; price: number; date: string }[];
  consumedQty: number;
}

export interface ShoppingListCategory {
  category: string;
  items: ShoppingListItem[];
}

export interface CookedMeals {
  [dayName: string]: string[]; // array of meal keys (e.g., 'breakfast')
}

// The main state of the application
export interface AppState {
  settings: UserSettings;
  menu: MenuItem[];
  recipes: Record<string, Recipe>; // Using a record for easy lookup by recipe.id
  shoppingList: ShoppingListCategory[];
  cookedMeals: CookedMeals;
  timestamp: number | null;
}