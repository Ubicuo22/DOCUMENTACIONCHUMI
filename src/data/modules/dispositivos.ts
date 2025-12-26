export const dispositivos = {
  title: "Módulo Administración de Dispositivos",
  icon: "Monitor",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO INTRO MODERNO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">🔐</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Administrador de Dispositivos
          </h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Controla qué dispositivos pueden acceder a CHUMI. Autoriza nuevos equipos, bloquea dispositivos comprometidos y <span class="font-bold text-yellow-300">protege tu sistema</span> contra accesos no autorizados. Herramienta crítica de seguridad.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">🔒</span>
              <p class="text-sm font-bold text-gray-900">Control de acceso</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">🛡️</span>
              <p class="text-sm font-bold text-gray-900">Máxima seguridad</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-pink-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-pink-300 shadow-lg">
              <span class="text-2xl">📊</span>
              <p class="text-sm font-bold text-gray-900">Auditoría completa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        1
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Panel de control de dispositivos</p>
      </div>
    </div>
    
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/dispositivos/1.png" alt="Ventana Principal Administrador de Dispositivos" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
        <p class="font-semibold text-indigo-900 dark:text-indigo-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">🎯</span>
          Funciones Principales:
        </p>
        <ul class="space-y-2 text-sm md:text-base text-indigo-800 dark:text-indigo-200">
          <li class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold flex-shrink-0">•</span>
            <span><strong>Gestionar dispositivos:</strong> Control completo sobre qué equipos pueden acceder a CHUMI</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold flex-shrink-0">•</span>
            <span><strong>Bloquear no deseados:</strong> Prevén accesos de dispositivos comprometidos o no autorizados</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold flex-shrink-0">•</span>
            <span><strong>Rastrear movimientos:</strong> Saber qué se hace desde cualquier módulo del programa</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-indigo-600 font-bold flex-shrink-0">•</span>
            <span><strong>Gestión por IP:</strong> Controla dispositivos mediante dirección IP única</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- POR QUÉ ES CRÍTICO -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">🔐 ¿Por Qué es Crítico?</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Razones para usar este módulo</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Razón 1 -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-red-300/20 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
        <div class="relative flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
            🚪
          </div>
          <div>
            <p class="text-lg font-bold text-red-900 dark:text-red-300 mb-2">Control de Acceso</p>
            <p class="text-sm text-red-800 dark:text-red-200">Sin control, cualquiera podría entrar desde cualquier lugar</p>
          </div>
        </div>
      </div>

      <!-- Razón 2 -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
        <div class="relative flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
            🛡️
          </div>
          <div>
            <p class="text-lg font-bold text-orange-900 dark:text-orange-300 mb-2">Protección de Datos</p>
            <p class="text-sm text-orange-800 dark:text-orange-200">Bloquea dispositivos robados o comprometidos</p>
          </div>
        </div>
      </div>

      <!-- Razón 3 -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-2 border-yellow-200 dark:border-yellow-700 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
        <div class="relative flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
            👔
          </div>
          <div>
            <p class="text-lg font-bold text-yellow-900 dark:text-yellow-300 mb-2">Control de Empleados</p>
            <p class="text-sm text-yellow-800 dark:text-yellow-200">Desactiva acceso al instante cuando alguien se va</p>
          </div>
        </div>
      </div>

      <!-- Razón 4 -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div class="absolute top-0 right-0 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl -translate-y-12 translate-x-12"></div>
        <div class="relative flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
            📊
          </div>
          <div>
            <p class="text-lg font-bold text-purple-900 dark:text-purple-300 mb-2">Monitoreo Total</p>
            <p class="text-sm text-purple-800 dark:text-purple-200">Ve quién accede, desde dónde y cuándo</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 2: INFORMACIÓN DEL DISPOSITIVO ACTUAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        2
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Información del Dispositivo Actual</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Detalles del equipo que estás usando</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">💻</span>
          <h3 class="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">Ver Información del Dispositivo</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/dispositivos/2.png" alt="Información del Dispositivo Actual" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 space-y-3">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200">
            Te permite ver la <strong>información del dispositivo en el que te encuentras usando CHUMI</strong> actualmente. Incluye detalles técnicos como tipo, IP, sistema operativo e identificador único.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW: NUEVO DISPOSITIVO -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Nuevo Dispositivo</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Proceso cuando alguien intenta acceder desde una computadora nueva</p>
    </div>
    
    <div class="relative max-w-4xl mx-auto">
      <!-- Timeline Line -->
      <div class="absolute left-6 md:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-yellow-500 via-orange-500 via-red-500 to-green-500"></div>
      
      <div class="space-y-6">
        <!-- Paso 1 -->
        <div class="relative pl-16 md:pl-24">
          <div class="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900">
            <span class="text-white text-lg md:text-2xl font-bold">1</span>
          </div>
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 md:p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-lg">
            <h3 class="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
              <span class="text-2xl">💻</span>
              Intento de Acceso Nuevo
            </h3>
            <p class="text-sm md:text-base text-blue-800 dark:text-blue-200 mb-3">
              Alguien intenta acceder desde una computadora desconocida
            </p>
            <div class="bg-white dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-800 text-xs md:text-sm font-mono space-y-1">
              <div>IP: 190.45.80.30</div>
              <div>Navegador: Chrome Windows</div>
              <div>Usuario: juan@empresa.com</div>
            </div>
          </div>
        </div>

        <!-- Paso 2 -->
        <div class="relative pl-16 md:pl-24">
          <div class="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900">
            <span class="text-white text-lg md:text-2xl font-bold">2</span>
          </div>
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 p-4 md:p-6 rounded-xl border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
            <h3 class="text-lg md:text-xl font-bold text-yellow-900 dark:text-yellow-300 mb-2 flex items-center gap-2">
              <span class="text-2xl">⏸️</span>
              Estado: PENDIENTE
            </h3>
            <p class="text-sm md:text-base text-yellow-800 dark:text-yellow-200">
              Sistema genera solicitud de aprobación. Usuario NO puede acceder aún
            </p>
          </div>
        </div>

        <!-- Paso 3 -->
        <div class="relative pl-16 md:pl-24">
          <div class="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900">
            <span class="text-white text-lg md:text-2xl font-bold">3</span>
          </div>
          <div class="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 p-4 md:p-6 rounded-xl border-2 border-orange-300 dark:border-orange-700 shadow-lg">
            <h3 class="text-lg md:text-xl font-bold text-orange-900 dark:text-orange-300 mb-2 flex items-center gap-2">
              <span class="text-2xl">🔍</span>
              Administrador Revisa
            </h3>
            <p class="text-sm md:text-base text-orange-800 dark:text-orange-200">
              Verificas: ¿De quién es? ¿IP válida? ¿Navegador normal? ¿Algo sospechoso?
            </p>
          </div>
        </div>

        <!-- Paso 4 -->
        <div class="relative pl-16 md:pl-24">
          <div class="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900">
            <span class="text-white text-lg md:text-2xl font-bold">4</span>
          </div>
          <div class="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-4 md:p-6 rounded-xl border-2 border-red-300 dark:border-red-700 shadow-lg">
            <h3 class="text-lg md:text-xl font-bold text-red-900 dark:text-red-300 mb-2 flex items-center gap-2">
              <span class="text-2xl">⚖️</span>
              Decides: Autorizar o Rechazar
            </h3>
            <p class="text-sm md:text-base text-red-800 dark:text-red-200">
              Si confías: [Autorizar] | Si dudas: [Rechazar]
            </p>
          </div>
        </div>

        <!-- Paso 5 -->
        <div class="relative pl-16 md:pl-24">
          <div class="absolute left-0 top-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900">
            <span class="text-white text-lg md:text-2xl font-bold">5</span>
          </div>
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-4 md:p-6 rounded-xl border-2 border-green-300 dark:border-green-700 shadow-lg">
            <h3 class="text-lg md:text-xl font-bold text-green-900 dark:text-green-300 mb-2 flex items-center gap-2">
              <span class="text-2xl">✅</span>
              Dispositivo Autorizado
            </h3>
            <p class="text-sm md:text-base text-green-800 dark:text-green-200">
              Usuario puede acceder normalmente. Sistema registra: IP, navegador, fecha, hora
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 3: BLOQUEAR DISPOSITIVOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        3
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Bloquear Dispositivos</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Control de acceso y seguridad</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🚫</span>
          <h3 class="text-xl md:text-2xl font-bold text-red-900 dark:text-red-300">Función de Bloqueo</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-red-300 dark:border-red-600">
          <img src="/dispositivos/3.png" alt="Bloquear Dispositivos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
          <p class="text-sm md:text-base text-red-800 dark:text-red-200">
            Permite <strong>bloquear dispositivos</strong> no deseados o comprometidos, previniendo accesos no autorizados al sistema CHUMI.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 4: HISTORIAL DE LOGINS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        4
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Historial de Logins</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Rastrea todos los accesos al sistema</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📅</span>
          <h3 class="text-xl md:text-2xl font-bold text-green-900 dark:text-green-300">Registro de Accesos</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/dispositivos/4.png" alt="Historial de Logins" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800 space-y-3">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">
            Ver los <strong>dispositivos que han ingresado al programa, con fecha y hora</strong>. Registra los <strong>últimos 50 logins</strong> con información completa de cada acceso.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 5: GESTIONAR ACCESOS (ADMINISTRADOR) -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        5
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gestionar Accesos (Administrador)</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Control completo de permisos</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">👨‍💼</span>
          <h3 class="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-300">Panel de Administrador</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/dispositivos/5.png" alt="Gestionar Accesos como Administrador" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200">
            Permite (como administrador) <strong>gestionar accesos</strong> de forma completa: autorizar nuevos dispositivos, bloquear existentes, monitorear actividad y auditar historial.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ELIMINACIÓN DE DISPOSITIVOS -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">⚠️ Eliminación de Dispositivos</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Procedimiento especial requerido</p>
    </div>
    
    <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-300 dark:border-amber-700 shadow-lg">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <div class="flex-shrink-0">
          <div class="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-4xl shadow-lg">
            🛠️
          </div>
        </div>
        <div class="flex-1 space-y-4">
          <h3 class="text-2xl md:text-3xl font-bold text-amber-900 dark:text-amber-300">
            Solicitud con Técnico de Ubicuo Studio
          </h3>
          <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 space-y-3">
            <p class="font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-2">
              <span class="text-xl">⚠️</span>
              Importante:
            </p>
            <p class="text-sm md:text-base text-amber-800 dark:text-amber-200">
              La <strong>eliminación de dispositivos debe solicitarse con un técnico de Ubicuo Studio</strong>. Esto es para no eliminar información importante que haya podido haberse realizado desde el dispositivo que se quiere eliminar.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ESTADOS DE DISPOSITIVOS (CONTENIDO ORIGINAL) -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">📊 Estados de Dispositivos</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Clasificación de equipos</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- AUTORIZADO -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-2xl border-2 border-green-300 dark:border-green-700 shadow-lg">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white text-3xl shadow-lg mb-3">
            ✅
          </div>
          <h3 class="text-xl font-bold text-green-900 dark:text-green-300">AUTORIZADO</h3>
        </div>
        <div class="space-y-2 text-sm text-green-800 dark:text-green-200">
          <p>• Acceso completo a CHUMI</p>
          <p>• Puede usar todos los módulos</p>
          <p>• Totalmente seguro</p>
        </div>
      </div>

      <!-- PENDIENTE -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 p-6 rounded-2xl border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl text-white text-3xl shadow-lg mb-3">
            ⏸️
          </div>
          <h3 class="text-xl font-bold text-yellow-900 dark:text-yellow-300">PENDIENTE</h3>
        </div>
        <div class="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
          <p>• Solicitud generada</p>
          <p>• NO puede acceder aún</p>
          <p>• Necesita aprobación</p>
        </div>
      </div>

      <!-- DESAUTORIZADO -->
      <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-300 dark:border-red-700 shadow-lg">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl text-white text-3xl shadow-lg mb-3">
            ❌
          </div>
          <h3 class="text-xl font-bold text-red-900 dark:text-red-300">DESAUTORIZADO</h3>
        </div>
        <div class="space-y-2 text-sm text-red-800 dark:text-red-200">
          <p>• Acceso bloqueado</p>
          <p>• No puede entrar a CHUMI</p>
          <p>• Razón: revocado manualmente</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CÓMO DESAUTORIZAR (CONTENIDO ORIGINAL MEJORADO) -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">🚫 Cómo Desautorizar un Dispositivo</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Revoca acceso inmediato</p>
    </div>
    
    <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <div class="space-y-4">
        <div class="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
          <span class="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Selecciona el dispositivo</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">De la lista de dispositivos autorizados</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
          <span class="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Clic en [DESAUTORIZAR]</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Botón rojo disponible</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
          <span class="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Ingresa razón (opcional)</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Ingresa razón (recomendado)</p>
          </div>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-red-200 dark:border-red-800">
          <span class="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Confirma [SÍ, DESAUTORIZAR]</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Acceso revocado inmediatamente</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CHECKLIST DE SEGURIDAD (CONTENIDO ORIGINAL MEJORADO) -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">✅ Checklist: ¿Autorizar o Rechazar?</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Guía de decisión de seguridad</p>
    </div>
    
    <div class="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-4">
      <div class="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">¿Conozco este dispositivo?</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">¿Es de alguien del equipo? ¿De la oficina? ✓ = SÍ</p>
        </div>
      </div>

      <div class="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">¿IP tiene sentido?</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">¿192.168.x.x (oficina) o IP esperada? ✓ = SÍ</p>
        </div>
      </div>

      <div class="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">¿Navegador es normal?</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Chrome, Firefox, Safari, Edge = OK ✓ = SÍ</p>
        </div>
      </div>

      <div class="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">¿Sistema Operativo está actualizado?</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Windows 11, macOS reciente = OK ✓ = SÍ</p>
        </div>
      </div>

      <div class="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-2xl flex-shrink-0">☑️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">¿Nota del usuario tiene sentido?</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">"Computadora nueva" = Normal ✓ = SÍ</p>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-lg font-bold text-gray-900 dark:text-white mb-4">RESULTADO:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-300 dark:border-green-700">
            <p class="font-bold text-green-900 dark:text-green-300 text-lg mb-1">✅ 5/5 SÍ</p>
            <p class="text-sm text-green-800 dark:text-green-200">AUTORIZA</p>
          </div>
          <div class="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-300 dark:border-yellow-700">
            <p class="font-bold text-yellow-900 dark:text-yellow-300 text-lg mb-1">⚠️ 3-4 SÍ</p>
            <p class="text-sm text-yellow-800 dark:text-yellow-200">INVESTIGA</p>
          </div>
          <div class="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border border-red-300 dark:border-red-700">
            <p class="font-bold text-red-900 dark:text-red-300 text-lg mb-1">❌ <3 SÍ</p>
            <p class="text-sm text-red-800 dark:text-red-200">RECHAZA</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES (CONTENIDO ORIGINAL MEJORADO) -->
  <section class="space-y-6">
    <div class="text-center space-y-3">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes de Seguridad</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400">Evita estas prácticas peligrosas</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Error 1 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Autorizar sin revisar
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Haces clic autorizar sin ver IP, navegador, nada
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>SIEMPRE verifica información antes de autorizar</span>
        </p>
      </div>

      <!-- Error 2 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Tardar en revisar "Pendientes"
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Dejas dispositivos pendientes por días
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>Revisa diariamente. Son nuevas solicitudes</span>
        </p>
      </div>

      <!-- Error 3 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          No desautorizar al empleado que se va
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Empleado renuncia y tú olvidas bloquear su acceso
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>ANTES que se vaya: desautoriza TODOS sus dispositivos</span>
        </p>
      </div>

      <!-- Error 4 -->
      <div class="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 rounded-2xl border-2 border-red-200 dark:border-red-700">
        <p class="font-bold text-red-900 dark:text-red-300 mb-3 flex items-center gap-2 text-lg">
          <span class="text-2xl">❌</span>
          Ignorar dispositivos inactivos
        </p>
        <p class="text-sm text-red-800 dark:text-red-200 mb-3">
          Dispositivos autorizados pero sin usar por meses
        </p>
        <p class="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
          <span class="font-bold flex-shrink-0">✓</span>
          <span>Mensualmente: desautoriza los innecesarios</span>
        </p>
      </div>
    </div>
  </section>

  <!-- REGLA DE ORO (MENSAJE FINAL) -->
  <section class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">🔐 Regla de Oro</h2>
      
      <div class="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/30 mb-10">
        <p class="text-2xl md:text-3xl font-bold text-white text-center">
          "AUTORIZA LENTAMENTE, DESAUTORIZA RÁPIDAMENTE"
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">1️⃣</span>
            <div>
              <p class="font-bold text-lg mb-1">Cada dispositivo es puerta de entrada</p>
              <p class="text-sm text-purple-100">Si no controlas dispositivos, pierdes control total</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">2️⃣</span>
            <div>
              <p class="font-bold text-lg mb-1">Revisa "Pendientes" DIARIAMENTE</p>
              <p class="text-sm text-purple-100">Nuevas solicitudes necesitan decisión rápida</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">3️⃣</span>
            <div>
              <p class="font-bold text-lg mb-1">Desautoriza ANTES que alguien se vaya</p>
              <p class="text-sm text-purple-100">No esperes, actúa inmediatamente</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">4️⃣</span>
            <div>
              <p class="font-bold text-lg mb-1">Monitorea regularmente</p>
              <p class="text-sm text-purple-100">No es "set and forget"</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">5️⃣</span>
            <div>
              <p class="font-bold text-lg mb-1">La duda es enemiga de seguridad</p>
              <p class="text-sm text-purple-100">Si no estás seguro, NO autorices</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🛠️</span>
            <div>
              <p class="font-bold text-lg mb-1">Eliminación segura</p>
              <p class="text-sm text-purple-100">Solo con técnico de Ubicuo Studio</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/30">
        <p class="text-xl md:text-2xl font-bold text-white text-center mb-3 flex items-center justify-center gap-3">
          <span class="text-3xl">💼</span>
          Contacto Ubicuo Studio
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-center">
          <div>
            <p class="text-sm text-purple-200 mb-1">Correo Electrónico</p>
            <p class="font-semibold">ubicuoluzestrategica@gmail.com</p>
          </div>
          <div>
            <p class="text-sm text-purple-200 mb-1">WhatsApp</p>
            <p class="font-semibold">+52 4431187975</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};