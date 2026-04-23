export interface PhoneticLetter {
  id: string;
  letter: string;
  name: string;
  sound: string;
  example: string;
  description: string;
}

export const urduAlphabet: PhoneticLetter[] = [
  { id: 'alif', letter: 'ا', name: 'Alif', sound: 'a, aa', example: 'Apple (a)', description: 'A long "A" sound. It acts as a vowel base.' },
  { id: 'bay', letter: 'ب', name: 'Bay', sound: 'b', example: 'Bat (b)', description: 'A standard "B" sound with lips pressed.' },
  { id: 'pay', letter: 'پ', name: 'Pay', sound: 'p', example: 'Pen (p)', description: 'A standard "P" sound.' },
  { id: 'tay', letter: 'ت', name: 'Tay', sound: 't (soft)', example: 'Tub (t)', description: 'A soft "T" sound, with tongue touching upper teeth.' },
  { id: 'ttay', letter: 'ٹ', name: 'Ttay', sound: 't (hard)', example: 'Tomato (t)', description: 'A hard "T" sound, tongue curled back.' },
  { id: 'say', letter: 'ث', name: 'Say', sound: 's', example: 'Sun (s)', description: 'A soft "S" sound.' },
  { id: 'jeem', letter: 'ج', name: 'Jeem', sound: 'j', example: 'Jug (j)', description: 'A standard "J" sound.' },
  { id: 'chey', letter: 'چ', name: 'Chey', sound: 'ch', example: 'Chair (ch)', description: 'A "CH" sound.' },
  { id: 'hay', letter: 'ح', name: 'Hay', sound: 'h (sharp)', example: 'Hat (h)', description: 'A sharp "H" from the throat.' },
  { id: 'khay', letter: 'خ', name: 'Khay', sound: 'kh', example: 'Khaki (kh)', description: 'A guttural "Kh" from the back of the throat.' },
  { id: 'daal', letter: 'د', name: 'Daal', sound: 'd (soft)', example: 'Door (d)', description: 'A soft "D", tongue touching teeth.' },
  { id: 'ddaal', letter: 'ڈ', name: 'Ddaal', sound: 'd (hard)', example: 'Dog (d)', description: 'A hard "D", tongue curled back.' },
  { id: 'zaal', letter: 'ذ', name: 'Zaal', sound: 'z', example: 'Zoo (z)', description: 'A soft "Z".' },
  { id: 're', letter: 'ر', name: 'Re', sound: 'r (soft)', example: 'Run (r)', description: 'A lightly rolled "R" sound.' },
  { id: 'rre', letter: 'ڑ', name: 'Rre', sound: 'rr (hard)', example: 'No English equivalent', description: 'A hard rolled "R", tongue curled back hitting the roof of mouth.' },
  { id: 'zay', letter: 'ز', name: 'Zay', sound: 'z', example: 'Zebra (z)', description: 'A standard "Z" sound.' },
  { id: 'zhay', letter: 'ژ', name: 'Zhay', sound: 'zh', example: 'Measure (s)', description: 'A "ZH" sound, like the "s" in measure or "j" in French (bonjour).' },
  { id: 'seen', letter: 'س', name: 'Seen', sound: 's', example: 'Sun (s)', description: 'A standard "S" sound.' },
  { id: 'sheen', letter: 'ش', name: 'Sheen', sound: 'sh', example: 'Shoe (sh)', description: 'A "SH" sound.' },
  { id: 'swaad', letter: 'ص', name: 'Swaad', sound: 's (heavy)', example: 'Sun (s)', description: 'A heavier, deeper "S" sound.' },
  { id: 'zwaad', letter: 'ض', name: 'Zwaad', sound: 'z (heavy)', example: 'Zoo (z)', description: 'A heavier, deeper "Z" sound.' },
  { id: 'toye', letter: 'ط', name: 'Toye', sound: 't (heavy)', example: 'Tub (t)', description: 'A heavier, rounder "T" sound.' },
  { id: 'zoye', letter: 'ظ', name: 'Zoye', sound: 'z (heavy)', example: 'Zoo (z)', description: 'A heavier, rounder "Z" sound.' },
  { id: 'ain', letter: 'ع', name: 'Ain', sound: 'a/e/o (guttural)', example: 'No English equivalent', description: 'A vowel sound produced from deep in the throat.' },
  { id: 'ghain', letter: 'غ', name: 'Ghain', sound: 'gh', example: 'Gargle (sound)', description: 'A guttural sound, like gargling or French "R".' },
  { id: 'fay', letter: 'ف', name: 'Fay', sound: 'f', example: 'Fish (f)', description: 'A standard "F" sound.' },
  { id: 'qaaf', letter: 'ق', name: 'Qaaf', sound: 'q (guttural)', example: 'Qatar (q)', description: 'A deep "K" sound originating from the back of the throat.' },
  { id: 'kaaf', letter: 'ک', name: 'Kaaf', sound: 'k', example: 'Kite (k)', description: 'A standard "K" sound.' },
  { id: 'gaaf', letter: 'گ', name: 'Gaaf', sound: 'g', example: 'Go (g)', description: 'A hard "G" sound.' },
  { id: 'laam', letter: 'ل', name: 'Laam', sound: 'l', example: 'Lion (l)', description: 'A standard "L" sound.' },
  { id: 'meem', letter: 'م', name: 'Meem', sound: 'm', example: 'Moon (m)', description: 'A standard "M" sound.' },
  { id: 'noon', letter: 'ن', name: 'Noon', sound: 'n', example: 'Net (n)', description: 'A standard "N" sound.' },
  { id: 'noon-ghunna', letter: 'ں', name: 'Noon Ghunna', sound: 'n (nasal)', example: 'Song (ng)', description: 'A nasal "N" sound, no tongue contact.' },
  { id: 'waaw', letter: 'و', name: 'Waaw', sound: 'v, w, o, u', example: 'Water (w), Van (v)', description: 'Can sound like W, V, or long O/U depending on position.' },
  { id: 'choti-hay', letter: 'ہ', name: 'Choti Hay', sound: 'h', example: 'Hat (h)', description: 'A soft "H" sound, often drops at the end of words.' },
  { id: 'do-chashmi-hay', letter: 'ھ', name: 'Do Chashmi Hay', sound: 'h (aspirated)', example: 'Bhakti (bh)', description: 'Used strictly to combine with other consonants to aspirate them (like bh, ph, th).' },
  { id: 'hamza', letter: 'ء', name: 'Hamza', sound: '(glottal stop)', example: 'Uh-oh (hyphen)', description: 'A glottal stop or vowel separator.' },
  { id: 'choti-ye', letter: 'ی', name: 'Choti Ye', sound: 'y, ee', example: 'Yellow (y), See (ee)', description: 'Consonant "Y" or long vowel "ee".' },
  { id: 'bari-ye', letter: 'ے', name: 'Bari Ye', sound: 'ai, e', example: 'Say (ay)', description: 'Appears at word ends, making an "ay" or "e" sound.' }
];
