import React, { useState } from "react";

const AwesomeComponent = (props) => {
  const [todos, setToDos] = useState([
    { id: 1, completed: false, tittle: "Купить хлеб" },
    { id: 2, completed: false, tittle: "Купить масло" },
    { id: 3, completed: false, tittle: "Купить молоко" },
    { id: 4, completed: false, tittle: "Купить молоко" },
  ]);

  return <div>Сделать: {todos[0].tittle}</div>;
};
