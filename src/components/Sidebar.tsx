import { useCallback, useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  HelpCircle,
  Zap,
} from 'lucide-react';
import { modulesList } from '../data/modules';

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;
  onClose?: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({
  currentPath,
  isOpen,
  onClose,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('ventas');

  // ✅ OPTIMIZACIÓN 1: Memoizar módulos por categoría
  const modulesByCategory = useMemo(() => {
    return modulesList.reduce((acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    }, {} as Record<string, typeof modulesList>);
  }, []);

  // ✅ OPTIMIZACIÓN 2: Memoizar callback para links
  const isActive = useCallback((href: string) => {
    return currentPath === href || currentPath.startsWith(href + '/');
  }, [currentPath]);

  // ✅ GUÍAS - SOLO LAS ESENCIALES
  const guides = useMemo(() => [
    { id: 'primeros-pasos', label: 'Primeros Pasos', href: '/guias/primeros-pasos', icon: Zap },
    { id: 'instalacion', label: 'Instalación', href: '/guias/instalacion', icon: BookOpen },
    { id: 'troubleshooting', label: 'Solución de Problemas', href: '/guias/troubleshooting', icon: HelpCircle },
  ], []);

  // ✅ INTRODUCCIÓN - SOLO LO BÁSICO
  const introductionItems = useMemo(() => [
    { id: 'overview', label: 'Acerca de CHUMI', href: '/introduccion/overview', icon: BookOpen },
  ], []);

  // ✅ OPTIMIZACIÓN 5: Memoizar categorías ordenadas
  const categoryOrder = useMemo(() => [
    { key: 'ventas', label: 'Ventas & Facturas', icon: BookOpen },
    { key: 'clientes', label: 'Gestión de Clientes', icon: Home },
    { key: 'operaciones', label: 'Operaciones', icon: Zap },
    { key: 'financiero', label: 'Financiero', icon: BookOpen },
    { key: 'inteligencia', label: 'Inteligencia & IA', icon: Zap },
    { key: 'seguridad', label: 'Seguridad', icon: BookOpen },
  ], []);

  const handleCategoryToggle = useCallback((category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  }, [expandedCategory]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 z-40 flex flex-col bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${!isOpen && 'hidden lg:flex'}`}
      >
        {/* Scroll Area */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="px-3 py-6 space-y-8">
            {/* Home */}
            <div className="space-y-2">
              <a
                href="/"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive('/') && !isActive('/modulos')
                    ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                }`}
              >
                <Home size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium text-sm">Inicio</span>
                )}
              </a>
            </div>

            {/* Modules Section */}
            <div className="space-y-2">
              {!isCollapsed && (
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-4 py-2">
                  Módulos
                </h3>
              )}

              <a
                href="/modulos"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive('/modulos') && !Object.values(modulesByCategory).flat().some((module) => currentPath.includes(module.id))
                    ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                }`}
              >
                <BookOpen size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium text-sm">Ver Todos</span>
                )}
              </a>

              {/* Category Accordion */}
              {!isCollapsed && (
                <div className="space-y-1">
                  {categoryOrder.map(({ key, label, icon: Icon }) => (
                    <div key={key}>
                      <button
                        onClick={() => handleCategoryToggle(key)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <Icon size={18} className="flex-shrink-0 opacity-60" />
                          <span className="text-sm font-medium truncate">{label}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`flex-shrink-0 transition-transform duration-200 ${
                            expandedCategory === key ? 'rotate-180' : ''
                          } opacity-40`}
                        />
                      </button>

                      {/* Submenu */}
                      {expandedCategory === key && modulesByCategory[key] && (
                        <div className="space-y-1 pl-2 mt-1">
                          {modulesByCategory[key].map((module) => (
                            <a
                              key={module.id}
                              href={`/modulos/${module.id}`}
                              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 group ${
                                isActive(`/modulos/${module.id}`)
                                  ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-medium'
                                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  isActive(`/modulos/${module.id}`)
                                    ? 'bg-orange-600 dark:bg-orange-400'
                                    : 'bg-gray-300 dark:bg-gray-700'
                                }`}
                              />
                              <span className="truncate">{module.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Guides Section - SIMPLIFICADO */}
            {!isCollapsed && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-4 py-2">
                  Guías
                </h3>
                <div className="space-y-1">
                  {guides.map((guide) => {
                    const GuideIcon = guide.icon;
                    return (
                      <a
                        key={guide.id}
                        href={guide.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${
                          isActive(guide.href)
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                        }`}
                      >
                        <GuideIcon size={18} className="flex-shrink-0 opacity-60" />
                        <span className="truncate">{guide.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Introduction Section - SIMPLIFICADO */}
            {!isCollapsed && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-4 py-2">
                  Introducción
                </h3>
                <div className="space-y-1">
                  {introductionItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${
                          isActive(item.href)
                            ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                        }`}
                      >
                        <ItemIcon size={18} className="flex-shrink-0 opacity-60" />
                        <span className="truncate">{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Help Section */}
            {!isCollapsed && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest px-4 py-2">
                  Ayuda
                </h3>
                <a
                  href="/faq"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${
                    isActive('/faq')
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                  }`}
                >
                  <HelpCircle size={18} className="flex-shrink-0 opacity-60" />
                  <span className="truncate">FAQ</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Collapse Button */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-3">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
            title={isCollapsed ? 'Expandir' : 'Contraer'}
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronDown size={20} className="rotate-90" />
            )}
            {!isCollapsed && <span className="text-sm font-medium">Contraer</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;