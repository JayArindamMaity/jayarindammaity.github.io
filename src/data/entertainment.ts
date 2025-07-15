import type { Movie, Song, Anime, Game } from "./types";

//--------------- this is the sample fomatting for to suggest array of objects
//     {
//         aniname: "",
//         studio: "",
//         watchlink: ""
//     },
const anime: Anime[] = [
  {
    aniname: "Hellsing Ultimate",
    studio: "Madhouse",
    watchlink: "https://www.crunchyroll.com/series/GYWEQ4Q3Y/hellsing-ultimate",
  },
  {
    aniname: "Attack on Titan",
    studio: "Mappa",
    watchlink: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
  },
  {
    aniname: "SpyXFamily",
    studio: "CloverWorks",
    watchlink:
      "https://www.youtube.com/watch?v=h_tL16PZ0IE&list=PLwLSw1_eDZl1wGMYg5oB3uEns0CZNl6sI",
  },
  {
    aniname: "One Punch Man",
    studio: "J.C.Staff",
    watchlink:
      "https://www.youtube.com/watch?v=VvK6UZWNU2Q&list=PLwLSw1_eDZl2XdtLhB9NG2Ch050jWFm9G",
  },
  {
    aniname: "Demon Slayer",
    studio: "Ufotable",
    watchlink: "https://www.netflix.com/in/title/81091393",
  },
  {
    aniname: "Devil May Cry",
    studio: "Studio Mir",
    watchlink: "https://www.netflix.com/in/title/81506915",
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
  {
    songname: "Scott and Zelda",
    artist: "BIBI",
    spotify: "https://open.spotify.com/track/1MJyiTlVdSLAjI9aclZ3hL",
  },
  {
    songname: "Too Sweet",
    artist: "Hozier",
    spotify: "https://open.spotify.com/album/48qd9sU3xqYJbKaxHCciJL",
  },
  {
    songname: "Back To Black",
    artist: "Amy Winehouse",
    spotify: "https://open.spotify.com/track/3FAclTFfvUuQYnEsptbK8w",
  },
  {
    songname: "Strangers",
    artist: "Kenya Grace",
    spotify: "https://open.spotify.com/track/5mjYQaktjmjcMKcUIcqz4s",
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
    movie: "How to Train Your Dragon",
    director: "Chris Sanders",
    watchlink: "",
  },
  {
    movie: "Train to Busan",
    director: "Yeon Sang-Ho",
    watchlink: "",
  },
  {
    movie: "Kung Fu Panda",
    director: "Mark Osborne",
    watchlink: "",
  },
  {
    movie: "John Wick",
    director: "Chad Stahelski",
    watchlink: "",
  },
  {
    movie: "The Dark Knight",
    director: "Christoper Nolan",
    watchlink: "",
  },
  {
    movie: "Oppenheimer",
    director: "Christoper Nolan",
    watchlink: "",
  },
  {
    movie: "Green Book",
    director: "Peter Farelly",
    watchlink: "",
  },
  {
    movie: "La La Land",
    director: "Damien Chazelle",
    watchlink: "",
  },
  {
    movie: "The Conjuring",
    director: "James wan",
    watchlink: "",
  },
  {
    movie: "Dune",
    director: "Denis Villeneuve",
    watchlink: "",
  },
  {
    movie: "The Social Network",
    director: "David Fincher",
    watchlink: "",
  },
  {
    movie: "Wiplash",
    director: "David Fincher",
    watchlink: "",
  },
];

// ---------------------- this is the sample data for suggested games
// {
//   game: "",
//   studio: "",
//   platform: "",
// },

const games: Game[] = [
  {
    game: "House of The Dead 2",
    studio: "sega",
    platform: "PC",
  },
  {
    game: "DOOM",
    studio: "Bethesda Softworks",
    platform: "PC",
  },
  {
    game: "Far Cry 3",
    studio: "Ubisoft",
    platform: "PC",
  },
  {
    game: "Shadow Of The Tomb Raider",
    studio: "Square ENIX",
    platform: "PC",
  },
  {
    game: "Grand Theft Auto 4",
    studio: "Rockstar",
    platform: "PC",
  },
  {
    game: "League Of Legends",
    studio: "Riot Games",
    platform: "PC",
  },
  {
    game: "Asphalt 9",
    studio: "Gameloft",
    platform: "PC",
  },
  {
    game: "God Of War",
    studio: "Santa Monica",
    platform: "PC",
  },
  {
    game: "Witcher 3: Wild Hunt",
    studio: "CD Projekt RED",
    platform: "PC",
  },
  {
    game: "Assassins Creed II",
    studio: "Ubisoft",
    platform: "PC",
  },
  {
    game: "Luxor Quest For the Afterlife",
    studio: "MumboJumbo",
    platform: "PC",
  },
  {
    game: "Cyberpunk 2077",
    studio: "CD Projekt RED",
    platform: "PC",
  },
  {
    game: "Resident Evil Village",
    studio: "CAPCOM Co., Ltd.",
    platform: "PC",
  },
  {
    game: "Black Myth Wukong",
    studio: "Game Science",
    platform: "PC",
  },
  {
    game: "Elden Ring",
    studio: "Bandai Namco Entertainment",
    platform: "PC",
  },
];
export { anime, songs, movies, games };