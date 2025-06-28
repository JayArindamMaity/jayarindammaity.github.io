import type { Movie, Song, Anime, Game } from "./types";

//--------------- this is the sample fomatting for to suggest array of objects
//     {
//         aniname: "",
//         watchlink: ""
//     },
const anime: Anime[] = [
  {
    aniname: "Hellsing Ultimate",
    studio: "Madhouse",
    watchlink: "",
  },
  {
    aniname: "Attack on Titan",
    studio: "Mappa",
    watchlink: "",
  },
  {
    aniname: "SpyXFamily",
    studio: "CloverWorks",
    watchlink: "https://www.youtube.com/watch?v=h_tL16PZ0IE&list=PLwLSw1_eDZl1wGMYg5oB3uEns0CZNl6sI",
  },
  {
    aniname: "One Punch Man",
    studio: "J.C.Staff",
    watchlink: "https://www.youtube.com/watch?v=VvK6UZWNU2Q&list=PLwLSw1_eDZl2XdtLhB9NG2Ch050jWFm9G",
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
    spotify: "https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle",
  },
  {
    songname: "Castle on the Hill",
    artist: "Ed Sheeran",
    spotify: "https://open.spotify.com/track/6PCUP3dWmTjcTtXY02oFdT",
  },
  {
    songname: "High and Dry",
    artist: "Radiohead",
    spotify: "https://open.spotify.com/track/2a1iMaoWQ5MnvLFBDv4qkf",
  },
  {
    songname: "Silvitni",
    artist: "Eivor",
    spotify: "https://open.spotify.com/track/0DtktYF0tDTCOEGGrUjCRb",
  },
  {
    songname: "Fade Into You",
    artist: "Mazzy Star",
    spotify: "https://open.spotify.com/track/1LzNfuep1bnAUR9skqdHCK",
  },
  {
    songname: "Delicate Weapon",
    artist: "Grimes",
    spotify: "https://open.spotify.com/track/1hT3eaGzrcFriQtgGdvsZv",
  },
  {
    songname: "Labour",
    artist: "Paris Paloma",
    spotify: "https://open.spotify.com/track/0e00DiF2T9znEdmWakYSC3",
  },
  {
    songname: "Cocktail Molotov",
    artist: "ZAND",
    spotify: "https://open.spotify.com/track/4zSeX6VgtIZHLgIz2hJT3p",
  },
  {
    songname: "Slipping",
    artist: "Crysoshell",
    spotify: "https://open.spotify.com/track/7piKVALJFj1tIGKI1E47FP",
  },
  // {
  //   songname: "",
  //   artist: "",
  //   spotify: ""
  // }
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
