export const recibos_parte3 = {
  title: "Generador de Recibos - Parte 3",
  icon: "Receipt",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HEADER PARTE 3 -->
  <section class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl shadow-xl">
    <p class="text-white text-center font-bold text-lg">⚙️ Parte 3 de 3 - Gestión y Procesamiento</p>
    <p class="text-purple-100 text-center text-sm mt-2">Secciones + Modificar + Guardar + Procesar</p>
  </section>

  <!-- IMG 16-17: GESTIONAR SECCIONES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">13</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gestionar Secciones</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Botón superior</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-blue-300 dark:border-blue-600">
          <img src="/recibos/16.png" alt="Botón Gestionar" class="w-full"/>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-cyan-300 dark:border-cyan-600">
          <img src="/recibos/17.png" alt="Ventana Secciones" class="w-full"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p class="text-sm text-blue-800 dark:text-blue-200 mb-2">Botón <strong>"Gestionar"</strong> (superior central) → Ventana con:</p>
          <div class="grid grid-cols-3 gap-2 text-xs mt-2">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">➕ Agregar</div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">🗑️ Eliminar</div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">📊 Cantidad productos</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 18: MODIFICAR PRODUCTOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">14</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Modificar en Carrito</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Clic derecho</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/recibos/18.png" alt="Clic Derecho" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm text-green-800 dark:text-green-200 mb-2">Clic derecho en producto del carrito → Opciones:</p>
          <div class="grid grid-cols-2 gap-2 text-xs mt-2">
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">📊 Cambiar cantidad</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">💰 Cambiar precio</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">📁 Mover sección</div>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded">🗑️ Eliminar</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 19: GUARDAR -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">15</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Guardar Orden</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Folio asignado</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/recibos/19.png" alt="Guardar" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm text-purple-800 dark:text-purple-200 mb-2">Guardar → <strong>Ventana emergente con Folio</strong></p>
          <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <p class="text-xs text-green-700 dark:text-green-300 flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>Éxito en la acción confirmado</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 20-22: PROCESAR VENTA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">16</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Procesar Venta</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">⚠️ Requiere admin</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-red-300 dark:border-red-600">
          <img src="/recibos/20.png" alt="Botón Procesar" class="w-full"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="overflow-hidden rounded-xl shadow-xl border-2 border-rose-300 dark:border-rose-600">
            <img src="/recibos/21.png" alt="Confirmación 1" class="w-full"/>
          </div>
          <div class="overflow-hidden rounded-xl shadow-xl border-2 border-rose-300 dark:border-rose-600">
            <img src="/recibos/22.png" alt="Confirmación 2" class="w-full"/>
          </div>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-red-200 dark:border-red-800">
          <p class="text-sm text-red-800 dark:text-red-200 mb-3">Botón <strong>"Procesar"</strong> → Nota se procesa como deuda en módulo Deudas</p>
          <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg space-y-2">
            <p class="text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
              <span class="text-lg">🔐</span>
              <span><strong>Requiere permiso administrador</strong></span>
            </p>
            <p class="text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
              <span class="text-lg">🔑</span>
              <span>Confirmación 2 pasos + contraseña</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 23: SHIFT+CLIC -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">17</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Selección Múltiple</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Shift + Clic</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/recibos/23.png" alt="Shift Clic" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <p class="text-sm text-amber-800 dark:text-amber-200 mb-2">Selecciona varios productos para mover de sección:</p>
          <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            <p class="text-xs text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <span class="text-lg">⌨️</span>
              <span><strong>Shift + Clic</strong> en productos → Mover todos a la vez</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">🧾 Generador de Recibos Completo</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📋</span><div><p class="font-bold text-lg mb-1">Órdenes Activas</p><p class="text-sm text-blue-100">No procesadas aún</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🔍</span><div><p class="font-bold text-lg mb-1">6 Filtros</p><p class="text-sm text-blue-100">Búsqueda avanzada</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🛒</span><div><p class="font-bold text-lg mb-1">Carrito</p><p class="text-sm text-blue-100">Gestión completa</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📁</span><div><p class="font-bold text-lg mb-1">Secciones</p><p class="text-sm text-blue-100">Organiza productos</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">⌨️</span><div><p class="font-bold text-lg mb-1">Shift+Clic</p><p class="text-sm text-blue-100">Selección múltiple</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🔐</span><div><p class="font-bold text-lg mb-1">Procesar</p><p class="text-sm text-blue-100">Requiere admin</p></div></div>
        </div>
      </div>
      <div class="bg-red-500/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-red-300 mt-8">
        <p class="text-xl md:text-2xl font-bold text-white text-center mb-3 flex items-center justify-center gap-3">
          <span class="text-3xl">⚠️</span>
          Regla de Oro
        </p>
        <p class="text-white text-center text-lg">
          <strong>Procesa ventas SOLO si estás 100% seguro de los precios introducidos</strong>
        </p>
      </div>
    </div>
  </section>
</div>
  `,
};
