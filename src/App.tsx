function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-yellow-500/30">
      {/* Sophisticated Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 hero-gradient opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-yellow-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Navigation / Header */}
        <header className="px-6 py-6 md:px-12 flex justify-center items-center border-b border-white/5 backdrop-blur-sm">
          <div className="text-4xl font-extrabold tracking-tighter text-white">
            WAVEMIX<span className="text-yellow-500">.</span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 pt-12 pb-12 text-center md:pt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            GESTIÓN DE CAPITAL & VENTURE BUILDING
          </div>

          <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Arquitectos de Tecnología <br />
            <span className="text-gradient">y Capital Estratégico</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Wavemix es una firma de inversión privada y venture builder enfocada en el desarrollo de soluciones tecnológicas disruptivas.
            Combinamos <span className="text-white">software avanzado</span>,&nbsp;
            <span className="text-white">análisis de datos</span> y <span className="text-white">eficiencia algorítmica</span> para escalar negocios de alto impacto.
          </p>

        </main>

        {/* Ventures Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Iniciativas en Desarrollo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Algorithmic HFT</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Sistemas de trading de alta frecuencia especializados en activos digitales, optimizando el rendimiento y la gestión de riesgo mediante algoritmos propietarios.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Beauty Marketplace</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Ecosistema digital para la gestión y reserva de servicios de bienestar, conectando profesionales con clientes bajo un modelo operativo eficiente y escalable.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Industrial Mining SaaS</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Plataforma de inteligencia artificial aplicada a la minería, utilizando visión computacional para el mantenimiento predictivo de activos críticos.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ConstruTech IoT</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Ecosistema IoT integral para la digitalización de obras de construcción, permitiendo el rastreo de activos en tiempo real y la optimización de la seguridad operativa.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">APR Cloud</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Infraestructura digital para la gestión inteligente de comités de agua rural (APR), integrando telemetría IoT y facturación automatizada en la nube.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6 group-hover:bg-violet-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AdTech Omni-Channel</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Sistema avanzado de edición y publicación automatizada de anuncios para Google AdSense, Meta Ads, Twitter y redes de publicidad programática.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-slate-900/30 backdrop-blur-md border-y border-white/5 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 underline decoration-yellow-500 decoration-2 underline-offset-8">Visión de Sociedad</h2>
            <p className="text-slate-400 text-lg leading-relaxed italic">
              "Nuestra misión es construir una estructura empresarial sólida basada en la excelencia técnica y la rentabilidad de largo plazo. En Wavemix, actuamos como el motor de innovación y el soporte financiero estratégico para nuestras propias iniciativas."
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-white/5">
          <div className="text-slate-500 text-sm">
            © 2025 Wavemix Inversiones SpA. Sociedad de Inversión Privada. <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            Confidencialidad & Visión de Largo Plazo.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
