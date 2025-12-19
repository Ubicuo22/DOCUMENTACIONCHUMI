export const precios = {
  title: "Módulo Precios",
  icon: "DollarSign",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-8 rounded-lg border border-emerald-200 dark:border-emerald-800">
    <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-300 mb-4">Módulo Precios</h2>
    <p className="text-emerald-800 dark:text-emerald-200 text-lg leading-relaxed">
      Gestiona los precios de tus productos con precisión. Establece precios diferentes por grupo de cliente, 
      controla márgenes de ganancia, bloquea precios críticos y mantén tu estructura de precios bajo control total.
    </p>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">💰 ¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">📈</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Define tu Ganancia</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Precio incorrecto = Negocio no rentable</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">🎯</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Competitividad</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Precios inteligentes = Clientes contentos</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">🏢</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Diferentes Clientes</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mayoristas vs minoristas pagan diferente</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">🔒</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Protección</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Bloquea precios especiales para evitar cambios</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONCEPTOS CLAVE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔑 Conceptos Clave</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">💵 COSTO</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">Lo que TÚ pagas por el producto</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
          <div className="font-mono">Compraste papa: $10/kg</div>
          <div className="font-bold text-blue-600 dark:text-blue-400">= Este es tu COSTO</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">🏷️ PRECIO</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">Lo que VENDES el producto</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div className="font-mono">Vendes papa: $25/kg</div>
          <div className="font-bold text-green-600 dark:text-green-400">= Este es tu PRECIO</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">💎 MARGEN</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">Tu ganancia porcentual</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div className="font-mono">(25-10)/25 = 60%</div>
          <div className="font-bold text-purple-600 dark:text-purple-400">= Tu MARGEN</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Estructura de Precios Completa</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">De compra a venta con márgenes inteligentes:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">🛒 Registra Costo</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Lo que pagaste por el producto</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm font-mono">
                <div>Papa Blanca</div>
                <div className="text-blue-600 dark:text-blue-400">Costo: $10/kg</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">💰 Establece Precio Base</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Precio por defecto para minoristas</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm font-mono space-y-2">
                <div>Precio Base: $25/kg</div>
                <div className="text-green-600 dark:text-green-400">Margen: 60% (automático)</div>
              </div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🎯 Crea Precios por Grupo</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Diferentes precios para diferentes clientes</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>🟢 Mayorista: $15 (40% desc)</div>
                <div>🟡 Minorista: $25 (sin desc)</div>
                <div>🔵 VIP: $20 (20% desc)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 4 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-red-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">🔒 Bloquea Precios Críticos</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Protege precios especiales de cambios</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
                <div>🔒 VIP: Bloqueado</div>
                <div>(Precio negociado)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 5 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">5</div>
          </div>
          <div className="pt-2">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">✅ Usa en Recibos</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Sistema aplica precio automáticamente por grupo</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
                <div>Cliente Mayorista → $15</div>
                <div>Cliente VIP → $20</div>
                <div>Cliente Minorista → $25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ESCALA DE MÁRGENES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Escala de Márgenes Saludables</h2>
    
    <div className="space-y-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">>50% EXCELENTE</h3>
        </div>
        <p className="text-green-800 dark:text-green-200 text-sm">Producto muy rentable. Excelente ganancia por venta</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔵</span>
          <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300">30-50% BUENO</h3>
        </div>
        <p className="text-blue-800 dark:text-blue-200 text-sm">Equilibrio sano entre precio y costo. Mantener este nivel</p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">20-30% ACEPTABLE</h3>
        </div>
        <p className="text-yellow-800 dark:text-yellow-200 text-sm">Margen bajo. Revisa costos. Considera aumentar precio</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300"><20% CRÍTICO</h3>
        </div>
        <p className="text-red-800 dark:text-red-200 text-sm">Casi sin ganancia. Acción inmediata requerida</p>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Establecer Precio Base</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Precios</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → Gestionar Precios</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Busca el Producto</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Campo buscar o scroll en tabla</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Haz Clic en Editar</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario de precios</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Costo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lo que pagaste por el producto</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Precio Base</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Lo que vendes el producto</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Verifica Margen (automático)</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Está en rango saludable? ✓ Guarda</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Crear Precio para Grupo</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a "Precios por Grupo"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">O desde producto: [Ver Precios por Grupo]</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [+ Nuevo Precio]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Producto y Grupo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Dropdown: Mayorista, Minorista, VIP, etc</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Precio para Grupo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ej: $15 para mayoristas</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Opcionalmente: Ingresa Descuento %</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">O solo ingresa el precio final</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda [Guardar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Precio para grupo creado</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-6">Bloquear Precio Crítico</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona el Precio</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Precio a proteger (ej: VIP especial)</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Bloquear] o [...] → Bloquear</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario de bloqueo</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Motivo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">"Cliente VIP especial" o "Margen crítico"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Confirma [Confirmar Bloqueo]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema muestra 🔒 candado</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Costo incorrecto</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Registras costo equivocado → Margen incorrecto</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE verifica con factura de compra</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Margen muy bajo (<20%)</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Precio demasiado bajo = Casi sin ganancia</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Aumenta precio o negocia mejor costo</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No crear precios por grupo</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Todos pagan lo mismo = Pierdes mayoristas</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Crea precios diferenciados por grupo</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Bloquear todos los precios</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Menos flexibilidad para adaptarse al mercado</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Solo bloquea precios críticos/especiales</p>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">💎 Regla de Oro</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>COSTO exacto = MARGEN exacto</strong> - Verifica siempre con factura</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Margen >30% = Negocio saludable</strong> - Menos de eso, revisa urgente</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>Grupos = Flexibilidad inteligente</strong> - Mayoristas pagan menos, minoristas pagan más</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Bloqueo protege decisiones críticas</strong> - Solo para precios VIP/negociados</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Revisa márgenes mensualmente</strong> - Identifica productos no rentables</span>
      </li>
    </ul>
  </section>
</div>
  `,
};