import { useLanguage } from "@/i18n/LanguageContext";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";

const screenshots = [
  { src: screenshot1, alt: "Workout logging screen" },
  { src: screenshot2, alt: "Progress charts screen" },
  { src: screenshot3, alt: "Workout planner screen" },
];

const ScreenshotsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="screenshots" className="py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t.screenshots.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.screenshots.title1}
            <span className="text-gradient">{t.screenshots.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex justify-center items-end gap-4 md:gap-8 overflow-hidden">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 ${
                index === 1
                  ? "z-10 scale-110"
                  : "opacity-70 scale-95 hover:opacity-100 hover:scale-100"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative group py-16">
                {/* Glow effect for center image */}
                {index === 1 && (
                  <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                )}
                <img
                  src={screenshot.src.src}
                  alt={screenshot.alt}
                  className={`relative rounded-2xl shadow-card border border-border/50 ${
                    index === 1
                      ? "w-56 md:w-72"
                      : "w-44 md:w-56 hidden sm:block"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
