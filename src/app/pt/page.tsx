import { Button } from "@/components/ui/button";
import {
  Play,
  ChevronDown,
  Dumbbell,
  FileText,
  Calculator,
  TrendingUp,
  BarChart3,
  Cloud,
  Plus,
  Check,
  Star,
} from "lucide-react";
import logo from "@/assets/logo.png";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import Link from "next/link";
import { Metadata } from "next";

const baseUrl = "https://workoutlogs.github.io";
export const metadata: Metadata = {
  title:
    "WorkoutLogs - Melhor App de Treino e Musculação | Diário de Academia Grátis",
  description:
    "Registre seus treinos de musculação, acompanhe progressão de carga e alcance seus objetivos. App grátis para academia, powerlifting e fitness. Baixe agora!",
  openGraph: {
    siteName: "WorkoutLogs",
    title: "WorkoutLogs - Melhor App de Treino para Academia",
    description:
      "Registre séries, repetições e cargas. Acompanhe sua progressão e alcance seus objetivos. App grátis!",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: `${baseUrl}/pt`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@workoutlogs",
    title: "WorkoutLogs - Melhor App de Treino para Academia",
    description:
      "Registre séries, repetições e cargas. Acompanhe sua progressão e alcance seus objetivos. App grátis!",
  },
  alternates: {
    canonical: "https://workoutlogs.github.io/pt",
    languages: {
      en: "/",
      pt: "/pt",
    },
  },
};

const IndexPT = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container flex items-center justify-between h-16">
            <Link href="/pt" className="flex items-center gap-3 group">
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
                Funcionalidades
              </a>
              <a
                href="#beneficios"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Benefícios
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                🇺🇸 EN
              </Link>
              <Button
                variant="cta"
                size="sm"
                asChild
                className="hidden sm:flex"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baixar App
                </a>
              </Button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16 pb-24">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in-up">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Disponível na Google Play
                  </span>
                </div>

                <div className="mb-8 animate-fade-in-up animation-delay-100">
                  <img
                    src={logo.src}
                    alt="WorkoutLogs"
                    className="h-24 mx-auto animate-float aspect-ratio-[2/1]"
                  />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up animation-delay-200">
                  Transforme seus
                  <span className="block text-gradient pb-4">
                    treinos na academia
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
                  Substitua a ficha de papel por um diário de treino
                  inteligente. Registre séries, acompanhe sua evolução e alcance
                  seus objetivos.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
                  <Button variant="hero" size="xl" asChild>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Play className="w-5 h-5" />
                      Baixar Grátis
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#funcionalidades">Ver Funcionalidades</a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in-up animation-delay-500">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Exercícios
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      5.0★
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Avaliação
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient">
                      Grátis
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Para usar
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="funcionalidades" className="py-24 bg-secondary/30">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Funcionalidades
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Tudo que você precisa na
                  <span className="text-gradient"> academia</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ferramentas profissionais para iniciantes e atletas avançados.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Dumbbell,
                    title: "Registro de Treinos",
                    description:
                      "Anote suas séries, repetições e cargas de forma rápida. Nunca mais esqueça quanto peso levantou.",
                  },
                  {
                    icon: FileText,
                    title: "Fichas de Treino",
                    description:
                      "Crie e organize suas fichas ABC, Upper/Lower, Full Body e rotinas personalizadas.",
                  },
                  {
                    icon: Calculator,
                    title: "Calculadoras Essenciais",
                    description:
                      "Calculadora de Anilhas, estimativa de 1RM, RPE e Pontos de Powerlifting.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Acompanhamento Corporal",
                    description:
                      "Registre peso e medidas corporais. Visualize sua transformação em gráficos detalhados.",
                  },
                  {
                    icon: BarChart3,
                    title: "Análise de Progresso",
                    description:
                      "Gráficos de volume, frequência e recordes pessoais. Entenda o que funciona para você.",
                  },
                  {
                    icon: Cloud,
                    title: "Sincronização na Nuvem",
                    description:
                      "Seus dados sempre seguros. Troque de celular sem perder seu histórico.",
                  },
                ].map((feature, index) => (
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

              <div className="mt-8 p-6 rounded-2xl bg-gradient-card border border-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    Exercícios Personalizáveis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Adicione seus próprios exercícios se não encontrar na nossa
                    base.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Screenshots Section */}
          <section id="screenshots" className="py-24">
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Screenshots
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Veja o app em
                  <span className="text-gradient"> ação</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Interface intuitiva e bonita para você focar no que importa:
                  seu treino.
                </p>
              </div>

              <div className="flex justify-center items-end gap-4 md:gap-8 overflow-hidden">
                {[
                  { src: screenshot1, alt: "Tela de registro de treino" },
                  { src: screenshot2, alt: "Tela de gráficos de progresso" },
                  { src: screenshot3, alt: "Tela de planejamento de treino" },
                ].map((screenshot, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${
                      index === 1
                        ? "z-10 scale-110"
                        : "opacity-70 scale-95 hover:opacity-100 hover:scale-100"
                    }`}
                  >
                    <div className="relative group py-16">
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

          {/* Benefits Section */}
          <section id="beneficios" className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                    Por que usar?
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Pare de
                    <span className="text-gradient"> adivinhar</span> suas
                    cargas
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Com o WorkoutLogs, você tem controle total sobre sua
                    progressão. Ideal para quem leva a academia a sério.
                  </p>

                  <ul className="space-y-4">
                    {[
                      "Controle total sobre sua progressão de carga",
                      "Acompanhe seu volume semanal de treino",
                      "Monitore a intensidade dos exercícios",
                      "Visualize seus recordes pessoais",
                      "Histórico completo de todos os treinos",
                      "Gráficos detalhados de evolução",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-gradient-card rounded-3xl border border-border p-8 shadow-card">
                    <div className="bg-background rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b border-border">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">A</span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            Treino A - Peito e Tríceps
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Hoje, 18:30
                          </div>
                        </div>
                      </div>

                      {[
                        {
                          name: "Supino Reto",
                          sets: "4x10",
                          weight: "80kg",
                          pr: true,
                        },
                        {
                          name: "Supino Inclinado",
                          sets: "3x12",
                          weight: "60kg",
                          pr: false,
                        },
                        {
                          name: "Crucifixo",
                          sets: "3x15",
                          weight: "16kg",
                          pr: false,
                        },
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
                            <div className="font-bold text-primary">
                              {exercise.weight}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          Volume semanal
                        </span>
                        <span className="text-foreground font-medium">
                          12.450 kg
                        </span>
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

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

            <div className="container relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="mb-8">
                  <img
                    src={logo.src}
                    alt="WorkoutLogs"
                    className="h-20 mx-auto animate-float aspect-ratio-[2/1]"
                  />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Comece sua
                  <span className="text-gradient"> transformação</span> hoje
                </h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Baixe o WorkoutLogs gratuitamente e tenha o controle total dos
                  seus treinos. Junte-se a milhares de atletas que já evoluíram
                  com nosso app.
                </p>

                <div className="flex items-center justify-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-muted-foreground ml-2">
                    5.0 na Google Play
                  </span>
                </div>

                <Button variant="hero" size="xl" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&referrer=landingpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Play className="w-5 h-5" />
                    Baixar na Google Play
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Gratuito • Seus dados protegidos
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/pt" className="flex items-center gap-3">
                <img
                  src={logo.src}
                  alt="WorkoutLogs"
                  className="aspect-ratio-[2/1] h-5"
                />
                <span className="text-lg font-bold text-foreground">
                  Workout<span className="text-primary">Logs</span>
                </span>
              </Link>

              <nav className="flex items-center gap-6 text-sm">
                <a
                  href="#funcionalidades"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Funcionalidades
                </a>
                <a
                  href="#beneficios"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Benefícios
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
                  Política de Privacidade
                </a>
              </nav>

              <p className="text-sm text-muted-foreground">
                © {currentYear} WorkoutLogs. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default IndexPT;
