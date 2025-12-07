import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, Zap, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className=" top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-lg">
            {/* <Zap className="h-6 w-6 text-primary-foreground" />{" "} */}
            <img
              src="https://ultracore.ar/images/u-sola.png"
              className="w-8"
              alt=""
            />
          </div>
          <span className="text-xl font-bold text-foreground">UltraCore</span>
          <span className="text-sm text-tech-blue font-medium">
            Soluciones IT
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            {t("nav.home")}
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            {t("nav.about")}
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => scrollToSection("casos")}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            {t("nav.cases")}
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-foreground hover:text-tech-blue transition-colors"
          >
            {t("nav.contact")}
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switch */}
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <Switch
              checked={i18n.language === "en"}
              onCheckedChange={toggleLanguage}
            />
            <span className="text-sm">
              {(i18n.language || "es").toUpperCase()}
            </span>
          </div>

          {/* Theme Switch */}
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            <Moon className="h-4 w-4" />
          </div>

          <Button
            variant="outline_tech"
            size="sm"
            onClick={() => window.open("https://www.teamviewer.com", "_blank")}
          >
            {t("nav.request_meeting")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              {t("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              {t("nav.cases")}
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left text-foreground hover:text-tech-blue transition-colors"
            >
              {t("nav.contact")}
            </button>

            {/* Mobile Theme and Language Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <Switch
                  checked={i18n.language === "en"}
                  onCheckedChange={toggleLanguage}
                />
                <span className="text-sm">
                  {(i18n.language || "es").toUpperCase()}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={toggleTheme}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>

            <Button
              variant="tech"
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="w-fit"
            >
              {t("nav.request_meeting")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
