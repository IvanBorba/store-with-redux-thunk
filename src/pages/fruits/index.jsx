import FoodCard from "../../components/food-card";
import CardsContainer from "../../components/cards-container";
import { useSelector } from "react-redux";
import "../../App.css";

const Fruits = () => {
  const foods = useSelector((state) => state.foods);

  const fruits = foods.filter((food) => food.type === "fruit");

  return (
    <div className="background">
      <CardsContainer>
        {fruits.map((food, index) => {
          return <FoodCard key={index} food={food} />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Fruits;
