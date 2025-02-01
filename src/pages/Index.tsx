import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, FileText, Vote, Database, Brain, UserCog } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-primary py-20 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dashboard FIC ✨</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Sistema de Felicidade Interna do Cooperativismo - Uma plataforma completa para monitoramento e gestão do bem-estar cooperativo
          </p>
        </div>
      </header>

      {/* Main Dashboard Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Dashboard Principal</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/lovable-uploads/b6361e16-6fa6-44e1-94dc-2202c4c6b09e.png" 
              alt="Dashboard Principal" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <FileText className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Formulário FIC</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/af65d352-0546-4ee6-a848-792f1f0f917f.png" 
                  alt="Formulário FIC" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Interface intuitiva para coleta de dados sobre felicidade e satisfação.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Vote className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Sistema de Votação</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/0714be18-44f1-45d6-a4c8-fd9229bdcb49.png" 
                  alt="Sistema de Votação" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Ferramenta democrática para participação ativa nas decisões.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Análise de Votos</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/0bc40742-b502-49a0-8244-ff47aee5a6e7.png" 
                  alt="Análise de Votos" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Visualização detalhada dos resultados e métricas de votação.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Backup de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/61929035-7f42-4467-a0a9-461f2202f23d.png" 
                  alt="Backup de Dados" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Sistema seguro de backup e exportação de dados.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Relatório IA</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/94ebd879-3d21-4875-a3b9-1f2ebcfc338a.png" 
                  alt="Relatório IA" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Análise avançada usando inteligência artificial.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCog className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Gestão de Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/lovable-uploads/e7866798-452a-4b2e-a70b-a69f58534be7.png" 
                  alt="Gestão de Usuários" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-4 text-gray-600">Controle eficiente de acesso e gerenciamento de participantes.</p>
              </CardContent>
            </Card>
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
          <Button variant="secondary" size="lg" className="hover:bg-opacity-90 transition-colors">
            Começar Agora
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;