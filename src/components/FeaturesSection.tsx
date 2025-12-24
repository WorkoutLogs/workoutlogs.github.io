import { Dumbbell, FileText, Calculator, TrendingUp, BarChart3, Cloud, Plus } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Dumbbell,
      title: t.features.workoutLog.title,
      description: t.features.workoutLog.description,
    },
    {
      icon: FileText,
      title: t.features.workoutSheets.title,
      description: t.features.workoutSheets.description,
    },
    {
      icon: Calculator,
      title: t.features.calculators.title,
      description: t.features.calculators.description,
    },
    {
      icon: TrendingUp,
      title: t.features.bodyTracking.title,
      description: t.features.bodyTracking.description,
    },
    {
      icon: BarChart3,
      title: t.features.progressAnalysis.title,
      description: t.features.progressAnalysis.description,
    },
    {
      icon: Cloud,
      title: t.features.cloudSync.title,
      description: t.features.cloudSync.description,
    },
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t.features.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.features.title1}
            <span className="text-gradient">{t.features.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.features.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Feature */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Plus className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">
              {t.features.customExercises.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t.features.customExercises.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
