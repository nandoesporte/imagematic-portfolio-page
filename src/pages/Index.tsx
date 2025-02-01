import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-primary py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dashboard FIC ✨</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Sistema de Felicidade Interna do Cooperativismo - Uma plataforma completa para monitoramento e gestão do bem-estar cooperativo
          </p>
        </div>
      </header>

      {/* Features Grid */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Formulário FIC"
            description="Interface intuitiva para coleta de dados sobre a felicidade e satisfação dos cooperados. Permite o preenchimento fácil e rápido de informações essenciais para a análise do bem-estar."
            image="/lovable-uploads/57cbf2b8-1314-4ebd-b6b9-89e9f5d66253.png"
          />
          
          <FeatureCard
            title="Sistema de Votação"
            description="Ferramenta democrática que permite aos cooperados votarem em diferentes aspectos e iniciativas da cooperativa, garantindo participação ativa nas decisões."
            image="/lovable-uploads/cc1f02af-563b-4040-9e6b-ec299ae07005.png"
          />
          
          <FeatureCard
            title="Análise de Votos"
            description="Visualização detalhada dos resultados das votações, com métricas e estatísticas que auxiliam na tomada de decisões baseada em dados."
            image="/lovable-uploads/dae77165-0b74-48bc-91a5-faf68ce8402e.png"
          />

          <FeatureCard
            title="Backup de Dados"
            description="Sistema seguro de backup e exportação de dados, garantindo a preservação e disponibilidade das informações importantes da cooperativa."
            image="/lovable-uploads/75fd1724-b897-44fd-9de7-ca43b7838ab6.png"
          />

          <FeatureCard
            title="Relatório IA"
            description="Análise avançada utilizando inteligência artificial para gerar insights valiosos sobre o bem-estar e satisfação dos cooperados."
            image="/lovable-uploads/90330b76-bbc1-421a-8c1c-b4212e786dbd.png"
          />

          <FeatureCard
            title="Gestão de Usuários"
            description="Controle eficiente de acesso e gerenciamento de participantes, permitindo uma administração segura e organizada do sistema."
            image="/lovable-uploads/3ce07f2b-c874-4fa7-8e2e-903a24457706.png"
          />
        </div>
      </div>

      {/* Dashboard Preview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dashboard Principal</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/c6979e68-7edc-4cbf-a63f-1df9d8da22c0.png" 
              alt="Dashboard Preview" 
              className="w-full"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitore em tempo real os indicadores de felicidade e engajamento da sua cooperativa. 
              Nossa dashboard oferece uma visão completa e atualizada do bem-estar cooperativo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Comece a transformar sua cooperativa hoje
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a nós e descubra como o FIC pode ajudar sua cooperativa a alcançar níveis mais altos de satisfação e engajamento.
          </p>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Começar Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;