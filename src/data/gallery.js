// Gallery media inventory. Images reference the original assets on the
// existing domain. Videos are now imported into the project's own public
// storage (/videos/*.mp4) so they are durable and not reliant on the old
// site's hosting.
//
// Migration status:
//  - All image entries: original URL recorded, referenced directly.
//  - Video entries: 10 original .mp4 files downloaded into /public/videos/
//    and wired to their matching gallery items below.

import { asset } from "./site";

// Local video in project public storage (durable, served by the app).
const vid = (file) => `/videos/${file}`;

export const GALLERY_CATEGORIES = [
  "All",
  "Corporate",
  "Weddings",
  "Mehndi",
  "Décor",
  "Food & Drinks",
  "Experiences",
];

export const GALLERY_ITEMS = [
  { type: "image", src: asset("/gallery/hero-1.jpg"), title: "Wedding set-ups", description: "Cohesive styling, dessert stations and guest areas designed as one story.", category: "Weddings" },
  { type: "image", src: asset("/gallery/corporatesetup.jpg"), title: "Corporate set-ups", description: "Polished hospitality build for leadership, clients and key stakeholders.", category: "Corporate" },
  { type: "image", src: asset("/gallery/photoboothclose.png"), title: "Photobooth", description: "Detail shot of the booth styling and finish.", category: "Experiences" },
  { type: "image", src: asset("/gallery/fountain.png"), title: "Luxury chocolate fountain", description: "Showpiece dessert station with curated dipping menu.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/champagnecart.png"), title: "Champagne cart & tower", description: "Champagne fountain/tower styled for premium events.", category: "Experiences" },
  { type: "image", src: asset("/gallery/charcuteriecart.png"), title: "Charcuterie cart", description: "Grazing-style charcuterie with layered presentation.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/canapes.png"), title: "Canapés service", description: "Handed canapés styled for corporate & private events.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/desserttable.png"), title: "Dessert table", description: "Structured dessert layout designed around guest flow.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/welcomedrinks.png"), title: "Welcome drinks", description: "Selection of drinks to start the perfect event.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/chocolatestrawberries.png"), title: "Chocolate covered strawberries", description: "Luxury dessert pieces for VIP tables & gifting.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/pancakes.png"), title: "Mini pancake stacks", description: "Close-up of live-prepared mini Dutch pancakes.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/foodbowl.png"), title: "Food bowls & small plates", description: "Guest-friendly portions with premium plating.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/coffeecart.png"), title: "Coffee cart", description: "Barista-style coffee service with premium presentation.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/hotchocolatecart.png"), title: "Hot chocolate cart", description: "Winter-friendly warm drinks with styled toppings.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/slushbrand.png"), title: "Slush station branding", description: "Branded station fascia for campaign work.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/slushcup.png"), title: "Slush cup detail", description: "Close-up shot ready for socials & campaigns.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/slushcloseup.jpg"), title: "Slush service close-up", description: "Vibrant product shot with branded garnish.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/popcorncart.png"), title: "Popcorn cart", description: "Fresh popcorn with styled cart presentation.", category: "Experiences" },
  { type: "image", src: asset("/gallery/closeuppopcorn.png"), title: "Popcorn close-up", description: "Detail shot ready for campaigns and socials.", category: "Experiences" },
  { type: "image", src: asset("/gallery/candyflosscart.png"), title: "Candy floss cart", description: "Nostalgic station with a clean, modern finish.", category: "Experiences" },
  { type: "image", src: asset("/gallery/photobooth.png"), title: "Photobooth", description: "Content-first booth setups for guests and teams.", category: "Experiences" },
  { type: "image", src: asset("/gallery/photostrip.png"), title: "Photo strip output", description: "Printed keepsakes tailored to your event experience.", category: "Experiences" },
  { type: "image", src: asset("/gallery/360boothconcept.png"), title: "360 Photo Booth", description: "Concept layout for brand-first content moments.", category: "Experiences" },
  { type: "image", src: asset("/gallery/Gol%20Gappe.png"), title: "Gol Gappa (Pani Puri) station", description: "Interactive, flavour-led station guests gather around.", category: "Mehndi" },
  { type: "image", src: asset("/gallery/weddingdecor.jpg"), title: "Wedding décor styling", description: "Soft, layered styling designed for photography.", category: "Weddings" },
  { type: "image", src: asset("/gallery/mehndidecor.jpg"), title: "Mehndi décor & backdrop", description: "Vibrant, photo-ready styling for pre-wedding events.", category: "Mehndi" },
  { type: "image", src: asset("/gallery/decorbuild.png"), title: "Décor build & styling", description: "Immersive backdrop and staging for photo moments.", category: "Décor" },
  { type: "image", src: asset("/gallery/corporateevent.jpg"), title: "Corporate hospitality bar", description: "Branded bar and service point for premium receptions.", category: "Corporate" },
  { type: "image", src: asset("/gallery/corporateevent2.jpg"), title: "Welcome area", description: "Clean, modern presentation for leadership events.", category: "Corporate" },
  { type: "image", src: asset("/gallery/hero-2.jpg"), title: "Corporate experiences", description: "Polished hospitality build in the room.", category: "Corporate" },
  { type: "image", src: asset("/gallery/cermony.jpg"), title: "Ceremony experiences", description: "Romantic ceremony styling and lighting.", category: "Weddings" },
  { type: "image", src: asset("/gallery/icecream2.jpg"), title: "Soft-serve ice cream", description: "Premium soft-serve station with toppings and cones.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/sweets.jpg"), title: "Sweet carts", description: "Styled sweet displays curated to your theme.", category: "Food & Drinks" },
  { type: "image", src: asset("/gallery/fuitdisplay2.png"), title: "Luxury fruit display", description: "Exotic fruit with sculptural arrangements.", category: "Food & Drinks" },

  // Video entries — imported into project public storage (/videos/*.mp4).
  { type: "video", src: vid("pancakecart.mp4"), poster: asset("/gallery/pancakes.png"), title: "Mini pancake cart service", description: "High-interaction dessert station in action.", category: "Food & Drinks" },
  { type: "video", src: vid("mocktailvid.mp4"), poster: asset("/gallery/welcomedrinks.png"), title: "Mocktail bar service", description: "Branded glassware, garnish and polished delivery.", category: "Food & Drinks" },
  { type: "video", src: vid("golgappestation.mp4"), poster: asset("/gallery/Gol%20Gappe.png"), title: "Gol Gappa station in motion", description: "Live service moment from a mehndi event.", category: "Mehndi" },
  { type: "video", src: vid("stage1.mp4"), poster: asset("/gallery/decorbuild.png"), title: "Stage lighting build", description: "Atmospheric lighting and staging in action.", category: "Décor" },
  { type: "video", src: vid("stage2.mp4"), poster: asset("/gallery/mehndidecor.jpg"), title: "Stage & backdrop reveal", description: "Layered lighting designed for impact and photography.", category: "Décor" },
  { type: "video", src: vid("cinderella.mp4"), poster: asset("/gallery/cermony.jpg"), title: "Cinderella Lighting", description: "Soft, cinematic lighting transformation.", category: "Décor" },
  { type: "video", src: vid("stage3.mp4"), poster: asset("/gallery/hero-1.jpg"), title: "Evening stage ambience", description: "Seamless stage set-ups.", category: "Décor" },
  { type: "video", src: vid("stage5.mp4"), poster: asset("/gallery/desserttable.png"), title: "Dessert table presentation", description: "Styled dessert table with layered layout and guest flow.", category: "Food & Drinks" },
  { type: "video", src: vid("willows.mp4"), poster: asset("/gallery/weddingdecor.jpg"), title: "Wedding setup", description: "Romantic lighting and décor at a luxury venue.", category: "Weddings" },
  { type: "video", src: vid("package.mp4"), poster: asset("/gallery/hero-2.jpg"), title: "Signature event package", description: "A complete experience — styling, stations and service.", category: "Experiences" },
];