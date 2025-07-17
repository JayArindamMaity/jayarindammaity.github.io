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

// --------------------- this is the sample data entry for youtube video inputs
//     {
//         vidname: "",
//         vidauth: "",
//         vidlink: "",
//         viddesc: "",
//     },

const youtube_learn_vids = [
  {
    vidname: "C Programming Full Course",
    vidauth: "Bro Code",
    vidlink: "https://www.youtube.com/watch?v=87SH2Cn0s9A",
    viddesc:
      "This is a 4 hour video introducing you to programming in C language",
  },
];

// this is the sample data for some good and suggested repositories XD
//   {
//     reponame: "",
//     repodesc: "",
//     repolink: "",
//   }

const good_git_repos = [
  {
    reponame: "Build Your Own X",
    repodesc:
      "This repo has a bunch of links that will guide you to make really cool projects",
    repolink: "https://github.com/codecrafters-io/build-your-own-x",
  },
  {
    reponame: "Awesome",
    repodesc:
      "This repo should have almost everything that you might need to learning anything related to computer science and more",
    repolink: "https://github.com/sindresorhus/awesome",
  },
  {
    reponame: "Free Programming Books",
    repodesc: "This is another repository where you can find some really good content in text format to learn new things",
    repolink: "https://github.com/EbookFoundation/free-programming-books",
  },
];

export { suggest_books, learning_data, youtube_learn_vids, good_git_repos };
