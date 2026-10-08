export type Artwork = {
  file: string;
  title: string;
  // The artist's own nickname for the piece, shown on its label.
  alias: string;
  width: number;
  height: number;
};

// Native pixel sizes; the salon wall uses them to decide how much space each piece gets.
export const artworks: Artwork[] = [
  { file: "1.kapak.png", title: "The Diary, Cover Study I", alias: "Kapak I", width: 192, height: 192 },
  { file: "fuji.png", title: "Thirty-Six Pixels of Mount Fuji", alias: "Fuji", width: 64, height: 64 },
  { file: "badcat.png", title: "Portrait of a Cat Who Regrets Nothing", alias: "Bad Cat", width: 32, height: 32 },
  { file: "japan-cat.png", title: "Maneki-neko, Beckoning Fortune", alias: "Japan Cat", width: 48, height: 64 },
  { file: "happy-birday.png", title: "Still Life with Cake and Three Hearts", alias: "Happy Birday", width: 64, height: 64 },
  { file: "kurpiks.png", title: "Kurpiks in Frog's Clothing", alias: "Kurpiks", width: 32, height: 32 },
  { file: "totoro.png", title: "Waiting for the Catbus", alias: "Totoro", width: 64, height: 64 },
  { file: "japan.png", title: "Land of the Rising Sun", alias: "Japan", width: 128, height: 128 },
  { file: "view.png", title: "Nocturne over the Pines", alias: "View", width: 64, height: 64 },
  { file: "sad.png", title: "Please, Just One More", alias: "Sad", width: 48, height: 48 },
  { file: "kopecik.png", title: "Good Boy, Sitting", alias: "Köpecik", width: 32, height: 32 },
  { file: "page.png", title: "The Unwritten Page", alias: "Page", width: 320, height: 480 },
  { file: "yildiz.png", title: "Spiral Star", alias: "Yıldız", width: 64, height: 64 },
  { file: "bimo.png", title: "BMO Wants to Play", alias: "Bimo", width: 32, height: 32 },
  { file: "kaonashi.png", title: "No-Face, Patiently", alias: "Kaonashi", width: 64, height: 64 },
  { file: "asik-hayalet.png", title: "A Ghost in Love", alias: "Aşık Hayalet", width: 32, height: 32 },
  { file: "popi.png", title: "Keroppi at Leisure", alias: "Popi", width: 32, height: 32 },
  { file: "2.kapak.png", title: "The Diary, Cover Study II", alias: "Kapak II", width: 192, height: 192 },
  { file: "nahcekmeyenkedi.png", title: "The Scream (Feline, Restrained)", alias: "Nah Çekmeyen Kedi", width: 128, height: 128 },
  { file: "verysad-1.png", title: "Lament in Yellow", alias: "Very Sad", width: 48, height: 48 },
  { file: "winniethepooh.png", title: "In Pursuit of Hunny", alias: "Winnie the Pooh", width: 64, height: 64 },
  { file: "pikachuuu.png", title: "Electric Optimism", alias: "Pikachuuu", width: 64, height: 64 },
  { file: "catss.png", title: "Cats in Sequence", alias: "Catss", width: 64, height: 128 },
  { file: "baloncuk1.png", title: "Unspoken I", alias: "Baloncuk I", width: 64, height: 64 },
  { file: "pirasa.png", title: "Ode to a Leek", alias: "Pırasa", width: 32, height: 32 },
  { file: "keltos.png", title: "The Hero, Off Duty", alias: "Keltoş", width: 64, height: 64 },
  { file: "3.kapak.png", title: "The Diary, Cover Study III", alias: "Kapak III", width: 192, height: 192 },
  { file: "kara-kedicik.png", title: "Black Cat at Golden Hour", alias: "Kara Kedicik", width: 64, height: 64 },
  { file: "limon.png", title: "Lemon Blossom Study", alias: "Limon", width: 32, height: 32 },
  { file: "noddle.png", title: "Ramen, Smiling Back", alias: "Noodle", width: 32, height: 32 },
  { file: "idk.png", title: "The Great Wave, Pocket Edition", alias: "Idk", width: 32, height: 32 },
  { file: "book.png", title: "The Diary", alias: "Book", width: 128, height: 128 },
  { file: "alevcik.png", title: "The Fire Demon Keeps Warm", alias: "Alevcik", width: 64, height: 64 },
  { file: "pikipuku.png", title: "Pochacco, Unbothered", alias: "Pikipuku", width: 32, height: 32 },
  { file: "happy.png", title: "Unreasonable Joy", alias: "Happy", width: 48, height: 48 },
  { file: "maymun.png", title: "Monkey Business", alias: "Maymun", width: 32, height: 32 },
  { file: "farecik.png", title: "Small Mouse, Big Ears", alias: "Farecik", width: 32, height: 32 },
  { file: "nahcekenkedi.png", title: "The Scream (Feline)", alias: "Nah Çeken Kedi", width: 128, height: 128 },
  { file: "smile.png", title: "Have a Nice Day", alias: "Smile", width: 48, height: 48 },
  { file: "tatlis-kurbik.png", title: "Frog Beneath a Mushroom Cap", alias: "Tatlış Kurbik", width: 64, height: 64 },
  { file: "4.kapak.png", title: "The Diary, Open", alias: "Kapak IV", width: 192, height: 192 },
  { file: "pikacuuu.png", title: "Electric Optimism, Miniature", alias: "Pikacuuu", width: 32, height: 32 },
  { file: "imlec.png", title: "Click to Continue", alias: "İmleç", width: 32, height: 32 },
  { file: "notr.png", title: "Neutral, Considered", alias: "Nötr", width: 48, height: 48 },
  { file: "tontik.png", title: "Shin-chan Strikes a Pose", alias: "Tontik", width: 64, height: 64 },
  { file: "van_gogh.png", title: "The Starry Night, 32 Pixels Wide", alias: "Van Gogh", width: 32, height: 32 },
  { file: "cimen.gif", title: "Meadow, Breathing", alias: "Çimen", width: 32, height: 32 },
  { file: "kapibara.png", title: "Capybara at Peace", alias: "Kapibara", width: 64, height: 64 },
  { file: "hunterhunter.png", title: "Gon, Ready to Hunt", alias: "Hunter × Hunter", width: 64, height: 64 },
  { file: "baloncuk2.png", title: "Unspoken II", alias: "Baloncuk II", width: 64, height: 64 },
];
