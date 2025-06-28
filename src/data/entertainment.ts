import type { Movie, Song, Anime, Game } from "./types";

//--------------- this is the sample fomatting for to suggest array of objects
//     {
//         aniname: "",
//         watchlink: ""
//     },
const anime: Anime[] = [
  {
    aniname: "Hellsing Ultimate",
    studio: "",
    watchlink: "",
  },
  {
    aniname: "Attack on Titan",
    studio: "",
    watchlink: "",
  },
  {
    aniname: "SpyXFamily",
    studio: "",
    watchlink: "",
  },
  {
    aniname: "One Punch Man",
    studio: "",
    watchlink: "",
  },
];

//----------------------- this is the sample data for the song listing
// {
//   songname: "",
//   artist: "",
//   spotify: ""
// }

const songs: Song[] = [
  {
    songname: "The Scientist",
    artist: "Coldplay",
    spotify: "",
  },
  {
    songname: "Castle on the Hill",
    artist: "Ed Sheeran",
    spotify: "",
  },
  {
    songname: "High and Dry",
    artist: "Radiohead",
    spotify: "",
  },
  {
    songname: "Silvitni",
    artist: "Eivor",
    spotify: "",
  },
  {
    songname: "Fade Into You",
    artist: "Mazzy Star",
    spotify: "",
  },
  {
    songname: "Delicate Weapon",
    artist: "Grimes",
    spotify: "",
  },
];

// ------------------------ this is the sample data for sugested movies
// {
//     movie: "",
//     director: "",
//     watchlink: ""
//  }
const movies: Movie[] = [
  {
    movie: "Interstellar",
    director: "Christoper Nolan",
    watchlink: "",
  },
  {
    movie: "How to train your dragon",
    director: "Chris Sanders",
    watchlink: "",
  },
];

const games: Game[] = [
  {
    game: "House of The Dead 2",
    studio: "sega",
    platform: "PC",
  },
];
export { anime, songs, movies, games };
