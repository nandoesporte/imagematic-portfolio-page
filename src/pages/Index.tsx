import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Brain, Database, FileText, LayoutDashboard, Vote } from "lucide-react";

const Index = () => {
  const systemScreens = [
    {
      title: "Dashboard Principal",
      description: "Monitoramento em tempo real dos indicadores de felicidade",
      image: "/lovable-uploads/7f5135a4-3cea-4817-956e-f172c051ce57.png"
    },
    {
      title: "Formulário FIC",
      description: "Interface intuitiva para coleta de dados sobre felicidade e satisfação",
      image: "/lovable-uploads/73419682-d3f2-4a53-b713-70a417bbace2.png"
    },
    {
      title: "Preenchimento do Formulário",
      description: "Avaliação detalhada dos aspectos de felicidade interna",
      image: "/lovable-uploads/acc0a603-8612-44f2-8a28-ec8096b520e0.png"
    },
    {
      title: "Confirmação de Envio",
      description: "Feedback instantâneo após submissão do formulário",
      image: "/lovable-uploads/d6bf8d62-9031-4d99-ab81-29f73b56b99f.png"
    },
    {
      title: "Sistema de Votação",
      description: "Participação democrática nas decisões",
      image: "/lovable-uploads/cdced13c-d1a5-4ee3-9ed6-b0453341740d.png"
    },
    {
      title: "Confirmação de Votos",
      description: "Registro seguro das participações",
      image: "/lovable-uploads/fe927e10-a054-4bb0-8645-8025e89b8ad8.png"
    },
    {
      title: "Análise de Votos",
      description: "Visualização detalhada dos resultados",
      image: "/lovable-uploads/48db79c1-ad03-4a89-98a5-ad8e163ff706.png"
    },
    {
      title: "Visualização de Votos",
      description: "Métricas e insights detalhados",
      image: "/lovable-uploads/411a1108-d3ba-44e0-88da-38deded3b70b.png"
    },
    {
      title: "Backup de Dados",
      description: "Gestão segura das informações",
      image: "/lovable-uploads/3bbf7db6-d60a-4480-85d5-e703c94918a8.png"
    },
    {
      title: "Relatório IA",
      description: "Análise avançada com inteligência artificial",
      image: "/lovable-uploads/ea54b460-4b3a-44e6-95b8-a1a18fef498b.png"
    },
    {
      title: "Gestão de Usuários",
      description: "Controle de acesso e participantes",
      image: "/lovable-uploads/983ca690-5a94-4553-acb5-626d0dfec8ec.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Dashboard FIC ✨
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Sistema de Felicidade Interna do Cooperativismo - Uma plataforma completa para monitoramento e gestão do bem-estar cooperativo
          </p>
        </div>
      </header>

      {/* Features Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <LayoutDashboard className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Dashboard Intuitivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Visualização clara e objetiva dos indicadores de felicidade da sua cooperativa.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Formulário FIC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Coleta estruturada de dados sobre bem-estar e satisfação dos cooperados.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Vote className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Sistema de Votação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Participação democrática nas decisões importantes da cooperativa.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Backup Seguro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Proteção e exportação segura dos dados da sua cooperativa.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Análise IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Insights avançados usando inteligência artificial.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Screenshots Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça o Sistema</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {systemScreens.map((screen, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src={screen.image} 
                          alt={screen.title} 
                          className="w-full h-auto object-cover"
                        />
                        <div className="p-6 bg-white">
                          <h3 className="text-xl font-semibold mb-2">{screen.title}</h3>
                          <p className="text-gray-600">{screen.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transforme sua cooperativa hoje
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e descubra como o FIC pode elevar os níveis de satisfação e engajamento na sua cooperativa.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="hover:bg-white hover:text-primary transition-colors"
          >
            Começar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;