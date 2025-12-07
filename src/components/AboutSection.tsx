import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('about.title1')} </span>
            <span className="text-tech-blue">{t('about.title2')}</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">{t('about.company')}</span> {t('about.description')}
            </p>
            <div className="p-6 bg-gradient-card rounded-lg border border-border shadow-card">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                "{t('about.quote')}"
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.experience.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('about.experience.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.focus.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('about.focus.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.quality.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('about.quality.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t('about.innovation.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('about.innovation.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;