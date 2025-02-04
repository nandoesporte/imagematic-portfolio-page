import { Button } from "@/components/ui/button";

const Index = () => {
  const systemImages = [
    {
      src: "/lovable-uploads/88ead8b1-c1f5-423a-a50f-d62854b38da0.png",
      alt: "Dashboard Principal",
      title: "Dashboard FIC",
      description: "Painel principal com monitoramento em tempo real dos indicadores de felicidade da cooperativa"
    },
    {
      src: "/lovable-uploads/64131424-8d9d-4806-bfc1-f9154093e410.png",
      alt: "Acesso ao Formulário",
      title: "Acesso ao Formulário FIC",
      description: "Interface de acesso ao formulário através do email cadastrado"
    },
    {
      src: "/lovable-uploads/8225f17c-39f3-417a-8a98-3f76f068e868.png",
      alt: "Formulário Detalhado",
      title: "Formulário FIC Detalhado",
      description: "Formulário completo com campos para avaliação de pontos fortes, desafios e oportunidades"
    },
    {
      src: "/lovable-uploads/251d8a35-dabd-4b13-a25e-2a6b590e9456.png",
      alt: "Confirmação de Envio",
      title: "Confirmação de Envio",
      description: "Tela de confirmação após o envio bem-sucedido do formulário"
    },
    {
      src: "/lovable-uploads/0aeceff5-e99a-404d-8a41-efc72069b9cb.png",
      alt: "Sistema de Votação",
      title: "Sistema de Votação",
      description: "Interface para votação e seleção de opções por dimensão"
    },
    {
      src: "/lovable-uploads/22e44caf-7924-43fe-9364-0a5238e46260.png",
      alt: "Visualização de Respostas",
      title: "Respostas dos Questionários",
      description: "Visualização detalhada das respostas coletadas por grupo e dimensão"
    },
    {
      src: "/lovable-uploads/9d416f3d-00ad-4d1e-a95d-63756218cbe3.png",
      alt: "Sistema de Votação",
      title: "Sistema de Votação",
      description: "Interface detalhada para votação com seleção de dimensões, pontos fortes e desafios"
    },
    {
      src: "/lovable-uploads/a52f5746-631f-48d8-ac95-f7aaf9e532c7.png",
      alt: "Análise de Votos",
      title: "Análise de Votos",
      description: "Dashboard com métricas e resultados das votações realizadas"
    },
    {
      src: "/lovable-uploads/fc8458ad-30ca-4b2a-ade9-1f3bae1bf191.png",
      alt: "Visualização de Votos",
      title: "Visualização de Votos",
      description: "Interface para visualização temporal dos votos e exportação de relatórios"
    },
    {
      src: "/lovable-uploads/fe642a5c-e0a6-4678-bb54-bace9405cfb0.png",
      alt: "Backup de Dados",
      title: "Backup de Dados",
      description: "Sistema de backup e exportação de dados com gestão de arquivos"
    },
    {
      src: "/lovable-uploads/64ef1f86-4182-4356-8133-8427bea1b725.png",
      alt: "Relatório IA",
      title: "Relatório de Inteligência Artificial",
      description: "Análise detalhada dos votos por dimensão usando inteligência artificial"
    },
    {
      src: "/lovable-uploads/25330ed1-191b-4b36-977a-98453d8a4114.png",
      alt: "Gestão de Usuários",
      title: "Gestão de Usuários",
      description: "Interface para gerenciamento de participantes e controle de acesso"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
          
          <div className="max-w-6xl mx-auto space-y-16">
            {systemImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{image.title}</h3>
                  <p className="text-gray-600 text-lg">{image.description}</p>
                </div>
              </div>
            ))}
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