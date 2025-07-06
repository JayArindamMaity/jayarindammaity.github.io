import { useParams } from "react-router-dom";
import { drinks } from "../../../data/recipes";
import './detail.css';

type RecipeParams = {
  name: string;
};

const RecipeDetail = () => {
  const { name } = useParams<RecipeParams>();

  const drink = drinks.find(d => d.name === name);

  if (!drink) {
    return (
      <div className="det-main">
        <h2>Drink not found</h2>
        <p>Sorry, we couldn't find a drink with the name "{name}".</p>
      </div>
    );
  }

  return (
    <div className="det-main">
      <h2>{drink.name.replace(/_/g, ' ')}</h2>
      <p>{drink.desc}</p>
    </div>
  );
};

export default RecipeDetail;
