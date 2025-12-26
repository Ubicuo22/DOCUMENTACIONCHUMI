export const cotizaciones = {
  title: "Módulo Cotizaciones",
  icon: "ClipboardList",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO INTRO MODERNO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">📋</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Importación de Cotizaciones
          </h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Importa cotizaciones de proveedores en <span class="font-bold text-yellow-300">PDF</span>. Actualiza precios automáticamente sin tocar inventario. Mantén tus precios siempre <span class="font-bold text-yellow-300">frescos y competitivos</span>.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">💰</span>
              <p class="text-sm font-bold text-gray-900">Solo actualiza PRECIOS</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">📦</span>
              <p class="text-sm font-bold text-gray-900">Stock intacto</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 inline-block">
            <p class="text-sm text-yellow-100 flex items-center gap-2">
              <span class="text-lg">⏱️</span>
              <span><strong>Tiempo de proceso:</strong> Depende de la estabilidad de tu conexión a internet</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        1
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana de Importación</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Accede al módulo de cotizaciones</p>
      </div>
    </div>
    
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/cotizaciones/1.png" alt="Ventana de Importación de Cotizaciones" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <p class="font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
          <span class="text-xl">ℹ️</span>
          Función Principal:
        </p>
        <ul class="space-y-2 text-sm md:text-base text-blue-800 dark:text-blue-200">
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span><strong>Importación masiva de precios</strong> a un grupo de clientes específico</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span><strong>NO afecta el stock</strong> - Solo actualiza precios de venta</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>Requiere <strong>PDF con formato establecido</strong> para procesamiento correcto</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PASO 2: SELECCIONAR PDF -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        2
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Seleccionar PDF</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Carga el archivo con los precios actualizados</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📂</span>
          <h3 class="text-xl md:text-2xl font-bold text-green-900 dark:text-green-300">Clic en "Seleccionar PDF"</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/cotizaciones/2.png" alt="Botón Seleccionar PDF" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">
            Haz clic en el botón "Seleccionar PDF" para abrir el explorador de archivos y elegir el documento con los precios actualizados de tu proveedor.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: ARCHIVO SELECCIONADO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        3
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Archivo Seleccionado</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Confirmación del archivo cargado</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">✅</span>
          <h3 class="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-300">Archivo Cargado</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/cotizaciones/3.png" alt="Archivo Seleccionado" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200">
            El sistema muestra el nombre del archivo seleccionado que contiene los precios actualizados. Verifica que sea el correcto antes de continuar.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: CONFIRMACIÓN DE FORMATO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        4
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Confirmación de Formato</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">El módulo valida la estructura del PDF</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🔍</span>
          <h3 class="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-300">Validación Automática</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/cotizaciones/4.png" alt="Confirmación de Formato" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 space-y-3">
          <p class="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2">
            <span class="text-xl">📋</span>
            El módulo confirma:
          </p>
          <ul class="space-y-2 text-sm md:text-base text-amber-800 dark:text-amber-200">
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold flex-shrink-0">✓</span>
              <span>El formato del PDF es correcto</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold flex-shrink-0">✓</span>
              <span>Las columnas están bien estructuradas</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-600 font-bold flex-shrink-0">✓</span>
              <span>Los datos pueden ser procesados</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 5: SELECCIONAR CLIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        5
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Seleccionar Cliente</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Elige el grupo que recibirá los precios actualizados</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">👥</span>
          <h3 class="text-xl md:text-2xl font-bold text-indigo-900 dark:text-indigo-300">Asignar Grupo de Clientes</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/cotizaciones/5.png" alt="Seleccionar Cliente" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 space-y-3">
          <p class="font-semibold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <span class="text-xl">⚠️</span>
            Importante:
          </p>
          <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200">
            Selecciona cuidadosamente el cliente o grupo de clientes al que quieres otorgarle estos precios actualizados. <strong>Los precios solo se aplicarán a este grupo seleccionado.</strong>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 6: PROCESAR PEDIDO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        6
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Procesar Cotización</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Inicia el análisis del archivo</p>
      </div>
    </div>
    
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <div class="mb-6">
        <div class="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span class="text-2xl">⚙️</span>
          <span>Procesar Pedido</span>
        </div>
      </div>
      
      <div class="overflow-hidden rounded-xl shadow-2xl mb-6 border-2 border-gray-300 dark:border-gray-600">
        <img src="/cotizaciones/6.png" alt="Procesando Cotización" class="w-full"/>
      </div>
      
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <p class="font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
          <span class="text-xl">🔄</span>
          Durante el procesamiento:
        </p>
        <ul class="space-y-2 text-sm md:text-base text-blue-800 dark:text-blue-200">
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>El módulo identificará cada producto en el PDF</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>Extraerá los precios correspondientes</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>Comparará con los productos existentes en tu inventario</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PASO 7: RESULTADOS DEL PROCESAMIENTO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        7
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Resultados del Procesamiento</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Revisa los cambios propuestos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📊</span>
          <h3 class="text-xl md:text-2xl font-bold text-emerald-900 dark:text-emerald-300">Resumen de Cambios</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-emerald-300 dark:border-emerald-600">
          <img src="/cotizaciones/7.png" alt="Resultados del Procesamiento" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 space-y-4">
          <p class="font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 text-lg">
            <span class="text-2xl">✅</span>
            El módulo muestra:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
              <p class="font-bold text-emerald-900 dark:text-emerald-300 mb-2 flex items-center gap-2">
                <span class="text-xl">🔄</span>
                Productos a Actualizar
              </p>
              <p class="text-sm text-emerald-800 dark:text-emerald-200">
                Lista de productos existentes cuyos precios serán modificados
              </p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                <span class="text-xl">✨</span>
                Productos Nuevos
              </p>
              <p class="text-sm text-blue-800 dark:text-blue-200">
                Productos que no existen y serán creados
              </p>
            </div>
          </div>
          <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <p class="font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
              <span class="text-xl">💰</span>
              Detalles del Precio Final
            </p>
            <p class="text-sm text-amber-800 dark:text-amber-200">
              Precio base + descuentos especiales del grupo (si aplica)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 8: APLICAR CAMBIOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        8
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Aplicar Cambios</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Confirma y ejecuta las actualizaciones</p>
      </div>
    </div>
    
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <div class="mb-6">
        <div class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span class="text-2xl">✅</span>
          <span>Aplicar Cambios</span>
        </div>
      </div>
      
      <div class="overflow-hidden rounded-xl shadow-2xl mb-6 border-2 border-gray-300 dark:border-gray-600">
        <img src="/cotizaciones/8.png" alt="Botón Aplicar Cambios" class="w-full"/>
      </div>
      
      <div class="bg-green-50 dark:bg-green-900/20 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
        <p class="text-sm md:text-base text-green-800 dark:text-green-200">
          Una vez verificados todos los precios y cambios propuestos, haz clic en el botón verde <strong>"Aplicar Cambios"</strong> para iniciar el proceso de actualización.
        </p>
      </div>
    </div>
  </section>

  <!-- PASO 9: PRODUCTOS SIN PRECIO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        9
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Productos sin Precio</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Alerta de productos incompletos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 md:p-8 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">⚠️</span>
          <h3 class="text-xl md:text-2xl font-bold text-yellow-900 dark:text-yellow-300">Alerta de Productos</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-yellow-300 dark:border-yellow-600">
          <img src="/cotizaciones/9.png" alt="Productos sin Precio" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 space-y-3">
          <p class="font-semibold text-yellow-900 dark:text-yellow-300 flex items-center gap-2">
            <span class="text-xl">📋</span>
            Información:
          </p>
          <p class="text-sm md:text-base text-yellow-800 dark:text-yellow-200">
            El módulo indicará los productos que se encuentran <strong>sin precio en la cotización</strong>. Estos productos no podrán ser procesados hasta que se complete su información.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 10: OPCIONES DE CONFIRMACIÓN -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        10
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Opciones de Confirmación</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Decide cómo proceder</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🔀</span>
          <h3 class="text-xl md:text-2xl font-bold text-red-900 dark:text-red-300">Tres Opciones Disponibles</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-red-300 dark:border-red-600">
          <img src="/cotizaciones/10.png" alt="Opciones de Confirmación" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Confirmar -->
          <div class="bg-green-50 dark:bg-green-900/20 p-4 md:p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
            <p class="font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2 text-lg">
              <span class="text-2xl">✅</span>
              Confirmar
            </p>
            <p class="text-sm text-green-800 dark:text-green-200">
              Procede con la importación y aplica todos los cambios
            </p>
          </div>

          <!-- Retroceder -->
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
            <p class="font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2 text-lg">
              <span class="text-2xl">⬅️</span>
              Retroceder
            </p>
            <p class="text-sm text-blue-800 dark:text-blue-200">
              Vuelve al paso anterior para revisar o ajustar
            </p>
          </div>

          <!-- Cancelar -->
          <div class="bg-red-50 dark:bg-red-900/20 p-4 md:p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
            <p class="font-bold text-red-900 dark:text-red-300 mb-2 flex items-center gap-2 text-lg">
              <span class="text-2xl">❌</span>
              Cancelar
            </p>
            <p class="text-sm text-red-800 dark:text-red-200">
              Cancela todo el proceso sin aplicar cambios
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 11: CONFIRMACIÓN FINAL Y PROCESO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        11
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Importación Exitosa</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Proceso completado correctamente</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🎉</span>
          <h3 class="text-xl md:text-2xl font-bold text-emerald-900 dark:text-emerald-300">Proceso Completado</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-emerald-300 dark:border-emerald-600">
          <img src="/cotizaciones/11.png" alt="Importación Exitosa" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 space-y-4">
          <p class="font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2 text-lg">
            <span class="text-2xl">ℹ️</span>
            Confirmación Final:
          </p>
          <div class="space-y-3">
            <div class="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
              <p class="text-sm md:text-base text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                <span class="text-emerald-600 font-bold flex-shrink-0">📊</span>
                <span>Indica la <strong>cantidad de productos a actualizar</strong></span>
              </p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <p class="text-sm md:text-base text-blue-800 dark:text-blue-200 flex items-start gap-2">
                <span class="text-blue-600 font-bold flex-shrink-0">📦</span>
                <span>Aclara que <strong>NO se modifica el stock</strong> de estos productos</span>
              </p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
              <p class="text-sm md:text-base text-purple-800 dark:text-purple-200 flex items-start gap-2">
                <span class="text-purple-600 font-bold flex-shrink-0">👥</span>
                <span>Confirma que los precios <strong>solo se aplicarán al cliente seleccionado</strong></span>
              </p>
            </div>
          </div>
          
          <div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700 mt-4">
            <p class="font-semibold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2">
              <span class="text-xl">⏱️</span>
              Tiempo de Procesamiento:
            </p>
            <p class="text-sm text-amber-800 dark:text-amber-200 mb-2">
              El programa tardará entre <strong>20 segundos y 2 minutos</strong> en aplicar todos los cambios, dependiendo de la cantidad de productos.
            </p>
            <p class="text-sm text-amber-700 dark:text-amber-300 flex items-center gap-2">
              <span class="text-base">🌐</span>
              <strong>Nota:</strong> El tiempo también depende de la estabilidad de tu conexión a internet
            </p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700 mt-4">
            <p class="font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2 text-lg">
              <span class="text-2xl">✅</span>
              Importación Exitosa
            </p>
            <p class="text-sm text-green-800 dark:text-green-200">
              Una vez aplicados todos los cambios, el sistema indicará que la <strong>importación fue exitosa</strong>. La ventana se cerrará automáticamente mientras sube los productos a la base de datos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FORMATO REQUERIDO DEL PDF -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">📋 Formato Requerido del PDF</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Estructura necesaria para procesamiento correcto</p>
    </div>
    
    <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg">
      <h3 class="text-2xl md:text-3xl font-bold text-amber-900 dark:text-amber-300 mb-6 flex items-center gap-3">
        <span class="text-4xl">✓</span>
        Formato de 3 Columnas
      </h3>
      
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700 text-center">
          <p class="font-bold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Columna 1</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Nombre del Producto</p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700 text-center">
          <p class="font-bold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Columna 2</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Unidad de Medida</p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700 text-center">
          <p class="font-bold text-gray-900 dark:text-white mb-2 text-base md:text-lg">Columna 3</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Precio</p>
        </div>
      </div>

      <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700 overflow-x-auto">
        <table class="w-full text-sm md:text-base font-mono">
          <thead>
            <tr class="border-b-2 border-amber-200 dark:border-amber-800">
              <th class="text-left py-3 px-2 md:px-4 text-amber-900 dark:text-amber-300">Producto</th>
              <th class="text-left py-3 px-2 md:px-4 text-amber-900 dark:text-amber-300">Unidad</th>
              <th class="text-left py-3 px-2 md:px-4 text-amber-900 dark:text-amber-300">Precio</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 dark:text-gray-300">
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="py-3 px-2 md:px-4">Café Grano Fino</td>
              <td class="py-3 px-2 md:px-4">kg</td>
              <td class="py-3 px-2 md:px-4">28.50</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="py-3 px-2 md:px-4">Té Premium</td>
              <td class="py-3 px-2 md:px-4">kg</td>
              <td class="py-3 px-2 md:px-4">45.00</td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="py-3 px-2 md:px-4">Leche Descremada</td>
              <td class="py-3 px-2 md:px-4">lt</td>
              <td class="py-3 px-2 md:px-4">12.50</td>
            </tr>
            <tr>
              <td class="py-3 px-2 md:px-4">Pan Integral</td>
              <td class="py-3 px-2 md:px-4">pieza</td>
              <td class="py-3 px-2 md:px-4 text-red-500">(sin precio)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Evita estos problemas frecuentes</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Error 1 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          PDF con formato extraño
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          El sistema no puede leer la estructura
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>Asegúrate que sea tabla con 3 columnas claras</span>
        </p>
      </div>

      <!-- Error 2 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Especificar grupo incorrecto
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Precio va a grupo equivocado
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>Revisa bien qué grupo debe aplicar</span>
        </p>
      </div>

      <!-- Error 3 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Importar sin revisar cambios
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Se aplican cambios no deseados
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>SIEMPRE revisa qué cambios propone antes de aplicar</span>
        </p>
      </div>

      <!-- Error 4 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Confundir nombres de productos
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          PDF: "Café Premium" vs Sistema: "Café Grano"
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>Sistema creará nuevo si no detecta coincidencia. Revisa en paso 7</span>
        </p>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL IMPORTANTE -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">🔑 Lo MÁS Importante</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">💰</span>
            <div>
              <p class="font-bold text-lg mb-1">Solo actualiza PRECIOS</p>
              <p class="text-sm text-blue-100">Stock y ventas NO se modifican</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">✅</span>
            <div>
              <p class="font-bold text-lg mb-1">REVISA antes de importar</p>
              <p class="text-sm text-blue-100">Paso 7 es crítico</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📋</span>
            <div>
              <p class="font-bold text-lg mb-1">PDF con 3 columnas claras</p>
              <p class="text-sm text-blue-100">Nombre | Unidad | Precio</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">👥</span>
            <div>
              <p class="font-bold text-lg mb-1">Especifica grupos correctamente</p>
              <p class="text-sm text-blue-100">Mayorista/Minorista/Todos</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📊</span>
            <div>
              <p class="font-bold text-lg mb-1">Completamente auditado</p>
              <p class="text-sm text-blue-100">Hay registro de quién/cuándo/qué cambió</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🔒</span>
            <div>
              <p class="font-bold text-lg mb-1">Totalmente seguro</p>
              <p class="text-sm text-blue-100">Proceso reversible y controlado</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/30">
        <p class="text-xl md:text-2xl font-bold text-white text-center mb-3 flex items-center justify-center gap-3">
          <span class="text-3xl">⏱️</span>
          Tiempo de Procesamiento
        </p>
        <p class="text-lg text-center text-white mb-2">
          Entre 20 segundos y 2 minutos dependiendo del número de productos
        </p>
        <p class="text-base text-center text-yellow-200 flex items-center justify-center gap-2">
          <span class="text-xl">🌐</span>
          <span>También depende de la estabilidad de tu conexión a internet</span>
        </p>
      </div>
    </div>
  </section>
</div>
  `,
};