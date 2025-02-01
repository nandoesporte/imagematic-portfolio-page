import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const systemImages = [
    {
      src: "/lovable-uploads/edf0ee76-e3fa-457a-8a45-cb8455f4fc68.png",
      alt: "Dashboard Principal",
      title: "Dashboard Principal",
      description: "Visualização geral do sistema com métricas e indicadores importantes"
    },
    {
      src: "/lovable-uploads/7ee40870-7818-4317-8d45-874f71278d0f.png",
      alt: "Formulário FIC",
      title: "Formulário FIC",
      description: "Interface para preenchimento do formulário de avaliação"
    },
    {
      src: "/lovable-uploads/945bf7c4-91e6-4e7b-b56e-415e46fa07fa.png",
      alt: "Formulário Detalhado",
      title: "Formulário Detalhado",
      description: "Campos detalhados para coleta de informações"
    },
    {
      src: "/lovable-uploads/5b436df5-0e69-42da-9728-5eb9e9a30ed9.png",
      alt: "Confirmação",
      title: "Confirmação de Envio",
      description: "Feedback positivo após submissão do formulário"
    },
    {
      src: "/lovable-uploads/3699542e-d85f-47e0-ab46-a1db8908fb33.png",
      alt: "Respostas",
      title: "Visualização de Respostas",
      description: "Análise das respostas coletadas"
    },
    {
      src: "/lovable-uploads/6749441d-02ec-4eca-aee5-b3055820e125.png",
      alt: "Sistema de Votação",
      title: "Sistema de Votação",
      description: "Interface para votação e seleção de opções"
    },
    {
      src: "/lovable-uploads/fe164b66-d334-4fd8-b60f-60734f938c84.png",
      alt: "Análise de Votos",
      title: "Análise de Votos",
      description: "Métricas e resultados das votações"
    },
    {
      src: "/lovable-uploads/f29077fb-6daf-45cb-9698-15e18faee665.png",
      alt: "Visualização de Votos",
      title: "Visualização de Votos",
      description: "Detalhamento dos votos por categoria"
    },
    {
      src: "/lovable-uploads/9366b127-60c8-4c64-852c-90cf03e9ea69.png",
      alt: "Backup",
      title: "Backup de Dados",
      description: "Sistema de backup e exportação"
    },
    {
      src: "/lovable-uploads/bd0245e8-cba3-4bce-b3ff-ee1ffe3469e3.png",
      alt: "Relatório IA",
      title: "Relatório de IA",
      description: "Análise inteligente dos dados"
    },
    {
      src: "/lovable-uploads/ab20df7f-950c-4f44-aa78-dc6b838e172d.png",
      alt: "Usuários",
      title: "Gestão de Usuários",
      description: "Controle e administração de usuários"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-primary/80 py-20 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dashboard FIC ✨</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Sistema de Felicidade Interna do Cooperativismo - Uma plataforma completa para monitoramento e gestão do bem-estar cooperativo
          </p>
          <Button variant="secondary" size="lg" className="hover:bg-opacity-90 transition-colors">
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Sistema Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça o Sistema</h2>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="relative">
              <CarouselContent>
                {systemImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-auto object-contain"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                          <p className="text-gray-600">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2" />
              <CarouselNext className="absolute right-0 top-1/2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforme sua cooperativa hoje
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e descubra como o FIC pode ajudar sua cooperativa a alcançar níveis mais altos de satisfação e engajamento.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" size="lg" className="hover:bg-opacity-90 transition-colors">
              Solicitar Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white hover:bg-gray-100 transition-colors">
              Saber Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;