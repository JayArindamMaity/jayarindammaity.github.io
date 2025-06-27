const suggest_books = [
  {
    name: "Practical Electronics for Inventors",
  },

];

// ---------------------- this is the sample template for inserting data into the learning data component

// {
//   topic: "", <-- this is where you add topic
//   resources: [
//     { name: "", url: "" },  <-- this is where you can list multiple resources regarding that particular topic
//   ],
// },

// {
//   topic: "",
//   resources: [
//     { name: "", url: "" },
//   ],
// },

const learning_data = [
  {
    topic: "Operating Systems",
    resources: [
      { name: "YouTube", url: "https://www.youtube.com/watch?v=yK1uBHPdp30" },
    ],
  },
  {
    topic: "C Programming",
    resources: [
      { name: "YouTube", url: "https://www.youtube.com/watch?v=87SH2Cn0s9A" },
    ],
  },
];

export { suggest_books, learning_data };
