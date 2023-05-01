import AppSummary from "./components/AppSummary/AppSummary";
import Header from "./components/Header/Header";
import MealsList from "./components/MealsList/MealsList";

function App() {
  return (
    <div>
      <Header />
      <AppSummary />
      <MealsList />
    </div>
  );
}

export default App;
