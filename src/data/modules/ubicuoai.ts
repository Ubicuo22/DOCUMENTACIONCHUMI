export const ubicuoai = {
  title: "Módulo UbicuoAI",
  icon: "Bot",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">🤖</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Módulo UbicuoAI</h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Tu asistente inteligente que convierte listados desordenados en pedidos estructurados en SEGUNDOS.
            Procesa 20+ productos con aprendizaje automático y búsqueda inteligente.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">⚡</span>
              <p class="text-sm font-bold text-gray-900">20-30 min → 6-7 min</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">🎯</span>
              <p class="text-sm font-bold text-gray-900">IA avanzada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PANTALLA PRINCIPAL -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">🖥️ Pantalla Principal</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Vista general del módulo UbicuoAI:</p>
    
    <div class="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
      <img src="/docs/1.png" alt="Pantalla Principal UbicuoAI" class="w-full rounded-lg shadow-lg mb-4"/>
      <p class="text-gray-700 dark:text-gray-300 text-center">Vista completa de la interfaz de UbicuoAI</p>
    </div>
  </section>

  <!-- PASO 1: SELECCIÓN DE GRUPO Y CLIENTE -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">1️⃣ Selección de Grupo y Cliente</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Lo primero que debes hacer es seleccionar el grupo y cliente al que registrarás el pedido:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">📁 Seleccionar Grupo</h3>
        <img src="/docs/2.png" alt="Selección de Grupo" class="w-full rounded-lg shadow-lg mb-4"/>
        <p class="text-blue-800 dark:text-blue-200">Despliega el menú de grupos y selecciona el grupo correspondiente al pedido.</p>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h3 class="text-xl font-bold text-green-900 dark:text-green-300 mb-4">👤 Seleccionar Cliente</h3>
        <img src="/docs/3.png" alt="Selección de Cliente" class="w-full rounded-lg shadow-lg mb-4"/>
        <p class="text-green-800 dark:text-green-200">Una vez seleccionado el grupo, elige el cliente específico para el pedido.</p>
      </div>
    </div>
  </section>

  <!-- PASO 2: PEGAR PEDIDO -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">2️⃣ Ingresar el Pedido</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Pega el pedido en la sección de texto:</p>
    
    <div class="space-y-6">
      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 class="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">📝 Sección de Texto del Pedido</h3>
        <img src="/docs/4.png" alt="Sección de Texto" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div class="font-semibold text-purple-900 dark:text-purple-300">⚠️ Importante:</div>
          <div>• Cada sección o producto debe estar en una línea separada</div>
          <div>• Esto asegura que la IA sea precisa en el procesamiento</div>
        </div>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
        <h3 class="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">⌨️ Pegando el Pedido</h3>
        <img src="/docs/5.png" alt="Pegando Pedido" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm space-y-2">
          <div class="font-semibold text-orange-900 dark:text-orange-300">💡 Ayuda rápida:</div>
          <div>• Ctrl + A: Seleccionar todo el texto</div>
          <div>• Ctrl + V: Pegar el pedido copiado</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: PROCESAR O LIMPIAR -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">3️⃣ Procesar o Limpiar</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Tienes dos opciones después de pegar el pedido:</p>
    
    <div class="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
      <img src="/docs/6.png" alt="Botones de Acción" class="w-full rounded-lg shadow-lg mb-6"/>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
          <h3 class="text-xl font-bold text-green-900 dark:text-green-300 mb-3">🟢 Procesar Pedido</h3>
          <p class="text-green-800 dark:text-green-200">Al dar clic en el botón verde, la IA procesará el pedido y desplegará los ítems identificados.</p>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
          <h3 class="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🟣 Limpiar</h3>
          <p class="text-purple-800 dark:text-purple-200">El botón morado limpiará toda la zona de texto del pedido si necesitas empezar de nuevo.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: GESTIÓN DE SECCIONES -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">4️⃣ Gestión de Secciones</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Después de procesar, se desplegará la gestión de secciones:</p>
    
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">📋 Vista de Secciones</h3>
        <img src="/docs/7.png" alt="Gestión de Secciones" class="w-full rounded-lg shadow-lg mb-4"/>
        <p class="text-blue-800 dark:text-blue-200 mb-3">Aquí podrás seleccionar las secciones que necesites para tu pedido.</p>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h3 class="text-xl font-bold text-green-900 dark:text-green-300 mb-4">✅ Seleccionar Secciones</h3>
        <img src="/docs/8.png" alt="Seleccionar Secciones" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div>• Marca las secciones que necesites</div>
          <div>• Si requieres todas, selecciónalas todas</div>
        </div>
      </div>

      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 class="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">✏️ Editar Nombre de Sección</h3>
        <img src="/docs/9.png" alt="Editar Sección" class="w-full rounded-lg shadow-lg mb-4"/>
        <p class="text-purple-800 dark:text-purple-200 mb-3">Haz doble clic sobre una sección para modificar su nombre si es necesario.</p>
      </div>

      <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
        <h3 class="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">💾 Confirmar Secciones</h3>
        <img src="/docs/10.png" alt="Confirmar Secciones" class="w-full rounded-lg shadow-lg mb-4"/>
        <p class="text-orange-800 dark:text-orange-200">Una vez modificadas las secciones necesarias, confirma para continuar con el procesamiento.</p>
      </div>
    </div>
  </section>

  <!-- PASO 5: TIPOS DE RECUADROS -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">5️⃣ Tipos de Recuadros de Productos</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Durante el procesamiento encontrarás 5 tipos de recuadros:</p>
    
    <div class="space-y-6">
      <!-- TIPO 1: SECCIÓN -->
      <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">1️⃣</span>
          <h3 class="text-2xl font-bold text-purple-900 dark:text-purple-300">Recuadro de Sección</h3>
        </div>
        <img src="/docs/11.png" alt="Recuadro de Sección" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div class="font-semibold text-purple-900 dark:text-purple-300">🟣 Características:</div>
          <div>• Contorno morado</div>
          <div>• Estático (no editable)</div>
          <div>• Marca el desglose de productos de la sección</div>
        </div>
      </div>

      <!-- TIPO 2: MATCH PERFECTO -->
      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">2️⃣</span>
          <h3 class="text-2xl font-bold text-green-900 dark:text-green-300">Match Perfecto (Verde)</h3>
        </div>
        <img src="/docs/12.png" alt="Match Perfecto" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div class="font-semibold text-green-900 dark:text-green-300">🟢 Significado:</div>
          <div>• La IA identificó correctamente el producto</div>
          <div>• La cantidad fue detectada con precisión</div>
          <div>• ✅ No requiere revisión (95-100% confianza)</div>
        </div>
      </div>

      <!-- TIPO 3: PRODUCTO INCIERTO -->
      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">3️⃣</span>
          <h3 class="text-2xl font-bold text-blue-900 dark:text-blue-300">Producto Incierto (Azul)</h3>
        </div>
        <img src="/docs/13.png" alt="Producto Incierto" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
          <div class="font-semibold text-blue-900 dark:text-blue-300">🔵 Significado:</div>
          <div>• La IA no está completamente segura del producto</div>
          <div>• ⚠️ Requiere confirmación o corrección</div>
          <div>• Puedes confirmar si es correcto o cambiarlo por otro</div>
        </div>
      </div>

      <!-- TIPO 4: SIN MATCH -->
      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">4️⃣</span>
          <h3 class="text-2xl font-bold text-red-900 dark:text-red-300">Sin Match (Rojo)</h3>
        </div>
        <img src="/docs/14.png" alt="Sin Match" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
          <div class="font-semibold text-red-900 dark:text-red-300">🔴 Significado:</div>
          <div>• La IA no encontró coincidencia en la base de datos</div>
          <div>• El producto puede no existir en inventario</div>
          <div>• 🚨 Debes agregarlo en el módulo de Inventario</div>
        </div>
      </div>

      <!-- TIPO 5: TOTAL -->
      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-4xl">5️⃣</span>
          <h3 class="text-2xl font-bold text-indigo-900 dark:text-indigo-300">Total del Pedido</h3>
        </div>
        <img src="/docs/15.png" alt="Total del Pedido" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-indigo-200 dark:border-indigo-800 text-sm space-y-2">
          <div class="font-semibold text-indigo-900 dark:text-indigo-300">💰 Características:</div>
          <div>• Siempre aparece al final del pedido</div>
          <div>• Muestra el total aproximado del pedido</div>
          <div>• Suma automática de todos los productos</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 6: EDICIÓN DE PRODUCTOS -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">6️⃣ Edición de Productos</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Cada producto tiene opciones de edición para asegurar la precisión:</p>
    
    <div class="space-y-6">
      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
        <h3 class="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4">🔢 Cambiar Cantidad o Unidad</h3>
        <img src="/docs/16.png" alt="Cambiar Cantidad" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-2">
          <div>• Cada producto tiene tablas desplegables</div>
          <div>• Puedes modificar la cantidad del producto</div>
          <div>• Puedes cambiar la unidad de medida</div>
          <div>• ✅ Esto reduce errores al generar recibos</div>
        </div>
      </div>

      <div class="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
        <h3 class="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">💵 Precio y Subtotal</h3>
        <img src="/docs/17.png" alt="Precio y Subtotal" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-teal-200 dark:border-teal-800 text-sm space-y-2">
          <div class="font-semibold text-teal-900 dark:text-teal-300">Información visible:</div>
          <div>• Precio establecido para el cliente seleccionado</div>
          <div>• Subtotal calculado automáticamente</div>
          <div>• Actualización en tiempo real</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 7: CAMBIAR PRODUCTO Y ENTRENAMIENTO -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">7️⃣ Cambiar Producto y Entrenar IA</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">El botón "Cambiar producto" sirve para entrenar a la inteligencia artificial:</p>
    
    <div class="space-y-6">
      <div class="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border-2 border-pink-300 dark:border-pink-700">
        <h3 class="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">🔄 Botón Cambiar Producto</h3>
        <img src="/docs/18.png" alt="Cambiar Producto" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-pink-200 dark:border-pink-800 text-sm space-y-2">
          <div class="font-semibold text-pink-900 dark:text-pink-300">📚 Función de Entrenamiento:</div>
          <div>• Úsalo cuando la IA no haya procesado correctamente</div>
          <div>• Ayuda a mejorar futuras detecciones</div>
          <div>• La IA aprende de cada corrección</div>
        </div>
      </div>

      <div class="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
        <h3 class="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">💡 Productos Sugeridos</h3>
        <img src="/docs/19.png" alt="Productos Sugeridos" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-cyan-200 dark:border-cyan-800 text-sm space-y-2">
          <div class="font-semibold text-cyan-900 dark:text-cyan-300">Ventana de Sugerencias:</div>
          <div>• Muestra variantes específicas del producto</div>
          <div>• Permite elegir la opción correcta</div>
          <div>• Se despliega al hacer clic en "Cambiar producto"</div>
        </div>
      </div>

      <div class="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-lg border-2 border-lime-300 dark:border-lime-700">
        <h3 class="text-xl font-bold text-lime-900 dark:text-lime-300 mb-4">🔍 Buscador Manual</h3>
        <img src="/docs/20.png" alt="Buscador Manual" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-lime-200 dark:border-lime-800 text-sm space-y-2">
          <div class="font-semibold text-lime-900 dark:text-lime-300">Búsqueda avanzada:</div>
          <div>• Si el producto no aparece en sugerencias</div>
          <div>• Usa el buscador para encontrarlo manualmente</div>
          <div>• Funciona con palabras clave y SKU</div>
        </div>
      </div>

      <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-2 border-amber-300 dark:border-amber-700">
        <h3 class="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">✅ Confirmar Producto Cambiado</h3>
        <img src="/docs/21.png" alt="Confirmar Cambio" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
          <div>• Una vez seleccionado el producto correcto</div>
          <div>• Confirma el cambio</div>
          <div>• La IA aprenderá de esta corrección</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 8: CONFIRMAR Y ENVIAR -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">8️⃣ Confirmar Pedido y Enviar a Generador de Recibos</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Una vez revisado todo el pedido, envíalo al generador de recibos:</p>
    
    <div class="space-y-6">
      <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
        <h3 class="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">✅ Confirmar Producto Cambiado</h3>
        <img src="/docs/21.png" alt="Confirmar Producto Cambiado" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-sm space-y-2">
          <div class="font-semibold text-emerald-900 dark:text-emerald-300">Una vez seleccionado el producto correcto:</div>
          <div>• Confirma el cambio</div>
          <div>• La IA aprenderá de esta corrección</div>
        </div>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
        <h3 class="text-xl font-bold text-red-900 dark:text-red-300 mb-4">🗑️ Eliminar Producto</h3>
        <img src="/docs/22.png" alt="Eliminar Producto" class="w-full rounded-lg shadow-lg mb-4"/>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
          <div class="font-semibold text-red-900 dark:text-red-300">Control total sobre el pedido:</div>
          <div>• Puedes eliminar productos que no deben incluirse</div>
          <div>• Haz clic en el ícono de basurero</div>
          <div>• El pedido se actualiza automáticamente</div>
        </div>
      </div>

      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h3 class="text-xl font-bold text-green-900 dark:text-green-300 mb-4">🚀 Enviar a Generador de Recibos</h3>
        <div class="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2 mb-4">
          <div class="font-semibold text-green-900 dark:text-green-300">Antes de enviar, verifica:</div>
          <div>• Todos los productos rojos están resueltos</div>
          <div>• Productos azules tienen el artículo correcto seleccionado</div>
          <div>• Cantidades son correctas</div>
          <div>• Precios están verificados</div>
          <div>• Cliente y grupo son correctos</div>
        </div>
        <div class="bg-green-100 dark:bg-green-900/40 p-4 rounded-lg border-2 border-green-400 dark:border-green-600">
          <p class="text-green-900 dark:text-green-200 font-semibold mb-2">💾 Haz clic en "Guardar" para enviar el pedido al generador de recibos</p>
          <p class="text-sm text-green-800 dark:text-green-300">El sistema procesará el pedido y generará automáticamente el recibo con un folio único.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 9: CONFIRMACIÓN Y FOLIO -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">9️⃣ Confirmación de Pedido Generado</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">El sistema confirmará que el pedido se generó correctamente:</p>
    
    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
      <h3 class="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">✅ Pedido Enviado al Generador de Recibos</h3>
      <div class="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-3">
        <div class="font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-2">
          <span class="text-xl">🚀</span>
          Confirmación del Sistema:
        </div>
        <div>• El pedido se ha enviado exitosamente al generador de recibos</div>
        <div>• Se muestra un mensaje de confirmación</div>
        <div>• Se asigna un <strong>Folio único</strong> al pedido (ejemplo: #000009)</div>
        <div>• El folio identifica el pedido en el sistema</div>
      </div>
      <div class="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-lg border-2 border-blue-400 dark:border-blue-600 mt-4">
        <p class="text-blue-900 dark:text-blue-200 font-semibold mb-2">📋 Ejemplo de Confirmación:</p>
        <p class="text-sm text-blue-800 dark:text-blue-300">✅ Pedido enviado al generador de recibos</p>
        <p class="text-sm text-blue-800 dark:text-blue-300 font-bold">Folio asignado: #000009</p>
      </div>
    </div>
  </section>

  <!-- PASO 10: BOTÓN DE AYUDA -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">🆘 Botón de Ayuda</h2>
    <p class="text-lg text-gray-600 dark:text-gray-400">Accede a formatos, preguntas frecuentes y guías de uso:</p>
    
    <div class="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
      <h3 class="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">💚 AYUDA - Guía de Uso</h3>
      <img src="/docs/23.png" alt="Botón Ayuda" class="w-full rounded-lg shadow-lg mb-4"/>
      <div class="bg-white dark:bg-slate-900 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-sm space-y-2">
        <div class="font-semibold text-emerald-900 dark:text-emerald-300">El botón de AYUDA te proporciona:</div>
        <div>• 📄 Formatos correctos de pedidos</div>
        <div>• ❓ Preguntas frecuentes</div>
        <div>• 🤖 Forma correcta de usar la Inteligencia Artificial de CHUMI</div>
        <div>• 💡 Consejos para mejores resultados</div>
        <div>• 📚 Ejemplos de pedidos bien estructurados</div>
      </div>
      <div class="bg-emerald-100 dark:bg-emerald-900/40 p-4 rounded-lg border-2 border-emerald-400 dark:border-emerald-600 mt-4">
        <p class="text-emerald-900 dark:text-emerald-200 font-semibold">Haz clic en el botón verde de AYUDA 🆘 en la parte superior de UbicuoAI para acceder a toda la información de soporte.</p>
      </div>
    </div>
  </section>

  <!-- MEJORES PRÁCTICAS -->
  <section class="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
    <h2 class="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-6">📚 Mejores Prácticas</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <p class="text-lg font-bold text-green-900 dark:text-green-300 mb-4">✅ SÍ HACER</p>
        <ul class="space-y-3 text-sm text-green-800 dark:text-green-200">
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Pega directamente de fuentes sin editar previamente</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Mantén un producto o sección por línea</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Asegúrate que cantidad y unidad sean claros</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Usa nombres estándar y conocidos</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Revisa y corrige TODOS los azules y rojos</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✓</span>
            <span>Verifica precios antes de guardar</span>
          </li>
        </ul>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p class="text-lg font-bold text-red-900 dark:text-red-300 mb-4">❌ NO HACER</p>
        <ul class="space-y-3 text-sm text-red-800 dark:text-red-200">
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Poner todos los productos en una sola línea</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Usar cantidades vagas ("varios", "bastante", "mucho")</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Utilizar abreviaturas desconocidas o ambiguas</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Ignorar productos marcados en azul (inciertos)</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Intentar enviar con productos rojos sin resolver</span>
          </li>
          <li class="flex gap-2">
            <span class="flex-shrink-0">✗</span>
            <span>Saltarte la revisión final antes de guardar</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CONSEJOS ADICIONALES -->
  <section class="bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-indigo-200 dark:border-indigo-800">
    <h2 class="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-6">💡 Consejos para Máxima Eficiencia</h2>
    
    <div class="space-y-4 text-indigo-800 dark:text-indigo-200">
      <div class="flex gap-3">
        <span class="text-2xl flex-shrink-0">⚡</span>
        <div>
          <p class="font-semibold mb-1">Atajos de Teclado</p>
          <p class="text-sm">Usa Ctrl+A y Ctrl+V para copiar y pegar rápidamente el pedido completo.</p>
        </div>
      </div>

      <div class="flex gap-3">
        <span class="text-2xl flex-shrink-0">🎯</span>
        <div>
          <p class="font-semibold mb-1">Prioriza por Color</p>
          <p class="text-sm">Revisa primero los rojos (obligatorio), luego los azules (recomendado), y finalmente valida los verdes si tienes tiempo.</p>
        </div>
      </div>

      <div class="flex gap-3">
        <span class="text-2xl flex-shrink-0">📚</span>
        <div>
          <p class="font-semibold mb-1">Entrena el Sistema</p>
          <p class="text-sm">Cada corrección que hagas mejorará futuras detecciones. Invierte tiempo inicial para ahorrar mucho después.</p>
        </div>
      </div>

      <div class="flex gap-3">
        <span class="text-2xl flex-shrink-0">🔍</span>
        <div>
          <p class="font-semibold mb-1">Búsqueda Inteligente</p>
          <p class="text-sm">Si un producto no aparece en sugerencias, usa la barra de búsqueda. Puede encontrar variantes y productos similares.</p>
        </div>
      </div>

      <div class="flex gap-3">
        <span class="text-2xl flex-shrink-0">💾</span>
        <div>
          <p class="font-semibold mb-1">Guarda Frecuentemente</p>
          <p class="text-sm">No esperes a terminar todo el pedido. Puedes guardar secciones completas progresivamente.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
    <h2 class="text-3xl font-bold mb-6">🤖 UbicuoAI: Tu Asistente Inteligente</h2>
    
    <ul class="space-y-4 text-lg mb-8">
      <li class="flex gap-3">
        <span class="flex-shrink-0 text-2xl">🎯</span>
        <span><strong>Tú supervisas</strong> - UbicuoAI sugiere, tú decides y validas</span>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 text-2xl">✏️</span>
        <span><strong>Tú corriges</strong> - Cada ajuste mejora el sistema</span>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 text-2xl">🚀</span>
        <span><strong>Tú controlas</strong> - Qué productos y cantidades se envían</span>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 text-2xl">📚</span>
        <span><strong>Sistema aprende</strong> - De cada corrección que realizas</span>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 text-2xl">⏱️</span>
        <span><strong>Ahorras tiempo</strong> - 20-30 minutos → 6-7 minutos por pedido</span>
      </li>
    </ul>

    <div class="bg-white/20 p-6 rounded-lg border-2 border-white">
      <p class="text-xl font-bold text-center mb-3">
        Cuanto más lo uses, mejor funciona
      </p>
      <p class="text-lg text-center">
        Cada corrección es una inversión en eficiencia futura
      </p>
    </div>

    <div class="mt-6 text-center">
      <p class="text-lg opacity-90">
        ¿Necesitas ayuda? Haz clic en el botón verde de ayuda 🆘 en la parte superior de UbicuoAI
      </p>
    </div>
  </section>
</div>
  `,
};