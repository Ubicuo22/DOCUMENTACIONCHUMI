export const clientes = {
  title: "Módulo Gestión de Clientes",
  icon: "Users",
  content: `
<div class="space-y-16 max-w-7xl mx-auto">
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative p-8 md:p-12 lg:p-16">
      <div class="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div class="flex-shrink-0">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
            <span class="text-5xl md:text-6xl">👥</span>
          </div>
        </div>
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Gestor de Clientes</h1>
          <p class="text-lg md:text-xl text-white leading-relaxed mb-6 max-w-3xl">
            Registra y gestiona todos tus clientes con grupos, límites de crédito y descuentos. <span class="font-bold text-yellow-300">Mantén un historial completo</span> sin eliminar información.
          </p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <div class="inline-flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-yellow-300 shadow-lg">
              <span class="text-2xl">🏷️</span>
              <p class="text-sm font-bold text-gray-900">Grupos y descuentos</p>
            </div>
            <div class="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white shadow-lg">
              <span class="text-2xl">📊</span>
              <p class="text-sm font-bold text-gray-900">Historial completo</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 inline-block">
            <p class="text-sm text-yellow-100 flex items-center gap-2">
              <span class="text-lg">⚠️</span>
              <span><strong>IMPORTANTE:</strong> Este es uno de los módulos donde se debe ser más cuidadoso</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 1: VENTANA PRINCIPAL -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">1</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana Principal</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Panel de gestión de clientes</p></div>
    </div>
    <div class="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div class="overflow-hidden rounded-xl shadow-2xl mb-4 border-2 border-gray-300 dark:border-gray-600">
        <img src="/clientes/1.png" alt="Ventana Principal Gestor de Clientes" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <p class="font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2"><span class="text-xl">ℹ️</span>Vista General:</p>
        <p class="text-sm md:text-base text-blue-800 dark:text-blue-200">El módulo <strong>Gestor de Clientes</strong> es uno de los módulos en donde se tiene que ser <strong>más cuidadoso</strong> en su uso.</p>
      </div>
    </div>
  </section>

  <!-- IMAGEN 2: FILTROS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">2</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Filtros de Clientes</h2><p class="text-sm md:text-base text-gray-600 dark:text-gray-400">Grupos, estado y descuentos</p></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-purple-300 dark:border-purple-600">
          <img src="/clientes/2.png" alt="Filtros de Clientes" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 space-y-3">
          <p class="text-sm md:text-base text-purple-800 dark:text-purple-200 mb-3">En la zona superior se muestran <strong>filtros para ver clientes</strong>:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg"><p class="font-semibold text-purple-900 dark:text-purple-300 flex items-center gap-2"><span class="text-xl">🏢</span>Por Grupos</p></div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg"><p class="font-semibold text-purple-900 dark:text-purple-300 flex items-center gap-2"><span class="text-xl">✅</span>Por Estado (Activo/Inactivo)</p></div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg"><p class="font-semibold text-purple-900 dark:text-purple-300 flex items-center gap-2"><span class="text-xl">🏷️</span>Con Descuentos</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 3: BÚSQUEDA -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">3</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ventana de Búsqueda</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 md:p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-green-300 dark:border-green-600">
          <img src="/clientes/3.png" alt="Ventana de Búsqueda" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
          <p class="text-sm md:text-base text-green-800 dark:text-green-200">Junto con una <strong>ventana de búsqueda</strong> para localizar clientes rápidamente por nombre, teléfono o datos fiscales.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 4: NUEVO CLIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">4</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Botón Nuevo Cliente</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 md:p-8 rounded-2xl border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-amber-300 dark:border-amber-600">
          <img src="/clientes/4.png" alt="Botón Nuevo Cliente" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <p class="text-sm md:text-base text-amber-800 dark:text-amber-200">Para agregar cliente dar clic en el <strong>botón verde "+Nuevo Cliente"</strong> ubicado en la parte superior derecha.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMÁGENES 5 Y 6: FORMULARIO CLIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">5-6</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Datos del Cliente</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 md:p-8 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative space-y-4">
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/clientes/5.png" alt="Formulario Cliente Parte 1" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="overflow-hidden rounded-xl shadow-xl border-2 border-indigo-300 dark:border-indigo-600">
          <img src="/clientes/6.png" alt="Formulario Cliente Parte 2" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 space-y-2">
          <p class="text-sm md:text-base text-indigo-800 dark:text-indigo-200 mb-3">Esto abrirá una ventana para <strong>ingresar los datos del cliente</strong>:</p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded"><span>📱</span><span>Teléfono</span></div>
            <div class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded"><span>📧</span><span>Correo</span></div>
            <div class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded"><span>🏢</span><span>Grupo</span></div>
            <div class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded"><span>🧾</span><span>Info Fiscal</span></div>
            <div class="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded"><span>📝</span><span>Notas</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 7: ADMINISTRAR GRUPOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">7</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Administrar Grupos</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 p-6 md:p-8 rounded-2xl border-2 border-teal-200 dark:border-teal-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-teal-300 dark:border-teal-600">
          <img src="/clientes/7.png" alt="Botón Administrar Grupos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-teal-200 dark:border-teal-800">
          <p class="text-sm md:text-base text-teal-800 dark:text-teal-200">En caso de que el cliente no pertenezca a un grupo específico, dar clic en <strong>"Administrar Grupos"</strong> (parte inferior derecha).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 8: GRUPOS EXISTENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">8</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Grupos Existentes</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/30 dark:to-pink-900/30 p-6 md:p-8 rounded-2xl border-2 border-rose-200 dark:border-rose-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-rose-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-rose-300 dark:border-rose-600">
          <img src="/clientes/8.png" alt="Ventana Grupos Existentes" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-rose-200 dark:border-rose-800">
          <p class="text-sm md:text-base text-rose-800 dark:text-rose-200">Esto desplegará una ventana con <strong>todos los grupos existentes</strong> en el sistema.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 9: AGREGAR GRUPO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">9</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Agregar Grupo</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 p-6 md:p-8 rounded-2xl border-2 border-violet-200 dark:border-violet-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-violet-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-violet-300 dark:border-violet-600">
          <img src="/clientes/9.png" alt="Botón Agregar Grupo" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800">
          <p class="text-sm md:text-base text-violet-800 dark:text-violet-200">En el botón <strong>"+Agregar Grupo"</strong> (inferior izquierda), puedes agregar un grupo con descuento específico.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 10: DATOS GRUPO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">10</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Datos del Grupo</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/30 dark:to-green-900/30 p-6 md:p-8 rounded-2xl border-2 border-lime-200 dark:border-lime-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-lime-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-lime-300 dark:border-lime-600">
          <img src="/clientes/10.png" alt="Formulario Datos del Grupo" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-lime-200 dark:border-lime-800 space-y-3">
          <p class="text-sm md:text-base text-lime-800 dark:text-lime-200 mb-3">Ventana para agregar:</p>
          <div class="space-y-2">
            <div class="bg-lime-50 dark:bg-lime-900/20 p-3 rounded-lg"><p class="font-semibold text-lime-900 dark:text-lime-300 flex items-center gap-2"><span class="text-xl">🏷️</span>Nombre del grupo</p></div>
            <div class="bg-lime-50 dark:bg-lime-900/20 p-3 rounded-lg"><p class="font-semibold text-lime-900 dark:text-lime-300 flex items-center gap-2"><span class="text-xl">📝</span>Descripción (opcional)</p></div>
            <div class="bg-lime-50 dark:bg-lime-900/20 p-3 rounded-lg"><p class="font-semibold text-lime-900 dark:text-lime-300 flex items-center gap-2"><span class="text-xl">💰</span>Tipo de descuento</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 11: ADMINISTRAR TIPOS -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">11</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Administrar Tipos</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 p-6 md:p-8 rounded-2xl border-2 border-sky-200 dark:border-sky-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-sky-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-sky-300 dark:border-sky-600">
          <img src="/clientes/11.png" alt="Botón Administrar Tipos" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-sky-200 dark:border-sky-800">
          <p class="text-sm md:text-base text-sky-800 dark:text-sky-200">Para agregar un descuento diferente a los establecidos, hacer clic en <strong>"Administrar Tipos"</strong> (desde ventana principal).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 12: TIPOS EXISTENTES -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">12</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Gestión de Tipos</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 md:p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-orange-300 dark:border-orange-600">
          <img src="/clientes/12.png" alt="Ventana Tipos de Descuentos" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
          <p class="text-sm md:text-base text-orange-800 dark:text-orange-200">Permite <strong>agregar descuentos nuevos y modificar los actuales</strong> según necesidades del negocio.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 13: AGREGAR TIPO -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">13</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Agregar Tipo de Cliente</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-pink-300 dark:border-pink-600">
          <img src="/clientes/13.png" alt="Formulario Agregar Tipo Cliente" class="w-full transition-transform duration-300 group-hover:scale-[1.02]"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-pink-200 dark:border-pink-800 space-y-3">
          <p class="text-sm md:text-base text-pink-800 dark:text-pink-200 mb-3">Al agregar tipo de cliente, se solicitará:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg"><p class="font-semibold text-pink-900 dark:text-pink-300 flex items-center gap-2"><span class="text-xl">🏷️</span>Nombre del tipo</p></div>
            <div class="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg"><p class="font-semibold text-pink-900 dark:text-pink-300 flex items-center gap-2"><span class="text-xl">📊</span>Porcentaje de descuento</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- IMAGEN 14: DESACTIVAR CLIENTE -->
  <section class="space-y-6">
    <div class="flex items-center gap-4">
      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-xl">14</div>
      <div><h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Desactivar Cliente</h2></div>
    </div>
    <div class="group relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 p-6 md:p-8 rounded-2xl border-2 border-red-200 dark:border-red-700 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div class="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div class="relative">
        <div class="overflow-hidden rounded-xl shadow-xl mb-4 border-2 border-red-300 dark:border-red-600">
          <img src="/clientes/14.png" alt="Opción Desactivar Cliente" class="w-full transition-transform duration-300 group-hover:scale-105"/>
        </div>
        <div class="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-xl border-2 border-red-200 dark:border-red-800 space-y-3">
          <p class="text-sm md:text-base text-red-800 dark:text-red-200 mb-3">La opción <strong>Desactivar Cliente</strong>:</p>
          <div class="space-y-2">
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300">✓ NO elimina información de la base de datos</p></div>
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300">✓ Solo deshabilita en otros módulos</p></div>
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300">✓ Mantiene historial de compras completo</p></div>
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"><p class="text-sm text-red-700 dark:text-red-300">✓ Permite reactivar cuando sea necesario</p></div>
          </div>
          <div class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
            <p class="text-sm text-yellow-800 dark:text-yellow-200 flex items-start gap-2">
              <span class="text-xl flex-shrink-0">💡</span>
              <span>Esto ayuda a mantener un <strong>historial completo de compras</strong> de clientes ya no activos, preservando datos en la base sin afectar operaciones actuales.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MENSAJE FINAL -->
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
    <div class="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
    <div class="relative">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">👥 Gestión Completa de Clientes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🔍</span><div><p class="font-bold text-lg mb-1">Filtros Potentes</p><p class="text-sm text-blue-100">Grupos, Estado, Descuentos</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🏷️</span><div><p class="font-bold text-lg mb-1">Grupos Personalizables</p><p class="text-sm text-blue-100">Con descuentos específicos</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📊</span><div><p class="font-bold text-lg mb-1">Tipos de Descuento</p><p class="text-sm text-blue-100">Gestión flexible de porcentajes</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">📝</span><div><p class="font-bold text-lg mb-1">Datos Completos</p><p class="text-sm text-blue-100">Tel, Email, Fiscal, Notas</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">🔒</span><div><p class="font-bold text-lg mb-1">Desactivar sin Eliminar</p><p class="text-sm text-blue-100">Historial preservado</p></div></div>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <div class="flex items-start gap-3 text-white"><span class="text-3xl flex-shrink-0">⚠️</span><div><p class="font-bold text-lg mb-1">Módulo Crítico</p><p class="text-sm text-blue-100">Usar con cuidado</p></div></div>
        </div>
      </div>
    </div>
  </section>
</div>
  `,
};