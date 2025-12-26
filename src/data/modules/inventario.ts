export const inventario = {
  title: "Módulo Gestión de Compras",
  icon: "Package",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">📦</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Gestión de Compras</h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Controla stock en tiempo real, registra compras y <span class="font-bold text-yellow-300">afecta el inventario automáticamente</span>. Mantén historial completo con información fiscal opcional.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">📊</span>
              <p class="text-sm font-bold text-gray-900">Stock en tiempo real</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">🧾</span>
              <p class="text-sm font-bold text-gray-900">Info fiscal opcional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">1</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Registro de compras</p></div>
    </div>
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/inventario/1.png" alt="Ventana Principal Gestión Compras" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
        <p class="font-semibold text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2"><span class="text-xl">ℹ️</span>Vista General:</p>
        <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200">Ventana principal para <strong>Registro de Compras</strong>. Vamos por partes.</p>
      </div>
    </div>
  </section>

  <!-- IMG 2: INFORMACIÓN DE COMPRA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">2</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Información de Compra</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Buscar producto</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/inventario/2.png" alt="Información de Compra" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200 mb-3">En esta sección se buscará el <strong>producto del que se quieren registrar compras</strong>.</p>
          <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg mt-3">
            <p class="text-sm text-purple-700 dark:text-purple-300 flex items-center gap-2">
              <span class="text-lg">⚠️</span>
              <span><strong>Importante:</strong> Esto afectará el stock general</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 3: BÚSQUEDA PRODUCTOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">3</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Búsqueda de Productos</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Hasta 20 coincidencias</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/inventario/3.png" alt="Búsqueda Productos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">Si buscamos <strong>"aguacate"</strong>, arrojará los <strong>20 productos que coincidan</strong> con aguacate o sus variables.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 4: DATOS COMPRA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">4</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Datos de Compra</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Cantidad, precio, IVA, fechas</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/inventario/4.png" alt="Datos de Compra" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 space-y-2">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200 mb-3">Una vez seleccionado el producto, ingresar:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded"><span>📊</span><span>Cantidad</span></div>
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded"><span>💰</span><span>Precio/Unidad</span></div>
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded"><span>🧾</span><span>IVA (si aplica)</span></div>
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded"><span>📅</span><span>Fecha Compra</span></div>
            <div class="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded"><span>📝</span><span>Fecha Registro</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 5: RESUMEN COMPRA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">5</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Resumen de Compra</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Total calculado</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/inventario/5.png" alt="Resumen de Compra" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200">Esto ajustará en la parte de <strong>Resumen de Compra el total de la compra</strong> automáticamente.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 6: INFO FISCAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">6</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Información Fiscal</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Datos del proveedor (opcional)</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/inventario/6.png" alt="Información Fiscal" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm md:text-base text-teal-800 dark:text-teal-200 mb-3">Deslizándose más abajo en <strong>Información de Compra</strong>, encontraremos <strong>"Información Fiscal"</strong>.</p>
          <div class="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
            <p class="text-sm text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <span class="text-lg">💡</span>
              <span>Estas casillas son <strong>completamente opcionales</strong>, pero recomendables en caso de tener información del proveedor</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 7: FORMA Y MÉTODO PAGO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">7</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Forma y Método de Pago</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Notas adicionales</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-rose-200 dark:border-rose-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-rose-300 dark:border-rose-600">
          <img src="/inventario/7.png" alt="Forma y Método de Pago" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-rose-200 dark:border-rose-800 space-y-2">
          <p class="text-sm md:text-base text-rose-800 dark:text-rose-200 mb-3">Más abajo encontrarás:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg"><p class="font-semibold text-rose-900 dark:text-rose-300 flex items-center gap-2"><span class="text-xl">💳</span>Forma de Pago</p></div>
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg"><p class="font-semibold text-rose-900 dark:text-rose-300 flex items-center gap-2"><span class="text-xl">🏦</span>Método de Pago</p></div>
            <div class="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-lg"><p class="font-semibold text-rose-900 dark:text-rose-300 flex items-center gap-2"><span class="text-xl">📝</span>Notas Adicionales</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 8: REGISTRAR COMPRA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">8</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Registrar Compra</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Botón de confirmación</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 p-6 md:p-8 rounded-2xl border-2 border-violet-200 dark:border-violet-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-violet-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-violet-300 dark:border-violet-600">
          <img src="/inventario/8.png" alt="Registrar Compra" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800">
          <p class="text-sm md:text-base text-violet-800 dark:text-violet-200">En la sección de <strong>Resumen de Compra</strong> se registrará la compra mediante el botón de confirmación.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 9: HISTORIAL RÁPIDO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">9</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Historial Rápido</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Últimas 20 compras</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30 p-6 md:p-8 rounded-2xl border-2 border-lime-200 dark:border-lime-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-lime-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-lime-300 dark:border-lime-600">
          <img src="/inventario/9.png" alt="Historial Rápido" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-lime-200 dark:border-lime-800">
          <p class="text-sm md:text-base text-lime-800 dark:text-lime-200">Abajo de la sección de Resumen, en la <strong>parte inferior derecha</strong>, se encuentra el <strong>Historial "Rápido"</strong> que refleja las <strong>últimas 20 compras realizadas</strong>.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 10: CREAR PRODUCTO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">10</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Crear Producto</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Para productos no registrados</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 p-6 md:p-8 rounded-2xl border-2 border-sky-200 dark:border-sky-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-sky-300 dark:border-sky-600">
          <img src="/inventario/10.png" alt="Botón Crear Producto" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-sky-200 dark:border-sky-800">
          <p class="text-sm md:text-base text-sky-800 dark:text-sky-200">En caso de querer registrar un producto que <strong>no esté en el inventario</strong>, acudir al botón <strong>"+Crear Producto"</strong>.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 11: REGISTRO RÁPIDO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">11</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Registro Rápido</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Unidad de medida</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 md:p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-orange-300 dark:border-orange-600">
          <img src="/inventario/11.png" alt="Registro Rápido Producto" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
          <p class="text-sm md:text-base text-orange-800 dark:text-orange-200">Este botón abrirá una <strong>ventana de registro rápido de producto</strong>, en el cual podrás indicar la <strong>unidad de medida</strong> y datos básicos.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 12: HISTORIAL COMPLETO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">12</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Botón Historial</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Superior derecha ventana</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-pink-300 dark:border-pink-600">
          <img src="/inventario/12.png" alt="Botón Historial" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-pink-200 dark:border-pink-800">
          <p class="text-sm md:text-base text-pink-800 dark:text-pink-200">Para visualizar el <strong>historial de compras completo</strong>, acudir al botón <strong>"Historial"</strong> en la parte superior derecha de la ventana principal.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 13: FILTROS HISTORIAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">13</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Filtros de Historial</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Todas las compras</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-red-300 dark:border-red-600">
          <img src="/inventario/13.png" alt="Filtros Historial Compras" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-red-200 dark:border-red-800 space-y-3">
          <p class="text-sm md:text-base text-red-800 dark:text-red-200 mb-3">Aquí podrás <strong>visualizar todas las compras hechas</strong>, filtrándolas por:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded"><span>📅</span><span>Periodo</span></div>
            <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded"><span>📦</span><span>Producto</span></div>
            <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded"><span>📊</span><span>Cantidades</span></div>
            <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded"><span>📏</span><span>Unidades</span></div>
            <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 p-2 rounded"><span>🧾</span><span>Estado Fiscal</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">📦 Control Total de Compras</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🔍</span><div><p class="font-bold text-lg mb-1">Búsqueda Inteligente</p><p class="text-sm text-blue-100">20 productos con coincidencias</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📊</span><div><p class="font-bold text-lg mb-1">Stock Automático</p><p class="text-sm text-blue-100">Afecta inventario en tiempo real</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🧾</span><div><p class="font-bold text-lg mb-1">Info Fiscal Opcional</p><p class="text-sm text-blue-100">Datos proveedor recomendados</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📝</span><div><p class="font-bold text-lg mb-1">Historial Rápido</p><p class="text-sm text-blue-100">Últimas 20 compras</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">➕</span><div><p class="font-bold text-lg mb-1">Crear Producto</p><p class="text-sm text-blue-100">Registro rápido desde aquí</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🎯</span><div><p class="font-bold text-lg mb-1">Filtros Avanzados</p><p class="text-sm text-blue-100">5 criterios de búsqueda</p></div></div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};