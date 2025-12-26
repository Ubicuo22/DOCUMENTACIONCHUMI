export const deudas = {
  title: "Módulo Deudas",
  icon: "CreditCard",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO INTRO MODERNO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-600 to-rose-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">💳</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Gestión de Deudas
          </h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Administra el crédito otorgado a tus clientes. Registra facturas pendientes, monitorea vencimientos, recibe <span class="font-bold text-yellow-300">alertas automáticas</span> y mantén control total de tu cartera.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">💰</span>
              <p class="text-sm font-bold text-gray-900">Control de crédito</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">⏰</span>
              <p class="text-sm font-bold text-gray-900">Alertas automáticas</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-rose-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-rose-300 shadow-lg">
              <span class="text-2xl">📊</span>
              <p class="text-sm font-bold text-gray-900">Historial completo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        1
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Panel de control de deudas</p>
      </div>
    </div>
    
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/deudas/1.png" alt="Ventana Principal Gestión de Deudas" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-red-50 dark:bg-red-900/20 p-4 md:p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
        <p class="font-semibold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2">
          <span class="text-xl">ℹ️</span>
          Vista General:
        </p>
        <p class="text-sm md:text-base text-red-800 dark:text-red-200">
          En la ventana principal aparecerán las métricas principales del módulo: tarjetas de clientes con deuda, deudas pendientes y el saldo pendiente total del sistema.
        </p>
      </div>
    </div>
  </section>

  <!-- PASO 2: TARJETAS DE CLIENTES CON DEUDA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        2
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tarjetas de Clientes</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Clientes con deuda activa</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 p-6 md:p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">👥</span>
          <h3 class="text-xl md:text-2xl font-bold text-orange-900 dark:text-orange-300">Clientes con Deuda</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-orange-300 dark:border-orange-600">
          <img src="/deudas/2.png" alt="Tarjetas de Clientes con Deuda" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
          <p class="text-sm md:text-base text-orange-800 dark:text-orange-200">
            Visualiza tarjetas con información resumida de cada cliente que tiene deuda activa en el sistema.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: DEUDAS PENDIENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        3
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Deudas Pendientes</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Lista de todas las deudas activas</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 md:p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📋</span>
          <h3 class="text-xl md:text-2xl font-bold text-yellow-900 dark:text-yellow-300">Lista de Pendientes</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-yellow-300 dark:border-yellow-600">
          <img src="/deudas/3.png" alt="Deudas Pendientes" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800">
          <p class="text-sm md:text-base text-yellow-800 dark:text-yellow-200">
            Muestra todas las deudas pendientes con información clave de cada una.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: SALDO PENDIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        4
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Saldo Pendiente Total</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Monto total en deudas</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">💵</span>
          <h3 class="text-xl md:text-2xl font-bold text-green-900 dark:text-green-300">Total en Deudas</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/deudas/4.png" alt="Saldo Pendiente Total" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">
            Visualiza el <strong>saldo pendiente que se tiene en deudas</strong> de forma global.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 5: BOTÓN ACTUALIZAR -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        5
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Actualizar Datos</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Refrescar información del módulo</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🔄</span>
          <h3 class="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">Refrescar Página</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/deudas/5.png" alt="Botón Actualizar" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200 mb-3">
            En caso de que la deuda que hayas registrado en <strong>Generador de Recibos no aparezca en el módulo</strong>, usa el botón <strong>"Actualizar"</strong> en la parte superior derecha de la ventana para refrescar la página.
          </p>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <p class="text-sm text-blue-700 dark:text-blue-300">
              💡 Este botón sincroniza la información más reciente del sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 6: SECCIÓN DEUDAS PENDIENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        6
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sección: Deudas Pendientes</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Primera de dos secciones principales</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📌</span>
          <h3 class="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-300">Primera Sección</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/deudas/6.png" alt="Sección Deudas Pendientes" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200">
            El módulo tiene dos secciones principales. En <strong>"Deudas Pendientes"</strong> se alojarán todas las deudas que no hayan sido liquidadas en su totalidad.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 7: SECCIÓN HISTORIAL DE PAGOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        7
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Sección: Historial de Pagos</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Segunda sección principal</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📜</span>
          <h3 class="text-xl md:text-2xl font-bold text-indigo-900 dark:text-indigo-300">Segunda Sección</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/deudas/7.png" alt="Sección Historial de Pagos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
          <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200">
            En <strong>"Historial de Pagos"</strong> se mostrarán las notas con pago total efectuado, permitiendo revisar el historial completo de pagos realizados.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 8: DEUDAS NO LIQUIDADAS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        8
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Deudas No Liquidadas</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Gestión de pendientes</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-rose-200 dark:border-rose-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">⚠️</span>
          <h3 class="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-300">Pendientes de Pago</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-rose-300 dark:border-rose-600">
          <img src="/deudas/8.png" alt="Deudas No Liquidadas en su Totalidad" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-rose-200 dark:border-rose-800">
          <p class="text-sm md:text-base text-rose-800 dark:text-rose-200">
            En "Deudas Pendientes" se <strong>alojarán todas las deudas que no hayan sido liquidadas en su totalidad</strong>. Aquí puedes gestionar cada una hasta que sea pagada completamente.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 9: OPCIONES DE GESTIÓN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        9
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Opciones de Gestión</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Ver detalles y pagos rápidos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">⚙️</span>
          <h3 class="text-xl md:text-2xl font-bold text-teal-900 dark:text-teal-300">Gestión Individual</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/deudas/9.png" alt="Opciones de Gestión de Deuda" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm md:text-base text-teal-800 dark:text-teal-200 mb-3">
            Cada deuda tiene <strong>dos opciones de gestión</strong>:
          </p>
          <ul class="space-y-2 text-sm md:text-base text-teal-700 dark:text-teal-300">
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">👁️</span>
              <span><strong>Ver detalles de la deuda:</strong> Información completa de la factura</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">💸</span>
              <span><strong>Hacer pagos rápidos:</strong> Registrar pagos de forma ágil</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 10: DETALLES DE LA DEUDA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        10
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Detalles de la Deuda</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Información completa de la factura</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-violet-200 dark:border-violet-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-violet-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📄</span>
          <h3 class="text-xl md:text-2xl font-bold text-violet-900 dark:text-violet-300">Información Detallada</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-violet-300 dark:border-violet-600">
          <img src="/deudas/10.png" alt="Detalles de la Deuda" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800">
          <p class="text-sm md:text-base text-violet-800 dark:text-violet-200 mb-3">
            En la sección de detalles podrás observar:
          </p>
          <ul class="space-y-2 text-sm md:text-base text-violet-700 dark:text-violet-300">
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">📋</span>
              <span><strong>La factura que debe el cliente</strong></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">📅</span>
              <span><strong>La fecha en la que se realizó</strong></span>
            </li>
            <li class="flex items-start gap-2">
              <span class="flex-shrink-0">🔴</span>
              <span><strong>El estado:</strong> Pendiente o con pago parcial</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 11: REGISTRAR PAGO - FORMAS DE PAGO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        11
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Registrar Pago</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Formas de pago y referencia</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">💳</span>
          <h3 class="text-xl md:text-2xl font-bold text-emerald-900 dark:text-emerald-300">Opciones de Pago</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-emerald-300 dark:border-emerald-600">
          <img src="/deudas/11.png" alt="Registrar Pago - Formas de Pago" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
          <p class="text-sm md:text-base text-emerald-800 dark:text-emerald-200 mb-3">
            Para <strong>registrar pago</strong> mostrará las opciones de forma de pago:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">💸</p>
              <p class="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Efectivo</p>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">💳</p>
              <p class="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Tarjeta</p>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">🏦</p>
              <p class="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Transferencia</p>
            </div>
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">📝</p>
              <p class="text-sm font-semibold text-emerald-900 dark:text-emerald-300">Cheques</p>
            </div>
          </div>
          <div class="mt-4 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
            <p class="text-sm text-emerald-700 dark:text-emerald-300">
              💡 Incluye campo para <strong>referencia</strong> que quiera poner el administrador
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 12: COMPROBANTE DE PAGO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        12
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Comprobante de Pago</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Adjuntar imagen del comprobante</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 p-6 md:p-8 rounded-2xl border-2 border-sky-200 dark:border-sky-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📸</span>
          <h3 class="text-xl md:text-2xl font-bold text-sky-900 dark:text-sky-300">Adjuntar Comprobante</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-sky-300 dark:border-sky-600">
          <img src="/deudas/12.png" alt="Comprobante de Pago" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-sky-200 dark:border-sky-800">
          <p class="text-sm md:text-base text-sky-800 dark:text-sky-200">
            Incluye una <strong>sección para insertar una imagen con el comprobante de pago</strong>, permitiendo mantener un registro visual completo de cada transacción.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 13: HISTORIAL - NOTAS CON PAGO TOTAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        13
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Historial: Pago Total</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Deudas completamente liquidadas</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30 p-6 md:p-8 rounded-2xl border-2 border-lime-200 dark:border-lime-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-lime-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">✅</span>
          <h3 class="text-xl md:text-2xl font-bold text-lime-900 dark:text-lime-300">Pagos Completados</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-lime-300 dark:border-lime-600">
          <img src="/deudas/13.png" alt="Historial de Pagos - Notas con Pago Total" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-lime-200 dark:border-lime-800">
          <p class="text-sm md:text-base text-lime-800 dark:text-lime-200">
            En <strong>Historial de Pago</strong> se mostrarán las <strong>notas con pago total efectuado</strong>, permitiendo revisar todas las deudas que ya fueron liquidadas completamente.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 14: DESHACER PAGO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        14
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Deshacer Pago</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Reversión de pagos incorrectos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">↩️</span>
          <h3 class="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-300">Revertir Pago</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/deudas/14.png" alt="Deshacer Pago" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200 mb-3">
            En el historial se podrá <strong>deshacer el pago</strong>, en caso de que no se haya realizado y por alguna razón se haya registrado incorrectamente.
          </p>
          <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <p class="text-sm text-amber-700 dark:text-amber-300">
              ⚠️ Esta función permite corregir errores de registro sin afectar el historial permanentemente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 15: DETALLES Y COMPROBANTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        15
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Detalles y Comprobantes</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Historial completo de pagos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-fuchsia-200 dark:border-fuchsia-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-fuchsia-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📑</span>
          <h3 class="text-xl md:text-2xl font-bold text-fuchsia-900 dark:text-fuchsia-300">Información Completa</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-fuchsia-300 dark:border-fuchsia-600">
          <img src="/deudas/15.png" alt="Detalles y Comprobantes de Pagos" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-fuchsia-200 dark:border-fuchsia-800">
          <p class="text-sm md:text-base text-fuchsia-800 dark:text-fuchsia-200">
            Visualiza los <strong>detalles junto con los comprobantes de todos los pagos parciales o totales de la deuda</strong>, manteniendo un registro completo y detallado de cada transacción realizada.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- POR QUÉ ES CRÍTICO (CONTENIDO ORIGINAL) -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">💡 ¿Por Qué es Crítico?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex gap-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
        <span class="text-4xl flex-shrink-0">💰</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Dinero en Riesgo</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Sin deudas registradas, no sabes cuánto dinero está en riesgo</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span class="text-4xl flex-shrink-0">⏰</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Vencimientos</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Alertas automáticas para no olvidar a quién seguir</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <span class="text-4xl flex-shrink-0">📊</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad Total</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Sabe quién debe, cuánto y desde cuándo</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-4xl flex-shrink-0">💵</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Flujo de Caja</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Mejora tu flujo de efectivo con cobranza efectiva</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-red-600 via-pink-600 to-rose-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">💳 Control Total de Crédito</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📋</span>
            <div>
              <p class="font-bold text-lg mb-1">Registro Completo</p>
              <p class="text-sm text-pink-100">15 pasos detallados de gestión</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">💸</span>
            <div>
              <p class="font-bold text-lg mb-1">Pagos Flexibles</p>
              <p class="text-sm text-pink-100">4 formas de pago + comprobantes</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🔄</span>
            <div>
              <p class="font-bold text-lg mb-1">Actualización</p>
              <p class="text-sm text-pink-100">Botón para refrescar datos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📊</span>
            <div>
              <p class="font-bold text-lg mb-1">Dos Secciones</p>
              <p class="text-sm text-pink-100">Pendientes e Historial</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">⚙️</span>
            <div>
              <p class="font-bold text-lg mb-1">Gestión Individual</p>
              <p class="text-sm text-pink-100">Detalles y pagos rápidos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">↩️</span>
            <div>
              <p class="font-bold text-lg mb-1">Corrección</p>
              <p class="text-sm text-pink-100">Deshacer pagos incorrectos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};