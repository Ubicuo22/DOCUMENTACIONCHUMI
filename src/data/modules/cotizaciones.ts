export const cotizaciones = {
  title: "Módulo Cotizaciones",
  icon: "ClipboardList",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
    <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-4">Módulo Cotizaciones</h2>
    <p className="text-blue-800 dark:text-blue-200 text-lg leading-relaxed">
      Importa cotizaciones de proveedores en PDF. Actualiza precios automáticamente sin tocar inventario. 
      Mantén tus precios siempre frescos y competitivos.
    </p>
  </section>

  <!-- QUÉ ES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">¿Para Qué Sirve?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">📄</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Importar PDF</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Recibe cotización de proveedor en PDF y cárgalo automáticamente</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">⚡</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Actualizar Precios</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Cambia precios sin modificar stock ni historial de ventas</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">👥</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Precios por Grupo</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mismo producto, diferentes precios para mayorista/minorista</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <span className="text-4xl flex-shrink-0">🔒</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Totalmente Seguro</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Solo modifica precios. Auditado y reversible</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow Principal</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Proceso paso a paso para importar cotizaciones:</p>
    
    <div className="space-y-4">
      <!-- PASO 1 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Recibe PDF del Proveedor</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Tu proveedor te envía cotización con productos y precios.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm font-mono space-y-2">
                <div>Café Grano Fino | kg | 28.50</div>
                <div>Té Premium | kg | 45.00</div>
                <div>Leche Descremada | lt | 12.50</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 2 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-purple-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Abre Módulo Cotizaciones</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">En el menú principal, selecciona "Cotizaciones"</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 3 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-amber-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Carga el PDF</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Haz clic en [Seleccionar Archivo] y elige el PDF del proveedor</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 4 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Sistema Extrae Datos</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Automáticamente lee el PDF y extrae productos/precios</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 5 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">5</div>
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-red-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">Revisa Cambios Propuestos</h3>
              <p className="text-orange-800 dark:text-orange-200 mb-4">El sistema propone: crear nuevos productos o actualizar existentes</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm space-y-2">
                <div>✓ Café: Actualizar a $28 (antes $30)</div>
                <div>✓ Té: Crear nuevo | Precio $45</div>
                <div>✓ Leche: Actualizar a $12.50</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 6 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">6</div>
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-indigo-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">Especifica Grupos</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">¿A qué grupo de clientes aplican estos precios?</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
                <div>Café → Mayorista + Distribuidor</div>
                <div>Té → Todos los grupos</div>
                <div>Leche → Solo Minorista</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 7 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">7</div>
            <div className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-cyan-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">Sistema Valida</h3>
              <p className="text-indigo-800 dark:text-indigo-200 mb-4">Verifica que todo sea correcto antes de aplicar</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 8 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">8</div>
          </div>
          <div className="pt-2">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">✅ Importar y Aplicar</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-4">Haz clic [Importar]. Sistema aplica cambios y genera reporte.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TIPOS DE CAMBIOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Tipos de Cambios</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- NUEVO PRODUCTO -->
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">➕ Nuevo Producto</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">El producto NO existe en tu sistema.</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 space-y-3 text-sm">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ejemplo:</p>
            <p className="text-gray-600 dark:text-gray-400 font-mono">Miel Pura | kg | $85</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Resultado:</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Crea producto</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Precio inicial: $85</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Stock: 0 (definis después)</p>
          </div>
        </div>
      </div>

      <!-- ACTUALIZAR PRODUCTO -->
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">🔄 Actualizar Producto</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">El producto YA existe en tu sistema.</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 space-y-3 text-sm">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ejemplo:</p>
            <p className="text-gray-600 dark:text-gray-400 font-mono">Café Grano | kg | $26 (antes $28)</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Resultado:</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Actualiza precio a $26</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Stock NO cambia</p>
            <p className="text-gray-600 dark:text-gray-400">✓ Historial se preserva</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FORMATO DEL PDF -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📄 Formato del PDF Correcto</h2>
    
    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
      <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-4">✓ Formato Requerido: 3 Columnas</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-center">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Columna 1</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Nombre del Producto</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-center">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Columna 2</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Unidad de Medida</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-center">
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Columna 3</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Precio</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded border border-amber-200 dark:border-amber-800 space-y-3 font-mono text-sm">
        <div className="grid grid-cols-3 gap-4 pb-3 border-b border-gray-200 dark:border-gray-700">
          <div className="text-gray-900 dark:text-white font-semibold">Producto</div>
          <div className="text-gray-900 dark:text-white font-semibold">Unidad</div>
          <div className="text-gray-900 dark:text-white font-semibold">Precio</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>Café Grano Fino</div>
          <div>kg</div>
          <div>28.50</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>Té Premium</div>
          <div>kg</div>
          <div>45.00</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>Leche Descremada</div>
          <div>lt</div>
          <div>12.50</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>Pan Integral</div>
          <div>pieza</div>
          <div className="text-gray-400">(sin precio)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ PDF con formato extraño</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">El sistema no puede leer la estructura</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Asegúrate que sea tabla con 3 columnas claras</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Especificar grupo incorrecto</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Precio va a grupo equivocado</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Revisa bien qué grupo debe aplicar</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Importar sin revisar cambios</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Se aplican cambios no deseados</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE revisa qué cambios propone antes de aplicar</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Confundir nombres de productos</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">PDF: "Café Premium" vs Sistema: "Café Grano"</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Sistema creará nuevo si no detecta coincidencia. Revisa en paso 5</p>
      </div>
    </div>
  </section>

  <!-- IMPORTANTE -->
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🔑 Lo MÁS Importante</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✓</span>
        <span><strong>Solo actualiza PRECIOS</strong> - Stock y ventas NO se modifican</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✓</span>
        <span><strong>REVISA antes de importar</strong> - Paso 5 es crítico</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✓</span>
        <span><strong>PDF con 3 columnas claras</strong> - Nombre | Unidad | Precio</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✓</span>
        <span><strong>Especifica grupos correctamente</strong> - Mayorista/Minorista/Todos</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✓</span>
        <span><strong>Completamente auditado</strong> - Hay registro de quién/cuándo/qué cambió</span>
      </li>
    </ul>
  </section>

  <!-- REPORTE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📋 Reporte de Importación</h2>
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
      <p className="text-gray-700 dark:text-gray-300 mb-6">Después de importar, el sistema genera un reporte con:</p>
      <div className="space-y-3 text-sm">
        <div className="flex gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded">
          <span className="flex-shrink-0 text-lg">📅</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Fecha y Hora</p>
            <p className="text-gray-600 dark:text-gray-400">Cuándo exactamente se importó</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded">
          <span className="flex-shrink-0 text-lg">👤</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Usuario</p>
            <p className="text-gray-600 dark:text-gray-400">Quién realizó la importación</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded">
          <span className="flex-shrink-0 text-lg">📄</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Archivo</p>
            <p className="text-gray-600 dark:text-gray-400">Qué PDF fue usado</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 bg-gray-50 dark:bg-slate-800 rounded">
          <span className="flex-shrink-0 text-lg">📊</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Resumen</p>
            <p className="text-gray-600 dark:text-gray-400">Total procesados, creados, actualizados</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};