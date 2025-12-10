import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {
  aires,
  arca,
  cleanCity,
  coopar,
  kinap,
  marelli,
  qonteo,
  cryptostoker,
  seinoaSRL,
  traslados,
} from '../assets';

const ClientsSection = () => {
  const { t } = useTranslation();

  const clients = [
    { name: 'Cryptostoker', image: cryptostoker },
    { name: 'CleanCity', image: cleanCity },
    { name: 'Marelli SA', image: marelli },
    {
      name: 'Coopar',
      subtitle:
        'Cooperativa de provisión de obras y servicios públicos de Arribeños Ltda.',
      image: coopar,
    },
    { name: 'Servicios Exequiales Cepar SA' },
    { name: 'Aires de Paz', image: aires },
    { name: 'Seinoa SRL', image: seinoaSRL },
    { name: 'Kinap', image: kinap },
    { name: 'AFIP', image: arca },
    { name: 'Traslados Exclusivos SRL', image: traslados },
    { name: 'Opain', subtitle: 'Aeropuerto El Dorado Bogotá - Colombia' },
    { name: 'Qonteo', image: qonteo },
  ];

  // Group clients into chunks of 4 for each slide
  const chunkSize = 4;
  const clientChunks: typeof clients[] = [];
  for (let i = 0; i < clients.length; i += chunkSize) {
    clientChunks.push(clients.slice(i, i + chunkSize));
  }

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t('clients.title1')} </span>
            <span className="gradient-text">{t('clients.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {clientChunks.map((chunk, chunkIndex) => (
                <CarouselItem key={chunkIndex}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {chunk.map((client, index) => (
                      <div
                        key={index}
                        className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-sm
                                   hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10
                                   flex flex-col items-center justify-between px-4 py-5 md:px-5 md:py-6 text-center"
                      >
                        {/* Logo */}

                        <div className="mb-3 flex h-16 w-28 items-center justify-center rounded-lg bg-muted/50 
                                          group-hover:bg-muted/70 transition-colors">
                          <img
                            src={client.image}
                            alt={client.name}
                            className="max-h-12 w-auto object-contain opacity-80 group-hover:opacity-100 
                                         transition-all duration-300 group-hover:scale-105"
                          />
                        </div>


                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="border-border hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
