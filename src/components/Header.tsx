export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Bebê Noites Tranquilas" 
              className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-gray-600 hover:text-[#37716F] transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-[#37716F] transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#conteudo" className="text-gray-600 hover:text-[#37716F] transition-colors font-medium">
              Conteúdo
            </a>
            <a href="#rafaela" className="text-gray-600 hover:text-[#37716F] transition-colors font-medium">
              Quem é Rafaela
            </a>
          </nav>

          {/* Desktop CTA */}
          <a 
            href="#pricing"
            className="hidden md:inline-flex bg-[#37716F] hover:bg-[#72C0BE] text-white rounded-full px-6 py-2.5 text-base font-medium transition-colors"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    </header>
  );
}
