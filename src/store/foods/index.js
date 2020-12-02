const defaultState = [
  { id: 1, name: "Maça", type: "fruit" },
  { id: 2, name: "Abacaxi", type: "fruit" },
  { id: 3, name: "Macarrão", type: "carb" },
  { id: 4, name: "Tomate", type: "fruit" },
  { id: 5, name: "Bife", type: "meat" },
  { id: 6, name: "Frango", type: "meat" },
  { id: 7, name: "Pepsi", type: "carb" },
  { id: 8, name: "Açucar", type: "carb" },
  { id: 9, name: "Chocolate", type: "carb" },
];

const foodsReducer = (state = defaultState, _) => {
  return state;
};

export default foodsReducer;
