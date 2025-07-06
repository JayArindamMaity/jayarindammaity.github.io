import type React from "react";
import { Link } from "react-router-dom";
import "./drinks.css";

interface Drink {
  name: string;
  desc: string;
}

interface DrinksProps {
  drinks: Drink[];
}

const Drinks: React.FC<DrinksProps> = ({ drinks }) => {
  return (
    <>
      {drinks.map((drink, index) => (
        <div className="drink-main" key={index}>
          <ul>
            <li>
              <Link to={`/recipes/${drink.name}`}>{drink.name}:</Link> : {drink.desc}
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Drinks;
