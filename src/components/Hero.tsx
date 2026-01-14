import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                Economize com o
                <span className="text-primary block mt-2">Clube Descoladão</span>
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                Descontos exclusivos em estabelecimentos parceiros, telemedicina, assistência residencial e muito mais. Tudo em um único clube de benefícios!
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-14 rounded-xl px-6" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.idevilson.descoladao" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar para Android
                </a>
              </Button>
              <Button size="lg" className="h-14 rounded-xl px-6 bg-foreground text-background hover:bg-foreground/90" asChild>
                <a href="https://apps.apple.com/br/app/clube-de-descontos-descolad%C3%A3o/id6747364651" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Baixar para iPhone
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[3rem] blur-3xl opacity-20 scale-90" />
            <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/cartao-descoladao.png"
                alt="Cartão Clube Descoladão"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
