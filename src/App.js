import { useState } from "react";
import AppSummary from "./components/AppSummary/AppSummary";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import CartContext from "./context/cart-context";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  return (
    <CartContext.Provider value={{items: []}}>
      <Header />
      <main>
        <AppSummary />
        <MealsList meals={meals} />
      </main>
    </CartContext.Provider>
  );
}

export default App;
