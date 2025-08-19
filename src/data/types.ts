export interface Song {
  songname: string;
  artist: string;
  spotify: string;
}

export interface Anime {
  aniname: string;
  studio: string;
  watchlink: string;
}

export interface Movie {
  movie: string;
  director: string;
  watchlink: string;
}

export interface Game {
  game: string;
  studio: string;
  platform: string;
}

export type Recommendations = Song | Anime | Movie | Game;

