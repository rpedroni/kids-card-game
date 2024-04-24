import { useSpeech as useSpeechLib } from 'react-text-to-speech';

export const useSpeech = (text: string) => {
  const { start } = useSpeechLib({ text, lang: 'pt-BR', rate: 1, voiceURI: 'Google português do Brasil' });

  return { start };
};
