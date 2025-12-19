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

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⏱️ ¿Por Qué UbicuoAI?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-violet-50 dark:bg-violet-900/20 rounded-lg border border-violet-200 dark:border-violet-800">
        <span className="text-4xl flex-shrink-0">⚡</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Velocidad Extrema</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">20+ productos en 6-7 minutos vs 20-30 minutos manual</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">🧠</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Inteligencia Real</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Busca incluso con errores ortográficos</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">📚</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Aprendizaje Continuo</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Guarda correcciones y mejora con el uso</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">✅</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Menos Errores</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Múltiples niveles de búsqueda automática</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: 3 Pasos Simples</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">De listado caótico a pedido perfecto:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">📋 PEGA (10 segundos)</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Copia listado de cualquier fuente</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <div>Email ✓</div>
                <div>WhatsApp ✓</div>
                <div>PDF ✓</div>
                <div>Cualquier formato ✓</div>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">Luego: Pega en UbicuoAI</p>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">⚙️ PROCESA (2 segundos)</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Clic en [Procesar]. UbicuoAI automáticamente:</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
                <div>✓ Extrae nombres de productos</div>
                <div>✓ Identifica cantidades y unidades</div>
                <div>✓ Busca en base de datos</div>
                <div>✓ Asigna nivel de confianza</div>
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
          </div>
          <div className="pt-2">
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">✅ REVISA Y ENVÍA (1-2 minutos)</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Verifica, corrige si necesario, envía</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>🟢 Verde = Dejar como está</div>
                <div>🟡 Amarillo = Revisar</div>
                <div>🔴 Rojo = Corregir obligatoriamente</div>
                <div>📤 Luego: [Enviar a Recibos]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SISTEMA DE CONFIANZA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Sistema de Confianza (3 Colores)</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Cada producto tiene un nivel de confianza:</p>
    
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">95-100% VERDE</h3>
        </div>
        <p className="text-green-800 dark:text-green-200 mb-4 font-semibold">Coincidencia exacta o aprendida</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div>✓ Encontrado en base de datos exactamente</div>
          <div>✓ O ya corregiste antes (sistema recuerda)</div>
          <div>✓ Usar sin revisar - Muy seguro</div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">75-94% AMARILLO</h3>
        </div>
        <p className="text-yellow-800 dark:text-yellow-200 mb-4 font-semibold">Búsqueda aproximada</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-2">
          <div>⚠️ Sistema encontró algo similar (75%+ parecido)</div>
          <div>⚠️ Probablemente correcto pero no seguro</div>
          <div>⚠️ REVISAR antes de enviar</div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-300 dark:border-red-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300"><75% ROJO</h3>
        </div>
        <p className="text-red-800 dark:text-red-200 mb-4 font-semibold">No encontrado o muy incierto</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
          <div>🚫 Sistema no encontró nada parecido</div>
          <div>🚫 Requiere corrección manual OBLIGATORIA</div>
          <div>🚫 No se puede enviar con rojos</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CÓMO FUNCIONA LA BÚSQUEDA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔍 Los 3 Niveles de Búsqueda</h2>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Nivel 1: Coincidencia Exacta (100%)</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-3">Escribes exactamente como existe en base de datos</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm">
          <p className="font-mono mb-2">Escribes: "Aguacate"</p>
          <p className="font-mono text-blue-600 dark:text-blue-400">Existe: "Aguacate" ✓</p>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">Resultado: 🟢 Verde 100%</p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Nivel 2: Diccionario de Aprendizaje (95%)</h3>
        <p className="text-green-800 dark:text-green-200 mb-3">Sistema recuerda correcciones anteriores</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm">
          <p className="font-mono mb-2">Primera vez: "aguacte" → Corriges a "Aguacate"</p>
          <p className="font-mono mb-2">Segunda vez: "aguacte"</p>
          <p className="font-mono text-green-600 dark:text-green-400">Sistema: "Ah sí, esto es Aguacate" ✓</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-2">Resultado: 🟢 Verde 95%</p>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Nivel 3: Búsqueda Inteligente (75%+)</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-3">Busca por similitud incluso con errores</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <p className="font-mono">Escribes: "agacate" (falta u)</p>
          <p className="font-mono text-purple-600 dark:text-purple-400">Sistema calcula similitud: 87%</p>
          <p className="text-xs text-purple-600 dark:text-purple-400">Propone: "Aguacate" → 🟡 Amarillo 87%</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Procesar un Pedido (Escenario Real)</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Recibe listado desordenado</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Email, WhatsApp, etc. (puede estar bien o mal escrito)</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre UbicuoAI</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → UbicuoAI o Procesador de Pedidos</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Copia y pega el listado</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">En campo de entrada de UbicuoAI (un producto por línea ideal)</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Procesar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema extrae, busca, asigna confianza (2 segundos)</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Revisa cada producto</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">🟢 Verde = OK | 🟡 Amarillo = Verifica | 🔴 Rojo = Corrige</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Corrige los rojos/amarillos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Haz clic en el producto → Selecciona el correcto</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">7️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Enviar a Recibos]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Productos van directamente al módulo de Recibos</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-700">
          <p className="text-lg font-bold text-blue-900 dark:text-blue-300">⏱️ TOTAL: 6-7 minutos (vs 20-30 minutos manual)</p>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Corregir un Producto Rojo</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">A</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Opción 1: Clic directo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Haz clic en el producto rojo → Se abre selector</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">B</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Opción 2: Botón Editar</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clic [Editar] → Busca y selecciona → [Guardar]</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">C</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Opción 3: Búsqueda directa</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Escribe nombre correcto → Selecciona de lista</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FORMATOS ACEPTADOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📝 Formatos Aceptados</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">UbicuoAI acepta múltiples formatos (un producto por línea es ideal):</p>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="font-bold text-blue-900 dark:text-blue-300 mb-3">✅ Recomendado</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm font-mono space-y-1">
          <div>Chile serrano 6 kg</div>
          <div>Papa Cambray 12 kg</div>
          <div>Limón 3 kg</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <p className="font-bold text-green-900 dark:text-green-300 mb-3">✅ Cantidad Primero</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm font-mono space-y-1">
          <div>6 kg Chile serrano</div>
          <div>12 kg Papa Cambray</div>
          <div>3 kg Limón</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <p className="font-bold text-purple-900 dark:text-purple-300 mb-3">✅ Con Separadores</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm font-mono space-y-1">
          <div>Chile serrano - 6 kg</div>
          <div>Papa Cambray (12 kg)</div>
          <div>Limón: 3 kg</div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <p className="font-bold text-orange-900 dark:text-orange-300 mb-3">✅ Mixto (Realista)</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm font-mono space-y-1">
          <div>Chile serrano Oaxaca 6 kg</div>
          <div>12 papas Cambray tipo A</div>
          <div>Limón persa - 3 kg</div>
        </div>
      </div>
    </div>
  </section>

  <!-- APRENDIZAJE CONTINUO -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🧠 Sistema de Aprendizaje</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Cada corrección mejora el sistema:</p>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 space-y-6">
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">Primera Corrección</p>
        <div className="space-y-3 ml-4">
          <div>📝 <span className="font-mono">Escribes: "aguacte"</span></div>
          <div>❌ <span className="text-sm">Sistema no lo conoce (45% confianza)</span></div>
          <div>✏️ <span className="text-sm">Corriges manualmente a: "Aguacate"</span></div>
          <div>💾 <span className="text-sm font-bold text-purple-600 dark:text-purple-400">Sistema GUARDA: "aguacte" → "Aguacate"</span></div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700"></div>

      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">Segunda Vez en Adelante</p>
        <div className="space-y-3 ml-4">
          <div>📝 <span className="font-mono">Escribes: "aguacte" nuevamente</span></div>
          <div>✅ <span className="font-bold text-green-600 dark:text-green-400">Sistema YA LO SABE (95% confianza)</span></div>
          <div>⚡ <span className="text-sm">Se aplica automáticamente → 🟢 Verde</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- MEJORES PRÁCTICAS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">✅ Mejores Prácticas</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <p className="text-lg font-bold text-green-900 dark:text-green-300 mb-4">✅ HAZLO</p>
        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
          <li>✓ Pega directamente de fuentes sin editar</li>
          <li>✓ Un producto por línea</li>
          <li>✓ Cantidad y unidad claros</li>
          <li>✓ Usa nombres estándar</li>
          <li>✓ Corrige siempre los amarillos/rojos</li>
        </ul>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="text-lg font-bold text-red-900 dark:text-red-300 mb-4">❌ NO LO HAGAS</p>
        <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
          <li>✗ Todo en una línea</li>
          <li>✗ Cantidad vaga ("varios", "bastante")</li>
          <li>✗ Abreviaturas desconocidas</li>
          <li>✗ Ignorar amarillos</li>
          <li>✗ Enviar con rojos (no se permite)</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🤖 UbicuoAI es tu Asistente, No Reemplazo</h2>
    
    <ul className="space-y-4 text-lg mb-8">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">🎯</span>
        <span><strong>Tú revisas</strong> - Los resultados son sugerencias</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">✏️</span>
        <span><strong>Tú corriges</strong> - Si algo no es correcto</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">🚀</span>
        <span><strong>Tú controlas</strong> - Qué se envía a Recibos</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">📚</span>
        <span><strong>Sistema aprende</strong> - De cada corrección que haces</span>
      </li>
    </ul>

    <div className="bg-white/20 p-6 rounded-lg border-2 border-white">
      <p className="text-xl font-bold text-center">
        Cuanto más lo uses, mejor es.<br/>
        Cada corrección es un aprendizaje.
      </p>
    </div>
  </section>
</div>
  `,
};