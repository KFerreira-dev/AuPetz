import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpeg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
    </div>

    {/* Decorative blobs */}
    <div className="gradient-blob w-96 h-96 bg-primary/20 -top-20 -left-20 animate-blob-move" />
    <div className="gradient-blob w-72 h-72 bg-secondary/20 bottom-20 right-10 animate-blob-move" style={{ animationDelay: "5s" }} />
    <div className="gradient-blob w-56 h-56 bg-accent/25 top-1/3 right-1/4 animate-blob-move" style={{ animationDelay: "10s" }} />

    <div className="container relative z-10 mx-auto px-6 pt-24">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card-strong inline-block px-4 py-1.5 rounded-full mb-6"
        >
          <span className="text-sm font-medium text-primary">✨ Conforto premium para seu pet</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-gradient-primary">Camas Box</span>
          <br />
          <span className="text-foreground">para Pets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
        >
          Seu melhor amigo merece dormir com o conforto de uma cama box de verdade.
          Qualidade, durabilidade e muito carinho em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#produtos"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            Ver Produtos
          </a>
          <a
            href="#sobre"
            className="glass-card rounded-full px-8 py-3.5 text-sm font-semibold text-foreground hover:scale-105 transition-all duration-300"
          >
            Conheça a AuPetz
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
