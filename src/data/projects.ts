// ----------- This is the sample data entry for array of objects called all_projects
//   {
//     id: 1, // this is the id of the object
//     title: "", // this is the name of the project
//     date: "", // this is the date of making of the project
//     description: ``, // just a brief description of the project
//     github: "", // github link to the project
//     deploymentlink: "", // this is where deployment link of the project is supposed to go (if any)
//     techstack: [], // all the technical stuff related to the project goes here in the array of strings XD
//   },

// ------------ copy this for cleaner code with less comments XD and don't forget to change the id to a unique integer value
//   {
//     id: 1,
//     title: "",
//     date: "",
//     description: ``,
//     github: "",
//     deploymentlink: "",
//     techstack: [],
//   },

const all_projects = [
  {
    id: 1,
    title: "Spoileriffic",
    date: "March 2024",
    description: `This was a simple website that aimed at providing movie reviews. 
    This was achieved by using external api's provided by TMDB and was hosted with the help of netlify`,
    github: "",
    deploymentlink: "",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Urban Voyage",
    date: "May 2023",
    description: `This was also one of my early projects that used firebase for collecting form data and authentication.
    The frontend was primarily made with the help of HTML and CSS`,
    github: "",
    deploymentlink: "",
    techstack: ["HTML", "CSS", "Javascript", "Firebase"],
  },
];

const git_links = [
  {
    reponame: "screensaver",
    repolink: "https://github.com/JayArindam/screensaver",
    repodesc:
      "This is a basic python script that just applies your custom screensaver on demand",
  },
  {
    reponame: "vimconfigs",
    repolink: "https://github.com/JayArindam/vimconfigs",
    repodesc:
      "This is the nvim configuration that im currently using, You can also give this a try",
  },
  {
    reponame: "spoileriffic",
    repolink: "https://github.com/JayArindam/Spoileriffic",
    repodesc:
      "There is nothing cool about this project. It actually is one of my early days project and it uses api's (TMBD) to provide you with movie reviews, trending movies/shows and more. If you are interested in using it go for it, it might be able to suggest you some good movie XD.",
  },
];

export { all_projects, git_links };

