export const recibos_parte2 = {
  title: "Generador de Recibos - Parte 2",
  icon: "Receipt",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HEADER PARTE 2 -->
  <section class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-xl">
    <p class="text-white text-center font-bold text-lg">📝 Parte 2 de 3 - Creación de Órdenes</p>
    <p class="text-indigo-100 text-center text-sm mt-2">Nueva Orden + Selección + Búsqueda + Carrito</p>
  </section>

  <!-- IMG 8: NUEVA ORDEN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">7</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Nueva Orden</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Botón de inicio</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/recibos/8.png" alt="Nueva Orden" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p class="text-sm text-blue-800 dark:text-blue-200">Para generar orden → <strong>Botón "Nueva Orden"</strong></p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 9: VENTANA COMPLETA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">8</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Nueva Orden</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">4 características</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/recibos/9.png" alt="Ventana Orden" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">🔍 Búsqueda productos</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">📤 Exportar orden</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">📊 Generar Excel</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">🛒 Carrito compras</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 10-11: SELECCIÓN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">9</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Selección Grupo y Cliente</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Paso obligatorio</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-sm font-bold text-purple-900 dark:text-purple-300 mb-2">📁 Grupo</h3>
            <div class="overflow-hidden rounded-xl shadow-xl border-2 border-purple-300 dark:border-purple-600">
              <img src="/recibos/10.png" alt="Grupo" class="w-full"/>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-bold text-pink-900 dark:text-pink-300 mb-2">👤 Cliente</h3>
            <div class="overflow-hidden rounded-xl shadow-xl border-2 border-pink-300 dark:border-pink-600">
              <img src="/recibos/11.png" alt="Cliente" class="w-full"/>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm text-purple-800 dark:text-purple-200">1° Grupo → 2° Cliente específico → Listo para buscar productos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 12-13: BÚSQUEDA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">10</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Búsqueda Productos</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Tiempo real</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-amber-300 dark:border-amber-600">
          <img src="/recibos/12.png" alt="Búsqueda" class="w-full"/>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-orange-300 dark:border-orange-600">
          <img src="/recibos/13.png" alt="Resultados" class="w-full"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <p class="text-sm text-amber-800 dark:text-amber-200">Búsqueda en <strong>tiempo real</strong> → Escribe → Resultados instantáneos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 14: GESTIONAR PRODUCTO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">11</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gestionar Producto</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Doble clic</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/recibos/14.png" alt="Gestionar" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
          <p class="text-sm text-indigo-800 dark:text-indigo-200 mb-2">Doble clic en producto → Ventana para:</p>
          <div class="grid grid-cols-3 gap-2 text-xs mt-2">
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">📊 Cantidad</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">💰 Precio unitario</div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded">📁 Sección</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 15: CARRITO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">12</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Carrito de Compras</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Productos agregados</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/recibos/15.png" alt="Carrito" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm text-teal-800 dark:text-teal-200 mb-2">Al agregar → Producto visible en <strong>Carrito</strong></p>
          <div class="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
            <p class="text-xs text-teal-700 dark:text-teal-300">Si no indicas sección → Automático a "GENERAL"</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NAVEGACIÓN -->
  <section class="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-xl">
    <p class="text-white text-center font-bold text-lg">📝 Parte 2 de 3 - Creación Completada</p>
    <p class="text-indigo-100 text-center text-sm mt-2">Continúa en Parte 3: Gestión y Procesamiento →</p>
  </section>
</div>
  `,
};
