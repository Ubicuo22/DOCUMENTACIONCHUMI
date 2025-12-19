export const recibos = {
  title: "Módulo Recibos",
  icon: "Receipt",
  content: `
<div class="space-y-12">
  <!-- INTRO - CRÍTICO -->
  <section className="bg-gradient-to-r from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-800/20 p-8 rounded-lg border-2 border-red-400 dark:border-red-600">
    <div className="flex items-start gap-4 mb-4">
      <span className="text-5xl">🚨</span>
      <div>
        <h2 className="text-3xl font-bold text-red-900 dark:text-red-300 mb-2">Módulo Recibos - EL MÁS CRÍTICO</h2>
        <p className="text-red-800 dark:text-red-200 text-lg font-semibold">
          Aquí ocurren TODAS tus ventas. Es el corazón de tu negocio. Un error aquí afecta TODO.
        </p>
      </div>
    </div>
    <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded border border-red-200 dark:border-red-700 mt-4">
      <p className="text-red-900 dark:text-red-200 font-bold">
        ⚠️ REGLA DE ORO: VERIFICA 2X ANTES DE CONFIRMAR. No se puede deshacer fácilmente.
      </p>
    </div>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">💼 ¿Por Qué es el Más Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
        <span className="text-4xl flex-shrink-0">📊</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Control Total</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin recibos = Sin venta registrada = Sin control</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">💰</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Ganancia Real</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sabes exactamente cuanto ganaste cada día</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <span className="text-4xl flex-shrink-0">🔗</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Integración Total</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Actualiza: Inventario, Clientes, Deudas, Reportes</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">📋</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Auditoría Completa</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Cada recibo queda registrado. Transparencia total.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Crear Recibo Completo</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">De inicio a fin de una venta:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">📋 Abre Nuevo Recibo</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Clic [+ Nuevo Recibo] o [Crear Venta]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <div>Se abre formulario en blanco</div>
                <div>Sistema genera folio automático</div>
                <div>Fecha/Hora se registran</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">👤 Selecciona Cliente</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Esto determina: Grupo, Precios, Descuentos, Crédito</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
                <div>Busca cliente en dropdown</div>
                <div>Sistema carga datos automáticamente</div>
                <div>Precio se ajusta por grupo</div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">📦 Agrega Productos</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Clic [+ Agregar Línea] o [+ Producto]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>Busca producto</div>
                <div>Sistema obtiene precio automático</div>
                <div>Ingresa cantidad</div>
                <div>Costo y margen se calculan</div>
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">🏷️ Aplica Descuentos (Opcional)</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Sistema aplica automáticamente según cliente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
                <div>Descuento por cantidad (automático)</div>
                <div>O agregar descuento manual si necesario</div>
                <div>Requiere supervisor para manuales</div>
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
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">💯 REVISA 2X ANTES</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">⚠️ PASO CRÍTICO - Verifica TODO</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-1 font-semibold">
                <div>✓ Cliente correcto?</div>
                <div>✓ Productos correctos?</div>
                <div>✓ Cantidades correctas?</div>
                <div>✓ Precios correctos?</div>
                <div>✓ Descuentos correctos?</div>
                <div>✓ Total correcto?</div>
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
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">💳 Registra Pago</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-4">Selecciona método de pago</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-cyan-200 dark:border-cyan-800 text-sm space-y-2">
                <div>💵 Efectivo</div>
                <div>🏦 Transferencia</div>
                <div>📝 Cheque</div>
                <div>📊 Crédito</div>
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
          </div>
          <div className="pt-2">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-3">✅ Confirma y Guarda</h3>
              <p className="text-indigo-800 dark:text-indigo-200 mb-4">Clic [Guardar] o [Confirmar Venta]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-indigo-200 dark:border-indigo-800 text-sm space-y-2">
                <div>✅ Recibo creado y foliado</div>
                <div>✅ Inventario actualizado</div>
                <div>✅ Cliente registrado</div>
                <div>✅ Ganancia calculada</div>
                <div>✅ Listo para imprimir</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONCEPTOS CLAVE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔑 Conceptos Críticos</h2>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-3">📄 Recibo (Factura)</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">Documento oficial que contiene:</p>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 ml-4">
          <li>🔢 Número de folio único</li>
          <li>📅 Fecha y hora exacta</li>
          <li>👤 Cliente (quién compró)</li>
          <li>📦 Productos (qué compró)</li>
          <li>💵 Total a pagar</li>
          <li>💳 Método de pago</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-3">👤 Cliente</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">Determina automáticamente:</p>
        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 ml-4">
          <li>🏷️ Grupo de cliente (mayorista/minorista/VIP)</li>
          <li>💰 Precio de cada producto</li>
          <li>🎁 Descuentos disponibles</li>
          <li>📊 Límite de crédito</li>
          <li>📈 Historial de compras</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-3">📦 Producto</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">Sistema hace automáticamente:</p>
        <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1 ml-4">
          <li>🔍 Busca en base de datos</li>
          <li>💲 Obtiene precio según grupo del cliente</li>
          <li>📊 Calcula costo y margen</li>
          <li>✅ Verifica disponibilidad en inventario</li>
          <li>➖ Descuenta del stock automáticamente</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-3">💳 Pago</h3>
        <p className="text-orange-800 dark:text-orange-200 mb-4">Métodos disponibles:</p>
        <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1 ml-4">
          <li>💵 Efectivo (inmediato, seguro)</li>
          <li>🏦 Transferencia (verifica referencia)</li>
          <li>📝 Cheque (a fecha)</li>
          <li>📊 Crédito (registra como deuda)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CHECKLIST ANTES DE GUARDAR -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">✅ Checklist ANTES de Confirmar</h2>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border-2 border-red-400 dark:border-red-600 space-y-4">
      <p className="text-lg font-bold text-red-900 dark:text-red-300 mb-6">🚨 TÓMATE 30 SEGUNDOS PARA REVISAR. Es crítico.</p>
      
      <div className="space-y-3">
        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Cliente correcto?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Verifica nombre y grupo (mayorista/minorista/etc)</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Productos correctos?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Qué está en la lista? ¿Hay algo que no debería?</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Cantidades correctas?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">100 kg papa? ¿O fue 10? Verifica 2x</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Precios correctos?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Papa a $15 (mayorista) o $25 (minorista)?</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Descuentos correctos?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Se aplicó descuento? ¿Es el correcto?</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Total correcto?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Suma manual rápida. ¿Coincide con total?</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">7️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">¿Método de pago correcto?</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Efectivo? ¿Crédito? ¿Transferencia?</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-lg font-bold text-green-600 dark:text-green-400">✅ Si TODO está bien → [GUARDAR]</p>
        <p className="text-lg font-bold text-red-600 dark:text-red-400">❌ Si algo está mal → CANCELA y corrije primero</p>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes (EVITAR)</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Cliente equivocado</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Creas recibo para cliente X pero aplicas precios de cliente Y</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Verifica cliente antes de agregar productos</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Cantidad incorrecta</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Digitas 100 cuando fueron 10 kg. Mucho dinero en riesgo</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE verifica cantidad 2 veces</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Producto equivocado</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Agregas papa cuando cliente quería chile</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Lee bien el producto antes de confirmar</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Guardar sin revisar</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Presionas guardar sin verificar nada</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ REGLA DE ORO: Verifica 2x antes de confirmar</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Descuento manual sin autorización</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Aplicas descuento que no está autorizado</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Solo supervisor puede autorizar descuentos manuales</p>
      </div>
    </div>
  </section>

  <!-- OPERACIONES DESPUÉS DE GUARDAR -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📋 Después de Guardar (Opciones)</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">🖨️ IMPRIMIR</h3>
        <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">Imprime recibo oficial para cliente</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-xs space-y-1">
          <div>✓ Formato A4 o ticket</div>
          <div>✓ Incluye QR (si aplica)</div>
          <div>✓ Cliente recibe comprobante</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">📧 ENVIAR</h3>
        <p className="text-green-800 dark:text-green-200 text-sm mb-4">Envía copia por email</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 text-xs space-y-1">
          <div>✓ Email automático a cliente</div>
          <div>✓ PDF adjunto</div>
          <div>✓ Confirmación de envío</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">📊 ANALIZAR</h3>
        <p className="text-purple-800 dark:text-purple-200 text-sm mb-4">Ve detalles y reportes</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-purple-200 dark:border-purple-800 text-xs space-y-1">
          <div>✓ Costo total</div>
          <div>✓ Ganancia obtenida</div>
          <div>✓ Margen %</div>
        </div>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🚨 Regla de Oro del Módulo Recibos</h2>
    
    <div className="bg-white/20 p-6 rounded-lg mb-6 border-2 border-white">
      <p className="text-2xl font-bold text-center mb-4">
        "VERIFICA 2X ANTES DE CONFIRMAR"
      </p>
      <p className="text-center text-lg">
        Una vez guardado, NO se puede deshacer fácilmente. Se necesita supervisor para reversar.
      </p>
    </div>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>SIN RECIBO = SIN VENTA REGISTRADA</strong> - Trabajo para nada</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Datos correctos = Control total</strong> - Sabes ganancias exactas</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>Integración automática</strong> - Actualiza: Inventario, Clientes, Deudas, Reportes</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Cada error afecta TODO</strong> - Inventario, reportes, ganancias</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Tómate 30 segundos</strong> - Vale la pena revisar antes de guardar</span>
      </li>
    </ul>
  </section>
</div>
  `,
};