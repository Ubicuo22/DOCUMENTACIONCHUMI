import React from 'react';
import { modulesList, priorityLevels } from '../data/modules/index';
import * as Icons from 'lucide-react';

interface ModuleCardProps {
  module: typeof modulesList[0];
  onNavigate: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onNavigate }) => {
  // Obtener el icono dinámicamente
  const IconComponent = (Icons as any)[module.icon] || Icons.Package;
  const priority = priorityLevels[module.priority as keyof typeof priorityLevels];

  return (
    <button
      onClick={() => onNavigate(module.id)}
      className={`group relative h-full overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 ${module.borderColor} ${module.bgColor} p-6 text-left hover:border-opacity-100 hover:shadow-lg cursor-pointer`}
    >
      {/* Fondo gradiente de hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Header: Icono y Prioridad */}
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${module.color} text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
            <IconComponent size={28} strokeWidth={2} />
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
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-grow">
          {module.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Complejidad</div>
            <div className="text-xs font-bold text-gray-900 dark:text-white">{module.stats.complexity}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Importancia</div>
            <div className="text-xs font-bold text-orange-600 dark:text-orange-400">{module.stats.importance}</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-semibold text-gray-600 dark:text-gray-400">Aprendizaje</div>
            <div className="text-xs font-bold text-gray-900 dark:text-white">{module.stats.timeToMaster}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 group-hover:gap-3 transition-all pt-2">
          <span>Ver Documentación</span>
          <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};

interface ModulesGridProps {
  onModuleClick?: (moduleId: string) => void;
}

export const ModulesGrid: React.FC<ModulesGridProps> = ({ onModuleClick }) => {
  const handleNavigate = (moduleId: string) => {
    if (onModuleClick) {
      onModuleClick(moduleId);
    } else {
      // ✅ Navegar a la página del módulo en /modulos/{id}
      window.location.href = `/modulos/${moduleId}`;
    }
  };

  // Agrupar módulos por categoría
  const modulesByCategory = modulesList.reduce((acc, module) => {
    if (!acc[module.category]) {
      acc[module.category] = [];
    }
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, typeof modulesList>);

  return (
    <div className="w-full space-y-12">
      {/* Resumen General */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Módulos Disponibles</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">1</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Crítico</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Altos</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">~21h</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Para Dominar Todo</p>
        </div>
      </div>

      {/* Grid de Módulos por Categoría */}
      {Object.entries(modulesByCategory).map(([category, modules]) => (
        <section key={category} className="space-y-4">
          {/* Título de Categoría */}
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {category === 'ventas' && '🛒 Ventas & Facturas'}
              {category === 'clientes' && '👥 Gestión de Clientes'}
              {category === 'operaciones' && '⚙️ Operaciones'}
              {category === 'financiero' && '💰 Financiero'}
              {category === 'inteligencia' && '🧠 Inteligencia & IA'}
              {category === 'seguridad' && '🔐 Seguridad'}
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700"></div>
          </div>

          {/* Grid de módulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Guía de Aprendizaje */}
      <section className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-violet-200 dark:border-violet-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📚 Ruta de Aprendizaje Recomendada</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Te recomendamos aprender los módulos en este orden para maximizar tu productividad:
        </p>
        <ol className="space-y-3">
          <li className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 1 (Días 1-3):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Recibos</strong> y <strong>Clientes</strong> - Lo básico para vender</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 2 (Días 4-6):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Inventario</strong> y <strong>Precios</strong> - Control de operaciones</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 3 (Días 7-8):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Deudas</strong> y <strong>Reportes</strong> - Control financiero</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 4 (Días 9-10):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Cotizaciones</strong> y <strong>UbicuoAI</strong> - Automatización</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-violet-600 dark:text-violet-400 min-w-fit">Fase 5 (Día 11+):</span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Usuarios</strong> y <strong>Dispositivos</strong> - Solo administradores</span>
          </li>
        </ol>
      </section>

      {/* Tips */}
      <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">💡 Tips para Aprovechar al Máximo</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex gap-3">
            <span>✓</span>
            <span>Haz clic en cualquier tarjeta para acceder a la documentación completa del módulo</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span>Los módulos <strong>CRÍTICOS</strong> deben dominarse primero para máxima productividad</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span>Cada módulo incluye workflows paso a paso, ejemplos reales y mejores prácticas</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span>Los atajos de teclado te ayudarán a navegar más rápidamente una vez domines el sistema</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ModulesGrid;