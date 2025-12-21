import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import GenericPage from './pages/GenericPage.tsx';
import { ModulesPage } from './pages/ModulesPage';
import { FAQModules } from './pages/FAQModules';
import { FAQPage } from './pages/FAQPage';
import { TableOfContents } from './components/TableOfContents';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

// ✅ OPTIMIZACIÓN 1: Memoizar breadcrumb generation
const BREADCRUMB_TITLES: Record<string, string> = {
  modulos: 'Módulos',
  faq: 'FAQ',
  guias: 'Guías',
  introduccion: 'Introducción',
};

// ✅ OPTIMIZACIÓN: Type para currentPage
type PageType = 
  | { type: 'home' }
  | { type: 'modules' }
  | { type: 'faq-modules' }
  | { type: 'faq' }
  | { type: 'generic'; path: string }
  | { type: '404' };

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  // ✅ OPTIMIZACIÓN 2: Memoizar callbacks para event listeners
  const handlePopState = useCallback(() => {
    setCurrentPath(window.location.pathname);
    setIsSidebarOpen(false);
  }, []);

  const handleLinkClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');

    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      const newPath = new URL(link.href).pathname;
      window.history.pushState({}, '', newPath);
      setCurrentPath(newPath);
      setIsSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // ✅ OPTIMIZACIÓN 3: Manejar navegación personalizada (desde HomePage, ModulesPage, etc)
  const handleCustomNavigate = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ✅ OPTIMIZACIÓN 4: Usar useEffect cleanup correctamente
  useEffect(() => {
    // Listener para popstate (botón atrás)
    window.addEventListener('popstate', handlePopState);
    
    // Listener para clicks en links
    document.addEventListener('click', handleLinkClick);

    // Listener para navegación personalizada desde componentes
    window.addEventListener('navigate' as any, ((e: CustomEvent) => {
      handleCustomNavigate(e.detail.path);
    }) as EventListener);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('navigate' as any, ((e: CustomEvent) => {
        handleCustomNavigate(e.detail.path);
      }) as EventListener);
    };
  }, [handlePopState, handleLinkClick, handleCustomNavigate]);

  // ✅ OPTIMIZACIÓN 5: Memoizar breadcrumbs para no recalcular
  const breadcrumbs = useMemo(() => {
    if (currentPath === '/') return [{ title: 'Home', href: '/' }];

    const parts = currentPath.split('/').filter(Boolean);
    const crumbs = [{ title: 'Home', href: '/' }];

    parts.forEach((part, index) => {
      const href = '/' + parts.slice(0, index + 1).join('/');
      const title = BREADCRUMB_TITLES[part] || (part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '));
      crumbs.push({ title, href });
    });

    return crumbs;
  }, [currentPath]);

  // ✅ OPTIMIZACIÓN 6: Memoizar lógica de renderizado de página
  // ACTUALIZADO: GenericPage ahora maneja /guias, /introduccion y /faq/:id
  const currentPage: PageType = useMemo(() => {
    if (currentPath === '/') {
      return { type: 'home' };
    }
    if (currentPath === '/modulos') {
      return { type: 'modules' };
    }
    if (currentPath === '/faq/modules') {
      return { type: 'faq-modules' };
    }
    if (currentPath === '/faq') {
      return { type: 'faq' };
    }
    // GenericPage maneja:
    // - /modulos/:id (módulos)
    // - /guias/:id (guías)
    // - /introduccion/:id (introducción)
    // - /faq/:id (faq específico)
    if (
      currentPath.startsWith('/modulos/') ||
      currentPath.startsWith('/guias/') ||
      currentPath.startsWith('/introduccion/') ||
      (currentPath.startsWith('/faq/') && currentPath !== '/faq/modules')
    ) {
      return { type: 'generic', path: currentPath };
    }
    return { type: '404' };
  }, [currentPath]);

  // ✅ OPTIMIZACIÓN 7: Memoizar callbacks para sidebar
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, []);

  // ✅ OPTIMIZACIÓN 8: Renderizado condicional optimizado
  const renderPage = () => {
    switch (currentPage.type) {
      case 'home':
        return <HomePage onNavigate={handleCustomNavigate} />;
      
      case 'modules':
        return <ModulesPage onNavigate={handleCustomNavigate} />;
      
      case 'faq-modules':
        return <FAQModules onNavigate={handleCustomNavigate} />;
      
      case 'faq':
        return <FAQPage />;
      
      case 'generic':
        return (
          <GenericPage
            currentPath={currentPage.path}
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={toggleCollapse}
          />
        );
      
      case '404':
      default:
        return (
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              La página que buscas no existe.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
            >
              Volver al Inicio
            </a>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header
        onMenuClick={toggleSidebar}
        isMobileMenuOpen={isSidebarOpen}
        breadcrumbs={breadcrumbs}
      />

      <div className="flex-1 flex">
        <Sidebar
          currentPath={currentPath}
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleCollapse}
        />

        <main
          ref={contentRef}
          className={`flex-1 min-w-0 w-full transition-all duration-300 ${
            isSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-72'
          }`}
        >
          <div className="flex">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {renderPage()}
            </div>

            <div className="hidden xl:block">
              <TableOfContents contentRef={contentRef} />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}