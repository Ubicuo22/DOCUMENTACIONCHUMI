export const dispositivos = {
  title: "Módulo Administración de Dispositivos",
  icon: "Lock",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-lg border border-purple-200 dark:border-purple-800">
    <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-300 mb-4">Módulo Administración de Dispositivos</h2>
    <p className="text-purple-800 dark:text-purple-200 text-lg leading-relaxed">
      Controla qué dispositivos pueden acceder a CHUMI. Autoriza nuevos equipos, bloquea dispositivos comprometidos 
      y protege tu sistema contra accesos no autorizados. Herramienta crítica de seguridad.
    </p>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔐 ¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
        <span className="text-4xl flex-shrink-0">🚪</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Control de Acceso</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Sin control, cualquiera podría entrar desde cualquier lugar</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">🛡️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Protección de Datos</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Bloquea dispositivos robados o comprometidos</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <span className="text-4xl flex-shrink-0">👔</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Control de Empleados</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Desactiva acceso al instante cuando alguien se va</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">📊</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Monitoreo Total</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Ve quién accede, desde dónde y cuándo</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Nuevo Dispositivo</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Esto sucede cuando alguien intenta acceder desde una computadora nueva:</p>
    
    <div className="space-y-4">
      <!-- PASO 1 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">1</div>
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-yellow-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">💻 Intento de Acceso Nuevo</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Alguien intenta acceder desde una computadora desconocida</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <div>IP: 190.45.80.30</div>
                <div>Navegador: Chrome Windows</div>
                <div>Usuario: juan@empresa.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 2 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">2</div>
            <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-3">⏸️ Estado: PENDIENTE</h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-4">Sistema genera solicitud de aprobación. Usuario NO puede acceder aún</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 3 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">3</div>
            <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-red-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">🔍 Administrador Revisa</h3>
              <p className="text-orange-800 dark:text-orange-200 mb-4">Verificas: ¿De quién es? ¿IP válida? ¿Navegador normal? ¿Algo sospechoso?</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 4 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">4</div>
            <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-green-500 mt-2"></div>
          </div>
          <div className="pb-8 pt-2">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">⚖️ Decides: Autorizar o Rechazar</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Si confías: [Autorizar] | Si dudas: [Rechazar]</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PASO 5 -->
      <div className="relative">
        <div className="flex gap-6">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg">5</div>
          </div>
          <div className="pt-2">
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">✅ Dispositivo Autorizado</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Usuario puede acceder normalmente. Sistema registra: IP, navegador, fecha, hora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ESTADOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📊 Estados de un Dispositivo</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟡</span>
          <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-300">PENDIENTE</h3>
        </div>
        <p className="text-yellow-800 dark:text-yellow-200 mb-3">Esperando aprobación del administrador</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-yellow-200 dark:border-yellow-800 text-sm space-y-1">
          <div>⏸️ Usuario NO puede acceder</div>
          <div>⏸️ Revisar URGENTE</div>
          <div>⏸️ Requiere tu acción</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🟢</span>
          <h3 className="text-2xl font-bold text-green-900 dark:text-green-300">AUTORIZADO</h3>
        </div>
        <p className="text-green-800 dark:text-green-200 mb-3">Aprobado para acceder al sistema</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-green-200 dark:border-green-800 text-sm space-y-1">
          <div>✅ Usuario puede acceder</div>
          <div>✅ En línea (activo) o Offline</div>
          <div>✅ Monitoreo continuo</div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔴</span>
          <h3 className="text-2xl font-bold text-red-900 dark:text-red-300">DESAUTORIZADO</h3>
        </div>
        <p className="text-red-800 dark:text-red-200 mb-3">Bloqueado del sistema</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-red-200 dark:border-red-800 text-sm space-y-1">
          <div>🚫 Usuario NO puede acceder</div>
          <div>🚫 Acceso revocado</div>
          <div>🚫 Datos protegidos</div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⚪</span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">INACTIVO</h3>
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-3">Autorizado pero sin usar por mucho tiempo</p>
        <div className="bg-white dark:bg-slate-900 p-3 rounded border border-gray-200 dark:border-gray-800 text-sm space-y-1">
          <div>⏸️ Sigue autorizado</div>
          <div>⏸️ Sin acceso reciente</div>
          <div>⏸️ Considera desautorizar</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Autorizar un Dispositivo</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a "Pendientes"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Busca dispositivos nuevos esperando aprobación</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Revisa la Información</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">IP, Navegador, SO, Usuario. ¿Todo normal?</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Haz Checklist de Seguridad</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">¿Conozco este dispositivo? ¿IP tiene sentido? ¿Navegador normal?</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [AUTORIZAR]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Confirma y dispositivo está listo para usar</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
      <h3 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-6">Desautorizar un Dispositivo</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-red-200 dark:border-red-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a "Autorizados"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Busca el dispositivo a bloquear</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-red-200 dark:border-red-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona el Dispositivo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Haz clic para seleccionarlo</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-red-200 dark:border-red-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [DESAUTORIZAR]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Ingresa razón (recomendado)</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-red-200 dark:border-red-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Confirma [SÍ, DESAUTORIZAR]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Acceso revocado inmediatamente</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CHECKLIST DE SEGURIDAD -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">✅ Checklist: ¿Autorizar o Rechazar?</h2>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 space-y-4">
      <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">¿Conozco este dispositivo?</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">¿Es de alguien del equipo? ¿De la oficina? ✓ = SÍ</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">¿IP tiene sentido?</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">¿192.168.x.x (oficina) o IP esperada? ✓ = SÍ</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">¿Navegador es normal?</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Chrome, Firefox, Safari, Edge = OK ✓ = SÍ</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">¿Sistema Operativo está actualizado?</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Windows 11, macOS reciente = OK ✓ = SÍ</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">¿Nota del usuario tiene sentido?</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">"Computadora nueva" = Normal ✓ = SÍ</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-lg font-bold text-gray-900 dark:text-white mb-3">RESULTADO:</p>
        <div className="flex gap-3">
          <div className="flex-1 bg-green-100 dark:bg-green-900 p-3 rounded border border-green-300 dark:border-green-700">
            <p className="font-bold text-green-900 dark:text-green-300">✅ 5/5 SÍ</p>
            <p className="text-sm text-green-800 dark:text-green-200">AUTORIZA</p>
          </div>
          <div className="flex-1 bg-yellow-100 dark:bg-yellow-900 p-3 rounded border border-yellow-300 dark:border-yellow-700">
            <p className="font-bold text-yellow-900 dark:text-yellow-300">⚠️ 3-4 SÍ</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">INVESTIGA</p>
          </div>
          <div className="flex-1 bg-red-100 dark:bg-red-900 p-3 rounded border border-red-300 dark:border-red-700">
            <p className="font-bold text-red-900 dark:text-red-300">❌ <3 SÍ</p>
            <p className="text-sm text-red-800 dark:text-red-200">RECHAZA</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes de Seguridad</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Autorizar sin revisar</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Haces clic autorizar sin ver IP, navegador, nada</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ SIEMPRE verifica información antes de autorizar</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Tardar en revisar "Pendientes"</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Dejas dispositivos pendientes por días</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Revisa diariamente. Son nuevas solicitudes</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No desautorizar al empleado que se va</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Empleado renuncia y tú olvidas bloquear su acceso</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ ANTES que se vaya: desautoriza TODOS sus dispositivos</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Ignorar dispositivos inactivos</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Dispositivos autorizados pero sin usar por meses</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Mensualmente: desautoriza los innecesarios</p>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🔐 Regla de Oro</h2>
    
    <div className="text-xl font-bold mb-6 p-4 bg-white/20 rounded-lg">
      "AUTORIZA LENTAMENTE, DESAUTORIZA RÁPIDAMENTE"
    </div>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>Cada dispositivo es puerta de entrada</strong> - Si no controlas dispositivos, pierdes control total</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Revisa "Pendientes" DIARIAMENTE</strong> - Nuevas solicitudes necesitan decisión rápida</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>Desautoriza ANTES que alguien se vaya</strong> - No esperes, actúa inmediatamente</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Monitorea regularmente</strong> - No es "set and forget"</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>La duda es enemiga de seguridad</strong> - Si no estás seguro, NO autorices</span>
      </li>
    </ul>
  </section>
</div>
  `,
};