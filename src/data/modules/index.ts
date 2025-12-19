// Centralizar exports de todos los módulos
// Ubicación: src/data/modules/index.ts

export { recibos } from './recibos';
export { clientes } from './clientes';
export { inventario } from './inventario';
export { precios } from './precios';
export { cotizaciones } from './cotizaciones';
export { reportes } from './reportes';
export { deudas } from './deudas';
export { dispositivos } from './dispositivos';
export { usuarios } from './usuarios';
export { ubicuoai } from './ubicuoai';

// Mapa de módulos para acceso rápido con lazy loading
export const modulesMap = {
  recibos: () => import('./recibos').then(m => m.recibos),
  clientes: () => import('./clientes').then(m => m.clientes),
  inventario: () => import('./inventario').then(m => m.inventario),
  precios: () => import('./precios').then(m => m.precios),
  cotizaciones: () => import('./cotizaciones').then(m => m.cotizaciones),
  reportes: () => import('./reportes').then(m => m.reportes),
  deudas: () => import('./deudas').then(m => m.deudas),
  dispositivos: () => import('./dispositivos').then(m => m.dispositivos),
  usuarios: () => import('./usuarios').then(m => m.usuarios),
  ubicuoai: () => import('./ubicuoai').then(m => m.ubicuoai),
};

// ===== NUEVA ESTRUCTURA: Metadata completa de módulos =====
// Incluye: orden, categoría, criticidad, descripción, icono, color

export const modulesList = [
  {
    id: 'recibos',
    label: 'Módulo Recibos',
    description: 'El corazón de tu negocio. Crea facturas y registra TODAS tus ventas',
    category: 'ventas',
    priority: 'critical', // 'critical' | 'high' | 'medium' | 'low'
    icon: 'Receipt',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
    order: 1,
    shortcut: 'R',
    stats: {
      complexity: 'Alta',
      importance: 'CRÍTICA',
      timeToMaster: '2-3 días'
    }
  },
  {
    id: 'clientes',
    label: 'Gestión de Clientes',
    description: 'Registra y gestiona todos tus clientes con grupos y límites de crédito',
    category: 'clientes',
    priority: 'high',
    icon: 'Users',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    order: 2,
    shortcut: 'C',
    stats: {
      complexity: 'Media',
      importance: 'Alta',
      timeToMaster: '1-2 días'
    }
  },
  {
    id: 'inventario',
    label: 'Gestión de Inventario',
    description: 'Controla stock en tiempo real, registra compras y recibe alertas',
    category: 'operaciones',
    priority: 'high',
    icon: 'Package',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
    order: 3,
    shortcut: 'I',
    stats: {
      complexity: 'Media',
      importance: 'Alta',
      timeToMaster: '1-2 días'
    }
  },
  {
    id: 'precios',
    label: 'Gestión de Precios',
    description: 'Establece precios por grupo, bloquea críticos y analiza márgenes',
    category: 'financiero',
    priority: 'high',
    icon: 'DollarSign',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    order: 4,
    shortcut: 'P',
    stats: {
      complexity: 'Media',
      importance: 'Alta',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'cotizaciones',
    label: 'Gestión de Cotizaciones',
    description: 'Importa PDFs de proveedores y actualiza precios automáticamente',
    category: 'operaciones',
    priority: 'medium',
    icon: 'FileText',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
    order: 5,
    shortcut: 'Q',
    stats: {
      complexity: 'Media',
      importance: 'Media',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'reportes',
    label: 'Análisis y Reportes',
    description: 'Ve ganancias, identifica productos estrella y toma decisiones con datos',
    category: 'inteligencia',
    priority: 'high',
    icon: 'BarChart3',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    borderColor: 'border-cyan-200 dark:border-cyan-800',
    order: 6,
    shortcut: 'D',
    stats: {
      complexity: 'Baja',
      importance: 'Alta',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'deudas',
    label: 'Gestión de Deudas',
    description: 'Registra créditos, monitorea vencimientos y evita morosidad',
    category: 'financiero',
    priority: 'high',
    icon: 'CreditCard',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-200 dark:border-red-800',
    order: 7,
    shortcut: 'E',
    stats: {
      complexity: 'Media',
      importance: 'Alta',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'dispositivos',
    label: 'Administración de Dispositivos',
    description: 'Controla quién accede desde dónde, autoriza y bloquea equipos',
    category: 'seguridad',
    priority: 'medium',
    icon: 'Lock',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    order: 8,
    shortcut: 'M',
    stats: {
      complexity: 'Baja',
      importance: 'Media',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'usuarios',
    label: 'Administración de Usuarios',
    description: 'Crea usuarios, asigna roles y controla permisos por módulo',
    category: 'seguridad',
    priority: 'medium',
    icon: 'Users',
    color: 'from-slate-600 to-gray-600',
    bgColor: 'bg-slate-50 dark:bg-slate-900/20',
    borderColor: 'border-slate-200 dark:border-slate-800',
    order: 9,
    shortcut: 'U',
    stats: {
      complexity: 'Baja',
      importance: 'Media',
      timeToMaster: '1 día'
    }
  },
  {
    id: 'ubicuoai',
    label: 'UbicuoAI - Procesador Inteligente',
    description: 'Procesa pedidos con IA, busca productos con errores y aprende',
    category: 'inteligencia',
    priority: 'medium',
    icon: 'Bot',
    color: 'from-violet-600 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
    order: 10,
    shortcut: 'A',
    stats: {
      complexity: 'Baja',
      importance: 'Media',
      timeToMaster: '2-3 horas'
    }
  }
];

// ===== CATEGORÍAS DE MÓDULOS =====
export const moduleCategories = {
  ventas: {
    label: 'Ventas & Facturas',
    description: 'Módulos relacionados con la captura y registro de ventas',
    icon: 'ShoppingCart',
    color: 'text-red-600 dark:text-red-400'
  },
  clientes: {
    label: 'Gestión de Clientes',
    description: 'Módulos para administrar información de clientes',
    icon: 'Users',
    color: 'text-blue-600 dark:text-blue-400'
  },
  operaciones: {
    label: 'Operaciones',
    description: 'Módulos de inventario y cotizaciones',
    icon: 'Settings',
    color: 'text-indigo-600 dark:text-indigo-400'
  },
  financiero: {
    label: 'Financiero',
    description: 'Módulos de precios, deudas y ganancias',
    icon: 'DollarSign',
    color: 'text-emerald-600 dark:text-emerald-400'
  },
  inteligencia: {
    label: 'Inteligencia & IA',
    description: 'Reportes, análisis y procesamiento inteligente',
    icon: 'Brain',
    color: 'text-cyan-600 dark:text-cyan-400'
  },
  seguridad: {
    label: 'Seguridad',
    description: 'Administración de usuarios y dispositivos',
    icon: 'Shield',
    color: 'text-purple-600 dark:text-purple-400'
  }
};

// ===== ORDEN DE APRENDIZAJE RECOMENDADO =====
export const learningPath = [
  {
    phase: 1,
    title: 'Lo Básico (Días 1-3)',
    description: 'Dominan estos 2 primero',
    modules: ['recibos', 'clientes'],
    estimatedHours: 6,
    outcome: 'Puedes crear ventas y gestionar clientes'
  },
  {
    phase: 2,
    title: 'Operaciones Esenciales (Días 4-6)',
    description: 'Agrega estos para operaciones completas',
    modules: ['inventario', 'precios'],
    estimatedHours: 4,
    outcome: 'Control total de ventas y precios'
  },
  {
    phase: 3,
    title: 'Control Financiero (Días 7-8)',
    description: 'Entiende deudas y ganancias',
    modules: ['deudas', 'reportes'],
    estimatedHours: 3,
    outcome: 'Visibilidad completa financiera'
  },
  {
    phase: 4,
    title: 'Avanzado (Días 9-10)',
    description: 'Optimiza con cotizaciones e IA',
    modules: ['cotizaciones', 'ubicuoai'],
    estimatedHours: 3,
    outcome: 'Automatización y procesamiento inteligente'
  },
  {
    phase: 5,
    title: 'Administración (Día 11+)',
    description: 'Solo para administradores',
    modules: ['usuarios', 'dispositivos'],
    estimatedHours: 2,
    outcome: 'Sistema seguro y usuarios gestionados'
  }
];

// ===== ATAJOS DE TECLADO =====
export const keyboardShortcuts = [
  { key: 'R', module: 'recibos', action: 'Nuevo recibo' },
  { key: 'C', module: 'clientes', action: 'Nuevo cliente' },
  { key: 'I', module: 'inventario', action: 'Ver inventario' },
  { key: 'P', module: 'precios', action: 'Gestionar precios' },
  { key: 'Q', module: 'cotizaciones', action: 'Importar cotización' },
  { key: 'D', module: 'reportes', action: 'Dashboard' },
  { key: 'E', module: 'deudas', action: 'Ver deudas' },
  { key: 'M', module: 'dispositivos', action: 'Dispositivos' },
  { key: 'U', module: 'usuarios', action: 'Usuarios' },
  { key: 'A', module: 'ubicuoai', action: 'Procesador IA' }
];

// ===== GUÍA DE PRIORIDADES =====
export const priorityLevels = {
  critical: {
    label: 'CRÍTICO',
    description: 'Debe aprenderse inmediatamente',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    icon: '🚨'
  },
  high: {
    label: 'ALTO',
    description: 'Importante para operaciones diarias',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    icon: '⚠️'
  },
  medium: {
    label: 'MEDIO',
    description: 'Útil pero no urgente',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    icon: '📋'
  },
  low: {
    label: 'BAJO',
    description: 'Puede esperar',
    color: 'text-gray-600 dark:text-gray-400',
    bgColor: 'bg-gray-100 dark:bg-gray-900/30',
    icon: '✓'
  }
};

// ===== HELPER: Obtener módulos por categoría =====
export const getModulesByCategory = (category: string) => {
  return modulesList.filter(m => m.category === category);
};

// ===== HELPER: Obtener módulos ordenados por prioridad =====
export const getModulesByPriority = (priority: string) => {
  return modulesList.filter(m => m.priority === priority).sort((a, b) => a.order - b.order);
};

// ===== HELPER: Obtener ruta de aprendizaje para un nivel =====
export const getLearningPath = (phase?: number) => {
  if (phase) {
    return learningPath.find(p => p.phase === phase);
  }
  return learningPath;
};

// ===== HELPER: Obtener información completa de un módulo =====
export const getModuleInfo = (moduleId: string) => {
  return modulesList.find(m => m.id === moduleId);
};

// ===== ESTADÍSTICAS GENERALES =====
export const systemStats = {
  totalModules: modulesList.length,
  criticalModules: modulesList.filter(m => m.priority === 'critical').length,
  estimatedTotalHours: learningPath.reduce((sum, phase) => sum + phase.estimatedHours, 0),
  categories: Object.keys(moduleCategories).length,
  description: 'Suite completa de CHUMI'
};