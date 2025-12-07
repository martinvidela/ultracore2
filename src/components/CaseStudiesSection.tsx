import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, CreditCard, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const CaseStudiesSection = () => {
  const { t } = useTranslation();
  const cases = [
    {
      icon: ShoppingCart,
      sector: "Retail",
      title: "Migración a Proxmox + Backups Automáticos",
      description: "Migración completa de infraestructura legacy a Proxmox con implementación de sistema de backups automatizado 3-2-1, reduciendo downtime en 95% y mejorando la recuperación ante desastres.",
      results: ["95% menos downtime", "Backup automatizado", "ROI en 8 meses"]
    },
    {
      icon: CreditCard,
      sector: "Fintech",
      title: "Plataforma de Pagos Segura",
      description: "Desarrollo de plataforma de pagos con arquitectura de microservicios, implementando las más altas medidas de ciberseguridad y cumplimiento PCI DSS para procesamiento seguro de transacciones.",
      results: ["100% uptime", "Certificación PCI DSS", "1M+ transacciones/día"]
    },
    {
      icon: Building2,
      sector: "PyME",
      title: "Ciberseguridad Robusta + Monitoreo 24/7",
      description: "Implementación integral de ciberseguridad con firewalls de nueva generación, monitoreo proactivo 24/7 con Prometheus y Grafana, y capacitación del personal en mejores prácticas.",
      results: ["0 incidentes", "Monitoreo 24/7", "Equipo capacitado"]
    }
  ];

  return (
    <section id="casos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('cases.title1')} </span>
            <span className="text-tech-blue">{t('cases.title2')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('cases.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-tech-blue/20 rounded-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-5 w-5 text-tech-blue" />
                    </div>
                    <span className="text-tech-blue font-semibold text-sm uppercase tracking-wide">
                      {caseStudy.sector}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground leading-tight">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {caseStudy.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Resultados clave:</h4>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-tech-blue rounded-full flex-shrink-0"></div>
                          <span className="text-tech-blue text-xs font-medium">{result}</span>
                        </div>
                      ))}
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

export default CaseStudiesSection;