import React, { useCallback, useMemo, useState } from 'react';
import { modulesList, priorityLevels } from '../data/modules/index';
import * as Icons from 'lucide-react';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

interface ModulesPageProps {
  onNavigate?: (moduleId: string) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onNavigate }) => {
  // ✅ ESTADO: Búsqueda y filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'priority' | 'complexity'>('name');

  // ✅ OPTIMIZACIÓN 1: Extraer categorías únicas
  const categories = useMemo(() => {
    const cats = Array.from(new Set(modulesList.map(m => m.category)));
    return [
      { value: 'all', label: 'Todos los Módulos' },
      ...cats.map(cat => ({
        value: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1)
      }))
    ];
  }, []);

  // ✅ OPTIMIZACIÓN 2: Extraer prioridades únicas
  const priorities = useMemo(() => {
    const priors = Array.from(new Set(modulesList.map(m => m.priority)));
    return [
      { value: 'all', label: 'Todas las Prioridades' },
      ...priors.map(prior => ({
        value: prior,
        label: priorityLevels[prior as keyof typeof priorityLevels]?.label || prior
      }))
    ];
  }, []);

  // ✅ OPTIMIZACIÓN 3: Filtrar y ordenar módulos
  const filteredModules = useMemo(() => {
    let result = modulesList;

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.label.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.id.toLowerCase().includes(query)
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      result = result.filter(m => m.category === selectedCategory);
    }

    // Filtrar por prioridad
    if (selectedPriority !== 'all') {
      result = result.filter(m => m.priority === selectedPriority);
    }

    // Ordenar
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.label.localeCompare(b.label);
      } else if (sortBy === 'priority') {
        const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
        return (priorityOrder[a.priority as keyof typeof priorityOrder] ?? 99) -
               (priorityOrder[b.priority as keyof typeof priorityOrder] ?? 99);
      } else if (sortBy === 'complexity') {
        const complexityOrder = { 'Baja': 0, 'Media': 1, 'Alta': 2 };
        return (complexityOrder[a.stats.complexity as keyof typeof complexityOrder] ?? 99) -
               (complexityOrder[b.stats.complexity as keyof typeof complexityOrder] ?? 99);
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, selectedPriority, sortBy]);

  // ✅ OPTIMIZACIÓN 4: Estadísticas
  const stats = useMemo(() => {
    return {
      total: modulesList.length,
      critical: modulesList.filter(m => m.priority === 'critical').length,
      high: modulesList.filter(m => m.priority === 'high').length,
      filtered: filteredModules.length,
    };
  }, [filteredModules]);

  // ✅ OPTIMIZACIÓN 5: Callback para navegación
  const handleModuleClick = useCallback((moduleId: string) => {
    if (onNavigate) {
      onNavigate(moduleId);
    } else {
      window.history.pushState({}, '', `/modulos/${moduleId}`);
      window.dispatchEvent(new CustomEvent('navigate', { detail: { path: `/modulos/${moduleId}` } }));
    }
  }, [onNavigate]);

  return (
    <div className="w-full space-y-8">
      {/* HEADER */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explorar Módulos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Busca y filtra entre {stats.total} módulos disponibles para encontrar exactamente lo que necesitas.
        </p>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Disponibles</div>
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">{stats.total}</div>
            </div>
            <Icons.BookOpen size={32} className="text-blue-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-red-600 dark:text-red-400">Críticos</div>
              <div className="text-3xl font-bold text-red-700 dark:text-red-300">{stats.critical}</div>
            </div>
            <Icons.AlertCircle size={32} className="text-red-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-orange-600 dark:text-orange-400">Prioridad Alta</div>
              <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">{stats.high}</div>
            </div>
            <Icons.Zap size={32} className="text-orange-400 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-green-600 dark:text-green-400">Resultados</div>
              <div className="text-3xl font-bold text-green-700 dark:text-green-300">{stats.filtered}</div>
            </div>
            <Icons.CheckCircle size={32} className="text-green-400 opacity-50" />
          </div>
        </div>
      </div>

      {/* CONTROLES DE BÚSQUEDA Y FILTROS */}
      <div className="space-y-4">
        {/* Buscador */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar módulo por nombre o descripción..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition"
          />
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Categoría */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Categoría
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Prioridad */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prioridad
            </label>
            <div className="relative">
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition"
              >
                {priorities.map(pri => (
                  <option key={pri.value} value={pri.value}>
                    {pri.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Ordenar */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ordenar por
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition"
              >
                <option value="name">Nombre (A-Z)</option>
                <option value="priority">Prioridad (Mayor a Menor)</option>
                <option value="complexity">Complejidad (Menor a Mayor)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        {/* Botón Limpiar Filtros */}
        {(searchQuery || selectedCategory !== 'all' || selectedPriority !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedPriority('all');
            }}
            className="text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium transition"
          >
            Limpiar Filtros
          </button>
        )}
      </div>

      {/* GRID DE MÓDULOS */}
      {filteredModules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const IconComponent = (Icons as any)[module.icon] || Icons.Package;
            const priority = priorityLevels[module.priority as keyof typeof priorityLevels];

            return (
              <button
                key={module.id}
                onClick={() => handleModuleClick(module.id)}
                className="group relative h-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700 p-6 text-left"
              >
                {/* Indicador de arriba */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Contenido */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${priority.bgColor} ${priority.color}`}>
                      {priority.icon} {priority.label}
                    </div>
                  </div>

                  {/* Título */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {module.label}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {module.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Complejidad</span>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">{module.stats.complexity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Tiempo de aprendizaje</span>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">{module.stats.timeToMaster}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:gap-3 transition-all pt-2">
                    <span>Ver Documentación</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <Icons.Search size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No se encontraron módulos
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Intenta ajustar tus filtros o realizar una búsqueda diferente
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedPriority('all');
            }}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Limpiar Filtros
          </button>
        </div>
      )}

      {/* FOOTER CON INFORMACIÓN ADICIONAL */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Icons.BookOpen size={18} className="text-orange-500" />
              Documentación Completa
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cada módulo incluye guías paso a paso, ejemplos reales y mejores prácticas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Icons.Zap size={18} className="text-orange-500" />
              Aprendizaje Estructurado
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sigue nuestra ruta recomendada para maximizar tu productividad rápidamente.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Icons.Target size={18} className="text-orange-500" />
              Soporte Disponible
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Contacta a Ubicuo Studio para ayuda: ubicuoluzestrategica@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesPage;