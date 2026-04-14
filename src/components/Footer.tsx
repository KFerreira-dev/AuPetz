import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="glass-nav py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="AuPetz" className="h-10 rounded-lg" />
        <span className="text-sm font-medium text-foreground">AuPetz — Camas Box para Pet</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} AuPetz. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
