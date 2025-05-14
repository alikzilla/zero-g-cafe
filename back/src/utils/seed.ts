import { MenuItem } from "../models/menu-item";
import { Review } from "../models/review";
import { connectToDatabase } from "./database";

const menuItems = [
  {
    title: "Cosmic Caviar",
    price: 24,
    description:
      "Sustainable sturgeon caviar served with blinis and crème fraîche, presented on a chilled meteorite plate.",
    image: "https://s3.envato.com/files/503008697/IMG_5557-2.jpg",
    category: "starters",
    tags: ["Signature", "Gourmet"],
  },
  {
    title: "Asteroid Arancini",
    price: 16,
    description:
      "Crispy saffron risotto balls filled with mozzarella and black truffle, resembling small asteroids.",
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "starters",
    tags: ["Vegetarian", "Crunchy"],
  },
  {
    title: "Nebula Noodles",
    price: 28,
    description:
      "Squid ink pasta with scallops, shrimp, and a galaxy of edible glitter that changes color as you eat.",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Seafood", "Interactive"],
  },
  {
    title: "Black Hole Burger",
    price: 22,
    description:
      "Wagyu beef patty with black sesame bun, cosmic sauce, and a side of asteroid fries that 'orbit' your plate.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Signature", "Hearty"],
  },
  {
    title: "Martian Mushroom Risotto",
    price: 24,
    description:
      "Creamy arborio rice with wild mushrooms, white wine, and edible 'red planet' dust for that authentic Martian feel.",
    image:
      "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "mains",
    tags: ["Vegetarian", "Creamy"],
  },
  {
    title: "Milky Way Martini",
    price: 18,
    description:
      "Vodka, white chocolate liqueur, and edible glitter that swirls like a galaxy when stirred.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["Signature", "Instagrammable"],
  },
  {
    title: "Zero Gravity Float",
    price: 14,
    description:
      "Dry ice-infused root beer with vanilla ice cream that appears to float above the glass.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    tags: ["Non-alcoholic", "Interactive"],
  },
  {
    title: "Cosmic Crunch",
    price: 16,
    description:
      "Chocolate mousse with popping candy, served in an edible chocolate 'meteor' that cracks open to reveal a galaxy inside.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "desserts",
    tags: ["Signature", "Interactive"],
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Absolutely out of this world! The VR experience while dining was something I'll never forget. The Black Hole Burger was delicious and the Milky Way Martini was as beautiful as it was tasty.",
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Incredible atmosphere and innovative menu. The Cosmic Crunch dessert was a showstopper - watching it crack open to reveal the galaxy inside was magical. Service was a bit slow but understandable given the unique concept.",
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Best birthday dinner ever! The staff surprised me with a special 'Happy Birthday' message that appeared to float above our table. The Nebula Noodles were delicious and so fun to eat with the color-changing glitter.",
  },
  {
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "As a space enthusiast, this was my dream dining experience. The VR Mars exploration paired perfectly with the Martian Mushroom Risotto. Can't wait to come back and try their new experiences!",
  },
  {
    name: "Jessica Williams",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: 4,
    text: "Such a unique concept executed beautifully. The Asteroid Arancini were delicious and the Zero Gravity Float drink was so fun to watch. The only downside was the price, but it's worth it for a special occasion.",
  },
];

const seedDatabase = async () => {
  try {
    await connectToDatabase();

    await MenuItem.deleteMany({});
    await Review.deleteMany({});

    await MenuItem.insertMany(menuItems);
    await Review.insertMany(reviews);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
