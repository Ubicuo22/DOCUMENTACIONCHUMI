export const usuarios = {
  title: "Módulo Usuarios",
  icon: "Users",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO INTRO MODERNO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">👥</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Administrador de Usuarios
          </h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Controla quién accede al sistema, qué pueden hacer y qué datos pueden ver. Crea usuarios, asigna roles, <span class="font-bold text-yellow-300">gestiona permisos</span> y mantén tu sistema seguro.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">🔐</span>
              <p class="text-sm font-bold text-gray-900">Control de acceso</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">👁️</span>
              <p class="text-sm font-bold text-gray-900">Gestión de permisos</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-blue-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-blue-300 shadow-lg">
              <span class="text-2xl">🛡️</span>
              <p class="text-sm font-bold text-gray-900">Seguridad total</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 inline-block">
            <p class="text-sm text-yellow-100 flex items-center gap-2">
              <span class="text-lg">🔑</span>
              <span><strong>Recomendación:</strong> Cambiar contraseñas cada 3 meses</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        1
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Panel de administración de usuarios</p>
      </div>
    </div>
    
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/usuarios/1.png" alt="Ventana Principal Administrador de Usuarios" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-slate-50 dark:bg-slate-900/20 p-4 md:p-6 rounded-xl border-2 border-slate-200 dark:border-slate-800">
        <p class="font-semibold text-slate-900 dark:text-slate-300 mb-3 flex items-center gap-2">
          <span class="text-xl">ℹ️</span>
          Función Principal:
        </p>
        <p class="text-sm md:text-base text-slate-800 dark:text-slate-200">
          El <strong>Administrador de Usuarios</strong> sirve para gestionar los usuarios y sus permisos en el sistema CHUMI de forma centralizada.
        </p>
      </div>
    </div>
  </section>

  <!-- PASO 2: TARJETAS Y BÚSQUEDA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        2
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Métricas y Búsqueda</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">4 tarjetas informativas y filtros</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">📊</span>
          <h3 class="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300">Vista General del Sistema</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-blue-300 dark:border-blue-600">
          <img src="/usuarios/2.png" alt="Tarjetas de Usuarios y Barra de Búsqueda" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 space-y-4">
          <p class="text-sm md:text-base text-blue-800 dark:text-blue-200 mb-3">
            En la ventana principal se observan <strong>4 tarjetas indicando</strong>:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">👥</p>
              <p class="text-sm font-semibold text-blue-900 dark:text-blue-300">Total Usuarios</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">✅</p>
              <p class="text-sm font-semibold text-green-900 dark:text-green-300">Activos</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">🚫</p>
              <p class="text-sm font-semibold text-red-900 dark:text-red-300">Bloqueados</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center">
              <p class="text-2xl mb-1">👑</p>
              <p class="text-sm font-semibold text-purple-900 dark:text-purple-300">Administradores</p>
            </div>
          </div>
          <div class="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <p class="text-sm text-blue-700 dark:text-blue-300 flex items-start gap-2">
              <span class="text-lg flex-shrink-0">🔍</span>
              <span>Incluye <strong>barra de búsqueda y filtros</strong> para localizar usuarios rápidamente</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 3: PERSONALIZACIÓN DE PERFIL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        3
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Personalización de Perfil</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Contraseña, imagen y avatar</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">🎨</span>
          <h3 class="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-300">Configuración Personal</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/usuarios/3.png" alt="Personalización de Perfil de Usuario" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 space-y-4">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200 mb-3">
            Aquí el usuario será capaz de personalizar su perfil:
          </p>
          <div class="space-y-3">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p class="font-bold text-purple-900 dark:text-purple-300 mb-2 flex items-center gap-2">
                <span class="text-xl">🔑</span>
                Cambiar Contraseña
              </p>
              <p class="text-sm text-purple-800 dark:text-purple-200">
                Modificar la contraseña de acceso al sistema de forma segura
              </p>
            </div>
            <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
              <p class="font-bold text-pink-900 dark:text-pink-300 mb-2 flex items-center gap-2">
                <span class="text-xl">📸</span>
                Colocar Imagen de Perfil
              </p>
              <p class="text-sm text-pink-800 dark:text-pink-200">
                Subir una foto personal para identificación visual
              </p>
            </div>
            <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
              <p class="font-bold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
                <span class="text-xl">🎨</span>
                Cambiar Color de Avatar
              </p>
              <p class="text-sm text-indigo-800 dark:text-indigo-200">
                Personalizar el color del avatar cuando no hay imagen
              </p>
            </div>
          </div>
          <div class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
            <p class="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
              <span class="text-xl flex-shrink-0">⚠️</span>
              <span><strong>Recomendación de Seguridad:</strong> Se recomienda cambiar las contraseñas cada 3 meses para mantener la seguridad del sistema.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASO 4: ROL DEL USUARIO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">
        4
      </div>
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Rol del Usuario</h2>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Permisos y nivel de acceso</p>
      </div>
    </div>
    
    <div class="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 md:p-8 rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
          <span class="text-3xl md:text-4xl">👔</span>
          <h3 class="text-xl md:text-2xl font-bold text-emerald-900 dark:text-emerald-300">Gestión de Roles</h3>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-emerald-300 dark:border-emerald-600">
          <img src="/usuarios/4.png" alt="Rol del Usuario" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
          <p class="text-sm md:text-base text-emerald-800 dark:text-emerald-200 mb-3">
            También visualiza el <strong>rol que el usuario tiene</strong> asignado en el sistema, el cual determina sus permisos y nivel de acceso a los diferentes módulos de CHUMI.
          </p>
          <div class="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mt-3">
            <p class="text-sm text-emerald-700 dark:text-emerald-300">
              💡 Los roles definen automáticamente qué acciones puede realizar cada usuario en el sistema.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- POR QUÉ ES CRÍTICO (CONTENIDO ORIGINAL) -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">🔐 ¿Por Qué es Crítico?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span class="text-4xl flex-shrink-0">🚪</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Control de Acceso</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Define quién puede entrar al sistema</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span class="text-4xl flex-shrink-0">👁️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad de Datos</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Controla qué datos ve cada usuario</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span class="text-4xl flex-shrink-0">🛡️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Seguridad</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Registra cada acción para auditoría</p>
        </div>
      </div>

      <div class="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span class="text-4xl flex-shrink-0">⚙️</span>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white mb-2">Gestión Rápida</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Cambios de roles sin perder datos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">👥 Gestión Completa de Usuarios</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">📊</span>
            <div>
              <p class="font-bold text-lg mb-1">4 Métricas Clave</p>
              <p class="text-sm text-gray-100">Total, Activos, Bloqueados, Admins</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🔍</span>
            <div>
              <p class="font-bold text-lg mb-1">Búsqueda y Filtros</p>
              <p class="text-sm text-gray-100">Localiza usuarios rápidamente</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🎨</span>
            <div>
              <p class="font-bold text-lg mb-1">Personalización</p>
              <p class="text-sm text-gray-100">Contraseña, imagen y color de avatar</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">👔</span>
            <div>
              <p class="font-bold text-lg mb-1">Gestión de Roles</p>
              <p class="text-sm text-gray-100">Permisos y nivel de acceso</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🔑</span>
            <div>
              <p class="font-bold text-lg mb-1">Seguridad</p>
              <p class="text-sm text-gray-100">Cambio de contraseña cada 3 meses</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white">
            <span class="text-3xl flex-shrink-0">🛡️</span>
            <div>
              <p class="font-bold text-lg mb-1">Control Total</p>
              <p class="text-sm text-gray-100">Auditoría de todas las acciones</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-white/30">
        <p class="text-xl md:text-2xl font-bold text-white text-center mb-3 flex items-center justify-center gap-3">
          <span class="text-3xl">⚠️</span>
          Recomendación de Seguridad
        </p>
        <p class="text-white text-center text-lg">
          Es recomendable que se <strong>cambien las contraseñas cada 3 meses</strong> para mantener la seguridad óptima del sistema.
        </p>
      </div>
    </div>
  </section>
</div>
  `,
};