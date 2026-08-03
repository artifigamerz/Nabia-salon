import { z } from "zod";
import hairColoringImg from "@assets/Screenshot_2026-08-03_235648_1785783518904.png";
import hydraFacialImg from "@assets/Screenshot_2026-08-03_235815_1785783518905.png";
import bridalMakeupImg from "@assets/Screenshot_2026-08-03_235547_1785783530053.png";

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["Hair", "Skin", "Nails", "Bridal", "Mehndi"]),
  description: z.string(),
  duration: z.string(),
  price: z.string(),
  image: z.string().optional(),
});

export type Service = z.infer<typeof ServiceSchema>;

export const SERVICES: Service[] = [
  // Hair
  { id: "hair-cut", name: "Hair Cut", category: "Hair", description: "Expert haircuts tailored to your face shape and style preferences.", duration: "[Duration]", price: "[Price]" },
  { id: "hair-styling", name: "Hair Styling", category: "Hair", description: "Elegant styling for events, including blowouts, curls, and updos.", duration: "[Duration]", price: "[Price]", image: "/@assets/hair-styling.jpg" },
  { id: "hair-coloring", name: "Hair Coloring", category: "Hair", description: "Premium balayage, highlights, and full color transformations.", duration: "[Duration]", price: "[Price]", image: hairColoringImg },
  { id: "hair-spa", name: "Hair Spa", category: "Hair", description: "Deep conditioning and scalp treatment for healthy, glossy hair.", duration: "[Duration]", price: "[Price]" },
  { id: "hair-wash", name: "Hair Wash", category: "Hair", description: "Relaxing cleansing and conditioning wash.", duration: "[Duration]", price: "[Price]" },
  { id: "blow-dry", name: "Blow Dry", category: "Hair", description: "Professional blowout for volume and smoothness.", duration: "[Duration]", price: "[Price]" },
  { id: "protein-treatment", name: "Protein Treatment", category: "Hair", description: "Strengthening treatment for damaged or brittle hair.", duration: "[Duration]", price: "[Price]" },
  { id: "keratin-treatment", name: "Keratin Treatment", category: "Hair", description: "Smoothing treatment to eliminate frizz and add shine.", duration: "[Duration]", price: "[Price]" },
  { id: "hair-botox", name: "Hair Botox", category: "Hair", description: "Deep conditioning treatment that reconstructs hair fibers.", duration: "[Duration]", price: "[Price]" },
  { id: "rebonding", name: "Rebonding", category: "Hair", description: "Permanent straightening for sleek, manageable hair.", duration: "[Duration]", price: "[Price]" },
  
  // Skin
  { id: "facial", name: "Classic Facial", category: "Skin", description: "Customized facial to cleanse, exfoliate, and nourish your skin.", duration: "[Duration]", price: "[Price]" },
  { id: "hydra-facial", name: "Hydra Facial", category: "Skin", description: "Advanced deep-cleansing and hydrating treatment for glowing skin.", duration: "[Duration]", price: "[Price]", image: hydraFacialImg },
  { id: "cleanup", name: "Skin Cleanup", category: "Skin", description: "Quick refresh to remove impurities and brighten complexion.", duration: "[Duration]", price: "[Price]" },
  { id: "waxing", name: "Waxing", category: "Skin", description: "Smooth and hygienic hair removal for face and body.", duration: "[Duration]", price: "[Price]" },
  { id: "threading", name: "Threading", category: "Skin", description: "Precise shaping for eyebrows and facial hair removal.", duration: "[Duration]", price: "[Price]" },
  
  // Nails
  { id: "manicure", name: "Luxury Manicure", category: "Nails", description: "Nail shaping, cuticle care, and polish with relaxing hand massage.", duration: "[Duration]", price: "[Price]", image: "/@assets/manicure.jpg" },
  { id: "pedicure", name: "Luxury Pedicure", category: "Nails", description: "Complete foot care including exfoliation, massage, and polish.", duration: "[Duration]", price: "[Price]" },
  
  // Bridal & Makeup
  { id: "bridal-makeup", name: "Bridal Makeup", category: "Bridal", description: "Complete luxury bridal look including hair, makeup, and setting.", duration: "[Duration]", price: "[Price]", image: bridalMakeupImg },
  { id: "party-makeup", name: "Party Makeup", category: "Bridal", description: "Glamorous makeup application for special events and parties.", duration: "[Duration]", price: "[Price]" },
  
  // Mehndi
  { id: "mehndi", name: "Bridal & Party Mehndi", category: "Mehndi", description: "Intricate henna designs for brides and guests.", duration: "[Duration]", price: "[Price]", image: "/@assets/mehndi.jpg" }
];
