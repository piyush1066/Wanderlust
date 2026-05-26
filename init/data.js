
const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?...",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?...",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Trending",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?...",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?...",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?...",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?...",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?...",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Trending",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?...",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?...",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Beach",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?...",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Rooms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?...",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?...",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Beach",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?...",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?...",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Amazing Pools",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Amazing Pools",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?...",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Trending",
  },
  {
  title: "Luxury Beach Villa in Goa",
  description:
    "Enjoy a luxurious stay in this beachside villa with private pool and breathtaking sunset views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
  },
  price: 2800,
  location: "Goa",
  country: "India",
  category: "Beach",
},
{
  title: "Snowy Mountain Chalet",
  description:
    "Cozy wooden chalet surrounded by snow-covered mountains and peaceful nature trails.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?...",
  },
  price: 2200,
  location: "Manali",
  country: "India",
  category: "Mountains",
},
{
  title: "Modern Apartment in Tokyo",
  description:
    "Stay in the center of Tokyo in this stylish apartment close to shopping and nightlife.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?...",
  },
  price: 3200,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic Cities",
},
{
  title: "Lakefront Cottage Retreat",
  description:
    "Relax beside the serene lake in this peaceful cottage surrounded by greenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?...",
  },
  price: 1800,
  location: "Nainital",
  country: "India",
  category: "Trending",
},
{
  title: "Luxury Desert Camp",
  description:
    "Experience desert camping with premium tents, camel rides, and cultural performances.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?...",
  },
  price: 2500,
  location: "Jaisalmer",
  country: "India",
  category: "Camping",
},
{
  title: "Cozy Treehouse Escape",
  description:
    "Stay among the treetops in this beautiful eco-friendly treehouse retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?...",
  },
  price: 1400,
  location: "Wayanad",
  country: "India",
  category: "Camping",
},
{
  title: "Luxury Houseboat Experience",
  description:
    "Cruise through scenic backwaters in this traditional luxury Kerala houseboat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?...",
  },
  price: 2700,
  location: "Alleppey",
  country: "India",
  category: "Trending",
},
{
  title: "Urban Loft in Bangalore",
  description:
    "Modern loft apartment perfect for remote workers and city explorers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?...",
  },
  price: 1900,
  location: "Bangalore",
  country: "India",
  category: "Rooms",
},
{
  title: "Cliffside Villa Retreat",
  description:
    "Luxury villa located on scenic cliffs with breathtaking valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?...",
  },
  price: 3500,
  location: "Lonavala",
  country: "India",
  category: "Amazing Views",
},
{
  title: "Jungle Safari Lodge",
  description:
    "Adventure-filled safari lodge located near a famous wildlife sanctuary.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?...",
  },
  price: 2400,
  location: "Jim Corbett",
  country: "India",
  category: "Trending",
},
{
  title: "Luxury Dome Stay",
  description:
    "Unique dome-shaped luxury stay under the stars with mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464890100898-a385f744067f?...",
  },
  price: 2600,
  location: "Leh",
  country: "India",
  category: "Amazing Views",
},
{
  title: "Sea View Apartment",
  description:
    "Wake up to stunning ocean views in this fully furnished sea-facing apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?...",
  },
  price: 2100,
  location: "Chennai",
  country: "India",
  category: "Beach",
},
{
  title: "Traditional Haveli Stay",
  description:
    "Experience royal living in this beautifully restored traditional haveli.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?...",
  },
  price: 2800,
  location: "Jaipur",
  country: "India",
  category: "Castles",
},
{
  title: "Riverside Cabin Retreat",
  description:
    "Peaceful riverside cabin with kayaking and bonfire experiences.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?...",
  },
  price: 1700,
  location: "Coorg",
  country: "India",
  category: "Mountains",
},
{
  title: "Beach Hut in Gokarna",
  description:
    "Affordable beach hut stay just steps away from the shoreline.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?...",
  },
  price: 1200,
  location: "Gokarna",
  country: "India",
  category: "Beach",
},
{
  title: "Luxury Sky Suite",
  description:
    "Premium suite featuring rooftop infinity pool and skyline views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?...",
  },
  price: 4800,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Amazing Pools",
},
{
  title: "Eco Bamboo House",
  description:
    "Sustainable bamboo stay surrounded by lush greenery and peaceful vibes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470246973918-29a93221c455?...",
  },
  price: 1600,
  location: "Assam",
  country: "India",
  category: "Farms",
},
{
  title: "Island Resort Escape",
  description:
    "Private island resort featuring water sports and luxury beach villas.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?...",
  },
  price: 5200,
  location: "Maldives",
  country: "Maldives",
  category: "Beach",
},
{
  title: "Vintage European Apartment",
  description:
    "Classic European-style apartment with elegant vintage interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?...",
  },
  price: 2300,
  location: "Paris",
  country: "France",
  category: "Iconic Cities",
},
{
  title: "Hilltop Sunrise Cottage",
  description:
    "Wake up to breathtaking sunrise views from this hilltop cottage.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?...",
  },
  price: 2000,
  location: "Munnar",
  country: "India",
  category: "Amazing Views",
},
{
  title: "Luxury Pool Villa",
  description:
    "Modern villa with a private infinity pool and tropical garden.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?...",
  },
  price: 3900,
  location: "Phuket",
  country: "Thailand",
  category: "Amazing Pools",
},
{
  title: "Royal Palace Stay",
  description:
    "Stay like royalty in this grand palace with luxury interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?...",
  },
  price: 4500,
  location: "Udaipur",
  country: "India",
  category: "Castles",
},
{
  title: "Countryside Farm Stay",
  description:
    "Relax in this peaceful farmhouse surrounded by nature and open fields.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?...",
  },
  price: 1400,
  location: "Pune",
  country: "India",
  category: "Farms",
},
{
  title: "Luxury Igloo Stay",
  description:
    "Unique igloo experience with snowy landscapes and cozy interiors.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?...",
  },
  price: 4100,
  location: "Finland",
  country: "Finland",
  category: "Arctic",
},
{
  title: "Modern Studio Apartment",
  description:
    "Affordable modern studio apartment ideal for solo travelers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?...",
  },
  price: 1300,
  location: "Delhi",
  country: "India",
  category: "Rooms",
},
];

module.exports = { data: sampleListings };


