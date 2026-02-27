import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <img 
              src="/logo.png" 
              alt="Bebê Noites Tranquilas" 
              className="h-9 md:h-10 w-auto"
            />
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Transformando noites e vidas de famílias através do sono infantil.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Links Rápidos</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm md:text-base">Redes Sociais</h3>
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://www.instagram.com/bebe.noitestranquilas/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-200 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575823710422" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-200 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-200 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 text-center text-xs sm:text-sm text-gray-600">
          <p>© 2024 Rafaela Amaral. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
