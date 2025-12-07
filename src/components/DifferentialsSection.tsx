import { Card, CardContent } from "@/components/ui/card";
import { Phone, Eye, FileText, Users, Building } from "lucide-react";
import { useTranslation } from "react-i18next";

const DifferentialsSection = () => {
  const { t } = useTranslation();
  
  const differentials = [
    {
      icon: Phone,
      title: t('differentials.attention.title'),
      description: t('differentials.attention.description')
    },
    {
      icon: Eye,
      title: t('differentials.preventive.title'),
      description: t('differentials.preventive.description')
    },
    {
      icon: FileText,
      title: t('differentials.transparency.title'),
      description: t('differentials.transparency.description')
    },
    {
      icon: Users,
      title: t('differentials.teams.title'),
      description: t('differentials.teams.description')
    },
    {
      icon: Building,
      title: t('differentials.experience.title'),
      description: t('differentials.experience.description')
    }
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('differentials.title1')} </span>
            <span className="text-tech-blue">{t('differentials.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('differentials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-tech-blue/20 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {differential.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;