import React, { useEffect, useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { modulesList } from '../data/modules/index';

// ✅ OPTIMIZACIÓN 1: Importar estáticamente fuera del componente
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
import * as docsStatic from '../data/docs';

// ✅ OPTIMIZACIÓN 2: Crear modulesMap FUERA del componente (una sola vez)
const MODULES_MAP: Record<string, any> = {
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

interface PageContent {
  title: string;
  content: React.ReactNode;
  navigation: { prev: NavigationItem | null; next: NavigationItem | null };
}

export default function GenericPage({ currentPath }: GenericPageProps) {
  const [pageData, setPageData] = useState<PageContent>({
    title: '',
    content: null,
    navigation: { prev: null, next: null }
  });

  // ✅ OPTIMIZACIÓN 3: Memoizar navegación para no recalcular en cada render
  const navigation = useMemo(() => {
    if (!currentPath.startsWith('/modulos/')) return { prev: null, next: null };

    const moduleId = currentPath.replace('/modulos/', '');
    const currentIndex = modulesList.findIndex(m => m.id === moduleId);
    
    return {
      prev: currentIndex > 0 ? { 
        title: modulesList[currentIndex - 1].label, 
        id: modulesList[currentIndex - 1].id 
      } : null,
      next: currentIndex < modulesList.length - 1 ? { 
        title: modulesList[currentIndex + 1].label, 
        id: modulesList[currentIndex + 1].id 
      } : null,
    };
  }, [currentPath]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        if (currentPath.startsWith('/modulos/')) {
          const moduleId = currentPath.replace('/modulos/', '');
          const moduleData = MODULES_MAP[moduleId];
          
          if (moduleData && moduleData[moduleId]) {
            setPageData({
              title: moduleData[moduleId].title,
              content: moduleData[moduleId].content,
              navigation
            });
          } else {
            setPageData({
              title: 'Módulo no encontrado',
              content: 'El módulo solicitado no existe.',
              navigation: { prev: null, next: null }
            });
          }
        } else {
          // Para otras páginas (introducción, guías, faq)
          const pathParts = currentPath.split('/').filter(Boolean);
          let data = (docsStatic as any).docsContent;
          
          for (const part of pathParts) {
            data = data[part];
            if (!data) break;
          }
          
          if (data) {
            setPageData({
              title: data.title,
              content: data.content,
              navigation: { prev: null, next: null }
            });
          } else {
            setPageData({
              title: 'Página no encontrada',
              content: 'El contenido solicitado no existe.',
              navigation: { prev: null, next: null }
            });
          }
        }
      } catch (err) {
        setPageData({
          title: 'Error',
          content: 'Hubo un error al cargar el contenido.',
          navigation: { prev: null, next: null }
        });
      }
    };

    loadContent();
  }, [currentPath, navigation]);

  const { title, content } = pageData;
  const isModulePage = currentPath.startsWith('/modulos/');

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
      {isModulePage && (navigation.prev || navigation.next) && (
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
      {isModulePage && (
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
