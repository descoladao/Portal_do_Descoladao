import { Zap, Shield, Bell, RefreshCw, Wifi, Smartphone } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function Download() {
  const benefits = [
    { icon: Zap, text: 'Interface moderna e intuitiva' },
    { icon: Bell, text: 'Notificações em tempo real' },
    { icon: RefreshCw, text: 'Sincronização entre dispositivos' },
    { icon: Wifi, text: 'Modo offline disponível' },
    { icon: Smartphone, text: 'Suporte multiplataforma' },
    { icon: Shield, text: 'Atualizações automáticas' },
  ]

  return (
    <section className="min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6 py-8 lg:py-0">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 uppercase">
            Baixe o{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              descoladão
            </span>
            {' '}para android
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Sua nova forma de economizar e receber benefícios imperdíveis.
            Tudo na palma da sua mão!
          </p>
        </div>

        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto">
          <div className="relative mx-auto order-last lg:order-first">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur-2xl opacity-30 scale-95" />
            <div className="relative aspect-[9/16] w-48 md:w-56 rounded-[2rem] border-[5px] border-foreground/20 bg-background shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/20 rounded-b-xl z-10" />
              <img
                src="/images/screenshot-app.jpg"
                alt="Descoladão App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-3 grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button size="lg" className="h-14 text-base rounded-xl w-full" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.idevilson.descoladao" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar para Android
                </a>
              </Button>

              <div className="flex items-center justify-center gap-3 h-14 px-4 rounded-xl bg-muted/50 border border-dashed border-border w-full">
                <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="font-medium text-sm">iPhone (iOS)</p>
                  <p className="text-xs text-muted-foreground">Em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
