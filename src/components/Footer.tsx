import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={logo.src}
              alt="WorkoutLogs"
              className="aspect-ratio-[2/1] h-5"
            />
            <span className="text-lg font-bold text-foreground">
              Workout<span className="text-primary">Logs</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#funcionalidades"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.header.features}
            </a>
            <a
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.header.benefits}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Google Play
            </a>
            <a
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.header.privacy}
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} WorkoutLogs. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
