import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Cog, HeadphonesIcon } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico Inicial",
      description: "Evaluamos tu infraestructura actual, identificamos oportunidades de mejora y riesgos potenciales."
    },
    {
      number: "02", 
      icon: FileText,
      title: "Propuesta a Medida",
      description: "Diseñamos una solución personalizada que se adapte a tus necesidades específicas y presupuesto."
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementación Eficiente", 
      description: "Ejecutamos el proyecto con metodologías ágiles, minimizando interrupciones en tu operación."
    },
    {
      number: "04",
      icon: HeadphonesIcon,
      title: "Acompañamiento Continuo",
      description: "Brindamos soporte técnico, monitoreo proactivo y mejoras continuas para garantizar el éxito."
    }
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Proceso de </span>
            <span className="text-tech-blue">Trabajo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Una metodología probada en 4 pasos para garantizar el éxito de tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border shadow-card hover:shadow-tech transition-all duration-300 group relative"
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/20 rounded-full mb-4 mt-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-tech-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connection Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-tech-blue/30 z-10"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;