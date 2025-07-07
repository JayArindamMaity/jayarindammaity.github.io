const drinks = [
  {
    name: "Lemonade",
    desc: "Refreshing lemon drink",
    ndesc: `This is a fairly simple drink to make and a good one to cool your body and perhaps head. 
    Although simple there are few things that I personally do to make sure that my drink is good.
     One is to not squeze the lemons with the help of tools 
     (this makes sure that we dont get that bitter part of lemon), another thing that I do is 
    addition of black salt or rock salt. You can occasionally use any ammount of sparkling water as extra touch`,
    benefits: ["Vitamin C boost", "Keeps you hydrated"],
    ingredients: ["2 lemons", "2 tbsp sugar", "2 cups chilled water", "Salt (Optional but suggested)" , "Sparkling water"],
    steps: [
      "Squeeze lemons into a jug.",
      "Add sugar and water; stir until sugar dissolves.",
      "Serve over ice.",
    ],
    ps: "Don't drink too much of it and don't forget to share it with other and me XD"
  },
  {
    name: "Jal Jeera",
    desc: "Spiced cumin lemonade",
    ndesc: `As the name suggests this is a brother to lemonade. Not only this is a cool drink that cools your body this is also a friendly drink
     for your stomach that aids digestion. Its a crime to not try this 😁`,
    benefits: ["Aids your digestive process", "Cools the body"],
    ingredients: [
      "2 cups water",
      "1 tsp cumin powder",
      "1 tbsp lemon juice",
      "Pinch of salt (this is not optional)",
      "Ice Cubes (Optional)"
    ],
    steps: [
      "Combine water, cumin powder, lemon juice, and salt.",
      "Stir well and chill.",
      "Serve cold.",
    ],
    ps: "You can use premixes that might be available online or at your local store. And for the sake of humanity don't add ketchup to it. 😅F"
  },
  {
    name: "Buttermilk",
    desc: "Light salted yogurt drink",
    ndesc: `This is not a drink you can mess up and for sure tastes good. Unfortunately this one comes with a downside, drink too much of it 
    and you will be more sleepy than a hibernating polar bear. So drink this in right amount and share it with others. And please don't use it to fall asleep`,
    benefits: ["Probiotic", "Soothes the stomach"],
    ingredients: ["1 cup plain yogurt", "1 cup cold water", "Pinch of salt", "Black Pepper (Optional)"],
    steps: [
      "Blend yogurt and water until frothy.",
      "Stir in salt, optionally along with pepper.",
      "Serve chilled.",
    ],
    ps: "Don't add ice cubes and definitel not ketchup or jam. (really!!! don't)"
  },
];

const sweets = [
  {
    name: "Halwa",
    desc: "Quick semolina dessert",
    benefits: ["Instant energy", "Comfort food"],
    ingredients: ["½ cup semolina", "¼ cup ghee", "½ cup sugar", "1 cup water"],
    steps: [
      "Roast semolina in ghee until light golden.",
      "Add water; stir to avoid lumps.",
      "Add sugar; cook until thick and serve warm.",
    ],
  },
  {
    name: "Kheer",
    desc: "Simple rice pudding",
    benefits: ["Calcium rich", "Festive treat"],
    ingredients: [
      "¼ cup rice",
      "3 cups milk",
      "4 tbsp sugar",
      "2 cardamom pods",
    ],
    steps: [
      "Simmer rice in milk until soft.",
      "Add sugar and crushed cardamom.",
      "Cook until thickened; serve warm or chilled.",
    ],
  },
  {
    name: "Coconut Ladoo",
    desc: "No cook coconut balls",
    benefits: ["Quick snack", "Kid friendly"],
    ingredients: ["1 cup desiccated coconut", "½ cup condensed milk"],
    steps: [
      "Mix coconut with condensed milk.",
      "Shape into small balls.",
      "Chill 10 minutes and serve.",
    ],
  },
];

export { drinks, sweets };
