export const deudas = {
  title: "Módulo Deudas",
  icon: "CreditCard",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-lg border border-red-200 dark:border-red-800">
    <h2 className="text-3xl font-bold text-red-900 dark:text-red-300 mb-4">Módulo Deudas</h2>
    <p className="text-red-800 dark:text-red-200 text-lg leading-relaxed">
      Administra el crédito otorgado a tus clientes. Registra facturas pendientes, monitorea vencimientos, 
      recibe alertas automáticas y mantén control total de tu cartera de clientes.
    </p>
  </section>

  <!-- IMPORTANCIA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
        <span className="text-4xl flex-shrink-0">💰</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Dinero en Riesgo</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin deudas registradas, no sabes cuánto dinero está en riesgo</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">⏰</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Vencimientos</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Alertas automáticas para no olvidar a quién seguir</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <span className="text-4xl flex-shrink-0">📊</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad Total</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sabe quién debe, cuánto y desde cuándo</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">💵</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Flujo de Caja</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mejora tu flujo de efectivo con cobranza efectiva</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow Principal: La Vida de una Deuda</h2>
    
    <div className="space-y-4">
      <!-- PASO 1 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-orange-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">🛒 Cliente Compra a Crédito</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Tu cliente compra productos y acuerda pagar después.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm font-mono">
                <div className="mb-2"><strong>Cliente:</strong> Mercado Los Mangos</div>
                <div className="mb-2"><strong>Monto:</strong> $10,000</div>
                <div><strong>Acuerdo:</strong> Pagar en 30 días</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 2 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-green-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">📝 Registras la Deuda</h3>
              <p className="text-orange-800 dark:text-orange-200 mb-4">En Módulo Deudas, haz clic [+ Registrar Deuda]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm space-y-2">
                <div>Cliente: Mercado Los Mangos</div>
                <div>Monto: 10000</div>
                <div>Vencimiento: 13 enero 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 3 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-purple-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">✅ Estado: PENDIENTE</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Sistema monitorea automáticamente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
                <div className="text-green-600 dark:text-green-400">Estado: <strong>PENDIENTE</strong> 🟢</div>
                <div>Días hasta vencer: <strong>30</strong></div>
                <div>Te alertará antes de vencer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 4 OPCIONAL -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-red-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">💳 (OPCIONAL) Pago Parcial</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Si cliente paga parte de la deuda</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>Día 20: Cliente paga $3,000</div>
                <div className="font-mono">Deuda original: $10,000</div>
                <div className="font-mono">Pago recibido: -$3,000</div>
                <div className="font-mono text-purple-600 dark:text-purple-400"><strong>Deuda restante: $7,000</strong></div>
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
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">⏰ Vencimiento Llega</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Si no paga a tiempo, deuda se marca VENCIDA</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
                <div className="text-red-600 dark:text-red-400">Estado: <strong>VENCIDA</strong> 🔴</div>
                <div>Días de atraso: <strong>10</strong></div>
                <div>Monto adeudado: <strong>$7,000</strong></div>
                <div>Sistema te alertó automáticamente</div>
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
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-indigo-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">📢 Envías Recordatorio</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-4">Haz clic [Enviar Recordatorio] al cliente</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 7 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">7</div>
          </div>
          <div className="pt-2">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">💸 Cliente Paga Total</h3>
              <p className="text-indigo-800 dark:text-indigo-200 mb-4">Registras pago y deuda se marca como PAGADA</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-indigo-200 dark:border-indigo-800 text-sm space-y-2">
                <div className="text-green-600 dark:text-green-400">Estado: <strong>PAGADA</strong> ✅</div>
                <div>Monto: $7,000</div>
                <div>Deuda restante: <strong>$0</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ESTADO DE DEUDAS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Estados de una Deuda</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">PENDIENTE</h3>
        </div>
        <p className="text-green-800 dark:text-green-200 mb-3">Todo está normal, falta poco para vencer</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 text-sm space-y-1">
          <div>✓ Cliente tiene tiempo</div>
          <div>✓ No hay problema</div>
          <div>✓ Sistema alertará antes</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">PRÓXIMA VENCER</h3>
        </div>
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">Menos de 5 días para el vencimiento</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-1">
          <div>⚠️ Pronto se vence</div>
          <div>⚠️ Prepara cobro</div>
          <div>⚠️ Contacta al cliente</div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300">VENCIDA</h3>
        </div>
        <p className="text-red-800 dark:text-red-200 mb-3">Pasó la fecha de vencimiento SIN pagar</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-red-200 dark:border-red-800 text-sm space-y-1">
          <div>🚨 Problema</div>
          <div>🚨 Actúa ya</div>
          <div>🚨 Sigue para cobrar</div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⚪</span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">PAGADA</h3>
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-3">Cliente pagó completamente</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-gray-200 dark:border-gray-800 text-sm space-y-1">
          <div>✅ Completada</div>
          <div>✅ Dinero recibido</div>
          <div>✅ Historial guardado</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Registrar una Deuda</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Deudas</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → Módulos → Gestionar Deudas</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [+ Registrar Deuda]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Cliente</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Elige el cliente que debe</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Monto</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Solo números: 10000</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Vencimiento</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Calendario: Fecha cuando debe pagar</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda [Guardar Deuda]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema comienza a monitorear</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Registrar un Pago</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Encuentra la Deuda</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">En tabla, busca cliente o deuda</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [Registrar Pago]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario de pago</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Monto Pagado</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total o parcial: 3000</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Fecha de Pago</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Normalmente HOY</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda [Guardar Pago]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Deuda se reduce automáticamente</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INDICADOR: MOROSIDAD -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📈 Indicador Crítico: Morosidad</h2>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">Morosidad = Deudas Vencidas / Total Adeudado × 100</p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800 text-center">
          <p className="font-bold text-green-900 dark:text-green-300 mb-2">0-10%</p>
          <p className="text-sm text-green-800 dark:text-green-200">✅ EXCELENTE</p>
          <p className="text-xs text-green-700 dark:text-green-300 mt-2">Tu negocio está muy sano</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800 text-center">
          <p className="font-bold text-blue-900 dark:text-blue-300 mb-2">10-20%</p>
          <p className="text-sm text-blue-800 dark:text-blue-200">✓ BUENA</p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">Situación controlada</p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800 text-center">
          <p className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">20-30%</p>
          <p className="text-sm text-yellow-800 dark:text-yellow-200">⚠️ ACEPTABLE</p>
          <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">Pon atención</p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-200 dark:border-orange-800 text-center">
          <p className="font-bold text-orange-900 dark:text-orange-300 mb-2">30-50%</p>
          <p className="text-sm text-orange-800 dark:text-orange-200">🚨 PREOCUPANTE</p>
          <p className="text-xs text-orange-700 dark:text-orange-300 mt-2">Actúa ya</p>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 dark:border-red-800 text-center">
          <p className="font-bold text-red-900 dark:text-red-300 mb-2">>50%</p>
          <p className="text-sm text-red-800 dark:text-red-200">🔥 CRISIS</p>
          <p className="text-xs text-red-700 dark:text-red-300 mt-2">Situación crítica</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No registrar deudas</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Cliente dice que pagará pero no registras</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE registra deudas al vender a crédito</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Vencimiento equivocado</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Pones vencimiento a 60 días cuando son 30</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Verifica con el cliente el plazo exacto</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No registrar pagos parciales</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Cliente paga $3,000 pero tú no lo registras</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE registra cada pago, total o parcial</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Ignorar deudas vencidas</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Pasan días sin cobrar cuando la deuda ya venció</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Revisa deudas vencidas DIARIAMENTE</p>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🎯 Lo MÁS Importante</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>REGISTRA TODAS las deudas</strong> - Sin registrar, no tienes control</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Vencimiento correcto</strong> - Define cuándo actuar</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>CADA pago</strong> - Total o parcial, registra TODO</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Monitorea morosidad</strong> - >30% es problema</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Cobra ANTES de 30 días</strong> - No dejes pasar vencimientos</span>
      </li>
    </ul>
  </section>
</div>
  `,
};