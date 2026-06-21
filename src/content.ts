export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  isHighlighted?: boolean;
};

export type MenuCategory = {
  id: number;
  name: string;
  description: string;
  items: MenuItem[];
};

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

export const heroImage = assetUrl("hero-pizza-horno.webp");
export const pizzaCloseupImage = assetUrl("pizza-close-up.webp");
export const empanadasImage = assetUrl("empanadas-hero.webp");

export const galleryImages = [
  {
    src: heroImage,
    alt: "Pizza argentina en horno de leña",
    label: "Amasado artesanal",
  },
  {
    src: pizzaCloseupImage,
    alt: "Pizza lista para servir",
    label: "Fermentación diaria",
  },
  {
    src: empanadasImage,
    alt: "Empanadas argentinas",
    label: "Preparación",
  },
  {
    src: heroImage,
    alt: "Pizza horneándose",
    label: "Horneado",
  },
  {
    src: pizzaCloseupImage,
    alt: "Pizza lista para repartir",
    label: "Delivery",
  },
  {
    src: empanadasImage,
    alt: "Empanadas listas para servir",
    label: "A tu mesa",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: 1,
    name: "Empanadas",
    description: "Empanadas artesanales argentinas",
    items: [
      { name: "Empanada de carne", price: "1.60" },
      { name: "Empanada de Pollo", price: "1.60" },
      { name: "Empanada de Jamón y Queso", price: "1.60" },
      { name: "Empanada de Humita (Maíz)", price: "1.60" },
      { name: "Empanada de Tomate, Queso y Albahaca", price: "1.60" },
      { name: "Empanada de Cebolla, Queso y Bacon", price: "1.60" },
      { name: "Empanada de Chorizo picante y tres quesos", price: "1.60", isHighlighted: true },
      { name: "Empanada de Jamón Serrano, rulo de cabra y orégano", price: "1.60" },
      { name: "Empanada de chistorra, queso cheddar y cebolla caramelizada", price: "1.60" },
    ],
  },
  {
    id: 2,
    name: "Pastas",
    description: "Pastas caseras frescas",
    items: [
      { name: "Sorrentinos (5 uds)", price: "9.00", description: "Pasta casera rellena de jamón y mozzarella." },
      { name: "Agnelotis (5 uds)", price: "9.00", description: "Pasta casera rellena de ricota y jamón." },
      { name: "Lasagna", price: "9.00", description: "Pasta casera al horno rellena de mozzarella, jamón, verduras, pimientos y huevo." },
      { name: "Canelones (3 uds)", price: "9.00", description: "Pasta rellena al horno con salsa de tomate. Opciones: Pollo, Verdura o Muzzarella y Jamón." },
    ],
  },
  {
    id: 3,
    name: "Pizzas",
    description: "Pizza tamaño mediano de 6 porciones. Opción elección mitad y mitad. También ofrecemos pizzas sin gluten, veganas y sin lactosa.",
    items: [
      { name: "Buenos Aires", price: "7.40", description: "Mozzarella" },
      { name: "Córdoba", price: "9.20", description: "Mozzarella, jamón y pimiento rojo" },
      { name: "La Pampa", price: "8.80", description: "Mozzarella y chorizo" },
      { name: "Río Negro", price: "9.40", description: "Mozzarella, salami y pimiento verde" },
      { name: "Santa Cruz", price: "8.80", description: "Mozzarella, cebolla y olivas" },
      { name: "Misiones", price: "9.40", description: "Mozzarella, jamón, pimientos y huevo duro" },
      { name: "Tucumán", price: "9.20", description: "Mozzarella y longaniza" },
      { name: "San Juan", price: "8.80", description: "Mozzarella y atún" },
      { name: "Bariloche", price: "9.40", description: "Mozzarella, jamón, rulo de cabra y sirope de fresa" },
      { name: "Santa Fe", price: "8.00", description: "Mozzarella y jamón" },
      { name: "Mendoza", price: "9.40", description: "Mozzarella, jamón y rodajas de tomate" },
      { name: "Corrientes", price: "8.80", description: "Mozzarella y bacon" },
      { name: "Neuquén", price: "9.40", description: "Mozzarella, jamón y champiñones" },
      { name: "Ushuaia", price: "9.80", description: "Mozzarella, jamón y anchoas" },
      { name: "Iguazú", price: "9.40", description: "Mozzarella, bacon, salsa chimichurri y olivas" },
      { name: "La Rioja", price: "9.40", description: "Mozzarella, jamón y piña" },
      { name: "Rosario", price: "9.80", description: "Mozzarella, pechuga de pollo, pimiento verde y cebolla" },
      { name: "Jujuy", price: "9.40", description: "Mozzarella, jamón y palitos de cangrejo" },
      { name: "Formosa", price: "9.20", description: "Mozzarella, jamón, ajo y perejil" },
      { name: "Chaco", price: "8.80", description: "Mozzarella, espinacas y bechamel" },
      { name: "Santa Clara", price: "9.80", description: "Mozzarella, champiñones, bacon, cebolla y emmental", isHighlighted: true },
      { name: "Chubut", price: "9.20", description: "Mozzarella, gambas, olivas" },
      { name: "Mar del Plata", price: "9.80", description: "Mozzarella, palito de cangrejo, atún y gambas" },
      { name: "San Luis", price: "9.20", description: "Mozzarella, jamón serrano, olivas" },
      { name: "Catamarca", price: "9.80", description: "Mozzarella, roquefort y emmental" },
      { name: "Salta (Calzone Nº1)", price: "10.00", description: "Pizza cerrada rellena de mozzarella, jamón, pimientos, huevo duro y olivas" },
      { name: "Tandil", price: "9.80", description: "Mozzarella, jamón serrano, ajo, perejil y maíz" },
      { name: "Entre Ríos (Vegetal)", price: "9.80", description: "Mozzarella, rodajas de tomate, champiñones, espinacas, pimiento, cebolla y maíz" },
      { name: "Paraná", price: "9.80", description: "Mozzarella, roquefort, emmental y chorizo picante" },
      { name: "Patagonia", price: "9.80", description: "Mozzarella, pulpo, pimentón dulce, salsa rosa" },
      { name: "Santiago", price: "9.80", description: "Mozzarella, jamón, melocotón, sirope de chocolate" },
      { name: "Malvinas", price: "9.80", description: "Mozzarella, jamón serrano, rúcula, queso parmesano y aceite de oliva" },
      { name: "Antártida", price: "9.80", description: "Mozzarella, jamón serrano, miel y albahaca" },
      { name: "La Plata", price: "9.80", description: "Mozzarella, bacon, pechuga de pollo, cebolla y salsa barbacoa" },
      { name: "San Nicolás", price: "9.80", description: "Mozzarella, bacon, champiñones y salsa carbonara" },
      { name: "Pehuajó (Vegetal)", price: "9.80", description: "Mozzarella, salsa de setas y verduras a la parrilla" },
      { name: "San Pedro", price: "9.80", description: "Mozzarella, jamón, rulo de cabra, salsa bechamel y nueces" },
      { name: "Salta (Calzone Nº2)", price: "10.00", description: "Pizza cerrada rellena de mozzarella, chorizo, queso cheddar, pimiento verde y uvas pasas" },
      { name: "Pizza a tu gusto", price: "11.00", description: "Elige tus ingredientes favoritos" },
    ],
  },
  {
    id: 4,
    name: "Bebidas",
    description: "Refrescos, cervezas, vinos y más",
    items: [
      { name: "Refrescos (Lata 330 ml)", price: "2.50", description: "Coca-Cola, Zero, Sprite, Nestea, Kas, Aquarius" },
      { name: "Zumos", price: "2.50", description: "Piña, Naranja y Melocotón" },
      { name: "Agua (botellín)", price: "1.00" },
      { name: "Agua con gas 500ml", price: "2.90" },
      { name: "Agua (1,5 Litro)", price: "2.00" },
      { name: "Cerveza San Miguel 200ml", price: "1.50" },
      { name: "San Miguel Jarra 500 ml", price: "3.20" },
      { name: "Cerveza lata Ambar o San Miguel", price: "2.50" },
      { name: "Cerveza Sin Gluten (Lata)", price: "2.50" },
      { name: "Cerveza Quilmes (Argentina) 350ml", price: "3.50", isHighlighted: true },
      { name: "Vino Vega Luchan (Tinto)", price: "8.90" },
      { name: "Vino Vega de Luchan (Blanco)", price: "9.00" },
      { name: "Vino Vega de Luchan (Rosado)", price: "9.00" },
      { name: "Vino Alcorta (Rioja Crianza)", price: "9.90" },
      { name: "Vino Monasterio de las Viñas (Reserva)", price: "12.00" },
      { name: "Vinos Argentinos (Mendoza)", price: "14.00" },
      { name: "Lambrusco", price: "9.00" },
      { name: "Sangria", price: "9.00" },
    ],
  },
  {
    id: 5,
    name: "Postres y Café",
    description: "Dulces argentinos y cafetería",
    items: [
      { name: "Flan de huevo", price: "3.00", description: "Con crema y dulce de leche" },
      { name: "Panqueques", price: "2.50", description: "Relleno con dulce de leche" },
      { name: "Alfajor Havana", price: "3.20", description: "Chocolate negro o merengue", isHighlighted: true },
      { name: "Café solo", price: "1.30" },
      { name: "Café cortado", price: "1.30" },
      { name: "Café con leche", price: "1.50" },
      { name: "Carajillo", price: "2.00" },
      { name: "Infusiones", price: "1.50" },
    ],
  },
];