import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modulesList } from '../data/modules/index';

// Importar todos los módulos estáticamente
import * as recibos from '../data/modules/recibos';
import * as clientes from '../data/modules/clientes';
import * as inventario from '../data/modules/inventario';
import * as precios from '../data/modules/precios';
import * as cotizaciones from '../data/modules/cotizaciones';
import * as reportes from '../data/modules/reportes';
import * as deudas from '../data/modules/deudas';
import * as dispositivos from '../data/modules/dispositivos';
import * as usuarios from '../data/modules/usuarios';
import * as ubicuoai from '../data/modules/ubicuoai';

// Mapa de módulos para búsqueda rápida
const modulesMap: Record<string, any> = {
  recibos,
  clientes,
  inventario,
  precios,
  cotizaciones,
  reportes,
  deudas,
  dispositivos,
  usuarios,
  ubicuoai,
};

interface GenericPageProps {
  currentPath: string;
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface NavigationItem {
  title: string;
  id: string;
}

export default function GenericPage({ currentPath }: GenericPageProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<React.ReactNode>(null);
  const [navigation, setNavigation] = useState<{ prev: NavigationItem | null; next: NavigationItem | null }>({ 
    prev: null, 
    next: null 
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Determinar qué contenido cargar basado en la ruta
        if (currentPath.startsWith('/modulos/')) {
          const moduleId = currentPath.replace('/modulos/', '');
          
          // Obtener el módulo del mapa
          const moduleData = modulesMap[moduleId];
          
          if (moduleData && moduleData[moduleId]) {
            setTitle(moduleData[moduleId].title);
            setContent(moduleData[moduleId].content);
            
            // Calcular navegación entre módulos
            const currentIndex = modulesList.findIndex(m => m.id === moduleId);
            const prevModule = currentIndex > 0 ? modulesList[currentIndex - 1] : null;
            const nextModule = currentIndex < modulesList.length - 1 ? modulesList[currentIndex + 1] : null;
            
            setNavigation({
              prev: prevModule ? { title: prevModule.label, id: prevModule.id } : null,
              next: nextModule ? { title: nextModule.label, id: nextModule.id } : null,
            });
          } else {
            setTitle('Módulo no encontrado');
            setContent('El módulo solicitado no existe.');
            setNavigation({ prev: null, next: null });
          }
        } else {
          // Para otras páginas (introducción, guías, faq)
          const { docsContent } = await import('../data/docs') as { docsContent: Record<string, any> };
          
          const pathParts = currentPath.split('/').filter(Boolean);
          let data = docsContent;
          
          for (const part of pathParts) {
            data = data[part];
            if (!data) break;
          }
          
          if (data) {
            setTitle(data.title);
            setContent(data.content);
          } else {
            setTitle('Página no encontrada');
            setContent('El contenido solicitado no existe.');
          }
          
          setNavigation({ prev: null, next: null });
        }
      } catch (err) {
        setTitle('Error');
        setContent('Hubo un error al cargar el contenido.');
        setNavigation({ prev: null, next: null });
      }
    };

    loadContent();
  }, [currentPath]);

  return (
    <div className="w-full space-y-8">
      {/* Contenido Principal */}
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {title}
        </h1>

        <div className="space-y-8">
          {typeof content === 'string' ? (
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="space-y-4"
            />
          ) : (
            content
          )}
        </div>
      </article>

      {/* Navegación entre módulos */}
      {currentPath.startsWith('/modulos/') && (navigation.prev || navigation.next) && (
        <nav className="flex gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
          {navigation.prev ? (
            <a
              href={`/modulos/${navigation.prev.id}`}
              className="flex-1 group flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-800 transition"
            >
              <ChevronLeft className="text-gray-400 group-hover:text-orange-500 transition" />
              <div className="text-left">
                <div className="text-xs text-gray-500 dark:text-gray-400">Anterior</div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                  {navigation.prev.title}
                </div>
              </div>
            </a>
          ) : (
            <div />
          )}

          {navigation.next ? (
            <a
              href={`/modulos/${navigation.next.id}`}
              className="flex-1 group flex items-center justify-end gap-3 p-4 bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-800 transition"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500 dark:text-gray-400">Siguiente</div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                  {navigation.next.title}
                </div>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-orange-500 transition" />
            </a>
          ) : (
            <div />
          )}
        </nav>
      )}

      {/* Back to Modules */}
      {currentPath.startsWith('/modulos/') && (
        <div className="text-center pt-4">
          <a
            href="/modulos"
            className="inline-flex items-center gap-2 px-6 py-3 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold transition"
          >
            ← Volver a todos los módulos
          </a>
        </div>
      )}
    </div>
  );
}