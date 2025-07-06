import "./recipes.css";

export default function Recipes() {
  return (
    <>
      <div className="re-main">
        
        <div className="re-opening">
          <div className="re-heading">Welcome to the recipes section...</div>
          <div className="re-content">
            Nourishment is defenitely one of the most important factor that
            plays a huge role in your health and productivity...
            <br /> <br />
            Although I'm not a nutritionist but there are some of my personal
            favourite recipes that you can give a try for you might be able to
            enjoy them and they might be of benefit to your body...
          </div>
        </div>

        <div className="re-drinks">
          <div className="re-heading">Drinks</div>
          <div className="re-content">
            Staying hydrated is basically the `git commit` of self-care.
            <br />
            <br />
            Add a splash of lemon, some sugar, and voilà—you've got something
            that's technically still water, but now feels like a reward for
            writing clean code. <br />
            <br />
            These recipes are easy, refreshing, and 100% debugged (yes, they're
            all virgin).
          </div>
        </div>

      </div>
    </>
  );
}
