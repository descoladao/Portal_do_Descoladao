import { CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'

export default function AppInfo() {
  const benefits = [
    'Interface moderna e intuitiva',
    'Notificações em tempo real',
    'Sincronização entre dispositivos',
    'Modo offline disponível',
    'Suporte multiplataforma',
    'Atualizações automáticas',
  ]

  return (
    <section id="download" className="py-20 md:py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur-2xl opacity-30 scale-95" />
              <div className="relative aspect-[9/16] rounded-[2.5rem] border-[6px] border-foreground/10 bg-muted shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/20 rounded-b-2xl z-10" />
                <img
                  src="/images/screenshot-app.jpg"
                  alt="Descoladão App"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experiência completa na palma da sua mão
              </h2>
              <p className="text-lg text-muted-foreground">
                O Descoladão oferece tudo que você precisa em um único aplicativo.
                Baixe agora e descubra uma nova forma de economizar e receber benefícios imperdíveis!
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row pt-4">
              <Button size="lg" className="h-14 rounded-xl flex-1 sm:flex-initial" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.idevilson.descoladao" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar para Android
                </a>
              </Button>
              <Button size="lg" className="h-14 rounded-xl flex-1 sm:flex-initial bg-foreground text-background hover:bg-foreground/90" asChild>
                <a href="https://apps.apple.com/br/app/clube-de-descontos-descolad%C3%A3o/id6747364651" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Baixar para iPhone
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
