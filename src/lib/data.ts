import darrachImage from "@/assets/images/team/darrach.jpeg";
import sandraImage from "@/assets/images/team/sandra.jpeg";
import dayanaImage from "@/assets/images/team/dayana.png";
import oluwaseunImage from "@/assets/images/team/oluwaseun.jpeg";
import defaultImage from "@/assets/images/team/default.png";

export const TEAM_DATA = [
  {
    title: "Darrach Barneveld",
    linkedIn: "https://www.linkedin.com/in/darrach-barneveld-2b493511b/",
    github: "https://github.com/DarrachBarneveld",
    imageUrl: darrachImage,
  },
  {
    title: "Sandra Bergstrom",
    linkedIn: "https://www.linkedin.com/in/sandrabergstrom/",
    github: "https://github.com/SandraBergstrom",
    imageUrl: sandraImage,
  },
  {
    title: "Bartosz Gębarowski",
    linkedIn: "https://www.linkedin.com/in/bartoszgebarowski/",
    github: "https://github.com/bartoszgebarowski",
    imageUrl: defaultImage,
  },
  {
    title: "Dayana Nashkova",
    linkedIn: "https://www.linkedin.com/in/dayana-nashkova-b46463165/",
    github: "https://github.com/Dayana-N",
    imageUrl: dayanaImage,
  },
  {
    title: "Oluwaseun Olawunmi Adeoye",
    linkedIn: "https://www.linkedin.com/in/oluwaseun-olawunmi-adeoye-862a56225",
    github: "https://github.com/57Esther",
    imageUrl: oluwaseunImage,
  },
  {
    title: "Dima Bulavenko",
    linkedIn: "https://www.linkedin.com/in/dima-bulavenko-07a162239/",
    github: "https://github.com/Dima-Bulavenko",
    imageUrl: defaultImage,
  },
] as const;

export const TRADITION_DATA: Tradition[] = [
  {
    country: "Ireland",
    coords: [-6.2603, 53.3498],
    activity:
      "To ward off evil spirits, families in Ireland make way for a healthy and prosperous New Year by banging loaves of Christmas bread against the walls and doors throughout the home",
    celebration: "Banging bread against the walls",
    marker: "https://flagcdn.com/ie.svg",
  },
  {
    country: "Greece",
    coords: [21.8243, 39.0742],
    activity:
      "In Greece, it's a tradition to hang an onion outside the door on New Year's Day for good luck and prosperity. The onion, symbolizing fertility and growth, is believed to bring positive fortune for the year ahead",
    celebration: "Hanging an onion outside the door",
    marker: "https://flagcdn.com/gr.svg",
  },
  {
    country: "India",
    coords: [78.9629, 20.5937],
    activity:
      "In Mumbai, an old tradition involved burning an effigy symbolizing the past year at midnight. Beyond symbolism, this communal celebration in the cosmopolitan city united people of diverse backgrounds, standing out as an inclusive ceremony that transcended age and religious beliefs.",
    celebration: "Building a sculpture of an old man and burning it down",
    marker: "https://flagcdn.com/in.svg",
  },
  {
    country: "Japan",
    coords: [138.2529, 36.2048],
    activity:
      "Here's a New Year's Eve appetizer idea: People in Japan kick off the New Year by eating a warm bowl of soba noodles. The tradition dates back to the Kamakura period and is tied to a Buddhist temple giving out the noodles to the poor. Because the long thin noodles are firm yet easy to bite, it is believed eating them symbolizes a literal break away from the old year.",
    celebration: "Eating soba noodles",
    marker: "https://flagcdn.com/jp.svg",
  },
  {
    country: "Poland",
    coords: [19.1451, 51.9194],
    activity:
      "The New Year's Eve celebration in Poland was brief until the latter part of the 19th century. Lavish balls, dances, and toasts were absent, limited to big cities and affluent households. In rural areas, the last day of the year held little significance, with the primary celebration centered around Christmas.",
    celebration: "",
    marker: "https://flagcdn.com/pl.svg",
  },
  {
    country: "Spain",
    coords: [-3.7492, 40.4637],
    activity:
      "Spaniards kick off the new year by quickly eating 12 grapes, symbolizing each clock strike at midnight. This tradition, called 'las doce uvas de la suerte,' dates back to the late 19th century and is believed to bring luck and prosperity if all the grapes are consumed within seconds.",
    celebration: "Eating 12 grapes",
    marker: "https://flagcdn.com/es.svg",
  },
  {
    country: "United States",
    coords: [-95.7129, 37.0902],
    activity:
      "Millions of Americans tune in to their TV screens or brave the cold streets of Times Square to witness the annual ball drop at midnight. Originating in 1907 to mark the arrival of January 1908, the event was conceived by New York Times owner Adolph Ochs to showcase the newspaper's new headquarters. Since then, it has become a yearly spectacle and one of the most beloved New Year's Eve celebrations.",
    celebration: "Watching the ball drop",
    marker: "https://flagcdn.com/us.svg",
  },
  {
    country: "Brazil",
    coords: [-51.9253, -14.235],
    activity:
      "In Brazil, after midnight, people traditionally go to the beach during the summer. They jump seven waves, making seven wishes to honor Yemanja, the goddess of water. Wearing all white before entering the water symbolizes purity.",
    celebration: "Heading to the beach",
    marker: "https://flagcdn.com/br.svg",
  },
  {
    country: "France",
    coords: [2.2137, 46.2276],
    activity:
      "In France, New Year's celebrations revolve around Champagne, accompanied by dancing and party-hopping. The culinary tradition remains consistent, with sparkling wines complementing oysters, turkey, goose, or Cornish hen.",
    celebration: "Feasting with Champagne",
    marker: "https://flagcdn.com/fr.svg",
  },
  {
    country: "Haiti",
    coords: [-72.2852, 18.9712],
    activity:
      "On January 1, Haitians celebrate Independence Day. The traditional meal includes pumpkin soup, soup joumou, once forbidden to enslaved Black people. It's a communal experience with people visiting each other to swap soups and enjoy different variations.",
    celebration: "Sharing soup joumou",
    marker: "https://flagcdn.com/ht.svg",
  },
  {
    country: "Denmark",
    coords: [9.5018, 56.2639],
    activity:
      "Chucking plates at your friends usually signals a conversation gone very wrong. In Denmark, however, New Year’s Eve traditions like this bring your loved ones the best luck. Tradition has it that the more broken kitchenware you accumulate on your door step, the better off you’ll be.",
    celebration: "Throwing old plates",
    marker: "https://flagcdn.com/dk.svg",
  },
  {
    country: "Canada",
    coords: [-106.3468, 56.1304],
    activity:
      "Freezing temps don’t keep Canadians from starting the new year with a winter favorite sport—ice fishing. According to Global News, families will rent heated huts and cooking equipment so that they can enjoy their feast with loved ones on the spot.",
    celebration: "Going ice fishing",
    marker: "https://flagcdn.com/ca.svg",
  },
  {
    country: "Philippines",
    coords: [121.774, 12.8797],
    activity:
      "On New Year’s Eve, families in the Philippines make sure to serve 12 round fruits, like apples, grapes, and plums, which are believed to represent prosperity due to their shape, which mirrors coins. As for the lucky number, each fruit represents one month out of the year.",
    celebration: "Serving 12 round fruits",
    marker: "https://flagcdn.com/ph.svg",
  },
  {
    country: "Mexico",
    coords: [-102.5528, 23.6345],
    activity:
      "In Mexico, families gather to make and share tamales on New Year's Eve, and the following day, they often enjoy them with menudo, a traditional Mexican soup.",
    celebration: "Giving the gift of homemade tamales",
    marker: "https://flagcdn.com/mx.svg",
  },
  {
    country: "Colombia",
    coords: [-74.2973, 4.5709],
    activity:
      "On New Year's Eve in Colombia, the agüero tradition involves placing three potatoes under each family member's bed—one peeled, one unpeeled, and one partially peeled. At midnight, everyone blindly chooses a potato, symbolizing expectations for the upcoming year: good fortune, financial challenges, or a mix of both.",
    celebration: "Placing three potatoes under the bed",
    marker: "https://flagcdn.com/co.svg",
  },
  {
    country: "Norway",
    coords: [8.4689, 60.472],
    activity:
      "Kransekake, a traditional ringed cake often made with at least 18 layers, is eaten in both Denmark and Norway on New Year’s Eve. The sugary layers, which look like cookies, are held together with a tasty royal icing.",
    celebration: "Celebrating with a towering cake",
    marker: "https://flagcdn.com/no.svg",
  },
  {
    country: "Italy",
    coords: [12.5674, 41.8719],
    activity:
      "In Italy, it's considered good luck to be wearing red undergarments as the ball drops. How and when this practice started is disputed, but why not give it a try? We'll wear any underwear color in the new year if it means a bright future ahead. We even shopped some options for you, below. Hell, lean in and choose red for your New Year's Eve nails and New Year's outfit too.",
    celebration: "Wearing red underwear",
    marker: "https://flagcdn.com/it.svg",
  },
  {
    country: "Puerto Rico",
    coords: [-66.5901, 18.2208],
    activity:
      "In many countries, Puerto Rico included, it's customary to start the year by cleaning everything—and we mean everything. The idea behind it is simple: out with the old, in with the new. In short, if you start the year fresh, it will continue that way.",
    celebration: "Cleaning your home",
    marker: "https://flagcdn.com/pr.svg",
  },
  {
    country: "England",
    coords: [-1.1743, 52.3555],
    activity:
      "On New Year's Eve in Britain, people traditionally gather to await the chimes of Big Ben at midnight. As the bells ring, a large circle forms, and people sing the traditional song 'Auld Lang Syne,' according to Natasha Pearlman, executive editor at Glamour.",
    celebration: "Listening to Big Ben’s bells toll",
    marker: "https://flagcdn.com/gb.svg",
  },
  {
    country: "Germany",
    coords: [10.4515, 51.1657],
    activity:
      "In some European countries, including Austria and Germany, watching this black-and-white British comedy sketch, recorded in 1962, has become traditional viewing on New Year's Eve. Some die-hards even make the four-course dinner featured in the 18-minute sketch.",
    celebration: "Watching Dinner for One",
    marker: "https://flagcdn.com/de.svg",
  },
  {
    country: "Finland",
    coords: [25.7482, 61.9241],
    activity:
      "In Finland, people predict the coming year by casting molten tin into a container of water, then interpreting the shape the metal takes after hardening. A heart or ring means a wedding, while a ship predicts travel and a pig declares there will be plenty of food.",
    celebration: "Fortune telling with melting tin",
    marker: "https://flagcdn.com/fi.svg",
  },
  {
    country: "Australia",
    coords: [133.7751, -25.2744],
    activity:
      "Australians celebrate the New Year with midnight fireworks in cities and towns throughout the country. Firework displays are launched off bridges, such as the Sydney Harbour Bridge, from jetties along the beaches, and on river banks, with the lights of the fireworks sparkling off the water",
    celebration: "Sydney Harbour Fireworks",
    marker: "https://flagcdn.com/au.svg",
  },
  {
    country: "China",
    coords: [104.1954, 35.8617],
    activity:
      "Chinese New Year a annual 15-day festival. Families gather for a New Year's Eve dinner called Nian Ye Fan, seated around a large table. They burn incense to honor ancestors, and elders gift younger members with lucky money, known as Ya Sui Qian, in red envelopes (Hong Bao).",
    celebration: "Chinese New Year, annual 15-day festival",
    marker: "https://flagcdn.com/cn.svg",
  },
  {
    country: "South Africa",
    coords: [22.9375, -30.5595],
    activity:
      "In South Africa, New Year's Eve is celebrated with fireworks, parties, and various events. People gather to welcome the New Year with joy and festivities.",
    celebration: "Fireworks and celebrations",
    marker: "https://flagcdn.com/za.svg",
  },
  {
    country: "New Zealand",
    coords: [174.7633, -40.9006],
    activity:
      "New Zealanders celebrate the New Year with fireworks, parties, and cultural events. The country is one of the first to welcome the New Year due to its location near the International Date Line.",
    celebration: "New Year festivities and cultural events",
    marker: "https://flagcdn.com/nz.svg",
  },
  {
    country: "Russia",
    coords: [105.3188, 61.524],
    activity:
      "In Russia, New Year's Eve is a major celebration with fireworks, festive meals, and cultural events. The holiday season continues with the celebration of Russian Orthodox Christmas.",
    celebration: "Fireworks, festive meals, and Orthodox Christmas",
    marker: "https://flagcdn.com/ru.svg",
  },
  {
    country: "Kenya",
    coords: [37.9062, -0.0236],
    activity:
      "Kenya celebrates New Year's Eve with fireworks, parties, and various events. The festive atmosphere brings people together to welcome the New Year with joy and enthusiasm.",
    celebration: "Fireworks, parties, and festive events",
    marker: "https://flagcdn.com/ke.svg",
  },
  {
    country: "Nigeria",
    coords: [8.6753, 9.082],
    activity:
      "In Nigeria, New Year's Eve is celebrated with fireworks, music, and cultural events. People gather to welcome the New Year with prayers, festivities, and optimism for the year ahead.",
    celebration: "Fireworks, music, and cultural celebrations",
    marker: "https://flagcdn.com/ng.svg",
  },
];

export type Tradition = {
  country: string;
  coords: [number, number];
  activity: string;
  celebration: string;
  marker: string;
};
