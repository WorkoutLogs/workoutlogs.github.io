import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logo.src}
            alt="WorkoutLogs"
            className="h-5 transition-transform group-hover:scale-110 aspect-ratio-[2/1]"
          />
          <span className="text-xl font-bold text-foreground">
            Workout<span className="text-primary">Logs</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Button variant="cta" size="sm" asChild className="hidden sm:flex">
            <a
              href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.header.downloadApp}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
