function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-yellow-500/30">
      {/* Sophisticated Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 hero-gradient opacity-60" />
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
            <a href="#" className="hover:text-white transition-colors">Estrategia</a>
            <a href="#" className="hover:text-white transition-colors">Tecnología</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="max-w-6xl mx-auto px-6 pt-24 pb-32 text-center md:pt-40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            FONDO PRIVADO DE INVERSIÓN
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Transformando capital en <br />
            <span className="text-gradient">rendimiento tecnológico</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Firma de inversión especializada en <span className="text-white">tecnología disruptiva</span>,
            <span className="text-white"> software escalable</span> y
            <span className="text-white"> arbitraje algorítmico</span> de activos digitales.
            Combinamos visión estratégica con ejecución técnica de precisión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold rounded-lg transition-all shadow-lg shadow-yellow-500/10 transform hover:-translate-y-0.5">
              Solicitar Credenciales
            </button>
            <button className="px-10 py-4 border border-white/10 hover:bg-white/5 text-white font-semibold rounded-lg transition-all backdrop-blur-md">
              Nuestra Estrategia
            </button>
          </div>
        </main>

        {/* Investment Focus Areas */}
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arbitraje Digital</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Explotamos ineficiencias de mercado mediante algoritmos propietarios de alta frecuencia en ecosistemas descentralizados.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Software & SaaS</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Capital semilla y serie A para plataformas de software empresarial con modelos de ingresos recurrentes y escalabilidad global.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rendimiento Constante</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Estrategias de inversión cuantitativa diseñadas para mitigar la volatilidad y maximizar el retorno ajustado al riesgo.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-slate-900/30 backdrop-blur-md border-y border-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50M+</div>
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
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-white/5">
          <div className="text-slate-500 text-sm">
            © 2024 Wavemix Private Equity. Todos los derechos reservados. <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            Confidencialidad Garantizada.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

