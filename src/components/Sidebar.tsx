import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { sidebarItems } from '../data/docs';

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ currentPath, isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([])
  );

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (href: string) => currentPath === href;

  const getSidebarOrder = () => {
    return sidebarItems.sort((a: any, b: any) => {
      const order = { 'Módulos': 1, 'FAQ': 2, 'Preguntas Frecuentes': 2, 'Home': 3, 'Introducción': 4, 'Guías': 5 };
      const orderA = order[a.section as keyof typeof order] || 999;
      const orderB = order[b.section as keyof typeof order] || 999;
      return orderA - orderB;
    });
  };

  const orderedSections = getSidebarOrder();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 z-40 overflow-y-auto shadow-lg w-80 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isCollapsed ? 'hidden' : ''
        }`}
      >
        {isOpen && (
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-1 z-50"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="sticky top-0 bg-gradient-to-r from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 border-b border-gray-200 dark:border-gray-800 p-3">
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex w-full h-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            title="Contraer"
          >
            <ChevronDown className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {orderedSections.map((section: any) => {
            const isExpanded = expandedSections.has(section.section);

            return (
              <div key={section.section} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.section)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50 dark:hover:from-orange-900/20 dark:hover:to-orange-900/20 hover:text-orange-700 dark:hover:text-orange-400 transition-all ${
                    isExpanded ? 'bg-gradient-to-r from-orange-50 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/20 text-orange-700 dark:text-orange-400' : ''
                  }`}
                >
                  <span>{section.section}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform flex-shrink-0 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="space-y-1 pl-2 mt-2 border-l-2 border-orange-200 dark:border-orange-900/30">
                    {section.items.map((item: any) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white shadow-md'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* ✨ NUEVA SECCIÓN: AYUDA */}
          <div className="space-y-1 mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="px-3 py-2 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Ayuda
            </div>
            <a
              href="/faq/modules"
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive('/faq/modules')
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <span className="text-lg">❓</span>
              <span className="truncate">Preguntas Frecuentes</span>
            </a>
          </div>
        </nav>

        <div className="sticky bottom-0 px-4 py-4 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-t from-white to-transparent dark:from-slate-900 dark:to-transparent text-xs text-gray-500 dark:text-gray-400">
          <p className="text-center">
            <span className="font-semibold text-gray-600 dark:text-gray-300">CHUMI</span> v1.0
          </p>
        </div>
      </aside>

      {isCollapsed && !isOpen && (
        <div className="hidden lg:block">
          <button
            onClick={onToggleCollapse}
            className="fixed left-6 top-24 z-30 p-3 rounded-full bg-orange-500 dark:bg-orange-600 text-white shadow-lg hover:bg-orange-600 dark:hover:bg-orange-700 hover:shadow-xl transition-all hover:scale-110"
            title="Abrir navegación"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}