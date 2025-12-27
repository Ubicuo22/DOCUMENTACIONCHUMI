import { useCallback, useMemo } from 'react';
import { ModulesGrid } from '../components/ModulesGrid';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // ✅ OPTIMIZACIÓN 1: Memoizar handleModuleClick
  const handleModuleClick = useCallback((moduleId: string) => {
    const newPath = `/modulos/${moduleId}`;
    
    if (onNavigate) {
      // Si hay callback, usarlo
      onNavigate(newPath);
    } else {
      // Si no, usar History API directamente
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new Event('navigate') as any);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onNavigate]);

  // ✅ OPTIMIZACIÓN 3: Memoizar quick access links
  const quickAccessLinks = useMemo(() => [
    { id: 'start', label: '🚀 Comenzar Rápido', description: 'Guía de 30 minutos para principiantes' },
    { id: 'modules', label: '📚 Todos los Módulos', description: 'Explora la documentación completa' },
    { id: 'faq', label: '❓ Preguntas Frecuentes', description: 'Resuelve dudas comunes' },
  ], []);

  // ✅ OPTIMIZACIÓN 4: Memoizar stats - ACTUALIZADO
  const stats = useMemo(() => [
    { number: '10', label: 'Módulos Integrados' },
    { number: '90,000+', label: 'Líneas de Código' },
    { number: '', label: 'SOFTWARE PERSONALIZADO PARA DISTRIBUIDORA CASTRUITA', isCustom: true },
  ], []);

  return (
    <div className="w-full space-y-16">
      {/* HERO SECTION */}
      <section className="space-y-6 text-center py-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            CHUMI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            Cloud Hybrid Unified Management Infrastructure
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            La solución integral para tu negocio. Gestiona ventas, clientes, inventario y más desde una plataforma única.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={() => handleModuleClick('recibos')}
            className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Explora los Módulos →
          </button>
          <a
            href="/faq"
            className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            Preguntas Frecuentes
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Rápido y Eficiente</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Reduce tu tiempo administrativo de 3 horas a 30 minutos diarios.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Análisis en Tiempo Real</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Reportes diarios sobre ventas, productos y ganancias automáticos.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
          <div className="text-4xl mb-3">🔒</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Seguridad Garantizada</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Protección de datos con respaldos automáticos y encriptación.
          </p>
        </div>
      </section>

      {/* STATS - ACTUALIZADO */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-center ${
              stat.isCustom ? 'md:col-span-3' : ''
            }`}
          >
            <div className={`${stat.isCustom ? 'text-5xl' : 'text-4xl'} font-bold text-orange-600 dark:text-orange-400 mb-2`}>
              {stat.number}
            </div>
            <p className={`${stat.isCustom ? 'text-lg font-semibold' : ''} text-gray-600 dark:text-gray-400`}>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* QUICK ACCESS */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Acceso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickAccessLinks.map((link) => (
            <a
              key={link.id}
              href={link.id === 'modules' ? '/modulos' : link.id === 'faq' ? '/faq' : '#'}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{link.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* MODULES GRID - CON CALLBACK */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Módulos Disponibles</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Haz clic en cualquier módulo para explorar su documentación completa.
        </p>
        {/* ✅ IMPORTANTE: Pasar el callback handleModuleClick */}
        <ModulesGrid onModuleClick={handleModuleClick} />
      </section>

      {/* LEARNING PATH */}
      <section className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-violet-200 dark:border-violet-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📚 Ruta de Aprendizaje Recomendada</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 1 (1-3 días):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Recibos</strong> y <strong>Clientes</strong> – Fundamentos de ventas</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 2 (4-6 días):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Inventario</strong> y <strong>Precios</strong> – Gestión de operaciones</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 3 (7-8 días):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Deudas</strong> y <strong>Reportes</strong> – Análisis financiero</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 4 (9-10 días):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Cotizaciones</strong> y <strong>UbicuoAI</strong> – Automatización</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 5 (11+ días):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Usuarios</strong> y <strong>Dispositivos</strong> – Configuración avanzada</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 p-12 rounded-xl text-center text-white">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Comenzar?</h2>
        <p className="text-lg mb-6 text-orange-50">
          Implementa CHUMI en tu negocio y ahorra horas de trabajo administrativo cada día.
        </p>
        <button
          onClick={() => handleModuleClick('recibos')}
          className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
        >
          Explorar Ahora →
        </button>
      </section>
    </div>
  );
}

export default HomePage;