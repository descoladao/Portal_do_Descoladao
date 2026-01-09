import { Separator } from '../components/ui/separator'

const privacyPolicy = [
  {
    section: "1. Introdução",
    text: `1.1. A presente Política de Privacidade explica como Descoladao Administradora de Cartoes LTDA, inscrita no CNPJ sob o nº 56.900.820/0001-94, coleta, utiliza, armazena e compartilha os dados dos Usuários do aplicativo Clube de Descontos Descoladão ("App"), em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).`
  },
  {
    section: "2. Dados Coletados",
    text: `2.1. Dados Pessoais Obrigatórios (essenciais para funcionamento):
• Nome completo;
• Endereço de e-mail;
• CPF (exigido pela legislação fiscal brasileira para emissão de Nota Fiscal);
• Senha;
• Data de Nascimento;
• Número de telefone (necessário para cadastro físico nos estabelecimentos parceiros, contato de emergência e verificação de identidade);
• Gênero (exigido pela legislação fiscal brasileira - Lei nº 8.846/94 e regulamentações da NF-e/NFS-e para emissão de documentos fiscais);
• Dados de pagamento (quando aplicável);

2.2. Justificativa para Coleta de Telefone e Gênero:
• O Clube Descoladão opera como um clube de benefícios com estabelecimentos físicos parceiros (academias, clínicas, restaurantes, etc.);
• O número de telefone é obrigatório para: (a) cadastro presencial nos estabelecimentos parceiros; (b) contato em caso de emergência durante uso dos serviços; (c) verificação de identidade do membro;
• O gênero é obrigatório para: (a) emissão de documentos fiscais conforme legislação brasileira; (b) adequação dos serviços oferecidos pelos estabelecimentos parceiros (ex: academias com áreas específicas por gênero);

2.3. Dados Pessoais Opcionais (melhoram experiência do Usuário):
• Preferências e históricos de uso;

2.4. Dados de Uso e Dispositivo:
• Identificador único do dispositivo;
• Versão do sistema operacional;
• Logs de acesso e métricas de performance.`
  },
  {
    section: "3. Finalidades do Tratamento",
    text: `3.1. Utilizamos os dados para:
• Autenticação e autorização de acesso;
• Processamento de pagamentos e faturas;
• Envio de notificações e comunicações sobre serviços e ofertas;
• Melhoria contínua do App (análise de comportamento);
• Cumprimento de obrigações legais e fiscais.`
  },
  {
    section: "4. Base Legal",
    text: `4.1. As operações de tratamento de dados pessoais se amparam nas seguintes bases legais da LGPD:
• Art. 7º, I (consentimento do Usuário);
• Art. 7º, VI (cumprimento de obrigação legal);
• Art. 7º, IX (exercício regular de direitos);
• Art. 10 (dados anonimizados para estatísticas internas).`
  },
  {
    section: "5. Compartilhamento de Dados",
    text: `5.1. Podemos compartilhar informações com:
• Prestadores de serviço (pagamento, hospedagem, análise de dados);
• Autoridades legais quando exigido por lei;
• Empresas do mesmo grupo econômico, respeitando limites contratuais.`
  },
  {
    section: "6. Segurança das Informações",
    text: `6.1. Adotamos medidas técnicas e organizacionais apropriadas para proteger os dados contra acesso não autorizado, vazamentos ou alterações indevidas.`
  },
  {
    section: "7. Retenção de Dados",
    text: `7.1. Os dados serão mantidos pelo período necessário às finalidades descritas, observadas obrigações legais de arquivamento (fiscal, contábil).`
  },
  {
    section: "8. Direitos dos Titulares",
    text: `8.1. O Usuário pode exercer, a qualquer momento, os direitos previstos na LGPD:
• Confirmação da existência de tratamento;
• Acesso aos dados;
• Correção de dados incompletos, inexatos ou desatualizados;
• Eliminação de dados desnecessários ou excessivos;
• Portabilidade;
• Revogação de consentimento.`
  },
  {
    section: "9. Tratamento de Dados de Crianças e Adolescentes",
    text: `9.1. O App não é direcionado a menores de 13 anos. Caso coletássemos dados de usuários abaixo dessa faixa etária, somente o faríamos com consentimento específico dos pais ou responsáveis.`
  },
  {
    section: "10. Cookies e Tecnologias Similares",
    text: `10.1. Podemos usar cookies ou tecnologias similares para aprimorar funcionalidades e analisar estatísticas do App. O Usuário pode gerenciar preferências de cookies em seu dispositivo.`
  },
  {
    section: "11. Alterações nesta Política",
    text: `11.1. Reservamo-nos o direito de modificar esta Política de Privacidade. Notificaremos os Usuários sobre mudanças significativas por meio de aviso no App ou e-mail.`
  },
  {
    section: "12. Contato",
    text: `Para dúvidas, solicitações de acesso ou reclamações relacionadas à privacidade, entre em contato:
E-mail: suporteclubedescoladao@gmail.com`
  }
]

export default function PrivacyPolicy() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Política de Privacidade
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Clube de Descontos Descoladão
          </p>
        </div>

        {/* Company Info */}
        <div className="max-w-4xl mx-auto mb-8 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Empresa:</strong> Descoladao Administradora de Cartoes LTDA
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>CNPJ:</strong> 56.900.820/0001-94
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Versão:</strong> 2.1 | <strong>Última atualização:</strong> 04 de Janeiro de 2026
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {privacyPolicy.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4">{item.section}</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {item.text}
              </p>
              {index < privacyPolicy.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Ao utilizar o aplicativo Clube de Descontos Descoladão, você declara que leu, compreendeu e concorda com esta Política de Privacidade.
          </p>
        </div>
      </div>
    </div>
  )
}
