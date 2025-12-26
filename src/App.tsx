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
        <header className="px-6 py-6 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-sm">
          <div className="text-2xl font-extrabold tracking-tighter text-white">
            WAVEMIX<span className="text-yellow-500">.</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400 capitalize">
            <a href="#" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#" className="hover:text-white transition-colors">Visión</a>
            <a href="#" className="hover:text-white transition-colors">Sociedad</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center md:pt-40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            GESTIÓN DE CAPITAL & VENTURE BUILDING
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Construyendo el futuro <br />
            <span className="text-gradient">del capital propio</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Wavemix es una sociedad privada dedicada a la administración de capital propio y la incubación de compañías tecnológicas de alto impacto.
            Operamos en la intersección del <span className="text-white">software avanzado</span>,
            el <span className="text-white">análisis de datos</span> y la <span className="text-white">eficiencia algorítmica</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-10 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg backdrop-blur-md">
              Explorar Portafolio
            </div>
          </div>
        </main>

        {/* Ventures Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Iniciativas en Desarrollo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Algorithmic HFT</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Desarrollo de sistemas High-Frequency Trading enfocados en criptoactivos para la optimización de rendimientos y preservación de capital a largo plazo.
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
                Plataforma integral para la reserva de servicios de belleza in-situ y a domicilio, conectando profesionales con demanda bajo un modelo escalable.
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
                Solución B2B para el sector minero basada en visión computacional para el diagnóstico preventivo de fatiga, presión y desgaste en neumáticos industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-slate-900/30 backdrop-blur-md border-y border-white/5 py-16">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">AUM Proyectado</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">24/7</div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Ejecución</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">12%</div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Objetivo ROI</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-1">0.1ms</div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Latencia</div>
      </div>
    </div>
        </section >

    {/* Footer */ }
    < footer className = "max-w-6xl mx-auto px-6 py-12 text-center border-t border-white/5" >
      <div className="text-slate-500 text-sm">
        © 2024 Wavemix Private Equity. Todos los derechos reservados. <br className="md:hidden" />
        <span className="hidden md:inline mx-2">•</span>
        Confidencialidad Garantizada.
      </div>
        </footer >
      </div >
    </div >
  );
}

export default App;

