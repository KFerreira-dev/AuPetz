import { motion } from "framer-motion";
import { Heart, Shield, Sparkles, Truck } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const features = [
  { icon: Heart, title: "Feito com Amor", desc: "Cada cama é produzida artesanalmente com atenção aos detalhes." },
  { icon: Shield, title: "Durabilidade", desc: "Materiais de alta qualidade que resistem ao uso diário." },
  { icon: Sparkles, title: "Design Exclusivo", desc: "Cores e modelos que combinam com a decoração da sua casa." },
  { icon: Truck, title: "Entrega Segura", desc: "Enviamos para todo o Brasil com embalagem reforçada." },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 relative overflow-hidden">
    <div className="gradient-blob w-96 h-96 bg-secondary/15 top-20 -left-20 animate-blob-move" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card-strong rounded-3xl p-8 flex items-center justify-center">
            <img src={logo} alt="AuPetz" className="w-full max-w-sm rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass-card-strong inline-block px-4 py-1.5 rounded-full text-sm font-medium text-secondary mb-4">
            🐾 Sobre Nós
          </span>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Conforto que seu pet <span className="text-gradient-primary">merece</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            A AuPetz nasceu do amor pelos animais e da vontade de oferecer o melhor em descanso para os pets.
            Nossas camas box são desenvolvidas com espuma de alta densidade, tecidos premium e acabamento impecável.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-4 group hover:scale-105 transition-transform duration-300"
              >
                <f.icon className="w-6 h-6 text-primary mb-2 group-hover:text-secondary transition-colors" />
                <h4 className="text-sm font-bold text-foreground mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
