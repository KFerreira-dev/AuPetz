import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="py-24 relative overflow-hidden">
    <div className="gradient-blob w-72 h-72 bg-accent/20 top-10 right-20 animate-blob-move" />
    <div className="gradient-blob w-64 h-64 bg-primary/15 bottom-10 left-10 animate-blob-move" style={{ animationDelay: "8s" }} />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="glass-card-strong inline-block px-4 py-1.5 rounded-full text-sm font-medium text-secondary mb-4">
          📞 Contato
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Fale <span className="text-gradient-primary">Conosco</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Tire suas dúvidas, faça uma encomenda ou peça um orçamento personalizado.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { icon: MessageCircle, label: "WhatsApp", value: "(11) 97678-1568", href: "https://wa.me/5511976781568", color: "text-secondary" },
          { icon: Instagram, label: "Instagram", value: "@aupetz", href: "https://instagram.com/aupetz", color: "text-primary" },
          { icon: Mail, label: "E-mail", value: "contato@aupetz.com", href: "mailto:contato@aupetz.com", color: "text-accent" },
          { icon: MapPin, label: "Localização", value: "Juquitiba-SP", href: "https://maps.app.goo.gl/CuJJ6kWJ2yWaV2yv9", color: "text-primary" },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-strong rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
          >
            <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
            <h4 className="font-bold text-foreground text-sm mb-1">{item.label}</h4>
            <p className="text-xs text-muted-foreground">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
