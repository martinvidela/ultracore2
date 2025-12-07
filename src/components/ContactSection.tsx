import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const openWhatsApp = () => {
    window.open("https://wa.me/5493417445294", "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:jeronimocp@ultracore.com.ar";
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t("contact.title1")} </span>
            <span className="text-tech-blue">{t("contact.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 select-none">
                {" "}
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        UltraCore
                      </h4>
                      <p className="text-muted-foreground">+54 9 3417 44-5294</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">
                        jeronimocp@ultracore.com.ar
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-tech-blue/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Sitio Web
                      </h4>
                      <p className="text-muted-foreground">
                        www.ultracore.com.ar
                      </p>
                    </div>
                  </div>
                </div>
                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    Redes Sociales
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/ultracore/"
                      target="_blank"
                      className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center hover:bg-tech-blue hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/ultracore.it/"
                      target="_blank"
                      className="w-10 h-10 bg-tech-blue/20 rounded-lg flex items-center justify-center hover:bg-tech-blue hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Necesitas una solución personalizada?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Agenda una reunión gratuita para analizar tus necesidades y
                  descubrir cómo podemos impulsar el crecimiento de tu empresa.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="tech"
                    size="lg"
                    onClick={openWhatsApp}
                    className="w-full group"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Escribir por WhatsApp
                  </Button>

                  <Button
                    variant="outline_tech"
                    size="lg"
                    onClick={openEmail}
                    className="w-full"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-tech-blue/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-tech-blue">
                      Respuesta garantizada
                    </span>{" "}
                    en menos de 24 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 p-6 bg-gradient-card rounded-lg border border-border shadow-card">
              <div className="text-left">
                <h4 className="font-semibold text-foreground">
                  ¿Listo para comenzar?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Tu transformación digital comienza con una conversación
                </p>
              </div>
              <Button variant="tech" onClick={openWhatsApp}>
                Iniciar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
