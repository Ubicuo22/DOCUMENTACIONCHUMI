import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ModulesGrid } from '../components/ModulesGrid';
import { modulesList, moduleCategories, priorityLevels } from '../data/modules/index';

interface ModulesPageProps {
  title?: string;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ 
  title = 'Módulos CHUMI' 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);

  // Filtrar módulos
  const filteredModules = modulesList.filter((module) => {
    const matchesSearch = 
      module.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || module.category === selectedCategory;
    const matchesPriority = !selectedPriority || module.priority === selectedPriority;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  const activeFilters = [
    ...(searchQuery ? [{ type: 'search' as const, value: searchQuery }] : []),
    ...(selectedCategory ? [{ type: 'category' as const, value: selectedCategory }] : []),
    ...(selectedPriority ? [{ type: 'priority' as const, value: selectedPriority }] : []),
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedPriority(null);
  };

  return (
    <div className="w-full space-y-8">
      {/* Header Hero */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explora todos los módulos disponibles en CHUMI. Haz clic en cualquier tarjeta para acceder a la documentación completa.
          </p>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
            <input
              type="text"
              placeholder="Buscar módulos por nombre o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 items-center">
            <Filter size={18} className="text-gray-500 dark:text-gray-400" />
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  !selectedCategory
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Todas
              </button>
              {Object.entries(moduleCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-medium transition text-sm ${
                    selectedCategory === key
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Priority Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedPriority(null)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  !selectedPriority
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Cualquier Prioridad
              </button>
              {Object.entries(priorityLevels).map(([key, priority]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPriority(key)}
                  className={`px-4 py-2 rounded-full font-medium transition text-sm ${
                    selectedPriority === key
                      ? 'bg-orange-500 text-white'
                      : `${priority.bgColor} ${priority.color} hover:opacity-80`
                  }`}
                >
                  {priority.icon} {priority.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Filtros activos:
              </span>
              <div className="flex gap-2 flex-wrap">
                {activeFilters.map((filter, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium"
                  >
                    {filter.type === 'search' && `"${filter.value}"`}
                    {filter.type === 'category' && filter.value}
                    {filter.type === 'priority' && filter.value}
                  </span>
                ))}
              </div>
              <button
                onClick={handleClearFilters}
                className="ml-auto text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Counter */}
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        Mostrando {filteredModules.length} de {modulesList.length} módulos
      </div>

      {/* No Results */}
      {filteredModules.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No se encontraron módulos
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Intenta con otros filtros o términos de búsqueda
          </p>
          <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        /* Grid de Módulos Filtrados */
        <div>
          {filteredModules.length === modulesList.length ? (
            <ModulesGrid />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => (window.location.href = `/modulos/${module.id}`)}
                  className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 ${module.borderColor} ${module.bgColor} p-6 text-left`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} text-white`}>
                        {/* Simple icon placeholder */}
                        <div className="w-7 h-7" />
                      </div>
                      <div className={`text-xs font-bold px-2.5 py-1 rounded-full ${priorityLevels[module.priority as keyof typeof priorityLevels].bgColor} ${priorityLevels[module.priority as keyof typeof priorityLevels].color}`}>
                        {priorityLevels[module.priority as keyof typeof priorityLevels].icon} {priorityLevels[module.priority as keyof typeof priorityLevels].label}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{module.label}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{module.description}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer Info */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          ℹ️ Información Útil
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-3">
            <span className="font-bold">•</span>
            <span>Cada módulo tiene documentación extensa con workflows paso a paso</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">•</span>
            <span>Los módulos marcados como <strong>CRÍTICO</strong> son esenciales para operaciones diarias</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">•</span>
            <span>Se recomienda aprender en el orden de la ruta de aprendizaje para máxima efectividad</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">•</span>
            <span>Todos los módulos están diseñados para ser intuitivos y fáciles de usar</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ModulesPage;