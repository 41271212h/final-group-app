import './Recipe.css';
import React, { useState } from 'react';

const recipeList = [
  {
    name: 'Avocado Toast',
    description: 'Quick and easy avocado toast with a sprinkle of seasoning.',
    ingredients: ['1 avocado', '2 slices of bread', 'Salt', 'Pepper'],
    instructions: 'Mash the avocado, spread on toasted bread, and season to taste.',
    calories: 250,
    protein: 6,
    fat: 15,
    videoUrl: 'https://www.youtube.com/embed/li-pPc6KNho',
    imageUrl: '/images/recipe-a.jpg',
  },
  {
    name: 'Greek Yogurt Bowl',
    description: 'Healthy yogurt bowl topped with fruits and nuts.',
    ingredients: ['1 cup Greek yogurt', '1/2 cup mixed berries', '1 tbsp honey', '1 tbsp nuts'],
    instructions: 'Combine all ingredients in a bowl, drizzle with honey, and enjoy.',
    calories: 200,
    protein: 12,
    fat: 5,
    videoUrl: 'https://www.youtube.com/embed/2nWi37RKzmw',
    imageUrl: '/images/recipe2.jpg',
  },
  {
    name: 'Quinoa Salad',
    description: 'Nutritious salad with quinoa, vegetables, and a light dressing.',
    ingredients: ['1 cup cooked quinoa', '1 cup chopped vegetables', '2 tbsp olive oil', '1 tbsp lemon juice'],
    instructions: 'Mix all ingredients in a bowl and serve chilled.',
    calories: 300,
    protein: 10,
    fat: 12,
    videoUrl: 'https://www.youtube.com/embed/OQ9mU_zAtEs',
    imageUrl: '/images/recipe3.jpg',
  },
  {
    name: 'Chickpea Stew',
    description: 'Hearty stew packed with protein-rich chickpeas and vegetables.',
    ingredients: ['1 can chickpeas', '1 cup diced tomatoes', '1 cup spinach', '1 onion', '2 cloves garlic'],
    instructions: 'Sauté onion and garlic, add tomatoes and chickpeas, simmer, and add spinach until wilted.',
    calories: 250,
    protein: 12,
    fat: 4,
    videoUrl: 'https://www.youtube.com/embed/e1HjQFG4llU',
    imageUrl: '/images/recipe4.jpg',
  },
  {
    name: 'Oatmeal with Fruits',
    description: 'Warm oatmeal topped with seasonal fruits and nuts.',
    ingredients: ['1 cup rolled oats', '2 cups water or milk', '1 banana', '1 tbsp nuts'],
    instructions: 'Cook oats in water/milk, top with sliced banana and nuts before serving.',
    calories: 300,
    protein: 8,
    fat: 10,
    videoUrl: 'https://www.youtube.com/embed/Z4ceSWUGOQU',
    imageUrl: '/images/recipe5.jpg',
  },
  {
    name: 'Smoothie Bowl',
    description: 'Refreshing smoothie bowl with assorted toppings.',
    ingredients: ['1 cup spinach', '1 banana', '1/2 cup almond milk', '1/4 cup granola'],
    instructions: 'Blend spinach, banana, and almond milk until smooth, pour into a bowl, and top with granola.',
    calories: 200,
    protein: 5,
    fat: 5,
    videoUrl: 'https://www.youtube.com/embed/fXLYqqxB2wc',
    imageUrl: '/images/recipe6.jpg',
  },
  {
    name: 'Baked Salmon',
    description: 'Delicious salmon fillet baked with herbs and lemon.',
    ingredients: ['1 salmon fillet', '1 tbsp olive oil', '1 lemon', 'Salt and pepper'],
    instructions: 'Drizzle olive oil on salmon, season with salt and pepper, bake at 375°F for 15-20 minutes.',
    calories: 350,
    protein: 25,
    fat: 20,
    videoUrl: 'https://www.youtube.com/embed/9wCcTsaCUOE',
    imageUrl: '/images/recipe7.jpg',
  },
  {
    name: 'Vegetable Stir-Fry',
    description: 'Quick stir-fried vegetables in a savory sauce.',
    ingredients: ['2 cups mixed vegetables', '2 tbsp soy sauce', '1 tbsp olive oil', '1 clove garlic'],
    instructions: 'Sauté garlic in olive oil, add vegetables, stir-fry until cooked, then add soy sauce.',
    calories: 150,
    protein: 5,
    fat: 7,
    videoUrl: 'https://www.youtube.com/embed/SFq4W3iMsKQ',
    imageUrl: '/images/recipe8.jpg',
  },
  {
    name: 'Egg and Spinach Wrap',
    description: 'Healthy wrap filled with scrambled eggs and spinach.',
    ingredients: ['2 eggs', '1 cup spinach', '1 whole grain wrap', 'Salt and pepper'],
    instructions: 'Scramble eggs, add spinach until wilted, then wrap in the whole grain wrap.',
    calories: 250,
    protein: 15,
    fat: 10,
    videoUrl: 'https://www.youtube.com/embed/KkpV7Q9nel8',
    imageUrl: '/images/recipe9.jpg',
  },
  {
    name: 'Fruit Salad',
    description: 'Refreshing mix of seasonal fruits for a healthy snack.',
    ingredients: ['1 cup mixed fruits (berries, melon, apple)', '1 tbsp lime juice'],
    instructions: 'Combine all fruits in a bowl, drizzle with lime juice, and serve chilled.',
    calories: 150,
    protein: 2,
    fat: 1,
    videoUrl: 'https://www.youtube.com/embed/nTm-_KujooY',
    imageUrl: '/images/recipe10.jpg',
  },
  {
    name: 'Zucchini Noodles',
    description: 'Low-carb zucchini noodles tossed with garlic and olive oil.',
    ingredients: ['2 zucchinis', '2 cloves garlic', '2 tbsp olive oil', 'Salt and pepper'],
    instructions: 'Spiralize the zucchinis, sauté garlic in olive oil, add zucchini noodles, cook for a few minutes.',
    calories: 100,
    protein: 3,
    fat: 7,
    videoUrl: 'https://www.youtube.com/embed/ziPFz5QJY9o',
    imageUrl: '/images/recipe11.jpg',
  },
  {
    name: 'Peanut Butter Banana Toast',
    description: 'Whole grain toast topped with peanut butter and banana slices.',
    ingredients: ['2 slices whole grain bread', '2 tbsp peanut butter', '1 banana'],
    instructions: 'Spread peanut butter on toast and top with banana slices.',
    calories: 300,
    protein: 10,
    fat: 15,
    videoUrl: 'https://www.youtube.com/embed/LYJ-dzpRUco',
    imageUrl: '/images/recipe12.jpg',
  },
  {
    name: 'Cottage Cheese and Pineapple',
    description: 'Creamy cottage cheese served with sweet pineapple chunks.',
    ingredients: ['1 cup cottage cheese', '1/2 cup pineapple chunks'],
    instructions: 'Combine cottage cheese with pineapple and serve chilled.',
    calories: 200,
    protein: 18,
    fat: 4,
    videoUrl: 'https://www.youtube.com/embed/dRaoem_FIM4',
    imageUrl: '/images/recipe13.jpg',
  },
  {
    name: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with a mixture of quinoa, black beans, and spices.',
    ingredients: ['2 bell peppers', '1 cup cooked quinoa', '1 can black beans', '1 tsp cumin'],
    instructions: 'Mix quinoa, black beans, and cumin, stuff into bell peppers, and bake at 350°F for 30 minutes.',
    calories: 250,
    protein: 12,
    fat: 3,
    videoUrl: 'https://www.youtube.com/embed/mWYwrUTramk',
    imageUrl: '/images/recipe14.jpg',
  },
  {
    name: 'Chia Seed Pudding',
    description: 'Nutritious pudding made with chia seeds and almond milk.',
    ingredients: ['1/4 cup chia seeds', '1 cup almond milk', '1 tbsp maple syrup'],
    instructions: 'Combine all ingredients, let sit for a few hours or overnight, and serve chilled.',
    calories: 180,
    protein: 5,
    fat: 8,
    videoUrl: 'https://www.youtube.com/embed/UCOe6lAKJ58',
    imageUrl: '/images/recipe16.jpg',
  },
];


function Recipe() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipe-container">
      <h1>Healthy Recipes</h1>
      {selectedRecipe ? (
        <div className="recipe-details">
        <h2>{selectedRecipe.name}</h2>
        <img src={selectedRecipe.imageUrl} alt={selectedRecipe.name} className="recipe-image" />
        <p>{selectedRecipe.description}</p>
        <h3>Ingredients:</h3>
        <ul>
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{selectedRecipe.instructions}</p>
        <p>Calories: {selectedRecipe.calories} kcal</p>
        <p>Protein: {selectedRecipe.protein} g</p>
        <p>Fat: {selectedRecipe.fat} g</p>
        {selectedRecipe.videoUrl && (
          <div className="video-container">
            <h3>Recipe Video:</h3>
            <iframe
              width="560"
              height="315"
              src={selectedRecipe.videoUrl}
              title={selectedRecipe.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button onClick={() => setSelectedRecipe(null)}>Back to Recipes</button>
      </div>
      
      ) : (
        <div className="recipe-list">
          {recipeList.map((recipe, index) => (
            <div key={index} className="recipe-item" onClick={() => setSelectedRecipe(recipe)}>
            <img src={recipe.imageUrl} alt={recipe.name} className="recipe-thumbnail" />
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default Recipe;