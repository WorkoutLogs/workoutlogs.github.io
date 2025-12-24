import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logo.src}
              alt="WorkoutLogs"
              className="h-20 mx-auto animate-float aspect-ratio-[2/1]"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.cta.title1}
            <span className="text-gradient">{t.cta.title2}</span>
            {t.cta.title3}
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= 5
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-yellow-400 fill-yellow-400/50"
                }`}
              />
            ))}
            <span className="text-muted-foreground ml-2">
              5.0 {t.cta.ratingText}
            </span>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              {t.cta.downloadButton}
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-4">{t.cta.features}</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
