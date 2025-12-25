export const ubicuoai = {
  title: "Módulo UbicuoAI",
  icon: "Bot",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-800/20 p-8 rounded-lg border border-violet-200 dark:border-violet-800">
    <div className="flex items-start gap-4">
      <span className="text-5xl">🤖</span>
      <div>
        <h2 className="text-3xl font-bold text-violet-900 dark:text-violet-300 mb-4">Módulo UbicuoAI</h2>
        <p className="text-violet-800 dark:text-violet-200 text-lg leading-relaxed mb-4">
          Tu asistente inteligente que convierte listados desordenados en pedidos estructurados en SEGUNDOS.
          Procesa 20+ productos con aprendizaje automático y búsqueda inteligente.
        </p>
        <p className="text-violet-800 dark:text-violet-200 font-semibold text-lg">
          ⚡ 20-30 minutos manuales → 6-7 minutos con UbicuoAI
        </p>
      </div>
    </div>
  </section>

  <!-- PANTALLA PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🖥️ Pantalla Principal</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Vista general del módulo UbicuoAI:</p>
    
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
      <img src="/docs/1.png" alt="Pantalla Principal UbicuoAI" className="w-full rounded-lg shadow-lg mb-4"/>
      <p className="text-gray-700 dark:text-gray-300 text-center">Vista completa de la interfaz de UbicuoAI</p>
    </div>
  </section>

  <!-- PASO 1: SELECCIÓN DE GRUPO Y CLIENTE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">1️⃣ Selección de Grupo y Cliente</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Lo primero que debes hacer es seleccionar el grupo y cliente al que registrarás el pedido:</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">📁 Seleccionar Grupo</h3>
        <img src="/docs/2.png" alt="Selección de Grupo" className="w-full rounded-lg shadow-lg mb-4"/>
        <p className="text-blue-800 dark:text-blue-200">Despliega el menú de grupos y selecciona el grupo correspondiente al pedido.</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">👤 Seleccionar Cliente</h3>
        <img src="/docs/3.png" alt="Selección de Cliente" className="w-full rounded-lg shadow-lg mb-4"/>
        <p className="text-green-800 dark:text-green-200">Una vez seleccionado el grupo, elige el cliente específico para el pedido.</p>
      </div>
    </div>
  </section>

  <!-- PASO 2: PEGAR PEDIDO -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">2️⃣ Ingresar el Pedido</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Pega el pedido en la sección de texto:</p>
    
    <div className="space-y-6">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">📝 Sección de Texto del Pedido</h3>
        <img src="/docs/4.png" alt="Sección de Texto" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div className="font-semibold text-purple-900 dark:text-purple-300">⚠️ Importante:</div>
          <div>• Cada sección o producto debe estar en una línea separada</div>
          <div>• Esto asegura que la IA sea precisa en el procesamiento</div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
        <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">⌨️ Pegando el Pedido</h3>
        <img src="/docs/5.png" alt="Pegando Pedido" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm space-y-2">
          <div className="font-semibold text-orange-900 dark:text-orange-300">💡 Ayuda rápida:</div>
          <div>• Ctrl + A: Seleccionar todo el texto</div>
          <div>• Ctrl + V: Pegar el pedido copiado</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: PROCESAR O LIMPIAR -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">3️⃣ Procesar o Limpiar</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Tienes dos opciones después de pegar el pedido:</p>
    
    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
      <img src="/docs/6.png" alt="Botones de Acción" className="w-full rounded-lg shadow-lg mb-6"/>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
          <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">🟢 Procesar Pedido</h3>
          <p className="text-green-800 dark:text-green-200">Al dar clic en el botón verde, la IA procesará el pedido y desplegará los ítems identificados.</p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🟣 Limpiar</h3>
          <p className="text-purple-800 dark:text-purple-200">El botón morado limpiará toda la zona de texto del pedido si necesitas empezar de nuevo.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: GESTIÓN DE SECCIONES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">4️⃣ Gestión de Secciones</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Después de procesar, se desplegará la gestión de secciones:</p>
    
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">📋 Vista de Secciones</h3>
        <img src="/docs/7.png" alt="Gestión de Secciones" className="w-full rounded-lg shadow-lg mb-4"/>
        <p className="text-blue-800 dark:text-blue-200 mb-3">Aquí podrás seleccionar las secciones que necesites para tu pedido.</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">✅ Seleccionar Secciones</h3>
        <img src="/docs/8.png" alt="Seleccionar Secciones" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div>• Marca las secciones que necesites</div>
          <div>• Si requieres todas, selecciónalas todas</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">✏️ Editar Nombre de Sección</h3>
        <img src="/docs/9.png" alt="Editar Sección" className="w-full rounded-lg shadow-lg mb-4"/>
        <p className="text-purple-800 dark:text-purple-200 mb-3">Haz doble clic sobre una sección para modificar su nombre si es necesario.</p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-700">
        <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-4">💾 Confirmar Secciones</h3>
        <img src="/docs/10.png" alt="Confirmar Secciones" className="w-full rounded-lg shadow-lg mb-4"/>
        <p className="text-orange-800 dark:text-orange-200">Una vez modificadas las secciones necesarias, confirma para continuar con el procesamiento.</p>
      </div>
    </div>
  </section>

  <!-- PASO 5: TIPOS DE RECUADROS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">5️⃣ Tipos de Recuadros de Productos</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Durante el procesamiento encontrarás 5 tipos de recuadros:</p>
    
    <div className="space-y-6">
      <!-- TIPO 1: SECCIÓN -->
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">1️⃣</span>
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300">Recuadro de Sección</h3>
        </div>
        <img src="/docs/11.png" alt="Recuadro de Sección" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div className="font-semibold text-purple-900 dark:text-purple-300">🟣 Características:</div>
          <div>• Contorno morado</div>
          <div>• Estático (no editable)</div>
          <div>• Marca el desglose de productos de la sección</div>
        </div>
      </div>

      <!-- TIPO 2: MATCH PERFECTO -->
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">2️⃣</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">Match Perfecto (Verde)</h3>
        </div>
        <img src="/docs/12.png" alt="Match Perfecto" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div className="font-semibold text-green-900 dark:text-green-300">🟢 Significado:</div>
          <div>• La IA identificó correctamente el producto</div>
          <div>• La cantidad fue detectada con precisión</div>
          <div>• ✅ No requiere revisión (95-100% confianza)</div>
        </div>
      </div>

      <!-- TIPO 3: PRODUCTO INCIERTO -->
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">3️⃣</span>
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300">Producto Incierto (Azul)</h3>
        </div>
        <img src="/docs/13.png" alt="Producto Incierto" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
          <div className="font-semibold text-blue-900 dark:text-blue-300">🔵 Significado:</div>
          <div>• La IA no está completamente segura del producto</div>
          <div>• ⚠️ Requiere confirmación o corrección</div>
          <div>• Puedes confirmar si es correcto o cambiarlo por otro</div>
        </div>
      </div>

      <!-- TIPO 4: SIN MATCH -->
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">4️⃣</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300">Sin Match (Rojo)</h3>
        </div>
        <img src="/docs/14.png" alt="Sin Match" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
          <div className="font-semibold text-red-900 dark:text-red-300">🔴 Significado:</div>
          <div>• La IA no encontró coincidencia en la base de datos</div>
          <div>• El producto puede no existir en inventario</div>
          <div>• 🚨 Debes agregarlo en el módulo de Inventario</div>
        </div>
      </div>

      <!-- TIPO 5: TOTAL -->
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-2 border-indigo-300 dark:border-indigo-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">5️⃣</span>
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">Total del Pedido</h3>
        </div>
        <img src="/docs/15.png" alt="Total del Pedido" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-indigo-200 dark:border-indigo-800 text-sm space-y-2">
          <div className="font-semibold text-indigo-900 dark:text-indigo-300">💰 Características:</div>
          <div>• Siempre aparece al final del pedido</div>
          <div>• Muestra el total aproximado del pedido</div>
          <div>• Suma automática de todos los productos</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 6: EDICIÓN DE PRODUCTOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">6️⃣ Edición de Productos</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Cada producto tiene opciones de edición para asegurar la precisión:</p>
    
    <div className="space-y-6">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
        <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-4">🔢 Cambiar Cantidad o Unidad</h3>
        <img src="/docs/16.png" alt="Cambiar Cantidad" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-2">
          <div>• Cada producto tiene tablas desplegables</div>
          <div>• Puedes modificar la cantidad del producto</div>
          <div>• Puedes cambiar la unidad de medida</div>
          <div>• ✅ Esto reduce errores al generar recibos</div>
        </div>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-2 border-teal-300 dark:border-teal-700">
        <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-4">💵 Precio y Subtotal</h3>
        <img src="/docs/17.png" alt="Precio y Subtotal" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-teal-200 dark:border-teal-800 text-sm space-y-2">
          <div className="font-semibold text-teal-900 dark:text-teal-300">Información visible:</div>
          <div>• Precio establecido para el cliente seleccionado</div>
          <div>• Subtotal calculado automáticamente</div>
          <div>• Actualización en tiempo real</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 7: CAMBIAR PRODUCTO Y ENTRENAMIENTO -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">7️⃣ Cambiar Producto y Entrenar IA</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">El botón "Cambiar producto" sirve para entrenar a la inteligencia artificial:</p>
    
    <div className="space-y-6">
      <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border-2 border-pink-300 dark:border-pink-700">
        <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">🔄 Botón Cambiar Producto</h3>
        <img src="/docs/18.png" alt="Cambiar Producto" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-pink-200 dark:border-pink-800 text-sm space-y-2">
          <div className="font-semibold text-pink-900 dark:text-pink-300">📚 Función de Entrenamiento:</div>
          <div>• Úsalo cuando la IA no haya procesado correctamente</div>
          <div>• Ayuda a mejorar futuras detecciones</div>
          <div>• La IA aprende de cada corrección</div>
        </div>
      </div>

      <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
        <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">💡 Productos Sugeridos</h3>
        <img src="/docs/19.png" alt="Productos Sugeridos" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-cyan-200 dark:border-cyan-800 text-sm space-y-2">
          <div className="font-semibold text-cyan-900 dark:text-cyan-300">Ventana de Sugerencias:</div>
          <div>• Muestra variantes específicas del producto</div>
          <div>• Permite elegir la opción correcta</div>
          <div>• Se despliega al hacer clic en "Cambiar producto"</div>
        </div>
      </div>

      <div className="bg-lime-50 dark:bg-lime-900/20 p-6 rounded-lg border-2 border-lime-300 dark:border-lime-700">
        <h3 className="text-xl font-bold text-lime-900 dark:text-lime-300 mb-4">🔍 Barra de Búsqueda</h3>
        <img src="/docs/20.png" alt="Búsqueda de Productos" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-lime-200 dark:border-lime-800 text-sm space-y-2">
          <div className="font-semibold text-lime-900 dark:text-lime-300">Si no encuentras el producto en sugerencias:</div>
          <div>• Usa la barra de búsqueda en la misma ventana</div>
          <div>• Encuentra cualquier producto de la base de datos</div>
          <div>• Búsqueda inteligente por nombre o código</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 8: GUARDAR Y ENVIAR -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">8️⃣ Guardar y Enviar a Recibos</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Una vez revisado el pedido, procede a guardarlo:</p>
    
    <div className="space-y-6">
      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
        <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">💾 Botón Guardar</h3>
        <img src="/docs/21.png" alt="Guardar Pedido" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-emerald-200 dark:border-emerald-800 text-sm space-y-2">
          <div className="font-semibold text-emerald-900 dark:text-emerald-300">📤 Al guardar:</div>
          <div>• El pedido se envía al Generador de Recibos</div>
          <div>• Se guarda con las secciones seleccionadas</div>
          <div>• Incluye cliente y grupo especificados</div>
          <div>• Se asigna un folio único automáticamente</div>
        </div>
      </div>

      <div className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-lg border-2 border-sky-300 dark:border-sky-700">
        <h3 className="text-xl font-bold text-sky-900 dark:text-sky-300 mb-4">✅ Confirmación de Folio</h3>
        <img src="/docs/22.png" alt="Confirmación de Folio" className="w-full rounded-lg shadow-lg mb-4"/>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-sky-200 dark:border-sky-800 text-sm space-y-2">
          <div className="font-semibold text-sky-900 dark:text-sky-300">🎉 Pedido procesado exitosamente:</div>
          <div>• Ventana emergente confirma el folio</div>
          <div>• El pedido ya está en Generador de Recibos</div>
          <div>• Puedes proceder con el siguiente pedido</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 9: AYUDA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">❓ Botón de Ayuda</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Siempre disponible para resolver tus dudas:</p>
    
    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">🆘 Acceso a Ayuda</h3>
      <img src="/docs/23.png" alt="Botón de Ayuda" className="w-full rounded-lg shadow-lg mb-4"/>
      <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
        <div className="font-semibold text-green-900 dark:text-green-300">🟢 Ubicación:</div>
        <div>• Parte superior central de la ventana principal</div>
        <div>• Siempre visible durante el uso del módulo</div>
        <div>• Proporciona asistencia contextual</div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW COMPLETO RESUMIDO -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow Completo: Resumen Visual</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">El proceso completo en pasos secuenciales:</p>
    
    <div className="space-y-4">
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Seleccionar Grupo y Cliente</h3>
              <p className="text-blue-800 dark:text-blue-200">Inicia seleccionando el grupo y cliente correspondiente al pedido.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-purple-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Pegar Pedido</h3>
              <p className="text-green-800 dark:text-green-200">Pega el pedido en la sección de texto (una línea por producto/sección).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-orange-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Procesar con IA</h3>
              <p className="text-purple-800 dark:text-purple-200">Haz clic en el botón verde "Procesar Pedido" para que la IA analice el texto.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-pink-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">Gestionar Secciones</h3>
              <p className="text-orange-800 dark:text-orange-200">Selecciona y edita las secciones necesarias, luego confirma.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">5</div>
            <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-red-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-300 dark:border-pink-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-3">Revisar Productos</h3>
              <p className="text-pink-800 dark:text-pink-200">Verifica los recuadros: verdes ✅, azules ⚠️, rojos 🚨. Corrige según necesites.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">6</div>
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-emerald-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Ajustar Cantidades y Precios</h3>
              <p className="text-red-800 dark:text-red-200">Modifica cantidades, unidades y verifica que los precios sean correctos.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">7</div>
          </div>
          <div className="pt-2">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-300 dark:border-emerald-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-300 mb-3">Guardar y Enviar</h3>
              <p className="text-emerald-800 dark:text-emerald-200">Haz clic en "Guardar" para enviar el pedido al Generador de Recibos y obtener tu folio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SISTEMA DE APRENDIZAJE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🧠 Sistema de Aprendizaje Continuo</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Cada corrección mejora el sistema para futuras detecciones:</p>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 space-y-6">
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">📚 Primera Corrección</p>
        <div className="space-y-3 ml-4">
          <div>📝 <span className="font-mono">Escribes: "aguacte"</span></div>
          <div>❌ <span className="text-sm">Sistema no lo conoce (45% confianza - Azul)</span></div>
          <div>✏️ <span className="text-sm">Corriges manualmente a: "Aguacate"</span></div>
          <div>💾 <span className="text-sm font-bold text-purple-600 dark:text-purple-400">Sistema GUARDA: "aguacte" → "Aguacate"</span></div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700"></div>

      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">🎯 Segunda Vez en Adelante</p>
        <div className="space-y-3 ml-4">
          <div>📝 <span className="font-mono">Escribes: "aguacte" nuevamente</span></div>
          <div>✅ <span className="font-bold text-green-600 dark:text-green-400">Sistema YA LO SABE (95-100% confianza - Verde)</span></div>
          <div>⚡ <span className="text-sm">Se aplica automáticamente sin necesidad de corrección</span></div>
          <div>🎉 <span className="text-sm">¡Ahorraste tiempo en futuros pedidos!</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- MEJORES PRÁCTICAS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">✅ Mejores Prácticas</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <p className="text-lg font-bold text-green-900 dark:text-green-300 mb-4">✅ SÍ HACER</p>
        <ul className="space-y-3 text-sm text-green-800 dark:text-green-200">
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Pega directamente de fuentes sin editar previamente</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Mantén un producto o sección por línea</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Asegúrate que cantidad y unidad sean claros</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Usa nombres estándar y conocidos</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Revisa y corrige TODOS los azules y rojos</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✓</span>
            <span>Verifica precios antes de guardar</span>
          </li>
        </ul>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="text-lg font-bold text-red-900 dark:text-red-300 mb-4">❌ NO HACER</p>
        <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Poner todos los productos en una sola línea</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Usar cantidades vagas ("varios", "bastante", "mucho")</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Utilizar abreviaturas desconocidas o ambiguas</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Ignorar productos marcados en azul (inciertos)</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Intentar enviar con productos rojos sin resolver</span>
          </li>
          <li className="flex gap-2">
            <span className="flex-shrink-0">✗</span>
            <span>Saltarte la revisión final antes de guardar</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CONSEJOS ADICIONALES -->
  <section className="bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-indigo-200 dark:border-indigo-800">
    <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-6">💡 Consejos para Máxima Eficiencia</h2>
    
    <div className="space-y-4 text-indigo-800 dark:text-indigo-200">
      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">⚡</span>
        <div>
          <p className="font-semibold mb-1">Atajos de Teclado</p>
          <p className="text-sm">Usa Ctrl+A y Ctrl+V para copiar y pegar rápidamente el pedido completo.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">🎯</span>
        <div>
          <p className="font-semibold mb-1">Prioriza por Color</p>
          <p className="text-sm">Revisa primero los rojos (obligatorio), luego los azules (recomendado), y finalmente valida los verdes si tienes tiempo.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">📚</span>
        <div>
          <p className="font-semibold mb-1">Entrena el Sistema</p>
          <p className="text-sm">Cada corrección que hagas mejorará futuras detecciones. Invierte tiempo inicial para ahorrar mucho después.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">🔍</span>
        <div>
          <p className="font-semibold mb-1">Búsqueda Inteligente</p>
          <p className="text-sm">Si un producto no aparece en sugerencias, usa la barra de búsqueda. Puede encontrar variantes y productos similares.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">💾</span>
        <div>
          <p className="font-semibold mb-1">Guarda Frecuentemente</p>
          <p className="text-sm">No esperes a terminar todo el pedido. Puedes guardar secciones completas progresivamente.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🤖 UbicuoAI: Tu Asistente Inteligente</h2>
    
    <ul className="space-y-4 text-lg mb-8">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">🎯</span>
        <span><strong>Tú supervisas</strong> - UbicuoAI sugiere, tú decides y validas</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✏️</span>
        <span><strong>Tú corriges</strong> - Cada ajuste mejora el sistema</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">🚀</span>
        <span><strong>Tú controlas</strong> - Qué productos y cantidades se envían</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">📚</span>
        <span><strong>Sistema aprende</strong> - De cada corrección que realizas</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">⏱️</span>
        <span><strong>Ahorras tiempo</strong> - 20-30 minutos → 6-7 minutos por pedido</span>
      </li>
    </ul>

    <div className="bg-white/20 p-6 rounded-lg border-2 border-white">
      <p className="text-xl font-bold text-center mb-3">
        Cuanto más lo uses, mejor funciona
      </p>
      <p className="text-lg text-center">
        Cada corrección es una inversión en eficiencia futura
      </p>
    </div>

    <div className="mt-6 text-center">
      <p className="text-lg opacity-90">
        ¿Necesitas ayuda? Haz clic en el botón verde de ayuda 🆘 en la parte superior de UbicuoAI
      </p>
    </div>
  </section>
</div>
  `,
};