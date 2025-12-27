export const recibos_parte1 = {
  title: "Generador de Recibos - Parte 1",
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

  <!-- IMG 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">1</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Gestión de Órdenes</p></div>
    </div>
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/recibos/1.png" alt="Ventana Principal" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <p class="text-sm md:text-base text-blue-800 dark:text-blue-200">Al abrir el módulo, verás la <strong>Ventana de Gestión de Órdenes</strong>.</p>
      </div>
    </div>
  </section>

  <!-- IMG 2: ÓRDENES ACTIVAS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">2</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Órdenes Activas</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">No procesadas</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/recibos/2.png" alt="Órdenes Activas" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200 mb-3">Todas las <strong>órdenes activas</strong> (NO procesadas).</p>
          <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <p class="text-sm text-green-700 dark:text-green-300">⚠️ Activas = NO reflejadas en Deudas aún</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 3: FILTROS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">3</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Búsqueda Tiempo Real</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Filtros avanzados</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/recibos/3.png" alt="Filtros" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200"><strong>Filtros Avanzados</strong> + <strong>Búsqueda en tiempo real</strong></p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 4: FILTROS DETALLE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">4</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">6 Criterios de Filtrado</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Búsqueda avanzada</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/recibos/4.png" alt="Filtros Detalle" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200 mb-2">Buscar por:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">📅 Periodo</div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">📆 Fecha</div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">👤 Cliente</div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">👨‍💼 Usuario</div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">💰 Precio Mín</div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-2 rounded">💸 Precio Máx</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 5-6: HISTORIAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">5</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Historial Procesadas</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">5 datos visibles</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/recibos/5.png" alt="Historial" class="w-full"/>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-purple-300 dark:border-purple-600">
          <img src="/recibos/6.png" alt="Datos Historial" class="w-full"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
          <p class="text-sm text-indigo-800 dark:text-indigo-200 mb-2"><strong>Historial:</strong> Notas ya procesadas</p>
          <div class="grid grid-cols-2 gap-2 text-xs mt-2">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">📅 Fecha registro</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">💰 Total</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">👨‍💼 Usuario</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">👤 Cliente</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded col-span-2">🔢 Folio (igual en Deudas)</div>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg mt-3">
            <p class="text-xs text-indigo-700 dark:text-indigo-300">Para ver detalles completos → Módulo Deudas</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 7: ACTUALIZAR -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">6</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Botón Actualizar</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Para órdenes UbicuoAI</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/recibos/7.png" alt="Actualizar" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm text-teal-800 dark:text-teal-200 mb-2">Las órdenes de <strong>UbicuoAI</strong> se reflejan en Órdenes Activas</p>
          <div class="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
            <p class="text-xs text-teal-700 dark:text-teal-300">Si no la ves → Usa <strong>Actualizar</strong> (recarga en tiempo real si caché bloquea)</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NAVEGACIÓN -->
  <section class="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-xl">
    <p class="text-white text-center font-bold text-lg">📋 Parte 1 de 3 - Gestión de Órdenes</p>
    <p class="text-blue-100 text-center text-sm mt-2">Continúa en Parte 2: Creación de Órdenes →</p>
  </section>
</div>
  `,
};
