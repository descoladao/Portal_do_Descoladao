import { Separator } from '../components/ui/separator'

const termsOfUse = [
  {
    section: "1. Introdução",
    text: `1.1. Estes Termos de Uso estabelecem as condições para utilização do aplicativo Clube de Descontos Descoladão, desenvolvido por Descoladao Administradora de Cartoes LTDA, com sede em Redenção-PA, inscrita no CNPJ sob o nº 56.900.820/0001-94.

1.2. Ao acessar, baixar, instalar ou usar o App, o Usuário concorda em cumprir estes termos na versão vigente.`
  },
  {
    section: "2. Aceite dos Termos",
    text: `2.1. O Usuário declara ter lido, compreendido e aceitado todas as cláusulas destes Termos de Uso.

2.2. Caso não concorde com qualquer disposição, o Usuário deve descontinuar o uso do App.`
  },
  {
    section: "3. Elegibilidade",
    text: `3.1. O App destina-se a pessoas com idade mínima de 13 anos ou menores emancipados.

3.2. Ao aceitar estes termos, o Usuário afirma ter capacidade legal para contratar.`
  },
  {
    section: "4. Licença de Uso",
    text: `4.1. Concedemos ao Usuário uma licença limitada, pessoal, intransferível e revogável para uso do App, conforme previsto nestes Termos.

4.2. É proibido ao Usuário:
  a) Fazer engenharia reversa, descompilar ou desassemblar o App;
  b) Modificar, adaptar ou criar obras derivadas;
  c) Distribuir sem autorização, sublicenciar ou alugar o App a terceiros.`
  },
  {
    section: "5. Obrigações e Condutas do Usuário",
    text: `5.1. O Usuário compromete-se a usar o App de forma lícita, respeitando a legislação aplicável e não praticando atos que:
a) Propaguem vírus, malware ou conteúdos nocivos;
b) Ofendam direitos de terceiros (direitos autorais, marcas, privacidade);
c) Enviem spam ou mensagens não solicitadas.`
  },
  {
    section: "6. Conteúdo Gerado pelo Usuário",
    text: `6.1. Caso o App permita envio de textos, imagens, avaliações ou comentários, o Usuário garante que possui direitos sobre o material.

6.2. Reservamo-nos o direito de remover ou bloquear qualquer conteúdo que consideremos inadequado, ofensivo ou ilegal.`
  },
  {
    section: "7. Propriedade Intelectual",
    text: `7.1. Todos os direitos relativos ao App e seus componentes (códigos-fonte, imagens, marcas, logos) são exclusivos do Clube de Descontos Descoladão.

7.2. O uso de quaisquer elementos sem autorização prévia por escrito configura infração de direitos autorais e/ou marca.`
  },
  {
    section: "8. Isenções de Responsabilidade e Limitações",
    text: `8.1. O App é fornecido "no estado em que se encontra", sem garantias expressas ou implícitas de qualquer natureza.

8.2. Em nenhuma hipótese o Clube de Descontos Descoladão será responsável por danos indiretos, lucros cessantes, perda de dados ou quaisquer prejuízos decorrentes do uso ou impossibilidade de uso do App.`
  },
  {
    section: "9. Privacidade e Proteção de Dados",
    text: `9.1. O tratamento de dados pessoais está descrito na Política de Privacidade.

9.2. Coletamos apenas as informações necessárias para o funcionamento do App e respeitamos a Lei Geral de Proteção de Dados (LGPD).`
  },
  {
    section: "10. Modificações destes Termos",
    text: `10.1. Poderemos alterar estes Termos periodicamente, publicando a nova versão no App ou enviando notificação ao Usuário.

10.2. As modificações entrarão em vigor na data indicada na atualização.`
  },
  {
    section: "11. Rescisão",
    text: `11.1. O descumprimento de quaisquer disposições destes Termos poderá resultar em suspensão ou exclusão do cadastro do Usuário, sem prejuízo de outras medidas legais.`
  },
  {
    section: "12. Legislação Aplicável e Foro",
    text: `12.1. Estes Termos são regidos pelas leis brasileiras.

12.2. Fica eleito o foro da comarca de Redenção-PA para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.`
  },
  {
    section: "13. Contato",
    text: `Se tiver dúvidas ou comentários acerca destes Termos, entre em contato através de:
E-mail: suporteclubedescoladao@gmail.com`
  }
]

export default function TermsOfUse() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Termos de Uso
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
          <p className="text-sm text-muted-foreground">
            <strong>Sede:</strong> Redenção-PA
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Versão:</strong> 3.1 | <strong>Última atualização:</strong> 04 de Janeiro de 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {termsOfUse.map((term, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mb-4">{term.section}</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {term.text}
              </p>
              {index < termsOfUse.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            Ao utilizar o aplicativo Clube de Descontos Descoladão, você declara que leu, compreendeu e concorda com todos os termos acima.
          </p>
        </div>
      </div>
    </div>
  )
}
