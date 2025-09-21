import React from 'react';
import { Screen } from '../types';

interface RecipeScreenProps {
    setScreen: (screen: Screen) => void;
    meal: any; // In a real app, you'd create a strict type for this
}

const RecipeScreen: React.FC<RecipeScreenProps> = ({ setScreen, meal }) => {
  if (!meal || !meal.recipe) {
    return (
      <div className="screen" id="recipe-screen">
        <div className="recipe-header">
            <button className="back-button" onClick={() => setScreen('main')}>&larr; Назад</button>
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Ошибка</h2>
            <p>Рецепт не найден или не может быть отображен.</p>
        </div>
      </div>
    );
  }

  const { name, recipe } = meal;

  return (
    <div className="screen active" id="recipe-screen">
        <div className="recipe-header">
            <button className="back-button" onClick={() => setScreen('main')}>&larr; Назад</button>
            <h2 id="recipe-title">{name}</h2>
        </div>

        <div id="settings-content"> {/* Using settings-content for padding */}
            <p style={{textAlign: 'center', margin: '-10px 0 20px', color: '#777'}}>{recipe.description}</p>

            <div style={{display: 'flex', justifyContent: 'space-around', textAlign: 'center', background: '#f9f9f9', padding: '15px', borderRadius: '12px', marginBottom: '20px'}}>
                <div>
                    <div><strong>Подготовка</strong></div>
                    <div>{recipe.prepTime}</div>
                </div>
                <div>
                    <div><strong>Готовка</strong></div>
                    <div>{recipe.cookTime}</div>
                </div>
                <div>
                    <div><strong>Порции</strong></div>
                    <div>{recipe.servings}</div>
                </div>
            </div>

            <div className="settings-section" style={{paddingTop: '10px'}}>
                <h3 className="settings-title">Ингредиенты</h3>
                <ul id="step-ingredients">
                    {recipe.ingredients.map((ing, index) => (
                        <li key={index}>
                            <span>{ing.name}</span>
                            <span className="ingredient-quantity">{ing.quantity}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="settings-section" style={{paddingTop: '10px'}}>
                <h3 className="settings-title">Инструкции</h3>
                <ol style={{paddingLeft: '20px', lineHeight: '1.6'}}>
                    {recipe.steps.map((step, index) => (
                        <li key={index} style={{marginBottom: '15px'}}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    </div>
  );
};

export default RecipeScreen;
