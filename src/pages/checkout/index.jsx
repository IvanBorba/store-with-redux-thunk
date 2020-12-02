import { useSelector } from "react-redux";
import FoodCard from "../../components/food-card";
import CardsContainer from "../../components/cards-container";
import "./index.css";

const Checkout = () => {
  const checked = useSelector((state) => state.checked);

  const verify = () => {
    let message = "";
    const fruit = checked.filter((food) => food.type === "fruit");
    const meat = checked.filter((food) => food.type === "meat");
    const carb = checked.filter((food) => food.type === "carb");

    if (checked.length === 0) {
      message = "Não há itens no carrinho";
    }
    if (checked.length !== 0 && fruit.length === 0 && meat.length === 0) {
      message += "Cuidado, muito açucar na dieta é prejudicial a saude. ";
    }
    if (checked.length !== 0 && carb.length === 0) {
      message += "Parabéns, sua compra está saudável. ";
    }
    if (checked.length !== 0 && fruit.length === 0) {
      message += "Adicione uma fruta para ser mais saudável. ";
    }
    if (checked.length !== 0 && fruit > 0 && carb > 0 && meat > 0) {
      message = "";
    }
    return message;
  };

  return (
    <div className="checkout">
      <CardsContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "25vh",
          }}
        >
          <h1>Carrinho</h1>
          <h2>{verify()}</h2>
        </div>
        {checked.map((food, index) => {
          return <FoodCard key={index} food={food} isRemovable />;
        })}
      </CardsContainer>
    </div>
  );
};

export default Checkout;
