import { useEffect, useState } from "react";
import AppSummary from "./components/AppSummary/AppSummary";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList/MealsList";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart/Cart/Cart";
import "./index.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const meals = [];
      const response = await fetch(
        "https://react-http-ec3e5-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      for (const key in data) {
        meals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(meals);
      setLoading(false);
    };
    fetchData().catch((error) => {
      setLoading(false);
      setError(true);
    });
  }, []);

  let mealsContent;

  if (error) {
    mealsContent = (
      <section className="meals-error">
        <p>Error</p>
      </section>
    );
  } else if (loading) {
    mealsContent = (
      <section className="meals-loading">
        <p>Loading...</p>
      </section>
    );
  } else {
    mealsContent = <MealsList meals={meals} />;
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AppSummary />
        {mealsContent}
      </main>
    </CartProvider>
  );
}

export default App;
