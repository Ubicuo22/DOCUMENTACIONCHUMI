import { Mail, ExternalLink, MessageCircle, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="text-gray-900 dark:text-white">CHUMI</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cloud Hybrid Unified Management Infrastructure
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              Desarrollado por <span className="font-semibold">Ubicuo Studios</span>
            </p>
          </div>

          {/* Documentación */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Documentación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/modulos" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition">
                  Todos los Módulos
                </a>
              </li>
              <li>
                <a href="/modulos/recibos" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition">
                  Módulo Recibos
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Productos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.ubicuomexico.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition flex items-center gap-1">
                  Ubicuo México <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ubicuo_studio" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition flex items-center gap-1">
                  Instagram <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@ubicuo.com"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition"
                title="Email"
              >
                <Mail className="w-4 h-4" />
                info@ubicuo.com
              </a>
              <a
                href="https://wa.me/524431187975"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                +52 443 118 7975
              </a>
              <a
                href="https://www.ubicuomexico.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 transition"
                title="Sitio Web"
              >
                <Globe className="w-4 h-4" />
                ubicuomexico.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 CHUMI by Ubicuo Studios. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://github.com/Ubicuo22" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.ubicuomexico.com/privacidad" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
              Privacidad
            </a>
            <a href="https://www.ubicuomexico.com/terminos" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}