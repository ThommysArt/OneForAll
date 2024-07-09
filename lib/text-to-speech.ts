const readCharAloud = (char: string) => {
    const text = char === ' ' ? 'space' : char;
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1; // Adjust this value for faster reading
    window.speechSynthesis.speak(speech);
};

const speak = (text: string) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = synth.getVoices();
    const humanVoice = voices.find(voice => voice.name.includes('Google') && voice.lang === 'en-US') || voices[0];

    if (humanVoice) {
      utterance.voice = humanVoice;
    } else {
      console.warn('No human-like voice found, using default voice.');
    }

    synth.speak(utterance);
  } else {
    console.error('Speech Synthesis not supported in this browser.');
  }
};

const handleMouseHover = (text: string) => {
  var i = 1
  while (i===1) {
    speak(text)
    i+=1
  }
}



  export {readCharAloud, speak, handleMouseHover}