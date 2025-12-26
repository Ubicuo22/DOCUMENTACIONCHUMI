export const reportes = {
  title: "Módulo Análisis y Reportes",
  icon: "BarChart3",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO INTRO MODERNO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">📊</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Análisis de Ventas
          </h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Obtén visibilidad <span class="font-bold text-yellow-300">COMPLETA</span> sobre tu negocio. Transforma datos de ventas en decisiones estratégicas. Ve ganancias, identifica productos estrella y toma decisiones basadas en datos reales.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">📈</span>
              <p class="text-sm font-bold text-gray-900">Análisis en tiempo real</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">💡</span>
              <p class="text-sm font-bold text-gray-900">Decisiones inteligentes</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-blue-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-blue-300 shadow-lg">
              <span class="text-2xl">📊</span>
              <p class="text-sm font-bold text-gray-900">4 dashboards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        1
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Panel de análisis de ventas</p>
      </div>
    </div>
    
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/reportes/1.png" alt="Ventana Principal Análisis de Ventas" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-4 md:p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
        <p class="font-semibold text-cyan-900 dark:text-cyan-300 mb-3 flex items-center gap-2">
          <span class="text-xl">ℹ️</span>
          Vista General:
        </p>
        <p class="text-sm md:text-base text-cyan-800 dark:text-cyan-200">
          El módulo <strong>Análisis de Ventas</strong> te proporciona una visión completa del flujo de ventas con múltiples dashboards y análisis detallados.
        </p>
      </div>
    </div>
  </section>

  <!-- PASO 2: 4 FORMAS DE VISUALIZACIÓN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        2
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">4 Formas de Visualización</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Botones de navegación</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🎛️</span>
          <h3 class="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">Modos de Análisis</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/reportes/2.png" alt="4 Formas de Visualización" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 space-y-4">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200 mb-3">
            Se encuentran <strong>4 formas de visualizar los análisis</strong> del flujo de ventas en los botones del lado izquierdo superior:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">🏠</p>
              <p class="text-sm font-semibold text-blue-900 dark:text-blue-300">Dashboard General</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">📦</p>
              <p class="text-sm font-semibold text-purple-900 dark:text-purple-300">Productos</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">👥</p>
              <p class="text-sm font-semibold text-green-900 dark:text-green-300">Clientes</p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">🏢</p>
              <p class="text-sm font-semibold text-orange-900 dark:text-orange-300">Grupos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: 7 TARJETAS INFORMATIVAS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        3
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">7 Tarjetas Informativas</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Dashboard general - Métricas clave</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📊</span>
          <h3 class="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-300">Análisis Generales</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/reportes/3.png" alt="7 Tarjetas Informativas Dashboard General" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 space-y-3">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200 mb-3">
            Para <strong>Dashboard General</strong> encontrarás los análisis generales en <strong>7 tarjetas informativas</strong> en la parte superior:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">💰</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Total Vendido</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">💵</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Liquidez</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">🛒</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Compras</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">📈</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Margen Promedio</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">👥</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Clientes Activos</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">📝</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Notas Generadas</span>
            </div>
            <div class="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
              <span class="text-lg">⏰</span>
              <span class="font-semibold text-purple-900 dark:text-purple-300">Pagos Pendientes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: GRÁFICA DE TENDENCIAS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        4
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gráfica de Tendencias</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Visualización de datos generales</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📉</span>
          <h3 class="text-xl md:text-2xl font-bold text-green-900 dark:text-green-300">Tendencias Generales</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/reportes/4.png" alt="Gráfica de Tendencias Generales" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">
            En la parte inferior de la pantalla podrás visualizar una <strong>gráfica de tendencias generales</strong> que muestra el comportamiento de las ventas a lo largo del tiempo.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 5: VISUALIZACIÓN POR PERIODOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        5
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Periodos de Análisis</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">1, 7, 30 y 90 días</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📅</span>
          <h3 class="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-300">Filtros de Tiempo</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/reportes/5.png" alt="Visualización por Periodos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 space-y-3">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200 mb-3">
            También se puede visualizar por periodos:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">1️⃣</p>
              <p class="text-sm font-semibold text-amber-900 dark:text-amber-300">1 Día</p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">7️⃣</p>
              <p class="text-sm font-semibold text-amber-900 dark:text-amber-300">7 Días</p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">3️⃣0️⃣</p>
              <p class="text-sm font-semibold text-amber-900 dark:text-amber-300">30 Días</p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">9️⃣0️⃣</p>
              <p class="text-sm font-semibold text-amber-900 dark:text-amber-300">90 Días</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 6: SECCIÓN PRODUCTOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        6
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sección Productos</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Top 10 más vendidos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📦</span>
          <h3 class="text-xl md:text-2xl font-bold text-indigo-900 dark:text-indigo-300">Análisis de Productos</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/reportes/6.png" alt="Sección Productos - Top 10" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
          <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200 mb-3">
            En la sección de <strong>Productos</strong> se mostrarán:
          </p>
          <ul class="space-y-2 text-sm md:text-base text-indigo-700 dark:text-indigo-300">
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">🏆</span>
              <span><strong>Top 10 productos más vendidos</strong></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">📈</span>
              <span><strong>Tendencia en ventas</strong> de cada producto</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">📅</span>
              <span><strong>Visualización por periodo</strong> que indique el usuario</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 7: SECCIÓN CLIENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        7
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sección Clientes</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Top clientes y tendencias</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">👥</span>
          <h3 class="text-xl md:text-2xl font-bold text-teal-900 dark:text-teal-300">Análisis de Clientes</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/reportes/7.png" alt="Sección Clientes - Top Clientes" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm md:text-base text-teal-800 dark:text-teal-200">
            Lo mismo para la sección de <strong>Clientes</strong>: Top clientes y visualización por el periodo que indique el usuario.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 8: SECCIÓN GRUPOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        8
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sección Grupos</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Análisis por grupos de clientes</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-rose-200 dark:border-rose-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🏢</span>
          <h3 class="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-300">Análisis de Grupos</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-rose-300 dark:border-rose-600">
          <img src="/reportes/8.png" alt="Sección Grupos - Análisis por Grupos" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-rose-200 dark:border-rose-800">
          <p class="text-sm md:text-base text-rose-800 dark:text-rose-200">
            Lo mismo para la sección de <strong>Grupos</strong>: Análisis de grupos de clientes con visualización por periodos personalizables.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 9: BOTONES DE ACCIÓN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        9
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Botones de Acción</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Salida, Exportar y Carpeta</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 p-6 md:p-8 rounded-2xl border-2 border-violet-200 dark:border-violet-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-violet-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🔘</span>
          <h3 class="text-xl md:text-2xl font-bold text-violet-900 dark:text-violet-300">Controles Principales</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-violet-300 dark:border-violet-600">
          <img src="/reportes/9.png" alt="Botones de Acción - Salida, Exportar, Carpeta" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800 space-y-3">
          <p class="text-sm md:text-base text-violet-800 dark:text-violet-200 mb-3">
            En la parte <strong>inferior izquierda de la ventana</strong> se encuentran:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-violet-50 dark:bg-violet-900/20 p-3 rounded-lg">
              <p class="font-semibold text-violet-900 dark:text-violet-300 mb-1 flex items-center gap-2">
                <span class="text-xl">🚪</span>
                Salida
              </p>
              <p class="text-sm text-violet-700 dark:text-violet-200">Cerrar el módulo</p>
            </div>
            <div class="bg-violet-50 dark:bg-violet-900/20 p-3 rounded-lg">
              <p class="font-semibold text-violet-900 dark:text-violet-300 mb-1 flex items-center gap-2">
                <span class="text-xl">📤</span>
                Exportar
              </p>
              <p class="text-sm text-violet-700 dark:text-violet-200">Exportar dashboards</p>
            </div>
            <div class="bg-violet-50 dark:bg-violet-900/20 p-3 rounded-lg">
              <p class="font-semibold text-violet-900 dark:text-violet-300 mb-1 flex items-center gap-2">
                <span class="text-xl">📁</span>
                Carpeta
              </p>
              <p class="text-sm text-violet-700 dark:text-violet-200">Cambiar ubicación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 10: EXPORTAR DASHBOARDS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        10
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Exportar Dashboards</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">PDF o Excel con filtros</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📊</span>
          <h3 class="text-xl md:text-2xl font-bold text-emerald-900 dark:text-emerald-300">Opciones de Exportación</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-emerald-300 dark:border-emerald-600">
          <img src="/reportes/10.png" alt="Exportar Dashboards - PDF o Excel" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 space-y-4">
          <p class="text-sm md:text-base text-emerald-800 dark:text-emerald-200 mb-3">
            <strong>Exportar</strong> sirve para exportar dashboards con los análisis:
          </p>
          <div class="space-y-3">
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
              <p class="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">📄 Formato</p>
              <p class="text-sm text-emerald-700 dark:text-emerald-200">PDF o Excel</p>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
              <p class="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">📅 Temporada de Datos</p>
              <p class="text-sm text-emerald-700 dark:text-emerald-200">Seleccionar periodo a exportar</p>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
              <p class="font-semibold text-emerald-900 dark:text-emerald-300 mb-1">🎯 Tipo de Información</p>
              <p class="text-sm text-emerald-700 dark:text-emerald-200">Clientes, Grupos, Productos o General</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 11: CAMBIAR CARPETA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        11
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Cambiar Carpeta</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Ubicación de exportación</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 p-6 md:p-8 rounded-2xl border-2 border-sky-200 dark:border-sky-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📁</span>
          <h3 class="text-xl md:text-2xl font-bold text-sky-900 dark:text-sky-300">Configurar Destino</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-sky-300 dark:border-sky-600">
          <img src="/reportes/11.png" alt="Cambiar Carpeta de Exportación" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-sky-200 dark:border-sky-800">
          <p class="text-sm md:text-base text-sky-800 dark:text-sky-200">
            El botón <strong>"Cambiar Carpeta"</strong> sirve para indicar al programa <strong>en qué carpeta se tienen que guardar los datos exportados</strong>, permitiendo una organización personalizada de tus reportes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- POR QUÉ ES CRÍTICO (CONTENIDO ORIGINAL) -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">📊 ¿Por Qué es Crítico?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span class="text-4xl flex-shrink-0">👁️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad Total</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Sin reportes = Vendes a ciegas sin saber qué funciona</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-4xl flex-shrink-0">💡</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Decisiones Inteligentes</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Basadas en datos reales, no intuición</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span class="text-4xl flex-shrink-0">🎯</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Optimizar Ganancias</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Identifica productos y clientes rentables</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span class="text-4xl flex-shrink-0">📈</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Monitorear Crecimiento</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Ve mes a mes, año a año tu progreso</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">📊 Análisis Completo de Ventas</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🎛️</span>
            <div>
              <p class="font-bold text-lg mb-1">4 Dashboards</p>
              <p class="text-sm text-blue-100">General, Productos, Clientes, Grupos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📊</span>
            <div>
              <p class="font-bold text-lg mb-1">7 Métricas Clave</p>
              <p class="text-sm text-blue-100">Análisis generales completos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📈</span>
            <div>
              <p class="font-bold text-lg mb-1">Gráficas de Tendencias</p>
              <p class="text-sm text-blue-100">Visualización clara de datos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📅</span>
            <div>
              <p class="font-bold text-lg mb-1">4 Periodos</p>
              <p class="text-sm text-blue-100">1, 7, 30 y 90 días</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🏆</span>
            <div>
              <p class="font-bold text-lg mb-1">Top 10 Rankings</p>
              <p class="text-sm text-blue-100">Productos y clientes destacados</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📤</span>
            <div>
              <p class="font-bold text-lg mb-1">Exportación</p>
              <p class="text-sm text-blue-100">PDF y Excel personalizables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};