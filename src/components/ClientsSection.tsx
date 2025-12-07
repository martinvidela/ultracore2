import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const ClientsSection = () => {
  const { t } = useTranslation();

  const clients = [
    {
      name: 'Cryptostoker',
      url: 'https://cryptostoker.com',
      description: t('clients.cryptostoker.description'),
    },
    {
      name: 'Fullpagos',
      url: 'https://fullpagos.com.ar',
      description: t('clients.fullpagos.description'),
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-4">
                {client.description}
              </p>
              <span className="text-sm text-primary font-medium">
                {client.url.replace('https://', '')}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
