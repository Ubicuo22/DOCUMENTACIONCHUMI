export const recibos = {
  title: "Generador de Recibos",
  icon: "Receipt",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">🧾</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Generador de Recibos</h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            El módulo <span class="font-bold text-yellow-300">más extenso y crítico</span>. Gestiona órdenes activas, procesa ventas y genera recibos con folios únicos. Requiere mayor capacitación.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">📋</span>
              <p class="text-sm font-bold text-gray-900">Módulo más extenso</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">🔐</span>
              <p class="text-sm font-bold text-gray-900">Requiere capacitación</p>
            </div>
          </div>
          <div class="bg-red-500/20 backdrop-blur-sm px-4 py-3 rounded-xl border-2 border-red-300 inline-block">
            <p class="text-sm text-yellow-100 flex items-center gap-2">
              <span class="text-lg">⚠️</span>
              <span><strong>IMPORTANTE:</strong> Procesa ventas SOLO si estás 100% seguro de los precios</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RESUMEN DEL MÓDULO -->
  <section class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">📚 Contenido del Módulo</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400 text-center mb-8 max-w-3xl mx-auto">
      Este módulo está dividido en <strong>3 partes</strong> para facilitar tu aprendizaje. 
      Cada parte cubre aspectos específicos del generador de recibos.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Resumen Parte 1 -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Gestión</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-blue-600 dark:text-blue-400 flex-shrink-0">✓</span>
            <span>Órdenes Activas</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 dark:text-blue-400 flex-shrink-0">✓</span>
            <span>Filtros Avanzados</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 dark:text-blue-400 flex-shrink-0">✓</span>
            <span>Historial</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 dark:text-blue-400 flex-shrink-0">✓</span>
            <span>Actualizar</span>
          </li>
        </ul>
      </div>

      <!-- Resumen Parte 2 -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Creación</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
            <span>Nueva Orden</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
            <span>Selección Cliente</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
            <span>Búsqueda Productos</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-600 dark:text-green-400 flex-shrink-0">✓</span>
            <span>Carrito</span>
          </li>
        </ul>
      </div>

      <!-- Resumen Parte 3 -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Procesamiento</h3>
        </div>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <span class="text-purple-600 dark:text-purple-400 flex-shrink-0">✓</span>
            <span>Gestionar Secciones</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-600 dark:text-purple-400 flex-shrink-0">✓</span>
            <span>Modificar Productos</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-600 dark:text-purple-400 flex-shrink-0">✓</span>
            <span>Guardar Orden</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-purple-600 dark:text-purple-400 flex-shrink-0">✓</span>
            <span>Procesar Venta 🔐</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- NAVEGACIÓN A LAS PARTES -->
  <section class="space-y-8">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white text-center">🎯 Selecciona una Parte</h2>
    
    <!-- PARTE 1 -->
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-8 md:p-10 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div class="absolute top-0 right-0 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">1</div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Parte 1: Gestión de Órdenes</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Aprende a gestionar órdenes activas, aplicar filtros avanzados y consultar el historial de notas procesadas.</p>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">7 imágenes</span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">6 filtros</span>
            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">5 datos historial</span>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="/modulos/recibos_parte1" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span>Ver Parte 1</span>
            <span class="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- PARTE 2 -->
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-8 md:p-10 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div class="absolute top-0 right-0 w-40 h-40 bg-green-300/20 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">2</div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Parte 2: Creación de Órdenes</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Domina el proceso de crear nuevas órdenes, seleccionar clientes, buscar productos y gestionar el carrito de compras.</p>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">8 imágenes</span>
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">4 características</span>
            <span class="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">Búsqueda real-time</span>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="/modulos/recibos_parte2" class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span>Ver Parte 2</span>
            <span class="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- PARTE 3 -->
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 md:p-10 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div class="absolute top-0 right-0 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative flex flex-col md:flex-row items-center gap-6">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">3</div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Parte 3: Gestión y Procesamiento</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">Aprende a gestionar secciones, modificar productos en el carrito, guardar órdenes y procesar ventas con seguridad.</p>
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-xs font-semibold">8 imágenes</span>
            <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-xs font-semibold">Admin required 🔐</span>
            <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 rounded-full text-xs font-semibold">Shift+Clic</span>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="/modulos/recibos_parte3" class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span>Ver Parte 3</span>
            <span class="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-red-600 via-rose-600 to-pink-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
        <span class="text-4xl">⚠️</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Regla de Oro</h2>
      <p class="text-xl md:text-2xl text-white font-bold mb-6 max-w-3xl mx-auto">
        Procesa ventas SOLO si estás 100% seguro de los precios introducidos
      </p>
      <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-white/20 max-w-2xl mx-auto">
        <ul class="text-left text-white space-y-2">
          <li class="flex items-start gap-2">
            <span class="flex-shrink-0">🔐</span>
            <span>Requiere permiso de administrador</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="flex-shrink-0">🔑</span>
            <span>Confirmación en 2 pasos + contraseña</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="flex-shrink-0">📊</span>
            <span>Se refleja inmediatamente en módulo Deudas</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="flex-shrink-0">⏱️</span>
            <span>No se puede deshacer fácilmente</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
  `,
};