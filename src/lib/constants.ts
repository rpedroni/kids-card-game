import { Option } from './types';

export const DEFAULT_VICTORY_POINTS = 10;
export const DEFAULT_VICTORY_CELEBRATION_TIME = 5000;

export const OPTION_SET_ANIMALS: Option[] = [
  { wordPT: 'vaca', wordEN: 'cow', imageUrl: '/options/cow.jpg' },
  { wordPT: 'cachorro', wordEN: 'dog', imageUrl: '/options/dog.jpg' },
  { wordPT: 'gato', wordEN: 'cat', imageUrl: '/options/cat.jpg' },
  { wordPT: 'pato', wordEN: 'duck', imageUrl: '/options/duck.jpg' },
  { wordPT: 'cavalo', wordEN: 'horse', imageUrl: '/options/horse.jpg' },
  { wordPT: 'galinha', wordEN: 'chicken', imageUrl: '/options/chicken.jpg' },
  { wordPT: 'porco', wordEN: 'pig', imageUrl: '/options/pig.jpg' },
  { wordPT: 'ovelha', wordEN: 'sheep', imageUrl: '/options/sheep.jpg' },
  { wordPT: 'papagaio', wordEN: 'parrot', imageUrl: '/options/parrot.jpg' },
  { wordPT: 'pombo', wordEN: 'pigeon', imageUrl: '/options/pigeon.jpg' },
];

export const OPTION_SET_DAILY_OBJECTS: Option[] = [
  {
    wordPT: 'cadeira',
    wordEN: 'chair',
    imageUrl:
      'https://images.unsplash.com/photo-1503971116037-1e438143ac4e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    wordPT: 'garfo',
    wordEN: 'fork',
    imageUrl:
      'https://images.unsplash.com/photo-1569702824812-351205c9cde5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    wordPT: 'TV',
    wordEN: 'TV',
    imageUrl:
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // { wordPT: 'sofá', wordEN: 'sofa', imageUrl: '/options/sofa.jpg' },
  {
    wordPT: 'cama',
    wordEN: 'bed',
    imageUrl:
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    wordPT: 'geladeira',
    wordEN: 'fridge',
    imageUrl:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // { wordPT: 'fogão', wordEN: 'stove', imageUrl: '/options/stove.jpg' },
  // { wordPT: 'microondas', wordEN: 'microwave', imageUrl: '/options/microwave.jpg' },
  {
    wordPT: 'torradeira',
    wordEN: 'toaster',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1667238579781-cb4bd6126ffd?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    wordPT: 'liquidificador',
    wordEN: 'blender',
    imageUrl:
      'https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // { wordPT: 'cafeteira', wordEN: 'coffee maker', imageUrl: '/options/coffee-maker.jpg' },
];

export const OPTION_SETS = [OPTION_SET_ANIMALS, OPTION_SET_DAILY_OBJECTS];

export const OPTION_SETS_MIXED = [...OPTION_SET_ANIMALS, ...OPTION_SET_DAILY_OBJECTS];
