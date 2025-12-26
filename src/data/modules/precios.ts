export const precios = {
  title: "Módulo Gestión de Precios",
  icon: "DollarSign",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">💰</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Gestión de Precios</h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Establece precios por grupo de clientes, bloquea productos críticos y <span class="font-bold text-yellow-300">analiza márgenes</span>. Cada modificación manual afecta solo al grupo seleccionado.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">🏢</span>
              <p class="text-sm font-bold text-gray-900">Por grupo de clientes</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">⚡</span>
              <p class="text-sm font-bold text-gray-900">Búsqueda en tiempo real</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 inline-block">
            <p class="text-sm text-yellow-100 flex items-center gap-2">
              <span class="text-lg">⚠️</span>
              <span><strong>IMPORTANTE:</strong> Modificaciones manuales afectan solo al grupo seleccionado, NO a través de exportación de cotización</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">1</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Editor de precios</p></div>
    </div>
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/precios/1.png" alt="Ventana Principal Editor Precios" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
        <p class="font-semibold text-emerald-900 dark:text-emerald-300 mb-3 flex items-center gap-2"><span class="text-xl">ℹ️</span>Vista General:</p>
        <p class="text-sm md:text-base text-emerald-800 dark:text-emerald-200"><strong>Editor de Precios</strong> - Ventana principal con varias características integradas.</p>
      </div>
    </div>
  </section>

  <!-- IMG 2: GRUPO CLIENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">2</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Visualización Grupo Clientes</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Selector de grupo</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/precios/2.png" alt="Visualización Grupo Clientes" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200">1. <strong>Visualización de grupo de clientes</strong> - Selector para elegir qué grupo ver y modificar precios.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 3: BÚSQUEDA TIEMPO REAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">3</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Búsqueda en Tiempo Real</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Localizar productos</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/precios/3.png" alt="Búsqueda Tiempo Real Producto" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200">2. <strong>Búsqueda en tiempo real de producto</strong> - Localiza productos instantáneamente mientras escribes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 4: INFO TIPO CLIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">4</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Info Tipo Cliente</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Descuento aplicado</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/precios/4.png" alt="Información Tipo Cliente" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">3. <strong>Información del tipo de cliente seleccionado</strong> - Dependiendo del descuento con el que cuente el grupo.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 5: TRES BOTONES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">5</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tres Botones de Acción</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Agregar, Editar, Eliminar</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/precios/5.png" alt="Tres Botones de Acción" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 space-y-3">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200 mb-3">Cuenta con <strong>tres botones</strong> principales:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
              <p class="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2"><span class="text-xl">➕</span>Agregar Producto</p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
              <p class="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2"><span class="text-xl">✏️</span>Editar Nombre</p>
            </div>
            <div class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
              <p class="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2"><span class="text-xl">🗑️</span>Eliminar Producto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 6: AGREGAR PRODUCTO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">6</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Agregar Producto</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Misma función que gestión compras</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/precios/6.png" alt="Agregar Producto" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
          <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200"><strong>Agregar Producto</strong> tiene la misma función que en Gestión de Compras: agregar un producto y su unidad de medida.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 7: SELECCIONAR PRODUCTO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">7</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Seleccionar Producto</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Antes de editar</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/precios/7.png" alt="Seleccionar Producto para Editar" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm md:text-base text-teal-800 dark:text-teal-200">Para <strong>editar un producto</strong>, primero se debe <strong>seleccionar el producto</strong> de la lista.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMG 8: CONFIRMACIÓN CAMBIO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">8</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Confirmación Cambio</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Mensaje de éxito</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/precios/8.png" alt="Confirmación Cambio Nombre" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200 mb-3">Al momento de <strong>cambiar el nombre del producto</strong>, CHUMI indicará que fue <strong>exitoso el cambio</strong>.</p>
          <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <p class="text-sm text-green-700 dark:text-green-300 flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>Confirmación visual del sistema para asegurar que los cambios se guardaron correctamente</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">💰 Control Total de Precios</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🏢</span><div><p class="font-bold text-lg mb-1">Por Grupo</p><p class="text-sm text-emerald-100">Modificaciones solo al grupo seleccionado</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">⚡</span><div><p class="font-bold text-lg mb-1">Tiempo Real</p><p class="text-sm text-emerald-100">Búsqueda instantánea</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">💡</span><div><p class="font-bold text-lg mb-1">Info Descuento</p><p class="text-sm text-emerald-100">Visualización del descuento aplicado</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">➕</span><div><p class="font-bold text-lg mb-1">Agregar Productos</p><p class="text-sm text-emerald-100">Como en gestión de compras</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">✏️</span><div><p class="font-bold text-lg mb-1">Editar Nombres</p><p class="text-sm text-emerald-100">Con confirmación de éxito</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🗑️</span><div><p class="font-bold text-lg mb-1">Eliminar</p><p class="text-sm text-emerald-100">Gestión completa de productos</p></div></div>
        </div>
      </div>
      <div class="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/30">
        <p class="text-xl md:text-2xl font-bold text-white text-center mb-3 flex items-center justify-center gap-3">
          <span class="text-3xl">⚠️</span>
          Recordatorio Importante
        </p>
        <p class="text-white text-center text-lg">
          Cada modificación manual de precio se aplicará <strong>únicamente para el grupo de cliente seleccionado</strong>, NO a través de exportación de cotización.
        </p>
      </div>
    </div>
  </section>
</div>
  `,
};