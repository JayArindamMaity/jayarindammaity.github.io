import { useParams } from "react-router-dom";
import { drinks, sweets } from "../../../data/recipes";
import "./detail.css";

type RecipeParams = {
  name: string;
};

const RecipeDetail = () => {
  const { name } = useParams<RecipeParams>();
  if (!name) return <div className="det-main">Invalid recipe name</div>;

  const normalizedName = name.toLowerCase();

  let rtype: "drink" | "sweet" | null = null;
  let recipe: any = null;

  const drink = drinks.find((d) => d.name.toLowerCase() === normalizedName);
  if (drink) {
    rtype = "drink";
    recipe = drink;
  }

  const sweet = sweets.find((s) => s.name.toLowerCase() === normalizedName);
  if (sweet) {
    rtype = "sweet";
    recipe = sweet;
  }

  if (!rtype || !recipe) {
    return (
      <div className="det-main">
        <h2>Recipe not found</h2>
        <p>
          Ahh, I might have forgotten to add this recipe "{name}".
          <br /> <br /> Or you were being cheeky with the links cause this page
          only exists for debugging T_T
        </p>
      </div>
    );
  }

  if (rtype === "drink") {
    return (
      <div className="det-main">
        <div className="det-heading">
          {recipe.name} : {recipe.desc}
        </div>

        <div className="det-desc">{recipe.ndesc}</div>

        <div className="det-sub-head">Benefits</div>
        <ul>
          {recipe.benefits.map((b: string, idx: number) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>

        <div className="det-sub-head">Ingredients</div>
        <ul>
          {recipe.ingredients.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        <div className="det-sub-head">Steps</div>
        <ul>
          {recipe.steps.map((s: string, idx: number) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>

        <div className="det-ps">
          <div className="det-sub-head">P.S.</div>
          {recipe.ps}
        </div>
      </div>
    );
  }

  if (rtype === "sweet") {
    return (
      <div className="det-main">
        <h2>{recipe.name}</h2>
        <p>{recipe.desc}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((s: string, idx: number) => (
            <li key={idx}>{s}</li>
          ))}
        </ol>
      </div>
    );
  }

  return null;
};

export default RecipeDetail;
