import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              {t.hero.badge}
            </span>
          </div>

          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in-up animation-delay-100">
            <img
              src={logo.src}
              alt="WorkoutLogs"
              className="h-24 mx-auto animate-float aspect-ratio-[2/1]"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up animation-delay-200">
            {t.hero.title1}
            <span className="block text-gradient pb-4">{t.hero.title2}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                {t.hero.downloadFree}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#funcionalidades">{t.hero.viewFeatures}</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in-up animation-delay-500">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                100+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t.hero.exercises}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                5.0★
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t.hero.rating}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {t.hero.free}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {t.hero.toUse}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
