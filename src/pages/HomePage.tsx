import { ArrowRight, Zap, Shield, BarChart3, DollarSign, Users, Package, Wallet, CreditCard, FileText, Lock, Brain } from 'lucide-react';
import { ModulesGrid } from '../components/ModulesGrid';

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">CHUMI</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">Cloud Hybrid Unified Management Infrastructure - La solución integral para tu negocio</p>
        </div>
        <div className="flex gap-4">
          <a href="/modulos" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">Explora los módulos <ArrowRight className="w-4 h-4" /></a>
          <a href="/faq/modules" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition font-medium">Preguntas frecuentes</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition">
          <Zap className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rápido y Eficiente</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Reduce tiempo administrativo de 3 horas a 30 minutos diarios.</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition">
          <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Análisis en Tiempo Real</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Reportes diarios sobre ventas, productos y ganancias.</p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition">
          <Shield className="w-8 h-8 text-orange-500 mb-4" />
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Seguridad Garantizada</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Protección de datos con respaldos automáticos.</p>
        </div>
      </section>

      {/* Modules Overview Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">10 Módulos Integrados</h2>
          <p className="text-gray-600 dark:text-gray-400">Cada módulo está diseñado para resolver un aspecto específico de tu negocio.</p>
        </div>
        
        {/* Modules Grid */}
        <ModulesGrid />

        {/* Detailed Modules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-blue-900 dark:text-blue-300">🧾 Recibos</div>
              <p className="text-sm text-blue-700 dark:text-blue-400">El más importante. Gestiona ventas y comprobantes.</p>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-3">
            <Users className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-green-900 dark:text-green-300">👥 Clientes</div>
              <p className="text-sm text-green-700 dark:text-green-400">Base de datos con historial y límites de crédito.</p>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 flex items-start gap-3">
            <Package className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-purple-900 dark:text-purple-300">📦 Inventario</div>
              <p className="text-sm text-purple-700 dark:text-purple-400">Stock en tiempo real con alertas automáticas.</p>
            </div>
          </div>
          
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 flex items-start gap-3">
            <Wallet className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-amber-900 dark:text-amber-300">💰 Precios</div>
              <p className="text-sm text-amber-700 dark:text-amber-400">Gestión de precios, márgenes y descuentos.</p>
            </div>
          </div>
          
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-red-900 dark:text-red-300">💳 Deudas</div>
              <p className="text-sm text-red-700 dark:text-red-400">Control de créditos y recordatorios automáticos.</p>
            </div>
          </div>
          
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 flex items-start gap-3">
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-indigo-900 dark:text-indigo-300">📊 Reportes</div>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">Análisis de ventas, productos y ganancias.</p>
            </div>
          </div>

          <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800 flex items-start gap-3">
            <FileText className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-pink-900 dark:text-pink-300">📋 Cotizaciones</div>
              <p className="text-sm text-pink-700 dark:text-pink-400">Crea cotizaciones profesionales en PDF.</p>
            </div>
          </div>

          <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800 flex items-start gap-3">
            <Lock className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-cyan-900 dark:text-cyan-300">🔐 Dispositivos</div>
              <p className="text-sm text-cyan-700 dark:text-cyan-400">Control de acceso y autorización de dispositivos.</p>
            </div>
          </div>

          <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800 flex items-start gap-3">
            <Users className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-teal-900 dark:text-teal-300">👤 Usuarios</div>
              <p className="text-sm text-teal-700 dark:text-teal-400">Gestión de roles, permisos y auditoría.</p>
            </div>
          </div>

          <div className="p-4 bg-lime-50 dark:bg-lime-900/20 rounded-lg border border-lime-200 dark:border-lime-800 flex items-start gap-3">
            <Brain className="w-5 h-5 text-lime-600 dark:text-lime-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-lime-900 dark:text-lime-300">🤖 UbicuoAI</div>
              <p className="text-sm text-lime-700 dark:text-lime-400">IA que extrae datos automáticamente de pedidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acceso Rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="/modulos" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <div className="font-medium text-gray-900 dark:text-white">Ver Todos los Módulos</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explora toda la documentación</p>
          </a>
          <a href="/modulos/recibos" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <div className="font-medium text-gray-900 dark:text-white">Para Vendedores</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guía de Recibos</p>
          </a>
          <a href="/faq/modules" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <div className="font-medium text-gray-900 dark:text-white">Preguntas Frecuentes</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">50+ respuestas disponibles</p>
          </a>
          <a href="/modulos/inventario" className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            <div className="font-medium text-gray-900 dark:text-white">Para Bodegueros</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guía de Inventario</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¿Listo para comenzar?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Implementa CHUMI en tu negocio y ahorra horas de trabajo administrativo diario.</p>
        <a href="/modulos" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium">Explorar ahora <ArrowRight className="w-4 h-4" /></a>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">10</div>
          <p className="text-gray-600 dark:text-gray-400">Módulos integrados</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
          <p className="text-gray-600 dark:text-gray-400">Preguntas frecuentes</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
          <p className="text-gray-600 dark:text-gray-400">Documentado</p>
        </div>
      </section>
    </div>
  );
}