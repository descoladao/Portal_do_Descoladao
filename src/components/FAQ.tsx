import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const faqs = [
  {
    category: 'Sobre Assinatura',
    question: 'O que é o Descoladão?',
    answer:
      'O Descoladão é um clube de descontos que reúne ofertas exclusivas em parceiros selecionados e oferece benefícios adicionais conforme o plano escolhido — como consultas de telemedicina, assistência residencial e cobertura fúnebre. Tudo isso por meio de uma assinatura flexível, disponível em versões mensal ou anual, com duas opções de plano, para você escolher o que melhor cabe no seu bolso.',
  },
  {
    category: 'Sobre Assinatura',
    question: 'Como faço para me cadastrar?',
    answer:
      'Basta baixar o app, criar uma conta informando nome, e-mail e senha, escolher seu plano (Econômico ou Premium, nas versões mensal ou anual) e concluir o pagamento. Você já começa a economizar na hora!',
  },
  {
    category: 'Sobre Assinatura',
    question: 'Como faço para trocar de plano?',
    answer:
      'Abra o app e vá em Perfil > Planos de Assinatura, toque em Alterar Plano, escolha a nova opção e confirme o pagamento. A mudança vale imediatamente e o ajuste proporcional aparece na próxima fatura.',
  },
  {
    category: 'Sobre Assinatura',
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer:
      'Sim. Em Perfil > Planos de Assinatura > Dados da Assinatura, toque em Cancelar Assinatura. Seu acesso segue ativo até o fim do período já pago.',
  },
  {
    category: 'Sobre Assinatura',
    question: 'Posso pausar minha assinatura temporariamente?',
    answer:
      'Atualmente não oferecemos pausa de assinatura. Se precisar interromper, cancele e, depois, assine novamente quando desejar.',
  },
  {
    category: 'Sobre Assinatura',
    question: 'Posso compartilhar minha conta com outras pessoas?',
    answer:
      'Não. Cada assinatura é pessoal e intransferível. Compartilhar seu login viola nossos termos e pode resultar em bloqueio de conta.',
  },
  {
    category: 'Sobre Pagamento',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos apenas cartão de crédito. Em breve, teremos mais opções.',
  },
  {
    category: 'Sobre Pagamento',
    question: 'Como atualizo meus dados de pagamento?',
    answer:
      'Em Perfil > Planos de Assinatura > Gerenciar Métodos de Pagamento, edite o cartão cadastrado e salve. A alteração vale já na próxima cobrança.',
  },
  {
    category: 'Sobre Pagamento',
    question: 'Onde encontro a última fatura?',
    answer:
      'Em Perfil > Planos de Assinatura > Dados da Assinatura, você verá a última fatura.',
  },
  {
    category: 'Sobre Pagamento',
    question: 'Como funcionam os cupons promocionais?',
    answer:
      'No ato da assinatura, insira o código do cupom antes de finalizar o pagamento. Ele pode liberar descontos extras ou acesso a sorteios.',
  },
  {
    category: 'Sobre Benefícios e Descontos',
    question: 'Como uso meu desconto em um estabelecimento parceiro?',
    answer:
      'No momento da compra, apresente o código de desconto gerado pelo app ao estabelecimento. O valor será aplicado automaticamente à sua compra.',
  },
  {
    category: 'Sobre Benefícios e Descontos',
    question: 'O que acontece se eu não usar todos os benefícios do meu plano?',
    answer:
      'O fato de você usar ou não um desconto não altera sua disponibilidade. Cada parceiro define o valor e a validade de cada oferta. Enquanto sua assinatura estiver ativa, você pode usufruir de todas as promoções vigentes no momento do uso.',
  },
  {
    category: 'Sobre Benefícios e Descontos',
    question: 'Posso acumular vários descontos na mesma compra?',
    answer:
      'Não! No momento não trabalhamos com acúmulo de descontos para o mesmo estabelecimento parceiro.',
  },
  {
    category: 'Sobre Benefícios e Descontos',
    question: 'Há limite de uso para os benefícios?',
    answer:
      'Cada oferta tem suas próprias regras (validade, limite de uso ou ajustes de condições). Essas informações aparecem nos detalhes de cada promoção: o app indica claramente data de expiração, restrição de uso ou alterações.',
  },
  {
    category: 'Sobre Benefícios e Descontos',
    question: 'O plano inclui telemedicina, assistência para o meu lar e assistência fúnebre?',
    answer:
      'Depende do plano escolhido. Confira em Benefícios a lista completa de serviços que podem estar disponíveis para o seu nível de assinatura.',
  },
  {
    category: 'Suporte e Atendimento',
    question: 'Como entro em contato com o suporte?',
    answer:
      'No app, vá em Perfil > Suporte. E escolha entre as opções disponíveis. Nosso time responderá em até 24 h úteis.',
  },
  {
    category: 'Suporte e Atendimento',
    question: 'O app informava o desconto, minha conta estava ativa, mas na hora da compra o desconto não foi aplicado. O que faço?',
    answer:
      '1. Verifique nos detalhes da oferta (validade, restrições de uso). 2. Mostre ao atendente a tela da promoção no app. 3. Se o problema persistir, abra uma solicitação em Perfil > Suporte, e envie: Nome do estabelecimento, Nome da oferta, Data da tentativa, Captura da tela da promoção.',
  },
]

export default function FAQ() {
  return (
    <section className="py-12">
      <div className="space-y-4">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">
            Encontre respostas rápidas para as dúvidas mais comuns
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
