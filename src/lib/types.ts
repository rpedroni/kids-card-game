export enum Player {
  Nico = 'nico',
  Kike = 'kike',
}

export enum GameType {
  TextAndSoundToImage = 'TextAndSoundToImage',
}

export type Game = {
  type: GameType;
  winPoints: number;
};

export type Round = {
  options: Option[];
  correctIndex: number;
  correctOption: Option;
};

export type Option = {
  wordPT: string;
  wordEN: string;
  imageUrl: string;
};
