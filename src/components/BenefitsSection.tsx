import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t.benefits.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.benefits.title1}
              <span className="text-gradient">{t.benefits.title2}</span>
              {t.benefits.title3}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t.benefits.subtitle}
            </p>

            <ul className="space-y-4">
              {t.benefits.list.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-card rounded-3xl border border-border p-8 shadow-card">
              {/* Mock App Screenshot */}
              <div className="bg-background rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.benefits.mockup.workoutTitle}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.benefits.mockup.today}, 18:30
                    </div>
                  </div>
                </div>

                {/* Exercise Items */}
                {[
                  { name: "Supino Reto", sets: "4x10", weight: "80kg", pr: true },
                  { name: "Supino Inclinado", sets: "3x12", weight: "60kg", pr: false },
                  { name: "Crucifixo", sets: "3x15", weight: "16kg", pr: false },
                ].map((exercise, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <div className="font-medium text-foreground flex items-center gap-2">
                        {exercise.name}
                        {exercise.pr && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                            PR!
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exercise.sets}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{exercise.weight}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    {t.benefits.mockup.weeklyVolume}
                  </span>
                  <span className="text-foreground font-medium">12.450 kg</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-primary w-3/4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
