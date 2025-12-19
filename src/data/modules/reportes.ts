export const reportes = {
  title: "Módulo Análisis y Reportes",
  icon: "BarChart3",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-cyan-200 dark:border-cyan-800">
    <h2 className="text-3xl font-bold text-cyan-900 dark:text-cyan-300 mb-4">Módulo Análisis y Reportes</h2>
    <p className="text-cyan-800 dark:text-cyan-200 text-lg leading-relaxed">
      Obtén visibilidad COMPLETA sobre tu negocio. Transforma datos de ventas en decisiones estratégicas. 
      Ve ganancias, identifica productos estrella, analiza clientes y toma decisiones basadas en datos reales.
    </p>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📊 ¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">👁️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad Total</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin reportes = Vendes a ciegas sin saber qué funciona</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">💡</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Decisiones Inteligentes</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Basadas en datos reales, no intuición</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">🎯</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Optimizar Ganancias</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Identifica productos y clientes rentables</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">📈</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Monitorear Crecimiento</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Ve mes a mes, año a año tu progreso</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: De Ventas a Decisiones</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Cómo los datos se convierten en estrategia:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">🛒 Vendes Todos los Días</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Cada recibo se registra automáticamente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <div>Recibo #001: Papa $100</div>
                <div>Recibo #002: Chile $50</div>
                <div>Recibo #003: Limón $30</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">🧮 Sistema Calcula Ganancias</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Automáticamente: Precio - Costo = Ganancia</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm font-mono space-y-2">
                <div>Papa: $100 - $40 = $60 ganancia</div>
                <div>Chile: $50 - $20 = $30 ganancia</div>
                <div>Limón: $30 - $12 = $18 ganancia</div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">📊 Abres Módulo Reportes</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Ve Dashboard con resumen de todo</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>💰 Ganancias totales hoy: $108</div>
                <div>📦 Productos vendidos: 3</div>
                <div>👥 Clientes atendidos: 3</div>
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">📅 Filtras por Fecha</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Selecciona período para análisis</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
                <div>Desde: 1 diciembre</div>
                <div>Hasta: 31 diciembre</div>
                <div>Sistema carga datos del período</div>
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
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">💡 Tomas Decisiones</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Basadas en datos, no intuición</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
                <div>"Papa es estrella → Invertir más"</div>
                <div>"Mercado es cliente clave → Ofertas"</div>
                <div>"Minoristas → Alto margen"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 ANÁLISIS PRINCIPALES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📈 Los 4 Análisis Principales</h2>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">1️⃣ Dashboard</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">Resumen rápido de tu negocio HOY</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-sm">
            <p className="font-bold text-blue-600 dark:text-blue-400">💰 Ganancias</p>
            <p className="text-2xl font-bold mt-2">$5,000</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-sm">
            <p className="font-bold text-blue-600 dark:text-blue-400">📊 Ventas</p>
            <p className="text-2xl font-bold mt-2">$12,000</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-sm">
            <p className="font-bold text-blue-600 dark:text-blue-400">🎯 Margen</p>
            <p className="text-2xl font-bold mt-2">41%</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-sm">
            <p className="font-bold text-blue-600 dark:text-blue-400">📦 Transacciones</p>
            <p className="text-2xl font-bold mt-2">47</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">2️⃣ TOP Productos</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">Cuáles productos generan MÁS ganancia</p>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">1. Papa Blanca</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ganancia: $8,000</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600 dark:text-green-400">🥇</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">67%</p>
            </div>
          </div>
          <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">2. Chile Serrano</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ganancia: $2,500</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-600 dark:text-gray-400">🥈</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">21%</p>
            </div>
          </div>
          <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">3. Limón</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ganancia: $1,200</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-yellow-600 dark:text-yellow-400">🥉</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">10%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">3️⃣ TOP Clientes</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">Quiénes son tus MEJORES clientes</p>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Mercado Los Mangos</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Compras: $15,000</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-purple-600 dark:text-purple-400">🥇</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">30%</p>
            </div>
          </div>
          <div className="flex justify-between p-3 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Comercial San Pedro</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Compras: $8,500</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-600 dark:text-gray-400">🥈</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">17%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4">4️⃣ Por Grupo</h3>
        <p className="text-orange-800 dark:text-orange-200 mb-4">Desempeño por tipo de cliente</p>
        <div className="space-y-3">
          <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800">
            <div className="flex justify-between mb-2">
              <p className="font-bold text-gray-900 dark:text-white">Mayoristas</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">$40,000</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600 dark:text-gray-400">Margen: 25%</p>
              <p className="text-gray-600 dark:text-gray-400">Ganancia: $10,000</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800">
            <div className="flex justify-between mb-2">
              <p className="font-bold text-gray-900 dark:text-white">Minoristas</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">$10,000</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600 dark:text-gray-400">Margen: 50%</p>
              <p className="text-gray-600 dark:text-gray-400">Ganancia: $5,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Ver Dashboard Hoy</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Reportes</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → Análisis y Reportes</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve Dashboard</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pestaña "Dashboard" por defecto</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Interpreta Números</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ganancias, ventas, margen, transacciones</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Analizar por Período</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Fecha Desde</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Calendario: 1 diciembre</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Fecha Hasta</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Calendario: 31 diciembre</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Filtrar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Datos se actualizan al nuevo período</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-6">Identificar Oportunidades</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve TOP Productos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Cuál es #1? ¿Vender más?</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve TOP Clientes</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Quién es más importante? ¿Atención especial?</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Analiza Por Grupo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Mayoristas o minoristas generan más?</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CÓMO INTERPRETAR -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">💬 Cómo Interpretar los Datos</h2>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="font-bold text-blue-900 dark:text-blue-300 mb-3">📊 GANANCIAS = Tu dinero en el bolsillo</p>
        <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">Precio de venta - Costo = Ganancia neta por producto</p>
        <p className="text-blue-700 dark:text-blue-300 text-sm font-semibold">Ejemplo: Vendiste $1,000 en papas, ganaste $600</p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <p className="font-bold text-green-900 dark:text-green-300 mb-3">📈 MARGEN = Porcentaje de ganancia</p>
        <p className="text-green-800 dark:text-green-200 text-sm mb-3">Ganancia / Venta × 100 = % de ganancia</p>
        <p className="text-green-700 dark:text-green-300 text-sm font-semibold">Ejemplo: Margen 60% = De cada $100, ganas $60</p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <p className="font-bold text-purple-900 dark:text-purple-300 mb-3">🎯 PRODUCTO ESTRELLA = Mayor ganancia</p>
        <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">Si Papa está #1, invierte en tener más stock</p>
        <p className="text-purple-700 dark:text-purple-300 text-sm font-semibold">Estrategia: Destaca producto #1 en tu negocio</p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <p className="font-bold text-orange-900 dark:text-orange-300 mb-3">👥 CLIENTE CLAVE = Mayor valor</p>
        <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">Si Mercado aporta 30% de ganancias, cuida mucho</p>
        <p className="text-orange-700 dark:text-orange-300 text-sm font-semibold">Estrategia: Ofertas especiales, buen servicio</p>
      </div>
    </div>
  </section>

  <!-- ACCIONES RECOMENDADAS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Acciones Recomendadas</h2>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 space-y-4">
      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Revisar reportes SEMANALMENTE</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mínimo cada viernes para ver cómo va la semana</p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Comparar mes a mes</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">¿Creciste vs mes anterior? ¿Cuánto %?</p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Investigar cambios bruscos</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Si ganancias bajaron, ¿por qué? Busca causa</p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Promocionar producto estrella</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Si Papa genera 67% de ganancia, destácala</p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Dar atención especial a cliente clave</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mercado aporta 30% → Mantén relación fuerte</p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-2xl flex-shrink-0">✅</span>
        <div>
          <p className="font-bold text-gray-900 dark:text-white mb-1">Analizar margen por grupo</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">¿Mayoristas = volumen? ¿Minoristas = margen?</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">📊 Los Datos = Superpoder</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>SIN REPORTES = A CIEGAS</strong> - Tomas decisiones sin saber qué funciona</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Dashboard diario = Control total</strong> - Ve ganancias, ventas, margen HOY</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>TOP Productos = Inversión inteligente</strong> - Invierte en lo que funciona</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>TOP Clientes = Relación estratégica</strong> - Cuida a quienes te hacen rico</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Por Grupo = Estrategia clara</strong> - Mayoristas vs minoristas necesitan enfoques diferentes</span>
      </li>
    </ul>
  </section>
</div>
  `,
};