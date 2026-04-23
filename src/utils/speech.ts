// Eagerly trigger voice loading in browsers that require it (like Chrome)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

export function speakWord(urdu: string, transliteration: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn("Speech Synthesis is not supported in this browser.");
    return;
  }

  // Cancel any ongoing speech so the new one plays immediately (Fixes sticky audio bugs)
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();

  // Try to find native offline voices matching the script
  const urduVoice = voices.find(v => v.lang.toLowerCase().includes('ur'));
  const arabicVoice = voices.find(v => v.lang.toLowerCase().includes('ar'));

  if (urduVoice) {
    utterance.voice = urduVoice;
    utterance.text = urdu;
    utterance.lang = urduVoice.lang;
  } else if (arabicVoice) {
    // Arabic shares the script/characters, allowing it to natively read the text offline
    utterance.voice = arabicVoice;
    utterance.text = urdu;
    utterance.lang = arabicVoice.lang;
  } else if (voices.length > 0) {
    // If voices are loaded but the OS lacks an Urdu/Arabic offline pack, 
    // seamlessly fall back to reading the transliteration in English.
    const enVoice = voices.find(v => v.lang.toLowerCase().includes('en'));
    if (enVoice) utterance.voice = enVoice;
    utterance.text = transliteration;
    utterance.lang = 'en-US';
  } else {
    // Fallback for Safari/Chrome bug where voices array is empty on immediate mount.
    // The OS will automatically try to match the specified lang tag.
    utterance.text = urdu;
    utterance.lang = 'ur-PK';
  }

  utterance.rate = 0.8;
  utterance.volume = 1.0;
  
  // Speak the word
  window.speechSynthesis.speak(utterance);
}

