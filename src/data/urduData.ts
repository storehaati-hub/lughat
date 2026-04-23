export interface Word {
  id: string;
  urdu: string;
  transliteration: string;
  english: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  words: Word[];
}

export const urduLessons: Lesson[] = [
  {
    id: "greetings",
    title: "Greetings & Basics",
    description: "Learn how to say hello and basic pleasantries in Urdu.",
    words: [
      { id: "g1", urdu: "السلام علیکم", transliteration: "Assalam-o-Alaikum", english: "Hello / Peace be upon you" },
      { id: "g2", urdu: "شکریہ", transliteration: "Shukriya", english: "Thank you" },
      { id: "g3", urdu: "خدا حافظ", transliteration: "Khuda Hafiz", english: "Goodbye" },
      { id: "g4", urdu: "جی ہاں", transliteration: "Jee Haan", english: "Yes" },
      { id: "g5", urdu: "جی نہیں", transliteration: "Jee Nahi", english: "No" },
      { id: "g6", urdu: "آپ کیسے ہیں؟", transliteration: "Aap kaise hain?", english: "How are you?" }
    ]
  },
  {
    id: "numbers",
    title: "Numbers 1-10",
    description: "Learn to count from one to ten in Urdu.",
    words: [
      { id: "n1", urdu: "ایک", transliteration: "Aik", english: "One" },
      { id: "n2", urdu: "دو", transliteration: "Do", english: "Two" },
      { id: "n3", urdu: "تین", transliteration: "Teen", english: "Three" },
      { id: "n4", urdu: "چار", transliteration: "Char", english: "Four" },
      { id: "n5", urdu: "پانچ", transliteration: "Paanch", english: "Five" },
      { id: "n6", urdu: "چھ", transliteration: "Chey", english: "Six" },
      { id: "n7", urdu: "سات", transliteration: "Saat", english: "Seven" },
      { id: "n8", urdu: "آٹھ", transliteration: "Aath", english: "Eight" },
      { id: "n9", urdu: "نو", transliteration: "Nau", english: "Nine" },
      { id: "n10", urdu: "دس", transliteration: "Dus", english: "Ten" },
    ]
  },
  {
    id: "family",
    title: "Family",
    description: "Essential family member vocabulary.",
    words: [
      { id: "f1", urdu: "ماں", transliteration: "Maa", english: "Mother" },
      { id: "f2", urdu: "باپ", transliteration: "Baap", english: "Father" },
      { id: "f3", urdu: "بھائی", transliteration: "Bhai", english: "Brother" },
      { id: "f4", urdu: "بہن", transliteration: "Behan", english: "Sister" },
      { id: "f5", urdu: "خاندان", transliteration: "Khandaan", english: "Family" },
    ]
  },
  {
    id: "food",
    title: "Food & Dining",
    description: "Words for eating out and common foods.",
    words: [
      { id: "fd1", urdu: "کھانا", transliteration: "Khana", english: "Food" },
      { id: "fd2", urdu: "پانی", transliteration: "Paani", english: "Water" },
      { id: "fd3", urdu: "چائے", transliteration: "Chai", english: "Tea" },
      { id: "fd4", urdu: "گوشت", transliteration: "Gosht", english: "Meat" },
      { id: "fd5", urdu: "روٹی", transliteration: "Roti", english: "Bread" },
      { id: "fd6", urdu: "چاول", transliteration: "Chawal", english: "Rice" }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    description: "Learn to describe the world in color.",
    words: [
      { id: "col1", urdu: "لال", transliteration: "Laal", english: "Red" },
      { id: "col2", urdu: "نیلا", transliteration: "Neela", english: "Blue" },
      { id: "col3", urdu: "پیلا", transliteration: "Peela", english: "Yellow" },
      { id: "col4", urdu: "سبز", transliteration: "Sabz", english: "Green" },
      { id: "col5", urdu: "کالا", transliteration: "Kaala", english: "Black" },
      { id: "col6", urdu: "سفید", transliteration: "Safaid", english: "White" }
    ]
  },
  {
    id: "days",
    title: "Days of the Week",
    description: "Navigating the weekly calendar.",
    words: [
      { id: "day1", urdu: "پیر", transliteration: "Peer", english: "Monday" },
      { id: "day2", urdu: "منگل", transliteration: "Mangal", english: "Tuesday" },
      { id: "day3", urdu: "بدھ", transliteration: "Budh", english: "Wednesday" },
      { id: "day4", urdu: "جمعرات", transliteration: "Jumeraat", english: "Thursday" },
      { id: "day5", urdu: "جمعہ", transliteration: "Jumma", english: "Friday" },
      { id: "day6", urdu: "ہفتہ", transliteration: "Hafta", english: "Saturday" },
      { id: "day7", urdu: "اتوار", transliteration: "Itwaar", english: "Sunday" }
    ]
  },
  {
    id: "body",
    title: "Body Parts",
    description: "Learn the parts of the human body.",
    words: [
      { id: "bp1", urdu: "سر", transliteration: "Sar", english: "Head" },
      { id: "bp2", urdu: "آنکھ", transliteration: "Aankh", english: "Eye" },
      { id: "bp3", urdu: "ناک", transliteration: "Naak", english: "Nose" },
      { id: "bp4", urdu: "کان", transliteration: "Kaan", english: "Ear" },
      { id: "bp5", urdu: "منہ", transliteration: "Munh", english: "Mouth" },
      { id: "bp6", urdu: "ہاتھ", transliteration: "Haath", english: "Hand" }
    ]
  },
  {
    id: "animals",
    title: "Animals",
    description: "Common animals and pets.",
    words: [
      { id: "ani1", urdu: "بلی", transliteration: "Billi", english: "Cat" },
      { id: "ani2", urdu: "کتا", transliteration: "Kutta", english: "Dog" },
      { id: "ani3", urdu: "گائے", transliteration: "Gaye", english: "Cow" },
      { id: "ani4", urdu: "شیر", transliteration: "Sher", english: "Lion / Tiger" },
      { id: "ani5", urdu: "پرندہ", transliteration: "Parinda", english: "Bird" },
      { id: "ani6", urdu: "مچھلی", transliteration: "Machli", english: "Fish" }
    ]
  },
  {
    id: "nature",
    title: "Nature & Environment",
    description: "Words describing the natural world.",
    words: [
      { id: "nat1", urdu: "درخت", transliteration: "Darakht", english: "Tree" },
      { id: "nat2", urdu: "پہاڑ", transliteration: "Pahaar", english: "Mountain" },
      { id: "nat3", urdu: "دریا", transliteration: "Darya", english: "River" },
      { id: "nat4", urdu: "آسمان", transliteration: "Aasmaan", english: "Sky" },
      { id: "nat5", urdu: "سورج", transliteration: "Sooraj", english: "Sun" },
      { id: "nat6", urdu: "چاند", transliteration: "Chaand", english: "Moon" }
    ]
  },
  {
    id: "weather",
    title: "Weather",
    description: "Describing different weather conditions.",
    words: [
      { id: "wea1", urdu: "موسم", transliteration: "Mausam", english: "Weather" },
      { id: "wea2", urdu: "گرمی", transliteration: "Garmi", english: "Heat / Summer" },
      { id: "wea3", urdu: "سردی", transliteration: "Sardi", english: "Cold / Winter" },
      { id: "wea4", urdu: "بارش", transliteration: "Baarish", english: "Rain" },
      { id: "wea5", urdu: "برف", transliteration: "Baraf", english: "Snow" },
      { id: "wea6", urdu: "ہوا", transliteration: "Hawa", english: "Wind" }
    ]
  },
  {
    id: "home",
    title: "Around the House",
    description: "Common items found in a home.",
    words: [
      { id: "hom1", urdu: "گھر", transliteration: "Ghar", english: "House / Home" },
      { id: "hom2", urdu: "کمرہ", transliteration: "Kamra", english: "Room" },
      { id: "hom3", urdu: "دروازہ", transliteration: "Darwaza", english: "Door" },
      { id: "hom4", urdu: "کھڑکی", transliteration: "Khirki", english: "Window" },
      { id: "hom5", urdu: "بستر", transliteration: "Bistar", english: "Bed" },
      { id: "hom6", urdu: "کرسی", transliteration: "Kursi", english: "Chair" }
    ]
  },
  {
    id: "clothes",
    title: "Clothing",
    description: "Vocabulary for items of clothing.",
    words: [
      { id: "clo1", urdu: "کپڑے", transliteration: "Kapray", english: "Clothes" },
      { id: "clo2", urdu: "قمیض", transliteration: "Qameez", english: "Shirt" },
      { id: "clo3", urdu: "پتلون", transliteration: "Patloon", english: "Pants" },
      { id: "clo4", urdu: "جوتے", transliteration: "Jootay", english: "Shoes" },
      { id: "clo5", urdu: "جرابیں", transliteration: "Jurabain", english: "Socks" },
      { id: "clo6", urdu: "ٹوپی", transliteration: "Topi", english: "Hat / Cap" }
    ]
  },
  {
    id: "directions",
    title: "Directions",
    description: "Navigating and asking for directions.",
    words: [
      { id: "dir1", urdu: "دائیں", transliteration: "Daen", english: "Right" },
      { id: "dir2", urdu: "بائیں", transliteration: "Baen", english: "Left" },
      { id: "dir3", urdu: "سیدھا", transliteration: "Seedha", english: "Straight" },
      { id: "dir4", urdu: "اوپر", transliteration: "Oopar", english: "Up" },
      { id: "dir5", urdu: "نیچے", transliteration: "Neechay", english: "Down" },
      { id: "dir6", urdu: "یہاں", transliteration: "Yahan", english: "Here" }
    ]
  },
  {
    id: "time",
    title: "Time Expressions",
    description: "Talking about time in Urdu.",
    words: [
      { id: "tim1", urdu: "وقت", transliteration: "Waqt", english: "Time" },
      { id: "tim2", urdu: "آج", transliteration: "Aaj", english: "Today" },
      { id: "tim3", urdu: "کل", transliteration: "Kal", english: "Tomorrow / Yesterday" },
      { id: "tim4", urdu: "صبح", transliteration: "Subah", english: "Morning" },
      { id: "tim5", urdu: "شام", transliteration: "Shaam", english: "Evening" },
      { id: "tim6", urdu: "رات", transliteration: "Raat", english: "Night" }
    ]
  },
  {
    id: "emotions",
    title: "Emotions",
    description: "Expressing how you feel.",
    words: [
      { id: "emo1", urdu: "خوش", transliteration: "Khush", english: "Happy" },
      { id: "emo2", urdu: "اداس", transliteration: "Udaas", english: "Sad" },
      { id: "emo3", urdu: "غصہ", transliteration: "Gussa", english: "Angry" },
      { id: "emo4", urdu: "تھکا ہوا", transliteration: "Thaka Hua", english: "Tired" },
      { id: "emo5", urdu: "خوفزدہ", transliteration: "Khaufzada", english: "Scared" },
      { id: "emo6", urdu: "حیران", transliteration: "Hairaan", english: "Surprised" }
    ]
  },
  {
    id: "transport",
    title: "Transportation",
    description: "Ways to get around.",
    words: [
      { id: "tra1", urdu: "گاڑی", transliteration: "Gaari", english: "Car" },
      { id: "tra2", urdu: "بس", transliteration: "Bus", english: "Bus" },
      { id: "tra3", urdu: "ریل گاڑی", transliteration: "Rail Gaari", english: "Train" },
      { id: "tra4", urdu: "ہوائی جہاز", transliteration: "Hawai Jahaz", english: "Airplane" },
      { id: "tra5", urdu: "سائیکل", transliteration: "Cycle", english: "Bicycle" },
      { id: "tra6", urdu: "سڑک", transliteration: "Sarak", english: "Road" }
    ]
  },
  {
    id: "professions",
    title: "Professions",
    description: "Talking about jobs and careers.",
    words: [
      { id: "pro1", urdu: "ڈاکٹر", transliteration: "Doctor", english: "Doctor" },
      { id: "pro2", urdu: "استاد", transliteration: "Ustaad", english: "Teacher" },
      { id: "pro3", urdu: "کسان", transliteration: "Kisaan", english: "Farmer" },
      { id: "pro4", urdu: "دکاندار", transliteration: "Dukandaar", english: "Shopkeeper" },
      { id: "pro5", urdu: "وکیل", transliteration: "Wakeel", english: "Lawyer" },
      { id: "pro6", urdu: "انجینئر", transliteration: "Engineer", english: "Engineer" }
    ]
  },
  {
    id: "verbs1",
    title: "Common Action Words",
    description: "Essential verbs used in everyday conversation.",
    words: [
      { id: "v1_1", urdu: "کرنا", transliteration: "Karna", english: "To do" },
      { id: "v1_2", urdu: "ہونا", transliteration: "Hona", english: "To be" },
      { id: "v1_3", urdu: "جانا", transliteration: "Jana", english: "To go" },
      { id: "v1_4", urdu: "آنا", transliteration: "Aana", english: "To come" },
      { id: "v1_5", urdu: "دیکھنا", transliteration: "Dekhna", english: "To see" },
      { id: "v1_6", urdu: "سننا", transliteration: "Sunna", english: "To hear" }
    ]
  },
  {
    id: "qwords",
    title: "Question Words",
    description: "Words needed for asking questions.",
    words: [
      { id: "qw1", urdu: "کیا", transliteration: "Kya", english: "What" },
      { id: "qw2", urdu: "کون", transliteration: "Kaun", english: "Who" },
      { id: "qw3", urdu: "کہاں", transliteration: "Kahan", english: "Where" },
      { id: "qw4", urdu: "کب", transliteration: "Kab", english: "When" },
      { id: "qw5", urdu: "کیوں", transliteration: "Kyun", english: "Why" },
      { id: "qw6", urdu: "کیسے", transliteration: "Kaise", english: "How" }
    ]
  },
  {
    id: "school",
    title: "School & Education",
    description: "Vocabulary related to studying and school.",
    words: [
      { id: "sch1", urdu: "سکول", transliteration: "School", english: "School" },
      { id: "sch2", urdu: "کتاب", transliteration: "Kitaab", english: "Book" },
      { id: "sch3", urdu: "قلم", transliteration: "Qalam", english: "Pen" },
      { id: "sch4", urdu: "طالب علم", transliteration: "Talib-e-Ilm", english: "Student" },
      { id: "sch5", urdu: "کمرہ جماعت", transliteration: "Kamra-e-Jamaat", english: "Classroom" },
      { id: "sch6", urdu: "سبق", transliteration: "Sabaq", english: "Lesson" }
    ]
  },
  {
    id: "adjectives1",
    title: "Common Adjectives",
    description: "Describing things.",
    words: [
      { id: "adj1", urdu: "اچھا", transliteration: "Accha", english: "Good" },
      { id: "adj2", urdu: "برا", transliteration: "Bura", english: "Bad" },
      { id: "adj3", urdu: "بڑا", transliteration: "Bara", english: "Big" },
      { id: "adj4", urdu: "چھوٹا", transliteration: "Chhota", english: "Small" },
      { id: "adj5", urdu: "نیا", transliteration: "Naya", english: "New" },
      { id: "adj6", urdu: "پرانا", transliteration: "Purana", english: "Old" }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    description: "Vocabulary useful when visiting a market.",
    words: [
      { id: "shp1", urdu: "دکان", transliteration: "Dukan", english: "Shop" },
      { id: "shp2", urdu: "بازار", transliteration: "Bazaar", english: "Market" },
      { id: "shp3", urdu: "قیمت", transliteration: "Qeemat", english: "Price" },
      { id: "shp4", urdu: "پیسے", transliteration: "Paisey", english: "Money" },
      { id: "shp5", urdu: "سستا", transliteration: "Sasta", english: "Cheap" },
      { id: "shp6", urdu: "مہنگا", transliteration: "Mehanga", english: "Expensive" }
    ]
  },
  {
    id: "health",
    title: "Health & Medicine",
    description: "Vocab for describing medical situations.",
    words: [
      { id: "hlt1", urdu: "بیمار", transliteration: "Bimaar", english: "Sick" },
      { id: "hlt2", urdu: "ہسپتال", transliteration: "Haspatal", english: "Hospital" },
      { id: "hlt3", urdu: "دوا", transliteration: "Dawa", english: "Medicine" },
      { id: "hlt4", urdu: "درد", transliteration: "Dard", english: "Pain" },
      { id: "hlt5", urdu: "صحت", transliteration: "Sehat", english: "Health" },
      { id: "hlt6", urdu: "زخم", transliteration: "Zakhm", english: "Wound" }
    ]
  },
  {
    id: "fruits",
    title: "Fruits",
    description: "Names of common fruits.",
    words: [
      { id: "frt1", urdu: "سیب", transliteration: "Saib", english: "Apple" },
      { id: "frt2", urdu: "آم", transliteration: "Aam", english: "Mango" },
      { id: "frt3", urdu: "کیلا", transliteration: "Kela", english: "Banana" },
      { id: "frt4", urdu: "انگور", transliteration: "Angoor", english: "Grape" },
      { id: "frt5", urdu: "سنترا", transliteration: "Santra", english: "Orange" },
      { id: "frt6", urdu: "انار", transliteration: "Anaar", english: "Pomegranate" }
    ]
  },
  {
    id: "vegetables",
    title: "Vegetables",
    description: "Names of common vegetables.",
    words: [
      { id: "veg1", urdu: "آلو", transliteration: "Aloo", english: "Potato" },
      { id: "veg2", urdu: "پیاز", transliteration: "Pyaaz", english: "Onion" },
      { id: "veg3", urdu: "ٹماٹر", transliteration: "Tamatar", english: "Tomato" },
      { id: "veg4", urdu: "گاجر", transliteration: "Gaajar", english: "Carrot" },
      { id: "veg5", urdu: "پالک", transliteration: "Paalak", english: "Spinach" },
      { id: "veg6", urdu: "مٹر", transliteration: "Matar", english: "Peas" }
    ]
  },
  {
    id: "sports",
    title: "Sports & Hobbies",
    description: "Activities and games.",
    words: [
      { id: "spt1", urdu: "کھیل", transliteration: "Khel", english: "Sport / Game" },
      { id: "spt2", urdu: "کرکٹ", transliteration: "Cricket", english: "Cricket" },
      { id: "spt3", urdu: "فٹ بال", transliteration: "Football", english: "Football" },
      { id: "spt4", urdu: "تیراکی", transliteration: "Tairaki", english: "Swimming" },
      { id: "spt5", urdu: "شوق", transliteration: "Shauq", english: "Hobby" },
      { id: "spt6", urdu: "جیتنا", transliteration: "Jeetna", english: "To win" }
    ]
  },
  {
    id: "travel",
    title: "Travel",
    description: "Going to new places.",
    words: [
      { id: "tvl1", urdu: "سفر", transliteration: "Safar", english: "Journey / Travel" },
      { id: "tvl2", urdu: "مسافر", transliteration: "Musaafir", english: "Traveler" },
      { id: "tvl3", urdu: "ٹکٹ", transliteration: "Ticket", english: "Ticket" },
      { id: "tvl4", urdu: "ہوٹل", transliteration: "Hotel", english: "Hotel" },
      { id: "tvl5", urdu: "شہر", transliteration: "Shehar", english: "City" },
      { id: "tvl6", urdu: "ملک", transliteration: "Mulk", english: "Country" }
    ]
  },
  {
    id: "verbs2",
    title: "Communication Verbs",
    description: "Verbs concerning speaking and messaging.",
    words: [
      { id: "v2_1", urdu: "بولنا", transliteration: "Bolna", english: "To speak" },
      { id: "v2_2", urdu: "بتانا", transliteration: "Batana", english: "To tell" },
      { id: "v2_3", urdu: "پوچھنا", transliteration: "Poochna", english: "To ask" },
      { id: "v2_4", urdu: "لکھنا", transliteration: "Likhna", english: "To write" },
      { id: "v2_5", urdu: "پڑھنا", transliteration: "Parhna", english: "To read" },
      { id: "v2_6", urdu: "سمجھنا", transliteration: "Samajhna", english: "To understand" }
    ]
  },
  {
    id: "adjectives2",
    title: "More Adjectives",
    description: "Additional descriptors.",
    words: [
      { id: "adj2_1", urdu: "خوبصورت", transliteration: "Khoobsurat", english: "Beautiful" },
      { id: "adj2_2", urdu: "بدصورت", transliteration: "Badsurat", english: "Ugly" },
      { id: "adj2_3", urdu: "گرم", transliteration: "Garam", english: "Hot" },
      { id: "adj2_4", urdu: "ٹھنڈا", transliteration: "Thanda", english: "Cold" },
      { id: "adj2_5", urdu: "آسان", transliteration: "Aasaan", english: "Easy" },
      { id: "adj2_6", urdu: "مشکل", transliteration: "Mushkil", english: "Difficult" }
    ]
  },
  {
    id: "kitchen",
    title: "In the Kitchen",
    description: "Kitchen utensils and actions.",
    words: [
      { id: "kit1", urdu: "چھری", transliteration: "Chhuri", english: "Knife" },
      { id: "kit2", urdu: "چمچ", transliteration: "Chamach", english: "Spoon" },
      { id: "kit3", urdu: "پیالی", transliteration: "Pyali", english: "Bowl" },
      { id: "kit4", urdu: "پلیٹ", transliteration: "Plate", english: "Plate" },
      { id: "kit5", urdu: "پکانا", transliteration: "Pakana", english: "To cook" },
      { id: "kit6", urdu: "چولہا", transliteration: "Choolha", english: "Stove" }
    ]
  },
  {
    id: "pronouns",
    title: "Pronouns",
    description: "Replacing nouns with pronouns.",
    words: [
      { id: "prn1", urdu: "میں", transliteration: "Main", english: "I" },
      { id: "prn2", urdu: "ہم", transliteration: "Hum", english: "We" },
      { id: "prn3", urdu: "تم", transliteration: "Tum", english: "You (Informal)" },
      { id: "prn4", urdu: "آپ", transliteration: "Aap", english: "You (Formal)" },
      { id: "prn5", urdu: "وہ", transliteration: "Wo", english: "He / She / They" },
      { id: "prn6", urdu: "یہ", transliteration: "Yeh", english: "This / It" }
    ]
  },
  {
    id: "tech",
    title: "Technology",
    description: "Words for modern devices.",
    words: [
      { id: "tec1", urdu: "فون", transliteration: "Phone", english: "Phone" },
      { id: "tec2", urdu: "کمپیوٹر", transliteration: "Computer", english: "Computer" },
      { id: "tec3", urdu: "بجلی", transliteration: "Bijli", english: "Electricity" },
      { id: "tec4", urdu: "تار", transliteration: "Taar", english: "Wire / Cable" },
      { id: "tec5", urdu: "پیغام", transliteration: "Paigham", english: "Message" },
      { id: "tec6", urdu: "تصویر", transliteration: "Tasveer", english: "Picture / Photo" }
    ]
  },
  {
    id: "art",
    title: "Art & Music",
    description: "Creative vocabulary.",
    words: [
      { id: "art1", urdu: "گانا", transliteration: "Gaana", english: "Song" },
      { id: "art2", urdu: "آواز", transliteration: "Awaaz", english: "Voice / Sound" },
      { id: "art3", urdu: "رنگ", transliteration: "Rang", english: "Color" },
      { id: "art4", urdu: "ناچنا", transliteration: "Naachna", english: "To dance" },
      { id: "art5", urdu: "فنکار", transliteration: "Fankaar", english: "Artist" },
      { id: "art6", urdu: "موسیقی", transliteration: "Mauseeqi", english: "Music" }
    ]
  },
  {
    id: "shapes",
    title: "Shapes",
    description: "Basic geometric shapes.",
    words: [
      { id: "shp_1", urdu: "گول", transliteration: "Gol", english: "Circle / Round" },
      { id: "shp_2", urdu: "مربع", transliteration: "Murabba", english: "Square" },
      { id: "shp_3", urdu: "مثلث", transliteration: "Musallas", english: "Triangle" },
      { id: "shp_4", urdu: "ستارہ", transliteration: "Sitara", english: "Star" },
      { id: "shp_5", urdu: "خط", transliteration: "Khat", english: "Line" },
      { id: "shp_6", urdu: "زاویہ", transliteration: "Zawia", english: "Angle" }
    ]
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Items in your living space.",
    words: [
      { id: "fur1", urdu: "میز", transliteration: "Maiz", english: "Table" },
      { id: "fur2", urdu: "کرسی", transliteration: "Kursi", english: "Chair" },
      { id: "fur3", urdu: "صوفہ", transliteration: "Sofa", english: "Couch / Sofa" },
      { id: "fur4", urdu: "الماری", transliteration: "Almari", english: "Closet / Cupboard" },
      { id: "fur5", urdu: "بستر", transliteration: "Bistar", english: "Bed" },
      { id: "fur6", urdu: "قالین", transliteration: "Qaleen", english: "Carpet" }
    ]
  },
  {
    id: "beverages",
    title: "Beverages",
    description: "Drinks and liquids.",
    words: [
      { id: "bev1", urdu: "پانی", transliteration: "Paani", english: "Water" },
      { id: "bev2", urdu: "دودھ", transliteration: "Doodh", english: "Milk" },
      { id: "bev3", urdu: "چائے", transliteration: "Chai", english: "Tea" },
      { id: "bev4", urdu: "قہوہ", transliteration: "Qahwa", english: "Coffee / Green Tea" },
      { id: "bev5", urdu: "شربت", transliteration: "Sharbat", english: "Syrup / Juice" },
      { id: "bev6", urdu: "لسی", transliteration: "Lassi", english: "Yogurt Drink" }
    ]
  },
  {
    id: "buildings",
    title: "Buildings & Places",
    description: "Common structures in a city.",
    words: [
      { id: "bld1", urdu: "عمارت", transliteration: "Imarat", english: "Building" },
      { id: "bld2", urdu: "مسجد", transliteration: "Masjid", english: "Mosque" },
      { id: "bld3", urdu: "بینک", transliteration: "Bank", english: "Bank" },
      { id: "bld4", urdu: "ہسپتال", transliteration: "Haspatal", english: "Hospital" },
      { id: "bld5", urdu: "دفتر", transliteration: "Daftar", english: "Office" },
      { id: "bld6", urdu: "پارک", transliteration: "Park", english: "Park" }
    ]
  },
  {
    id: "verbs3_movement",
    title: "Movement Verbs",
    description: "Verbs related to movement.",
    words: [
      { id: "v3_1", urdu: "چلنا", transliteration: "Chalna", english: "To walk" },
      { id: "v3_2", urdu: "دوڑنا", transliteration: "Dorna", english: "To run" },
      { id: "v3_3", urdu: "اڑنا", transliteration: "Urna", english: "To fly" },
      { id: "v3_4", urdu: "گرنا", transliteration: "Girna", english: "To fall" },
      { id: "v3_5", urdu: "اٹھنا", transliteration: "Uthna", english: "To wake up / get up" },
      { id: "v3_6", urdu: "بیٹھنا", transliteration: "Baithna", english: "To sit" }
    ]
  },
  {
    id: "materials",
    title: "Materials",
    description: "What things are made of.",
    words: [
      { id: "mat1", urdu: "لکڑی", transliteration: "Lakri", english: "Wood" },
      { id: "mat2", urdu: "لوہا", transliteration: "Loha", english: "Iron" },
      { id: "mat3", urdu: "سونا", transliteration: "Sona", english: "Gold" },
      { id: "mat4", urdu: "چاندی", transliteration: "Chaandi", english: "Silver" },
      { id: "mat5", urdu: "شیشہ", transliteration: "Sheesha", english: "Glass" },
      { id: "mat6", urdu: "پتھر", transliteration: "Patthar", english: "Stone" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    description: "Useful tools for fixing things.",
    words: [
      { id: "tol1", urdu: "ہتھوڑا", transliteration: "Hathora", english: "Hammer" },
      { id: "tol2", urdu: "آری", transliteration: "Aari", english: "Saw" },
      { id: "tol3", urdu: "کیل", transliteration: "Keel", english: "Nail" },
      { id: "tol4", urdu: "پیچ", transliteration: "Pech", english: "Screw" },
      { id: "tol5", urdu: "چابی", transliteration: "Chaabi", english: "Key" },
      { id: "tol6", urdu: "تالا", transliteration: "Taala", english: "Lock" }
    ]
  },
  {
    id: "religion",
    title: "Religion",
    description: "Spiritual and religious terms.",
    words: [
      { id: "rel1", urdu: "مذہب", transliteration: "Mazhab", english: "Religion" },
      { id: "rel2", urdu: "خدا", transliteration: "Khuda", english: "God" },
      { id: "rel3", urdu: "دعا", transliteration: "Dua", english: "Prayer" },
      { id: "rel4", urdu: "نیک", transliteration: "Naik", english: "Pious / Good" },
      { id: "rel5", urdu: "گناہ", transliteration: "Gunah", english: "Sin" },
      { id: "rel6", urdu: "فرشتہ", transliteration: "Farishta", english: "Angel" }
    ]
  },
  {
    id: "astronomy",
    title: "Astronomy",
    description: "Words about space.",
    words: [
      { id: "ast1", urdu: "تارا", transliteration: "Taara", english: "Star" },
      { id: "ast2", urdu: "سیارہ", transliteration: "Sayyara", english: "Planet" },
      { id: "ast3", urdu: "آسمان", transliteration: "Aasmaan", english: "Sky" },
      { id: "ast4", urdu: "زمین", transliteration: "Zameen", english: "Earth" },
      { id: "ast5", urdu: "سورج", transliteration: "Sooraj", english: "Sun" },
      { id: "ast6", urdu: "کہکشاں", transliteration: "Kehkashan", english: "Galaxy" }
    ]
  },
  {
    id: "seasons",
    title: "Seasons",
    description: "Times of the year.",
    words: [
      { id: "sea1", urdu: "موسم سرما", transliteration: "Mausam-e-Sarma", english: "Winter" },
      { id: "sea2", urdu: "موسم گرما", transliteration: "Mausam-e-Garma", english: "Summer" },
      { id: "sea3", urdu: "بہار", transliteration: "Bahaar", english: "Spring" },
      { id: "sea4", urdu: "خزاں", transliteration: "Khizaan", english: "Autumn" },
      { id: "sea5", urdu: "برسات", transliteration: "Barsaat", english: "Monsoon" },
      { id: "sea6", urdu: "موسم", transliteration: "Mausam", english: "Season" }
    ]
  },
  {
    id: "everyday_objects",
    title: "Everyday Objects",
    description: "Items used daily.",
    words: [
      { id: "obj1", urdu: "کتاب", transliteration: "Kitaab", english: "Book" },
      { id: "obj2", urdu: "قلم", transliteration: "Qalam", english: "Pen" },
      { id: "obj3", urdu: "چابی", transliteration: "Chaabi", english: "Key" },
      { id: "obj4", urdu: "پیسے", transliteration: "Paisey", english: "Money" },
      { id: "obj5", urdu: "تھیلا", transliteration: "Thela", english: "Bag" },
      { id: "obj6", urdu: "گھڑی", transliteration: "Ghari", english: "Watch / Clock" }
    ]
  },
  {
    id: "months_basic",
    title: "Months",
    description: "Words concerning months.",
    words: [
      { id: "mon1", urdu: "مہینہ", transliteration: "Maheena", english: "Month" },
      { id: "mon2", urdu: "سال", transliteration: "Saal", english: "Year" },
      { id: "mon3", urdu: "ہفتہ", transliteration: "Hafta", english: "Week" },
      { id: "mon4", urdu: "آج", transliteration: "Aaj", english: "Today" },
      { id: "mon5", urdu: "دن", transliteration: "Din", english: "Day" },
      { id: "mon6", urdu: "تاریخ", transliteration: "Tareekh", english: "Date" }
    ]
  },
  {
    id: "conjunctions",
    title: "Conjunctions",
    description: "Connecting words.",
    words: [
      { id: "conj1", urdu: "اور", transliteration: "Aur", english: "And" },
      { id: "conj2", urdu: "یا", transliteration: "Ya", english: "Or" },
      { id: "conj3", urdu: "لیکن", transliteration: "Lekin", english: "But" },
      { id: "conj4", urdu: "اگر", transliteration: "Agar", english: "If" },
      { id: "conj5", urdu: "کیونکہ", transliteration: "Kyunke", english: "Because" },
      { id: "conj6", urdu: "پھر", transliteration: "Phir", english: "Then" }
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions",
    description: "Words showing position or relation.",
    words: [
      { id: "prep1", urdu: "میں", transliteration: "Mein", english: "In" },
      { id: "prep2", urdu: "پر", transliteration: "Par", english: "On" },
      { id: "prep3", urdu: "سے", transliteration: "Se", english: "From" },
      { id: "prep4", urdu: "کے لئے", transliteration: "Ke liye", english: "For" },
      { id: "prep5", urdu: "کے ساتھ", transliteration: "Ke saath", english: "With" },
      { id: "prep6", urdu: "کے بغیر", transliteration: "Ke baghair", english: "Without" }
    ]
  },
  {
    id: "adverbs_time",
    title: "Adverbs of Time",
    description: "When things happen.",
    words: [
      { id: "advt1", urdu: "ہمیشہ", transliteration: "Hamesha", english: "Always" },
      { id: "advt2", urdu: "کبھی کبھی", transliteration: "Kabhi kabhi", english: "Sometimes" },
      { id: "advt3", urdu: "کبھی نہیں", transliteration: "Kabhi nahi", english: "Never" },
      { id: "advt4", urdu: "ابھی", transliteration: "Abhi", english: "Right now" },
      { id: "advt5", urdu: "جلدی", transliteration: "Jaldi", english: "Early / Quickly" },
      { id: "advt6", urdu: "دیر", transliteration: "Dair", english: "Late" }
    ]
  },
  {
    id: "adverbs_place",
    title: "Adverbs of Place",
    description: "Where things happen.",
    words: [
      { id: "advp1", urdu: "یہاں", transliteration: "Yahan", english: "Here" },
      { id: "advp2", urdu: "وہاں", transliteration: "Wahan", english: "There" },
      { id: "advp3", urdu: "کہیں", transliteration: "Kahin", english: "Somewhere" },
      { id: "advp4", urdu: "ہر جگہ", transliteration: "Har jagah", english: "Everywhere" },
      { id: "advp5", urdu: "قریب", transliteration: "Qareeb", english: "Near" },
      { id: "advp6", urdu: "دور", transliteration: "Door", english: "Far" }
    ]
  },
  {
    id: "profESSIONS_2",
    title: "More Professions",
    description: "Additional job titles.",
    words: [
      { id: "pro2_1", urdu: "خاک روب", transliteration: "Khaak rob", english: "Sweeper" },
      { id: "pro2_2", urdu: "ڈاکیا", transliteration: "Dakia", english: "Postman" },
      { id: "pro2_3", urdu: "لوہار", transliteration: "Lohaar", english: "Blacksmith" },
      { id: "pro2_4", urdu: "درزی", transliteration: "Darzi", english: "Tailor" },
      { id: "pro2_5", urdu: "ہجام", transliteration: "Hajaam", english: "Barber" },
      { id: "pro2_6", urdu: "سیاستدان", transliteration: "Siyasatdaan", english: "Politician" }
    ]
  }
];

// Helper to provide all words flattened
export const allWords = urduLessons.flatMap(l => l.words);
