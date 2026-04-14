import { motion } from "framer-motion";
import productPetit from "@/assets/product-petit.jpeg";
import productConfort from "@/assets/product-confort.jpeg";
import productRoyal from "@/assets/product-royal.jpeg";
import productChaise from "@/assets/product-chaise.jpeg";
import productClassic from "@/assets/product-classic.jpeg";
import productCouro from "@/assets/product-couro.jpeg";

const products = [
  { name: "", image: productPetit },
  { name: "", image: productConfort },
  { name: "", image: productRoyal },
  { name: "", image: productChaise },
  { name: "", image: productClassic },
  { name: "", image: productCouro },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ProductsSection = () => (
  <section id="produtos" className="py-24 relative overflow-hidden">
    <div className="gradient-blob w-80 h-80 bg-primary/15 -top-40 right-0 animate-blob-move" />
    <div className="gradient-blob w-64 h-64 bg-accent/20 bottom-0 left-10 animate-blob-move" style={{ animationDelay: "7s" }} />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="glass-card-strong inline-block px-4 py-1.5 rounded-full text-sm font-medium text-secondary mb-4">
          🛏️ Nossos Produtos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Linha <span className="text-primary">Exclusiva</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Cada cama é feita com materiais selecionados para garantir o máximo conforto do seu pet.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card-strong group rounded-3xl p-6 hover:scale-[1.03] transition-transform duration-500"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl h-64">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center">{product.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
