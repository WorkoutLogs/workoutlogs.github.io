import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      <button
        onClick={() => setLang("pt")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          lang === "pt"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
