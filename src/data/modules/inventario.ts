export const inventario = {
  title: "Módulo Inventario",
  icon: "Package",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-8 rounded-lg border border-indigo-200 dark:border-indigo-800">
    <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">Módulo Inventario</h2>
    <p className="text-indigo-800 dark:text-indigo-200 text-lg leading-relaxed">
      Administra el stock de tus productos en tiempo real. Registra compras, monitorea existencias, recibe alertas automáticas 
      y mantén control total de lo que tienes disponible para vender.
    </p>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📦 ¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">💰</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Dinero Atrapado</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin control, tu dinero se queda en productos que no se venden</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">😢</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Perder Ventas</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin stock, cliente se va con la competencia</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">⚠️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Productos Vencidos</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin visibilidad, productos se vencen sin darte cuenta</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">📊</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Decisiones Ciegas</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin datos, compras mal y no sabes qué vende</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Ciclo Completo de Producto</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Desde que llega hasta que se vende:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">🚚 Compra Llega</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Distribuidor entrega productos nuevos</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm font-mono">
                <div>Papa Blanca: 100 kg</div>
                <div>Precio: $10/kg</div>
                <div>Proveedor: Distribuidor XYZ</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">✅ Registras Compra</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">En Módulo Inventario, haz clic [+ Registrar Compra]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
                <div>Producto: Papa Blanca</div>
                <div>Cantidad: 100 kg</div>
                <div>Costo: $1,000 total</div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🔄 Sistema Actualiza Stock</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Stock se aumenta automáticamente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm font-mono space-y-2">
                <div>Stock anterior: 20 kg</div>
                <div className="text-green-600 dark:text-green-400">+ Compra: 100 kg</div>
                <div className="font-bold text-purple-600 dark:text-purple-400">= Stock nuevo: 120 kg</div>
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">🛒 Vendedor Vende</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Cliente compra parte del producto</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
                <div>Cliente compra: 30 kg papa</div>
                <div>Se registra automáticamente</div>
                <div>Recibo generado</div>
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
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-cyan-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">⬇️ Stock Descuenta</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Sistema descuenta automáticamente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm font-mono space-y-2">
                <div>Stock: 120 kg</div>
                <div className="text-red-600 dark:text-red-400">- Venta: 30 kg</div>
                <div className="font-bold text-red-600 dark:text-red-400">= Stock nuevo: 90 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 6 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">6</div>
          </div>
          <div className="pt-2">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">✅ Monitoreo Continuo</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-4">Sistema alertará si stock baja del mínimo</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-cyan-200 dark:border-cyan-800 text-sm space-y-2">
                <div>🟢 Stock: 90 kg | Mínimo: 30 kg</div>
                <div>✓ Todo normal, stock saludable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ESTADOS DE STOCK -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🟢 Estados del Stock</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">NORMAL</h3>
        </div>
        <p className="text-green-800 dark:text-green-200 mb-3">Stock por encima del mínimo</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 text-sm space-y-1">
          <div>✓ Suficiente para vender</div>
          <div>✓ No necesita compra urgente</div>
          <div>✓ Todo bien</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">BAJO</h3>
        </div>
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">Cerca del mínimo</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-1">
          <div>⚠️ Prepara compra</div>
          <div>⚠️ Pronto se agota</div>
          <div>⚠️ Actúa pronto</div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300">AGOTADO</h3>
        </div>
        <p className="text-red-800 dark:text-red-200 mb-3">Debajo del mínimo</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-red-200 dark:border-red-800 text-sm space-y-1">
          <div>🚨 COMPRA YA</div>
          <div>🚨 Riesgo de perder venta</div>
          <div>🚨 Acción inmediata</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Registrar una Compra</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Inventario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → Módulos → Gestionar Inventario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a Pestaña "Compras"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">O haz clic [+ Registrar Compra]</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona el Producto</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Elige de lista o busca por nombre</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Cantidad</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Solo números: 100</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Costo Unitario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Precio que pagaste: 10</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda [Guardar Compra]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Stock aumenta automáticamente</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Ver Stock Actual</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Inventario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pestaña "Productos" o "Stock"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve la Tabla de Stock</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Muestra: Producto | Stock | Mínimo | Estado</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Busca por Nombre</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Campo: Buscar "papa" o "tomate"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Interpreta los Colores</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">🟢 Normal | 🟡 Bajo | 🔴 Agotado</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONFIGURACIÓN IMPORTANTE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚙️ Configuración: Stock Mínimo</h2>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">El "Stock Mínimo" es CRÍTICO. Define cuándo comprar:</p>
      
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">🔍</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Cómo Calcular?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Stock Mínimo = Ventas promedio semanal × 2</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Si vendes 50 kg papa/semana → Mínimo: 100 kg</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">✅</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Mínimo Bien Configurado</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema alerta a tiempo para comprar antes de agotarse</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
          <span className="text-2xl flex-shrink-0">❌</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Mínimo Muy Bajo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Esperas demasiado para comprar → Pierdes ventas</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800">
          <span className="text-2xl flex-shrink-0">❌</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Mínimo Muy Alto</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Compras demasiado frecuente → Dinero atrapado</p>
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
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No registrar compras</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Llega producto pero no lo registras en sistema</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE registra cada compra. Sistema ajusta stock</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Stock mínimo incorrecto</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Configuras mínimo aleatorio sin calcular</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Calcula: Ventas promedio × 2</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Ignorar alertas de bajo stock</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Sistema alerta 🔴 pero tú no compras</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Cuando ves 🔴, compra inmediatamente</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No revisar caducidades</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Productos vencidos sin tu conocimiento</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Usa campo de caducidad. Revisa periódicamente</p>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🎯 Lo MÁS Importante</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>REGISTRA cada compra</strong> - Sistema actualiza stock automáticamente</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Stock mínimo correcto</strong> - Compra a tiempo, evita perder ventas</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>Respeta las alertas</strong> - 🟡 = Prepara compra | 🔴 = Compra YA</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Monitorea regularmente</strong> - Revisa tabla de stock semanalmente</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Evita desabastecimiento</strong> - Tu peor enemigo es NO tener stock</span>
      </li>
    </ul>
  </section>
</div>
  `,
};