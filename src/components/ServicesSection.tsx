import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield, Database, Code, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Server,
      title: t('services.infrastructure.title'),
      items: [
        t('services.infrastructure.feature1'),
        t('services.infrastructure.feature2'),
        t('services.infrastructure.feature3')
      ]
    },
    {
      icon: Shield,
      title: t('services.cybersecurity.title'),
      items: [
        t('services.cybersecurity.feature1'),
        t('services.cybersecurity.feature2'),
        t('services.cybersecurity.feature3')
      ]
    },
    {
      icon: Database,
      title: t('services.backups.title'),
      items: [
        t('services.backups.feature1'),
        t('services.backups.feature2'),
        t('services.backups.feature3')
      ]
    },
    {
      icon: Code,
      title: t('services.development.title'),
      items: [
        t('services.development.feature1'),
        t('services.development.feature2'),
        t('services.development.feature3')
      ]
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      items: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3')
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('services.title1')} </span>
            <span className="text-tech-blue">{t('services.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-tech-blue" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;