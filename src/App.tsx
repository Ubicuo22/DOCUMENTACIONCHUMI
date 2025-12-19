import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import ModulesPage from './pages/ModulesPage';
import FAQModulesPage from './pages/FAQModules';
import { TableOfContents } from './components/TableOfContents';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setIsSidebarOpen(false);
    };

    window.addEventListener('popstate', handlePopState);

    const handleClick = (e: MouseEvent) => {
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
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const getBreadcrumbs = () => {
    if (currentPath === '/') return [{ title: 'Home', href: '/' }];

    const parts = currentPath.split('/').filter(Boolean);
    const breadcrumbs = [{ title: 'Home', href: '/' }];

    parts.forEach((part, index) => {
      const href = '/' + parts.slice(0, index + 1).join('/');
      const title = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ title, href });
    });

    return breadcrumbs;
  };

  const renderPage = () => {
    // Home
    if (currentPath === '/') {
      return <HomePage />;
    }

    // Página de Módulos
    if (currentPath === '/modulos') {
      return <ModulesPage />;
    }

    // FAQ Modules
    if (currentPath === '/faq/modules') {
      return <FAQModulesPage />;
    }

    // Todas las demás páginas (módulos específicos, guías, intro, faq)
    if (
      currentPath.startsWith('/modulos/') ||
      currentPath.startsWith('/introduccion/') ||
      currentPath.startsWith('/guias/') ||
      currentPath.startsWith('/faq/')
    ) {
      return (
        <GenericPage
          currentPath={currentPath}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      );
    }

    // 404
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Header
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isMobileMenuOpen={isSidebarOpen}
        breadcrumbs={getBreadcrumbs()}
      />

      <div className="flex-1 flex">
        <Sidebar
          currentPath={currentPath}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
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