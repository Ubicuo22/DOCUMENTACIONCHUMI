import { useState, useCallback, useMemo } from 'react';
import { modulesList } from '../data/modules';

interface ModulesPageProps {
  onNavigate?: (path: string) => void;
}

export function ModulesPage({ onNavigate }: ModulesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  // ✅ OPTIMIZACIÓN 1: Memoizar handleModuleClick
  const handleModuleClick = useCallback((moduleId: string) => {
    const newPath = `/modulos/${moduleId}`;
    
    if (onNavigate) {
      onNavigate(newPath);
    } else {
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new Event('navigate') as any);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onNavigate]);

  // ✅ OPTIMIZACIÓN 2: Memoizar filtrado de módulos
  const filteredModules = useMemo(() => {
    return modulesList.filter(module => {
      const matchesSearch = 
        module.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
      const matchesPriority = selectedPriority === 'all' || module.priority === selectedPriority;
      
      return matchesSearch && matchesCategory && matchesPriority;
    });
  }, [searchQuery, selectedCategory, selectedPriority]);

  // ✅ OPTIMIZACIÓN 3: Memoizar categorías únicas
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(modulesList.map(m => m.category))];
    return cats;
  }, []);

  // ✅ OPTIMIZACIÓN 4: Memoizar prioridades
  const priorities = useMemo(() => [
    'all',
    'critical',
    'high',
    'medium',
  ], []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Módulos CHUMI</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Explora todos los módulos disponibles. Haz clic en cualquier tarjeta para acceder a la documentación.
        </p>
      </section>

      {/* SEARCH */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="🔍 Buscar módulos por nombre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* FILTERS */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-gray-900 dark:text-white mb-2 block">Categoría</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat === 'all' ? 'Todas' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-900 dark:text-white mb-2 block">Prioridad</label>
          <div className="flex flex-wrap gap-2">
            {priorities.map(priority => (
              <button
                key={priority}
                onClick={() => setSelectedPriority(priority)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedPriority === priority
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {priority === 'all' && 'Cualquiera'}
                {priority === 'critical' && '🔴 Crítico'}
                {priority === 'high' && '🟠 Alto'}
                {priority === 'medium' && '🟡 Medio'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS INFO */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Se encontraron <strong>{filteredModules.length}</strong> módulo{filteredModules.length !== 1 ? 's' : ''}
      </p>

      {/* MODULES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.length > 0 ? (
          filteredModules.map(module => (
            <button
              key={module.id}
              onClick={() => handleModuleClick(module.id)}
              className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:scale-105 hover:border-orange-400 transition-all text-left cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-3xl">{module.icon}</div>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                  {module.priority === 'critical' && '🔴 Crítico'}
                  {module.priority === 'high' && '🟠 Alto'}
                  {module.priority === 'medium' && '🟡 Medio'}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition mb-2">
                {module.label}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {module.description}
              </p>

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs">
                <span className="font-semibold text-gray-600 dark:text-gray-400">
                  Complejidad: {module.stats.complexity}
                </span>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:gap-3 transition-all pt-3">
                <span>Ver Documentación</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No se encontraron módulos</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModulesPage;