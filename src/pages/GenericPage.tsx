import { useMemo, useRef, useEffect } from 'react';
import { introduccion, guias, faq } from '../data/pages';
import { modulesList } from '../data/modules';

// ✅ Importar todos los módulos individuales
import * as modulesData from '../data/modules';

interface GenericPageProps {
  currentPath: string;
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function GenericPage({
  currentPath,
}: GenericPageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // ✅ OPTIMIZACIÓN 1: Memoizar lógica de obtener contenido
  const pageContent = useMemo(() => {
    // Extraer el tipo de página y el ID del path
    const parts = currentPath.split('/').filter(Boolean);
    const pageType = parts[0]; // 'modulos', 'guias', 'introduccion', etc.
    const pageId = parts[1]; // 'recibos', 'primeros-pasos', 'overview', etc.

    let title = '';
    let content = '';
    let breadcrumbs: Array<{ title: string; href: string }> = [];

    // Caso 1: Módulos (/modulos/recibos, /modulos/clientes, etc.)
    if (pageType === 'modulos' && pageId) {
      // ✅ Buscar en la lista de módulos
      const module = modulesList.find(m => m.id === pageId);
      
      if (module) {
        title = module.label;
        
        // ✅ IMPORTANTE: Obtener el contenido del archivo específico del módulo
        // Los archivos están en: src/data/modules/[moduleId].ts
        const moduleFileData = (modulesData as any)[pageId];
        
        if (moduleFileData && moduleFileData.content) {
          // El archivo tiene contenido HTML
          content = moduleFileData.content;
        } else if (moduleFileData && moduleFileData.default) {
          // El archivo exporta por defecto
          content = moduleFileData.default;
        } else {
          // Fallback: generar contenido básico
          content = `
            <div class="space-y-8">
              <div class="prose dark:prose-invert max-w-none">
                <h2>${module.label}</h2>
                
                <p><strong>${module.description}</strong></p>
                
                <h3>Información General</h3>
                <ul>
                  <li><strong>Categoría:</strong> ${module.category}</li>
                  <li><strong>Prioridad:</strong> ${module.priority}</li>
                  <li><strong>Complejidad:</strong> ${module.stats.complexity}</li>
                  <li><strong>Importancia:</strong> ${module.stats.importance}</li>
                  <li><strong>Tiempo para dominar:</strong> ${module.stats.timeToMaster}</li>
                </ul>
                
                <h3>¿Cómo Usar?</h3>
                <p>Accede a este módulo desde la barra lateral o desde el menú principal.</p>
                <p>Para más información detallada, contacta con Ubicuo Studio.</p>
                
                <h3>Contacto</h3>
                <ul>
                  <li>📧 ubicuoluzestrategica@gmail.com</li>
                  <li>💬 +52 4431187975 (WhatsApp)</li>
                </ul>
              </div>
            </div>
          `;
        }

        breadcrumbs = [
          { title: 'Home', href: '/' },
          { title: 'Módulos', href: '/modulos' },
          { title: title, href: currentPath },
        ];
      }
    }
    // Caso 2: Guías (/guias/primeros-pasos, /guias/instalacion, etc.)
    else if (pageType === 'guias' && pageId) {
      const guide = guias[pageId as keyof typeof guias];
      if (guide) {
        title = guide.title;
        content = guide.content;
        breadcrumbs = [
          { title: 'Home', href: '/' },
          { title: 'Guías', href: '/guias' },
          { title: title, href: currentPath },
        ];
      }
    }
    // Caso 3: Introducción (/introduccion/overview, /introduccion/arquitectura, etc.)
    else if (pageType === 'introduccion' && pageId) {
      const intro = introduccion[pageId as keyof typeof introduccion];
      if (intro) {
        title = intro.title;
        content = intro.content;
        breadcrumbs = [
          { title: 'Home', href: '/' },
          { title: 'Introducción', href: '/introduccion' },
          { title: title, href: currentPath },
        ];
      }
    }
    // Caso 4: FAQ por categoría (/faq/general, /faq/modulos, etc.)
    else if (pageType === 'faq' && pageId) {
      const faqSection = faq[pageId as keyof typeof faq];
      if (faqSection) {
        title = (faqSection as any).title || 'Preguntas Frecuentes';
        content = (faqSection as any).content;
        breadcrumbs = [
          { title: 'Home', href: '/' },
          { title: 'FAQ', href: '/faq' },
          { title: title, href: currentPath },
        ];
      }
    }

    return { title, content, breadcrumbs };
  }, [currentPath]);

  // ✅ OPTIMIZACIÓN 2: Scroll to top cuando cambia contenido
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentPath]);

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      {pageContent.breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 mb-8 text-sm">
          {pageContent.breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <a
                href={crumb.href}
                className="text-orange-600 dark:text-orange-400 hover:underline"
              >
                {crumb.title}
              </a>
              {idx < pageContent.breadcrumbs.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </div>
          ))}
        </nav>
      )}

      {/* Título */}
      {pageContent.title && (
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {pageContent.title}
        </h1>
      )}

      {/* Contenido */}
      <div
        ref={contentRef}
        className="prose dark:prose-invert max-w-none overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: pageContent.content }}
      />

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex gap-4">
        <a
          href="/modulos"
          className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition font-medium"
        >
          ← Volver a Módulos
        </a>
        <a
          href="/"
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
        >
          Ir a Home →
        </a>
      </div>
    </div>
  );
}

export default GenericPage;