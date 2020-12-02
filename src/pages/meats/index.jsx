import FoodCard from "../../components/food-card";
import CardsContainer from "../../components/cards-container";
import { useSelector } from "react-redux";
import "../../App.css";

const Fruits = () => {
  const foods = useSelector((state) => state.foods);

  const meats = foods.filter((food) => food.type === "meat");

  return (
    <div className="background">
      <CardsContainer>
        {meats.map((food, index) => {
          return <FoodCard key={index} food={food} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Fruits;
