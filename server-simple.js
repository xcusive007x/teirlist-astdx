const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Tier list data
const tierListData = {
  id: "1",
  title: "All Star Tower Defense X - Unit Tier List By x_Cusive",
  description: "Complete tier list for All Star Tower Defense X units",
  tiers: [
    {
      id: "s-plus",
      name: "S+",
      color: "#ff3064",
      units: [
        // {
        //   id: "jin-sung",
        //   name: "Jin Sung",
        //   imageUrl:
        //     "https://progameguides.com/wp-content/uploads/2025/07/-all-star-tower-defense-x.png",
        //   alt: "Jin Sung unit from the All Star Tower Defense X Roblox experience.",
        //   tier: "S+",
        // },
        {
          id: "dark-wing",
          name: "Dark Wing",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/dark-wing-all-star-tower-defense-x.png",
          alt: "Dark Wing unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "yuni",
          name: "Yuni",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/yuni-all-star-tower-defense-x.png",
          alt: "Yuni unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "the-strongest-one",
          name: "The Strongest One",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/the-strongest-one-all-star-tower-defense-x.png",
          alt: "The Strongest One",
          tier: "S+",
        },
        {
          id: "slayer-mage",
          name: "Slayer Mage",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/slayer-mage-all-star-tower-defense-x.png",
          alt: "Slayer Mage unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "mysterious-x",
          name: "Mysterious X",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/mysterious-x-all-star-tower-defense-x.png",
          alt: "Mysterious X unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "king-kaoe",
          name: "King Kaoe",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/king-kaoe-all-star-tower-defense-x.png",
          alt: "King Kaoe unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "xero",
          name: "Xero",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/xero-all-star-tower-defense-x.png",
          alt: "Xero unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
        {
          id: "blackstache",
          name: "Blackstache",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/blackstache-all-star-tower-defense-x.png",
          alt: "Blackstache unit from the All Star Tower Defense X Roblox experience.",
          tier: "S+",
        },
      ],
    },
    {
      id: "s",
      name: "S",
      color: "#9b31ff",
      units: [
        {
          id: "zorro",
          name: "Zorro",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/zorro-all-star-tower-defense-x.png",
          alt: "Zorro unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
        {
          id: "explosion-artist",
          name: "Explosion Artist",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/explosion-artist-all-star-tower-defense-x.png",
          alt: "Explosion Artist unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
        {
          id: "venus",
          name: "Venus",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/venus-all-star-tower-defense-x.png",
          alt: "Venus unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
        {
          id: "whitestache",
          name: "Whitestache",
          imageUrl:
            "https://cdn.discordapp.com/attachments/996012348722659368/1391406680427855933/image.png?ex=686bc7f3&is=686a7673&hm=5b3f5e1084d886022768c31918d5c405bef4363bde4824b2deaa4dc7cbfcd444&",
          alt: "Whitestache unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
        {
          id: "airren",
          name: "Airren",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/airren-all-star-tower-defense-x.png",
          alt: "Airren unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
        {
          id: "ramen-grill-master",
          name: "Ramen Grill Master",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ramen-grill-master-all-star-tower-defense-x.png",
          alt: "Ramen Grill Master unit from the All Star Tower Defense X Roblox experience.",
          tier: "S",
        },
      ],
    },
    {
      id: "a",
      name: "A",
      color: "#ff0000",
      units: [
        {
          id: "shirtless-magician",
          name: "Shirtless Magician",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/shirtless-magician-all-star-tower-defense-x.png",
          alt: "Shirtless Magician unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "koro-lobby",
          name: "Koro (Lobby)",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/koro-lobby-all-star-tower-defense-x.png",
          alt: "Koro unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "kosuke-ts",
          name: "Kosuke (TS)",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/kosuke-ts-all-star-tower-defense-x.png",
          alt: "Kosuke (TS) unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "zaruto-sage",
          name: "Zaruto Sage",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/zaruto-sage-all-star-tower-defense-x.png",
          alt: "Zaruto Sage unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "humble-swordman-selection",
          name: "Humble Swordsman Selection",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/humble-swordman-selection-all-star-tower-defense-x.png",
          alt: "Humble Swordsman Selection unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "nezichi",
          name: "Nezichi",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/nezichi-all-star-tower-defense-x.png",
          alt: "Nezichi unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
        {
          id: "ice-queen",
          name: "Ice Queen",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ice-queen-all-star-tower-defense-x.png",
          alt: "Ice Queen unit from the All Star Tower Defense X Roblox experience.",
          tier: "A",
        },
      ],
    },
    {
      id: "b",
      name: "B",
      color: "#ff8c00",
      units: [
        {
          id: "super-koku",
          name: "Super Koku",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/super-koku-all-star-tower-defense-x.png",
          alt: "Super Koku unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
        {
          id: "ruffy-lobby",
          name: "Ruffy (Lobby)",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ruffy-lobby-all-star-tower-defense-x.png",
          alt: "Ruffy (Lobby) unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
        {
          id: "stampede",
          name: "Stampede",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/stampede-all-star-tower-defense-x.png",
          alt: "Stampede unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
        {
          id: "the-cursed-one",
          name: "The Cursed One",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/the-cursed-one-all-star-tower-defense-x.png",
          alt: "The Cursed One unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
        {
          id: "borul",
          name: "Borul",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/borul-all-star-tower-defense-x.png",
          alt: "Borul unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
        {
          id: "ikki-halfmask",
          name: "Ikki Halfmask",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ikki-halfmask-all-star-tower-defense-x.png",
          alt: "Ikki Halfmask unit from the All Star Tower Defense X Roblox experience.",
          tier: "B",
        },
      ],
    },
    {
      id: "c",
      name: "C",
      color: "#ffd700",
      units: [
        {
          id: "janji",
          name: "Janji",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/janji-all-star-tower-defense-x.png",
          alt: "Janji unit from the All Star Tower Defense X Roblox experience.",
          tier: "C",
        },
        {
          id: "dual-servant",
          name: "Dual Servant",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/dual-servant-all-star-tower-defense-x.png",
          alt: "Dual Servant unit from the All Star Tower Defense X Roblox experience.",
          tier: "C",
        },
        {
          id: "gen",
          name: "Gen",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/gen-all-star-tower-defense-x.png",
          alt: "Gen unit from the All Star Tower Defense X Roblox experience.",
          tier: "C",
        },
        {
          id: "jon-jo",
          name: "Jon Jo",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/jon-jo-all-star-tower-defense-x.png",
          alt: "Jon Jo unit from the All Star Tower Defense X Roblox experience.",
          tier: "C",
        },
        {
          id: "humble-swordman",
          name: "Humble Swordman",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/humble-swordman-all-star-tower-defense-x.png",
          alt: "Humble Swordman unit from the All Star Tower Defense X Roblox experience.",
          tier: "C",
        },
      ],
    },
    {
      id: "d",
      name: "D",
      color: "#00ff7f",
      units: [
        {
          id: "koku",
          name: "Koku",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/koku-all-star-tower-defense-x.png",
          alt: "Koku unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "vegu",
          name: "Vegu",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/vegu-all-star-tower-defense-x.png",
          alt: "Vegu unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "kosuke",
          name: "Kosuke",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/kosuke-all-star-tower-defense-x.png",
          alt: "Kosuke unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "zaruto",
          name: "Zaruto",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/zaruto-all-star-tower-defense-x.png",
          alt: "Zaruto unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "ikky-early",
          name: "Ikky Early",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ikky-early-all-star-tower-defense-x.png",
          alt: "Ikky Early unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "koro",
          name: "Koro",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/koro-all-star-tower-defense-x.png",
          alt: "Koro unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
        {
          id: "ruffy",
          name: "Ruffy",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/ruffy-all-star-tower-defense-x.png",
          alt: "Ruffy unit from the All Star Tower Defense X Roblox experience.",
          tier: "D",
        },
      ],
    },
    {
      id: "e",
      name: "E",
      color: "#009bf4",
      units: [
        {
          id: "anti-magician",
          name: "Anti Magician",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/anti-magician-all-star-tower-defense-x.png",
          alt: "Anti Magician unit from the All Star Tower Defense X Roblox experience.",
          tier: "E",
        },
        {
          id: "captain",
          name: "Captain",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/captain-all-star-tower-defense-x.png",
          alt: "Captain unit from the All Star Tower Defense X Roblox experience.",
          tier: "E",
        },
        {
          id: "uru",
          name: "Uru",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/uru-all-star-tower-defense-x.png",
          alt: "Uru unit from the All Star Tower Defense X Roblox experience.",
          tier: "E",
        },
        {
          id: "spirit-detective",
          name: "Spirit Detective",
          imageUrl:
            "https://progameguides.com/wp-content/uploads/2025/07/spirit-detective-all-star-tower-defense-x.png",
          alt: "Spirit Detective unit from the All Star Tower Defense X Roblox experience.",
          tier: "E",
        },
      ],
    },
  ],
};

// API Routes
app.get("/api/tier-list", (req, res) => {
  res.json(tierListData);
});

app.put("/api/tier-list", (req, res) => {
  // For now, just return the current data
  res.json(tierListData);
});

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
