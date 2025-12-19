export const usuarios = {
  title: "Módulo Usuarios",
  icon: "Users",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900/20 dark:to-gray-800/20 p-8 rounded-lg border border-slate-200 dark:border-slate-800">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-300 mb-4">Módulo Usuarios</h2>
    <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed">
      Controla quién accede al sistema, qué pueden hacer y qué datos pueden ver. 
      Crea usuarios, asigna roles, gestiona permisos y mantén tu sistema seguro.
    </p>
  </section>

  <!-- POR QUÉ IMPORTA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔐 ¿Por Qué es Crítico?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <span className="text-4xl flex-shrink-0">🚪</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Control de Acceso</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Define quién puede entrar al sistema</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-4xl flex-shrink-0">👁️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Visibilidad de Datos</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Controla qué datos ve cada usuario</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
        <span className="text-4xl flex-shrink-0">🛡️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Seguridad</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Registra cada acción para auditoría</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
        <span className="text-4xl flex-shrink-0">⚙️</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white mb-2">Gestión Rápida</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Cambios de roles sin perder datos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow: Crear Usuario Completo</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">De nuevo empleado a acceso activo:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">👤 Nuevo Empleado Llega</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Juan García - Vendedor nuevo</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
                <div>📝 Nombre completo</div>
                <div>📧 Email</div>
                <div>👔 Puesto/Rol</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">➕ Registras en Sistema</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Clic [+ Crear Usuario]</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2 font-mono text-xs">
                <div>Nombre: Juan García</div>
                <div>Email: juan@empresa.com</div>
                <div>Usuario: jgarcia</div>
                <div>Contraseña: Temporal123</div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">🎯 Asignas Rol</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Rol: Vendedor (permisos se asignan automáticamente)</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
                <div>✓ Ver: SÍ</div>
                <div>✓ Crear: SÍ</div>
                <div>✓ Editar: SÍ</div>
                <div>✗ Eliminar: NO</div>
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">📧 Sistema Envía Email</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">"Bienvenido a CHUMI - Confirma tu cuenta"</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 text-sm space-y-2">
                <div>Link de confirmación</div>
                <div>Juan recibe email</div>
                <div>Juan hace clic para confirmar</div>
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
              <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">🔐 Juan Inicia Sesión</h3>
              <p className="text-red-800 dark:text-red-200 mb-4">Usa contraseña temporal</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-red-200 dark:border-red-800 text-sm space-y-2">
                <div>Sistema lo obliga a cambiarla</div>
                <div>Juan crea su propia contraseña</div>
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
              <h3 className="text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">✅ Juan Accede al Sistema</h3>
              <p className="text-cyan-800 dark:text-cyan-200 mb-4">Con todos los permisos de Vendedor</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-cyan-200 dark:border-cyan-800 text-sm space-y-2">
                <div>✓ Solo módulos autorizados</div>
                <div>✓ Solo permisos asignados</div>
                <div>✓ Sistema registra sus acciones</div>
                <div>✓ LISTO PARA TRABAJAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ROLES PREDEFINIDOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">👔 Roles Predefinidos</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">El sistema incluye roles listos para usar:</p>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-3">🛒 VENDEDOR</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">Crea ventas, atiende clientes</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 text-sm space-y-2">
          <div>✓ Ver recibos</div>
          <div>✓ Crear recibos</div>
          <div>✓ Ver clientes</div>
          <div>✓ Ver inventario</div>
          <div>✗ NO editar precios</div>
          <div>✗ NO ver ganancias</div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-3">📦 BODEGUERO</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">Gestiona stock e inventario</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 text-sm space-y-2">
          <div>✓ Ver inventario</div>
          <div>✓ Crear compras</div>
          <div>✓ Registrar movimientos</div>
          <div>✗ NO ver precios</div>
          <div>✗ NO crear recibos</div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-3">📊 GERENTE</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">Acceso total excepto configuración del sistema</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 text-sm space-y-2">
          <div>✓ Ver TODO</div>
          <div>✓ Editar TODO</div>
          <div>✓ Ver reportes completos</div>
          <div>✓ Autorizar descuentos</div>
          <div>✗ NO crear usuarios (solo admin)</div>
        </div>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-3">🔑 ADMINISTRADOR</h3>
        <p className="text-orange-800 dark:text-orange-200 mb-4">Control total del sistema</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-orange-200 dark:border-orange-800 text-sm space-y-2">
          <div>✓ Acceso TOTAL a TODO</div>
          <div>✓ Crear y eliminar usuarios</div>
          <div>✓ Cambiar roles</div>
          <div>✓ Configurar el sistema</div>
          <div>✓ Ver auditoría completa</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Crear un Nuevo Usuario</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Módulo Usuarios</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Menú → Usuarios o Administración</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [+ Crear Usuario]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario de registro</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa Información Básica</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Nombre, email, usuario, nombre de usuario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Selecciona Rol</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Dropdown: Vendedor, Bodeguero, Gerente, Admin</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Genera Contraseña Temporal</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">[Generar] o ingresa una contraseña segura</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">6️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Crear Usuario]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sistema envía email automáticamente</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Cambiar Rol de Usuario</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Busca al usuario en la lista</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Usa búsqueda o scroll</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Haz clic en el usuario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre detalle del usuario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Editar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">O en el lápiz de edición</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Cambia el Rol</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Dropdown de rol → Selecciona nuevo rol</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Guardar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cambio se aplica inmediatamente</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-6">Desactivar Usuario (No Eliminar)</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Encuentra el usuario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Que se va o necesita pausar</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Editar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Abre formulario de edición</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Desactiva el usuario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Toggle: "Activo" → "Inactivo"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic [Guardar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Usuario no puede acceder, historial se mantiene</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PERMISOS POR MÓDULO -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔒 Permisos por Módulo</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Controla acceso granular a cada módulo:</p>
    
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800 space-y-6">
      <div>
        <p className="font-bold text-gray-900 dark:text-white mb-3">4 Niveles de Permiso:</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
            <p className="font-semibold text-green-900 dark:text-green-300">✅ VER</p>
            <p className="text-sm text-green-800 dark:text-green-200">Puede ver datos</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
            <p className="font-semibold text-blue-900 dark:text-blue-300">➕ CREAR</p>
            <p className="text-sm text-blue-800 dark:text-blue-200">Puede crear</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded border border-purple-200 dark:border-purple-800">
            <p className="font-semibold text-purple-900 dark:text-purple-300">✏️ EDITAR</p>
            <p className="text-sm text-purple-800 dark:text-purple-200">Puede modificar</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
            <p className="font-semibold text-red-900 dark:text-red-300">🗑️ ELIMINAR</p>
            <p className="text-sm text-red-800 dark:text-red-200">Puede borrar</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="font-bold text-gray-900 dark:text-white mb-4">Ejemplo: Vendedor</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded">
            <span>Recibos</span>
            <span>✓ Ver | ✓ Crear | ✓ Editar | ✗ Eliminar</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded">
            <span>Precios</span>
            <span>✓ Ver | ✗ Crear | ✗ Editar | ✗ Eliminar</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded">
            <span>Inventario</span>
            <span>✓ Ver | ✗ Crear | ✗ Editar | ✗ Eliminar</span>
          </div>
          <div className="flex justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded">
            <span>Reportes</span>
            <span>✗ Ver | ✗ Crear | ✗ Editar | ✗ Eliminar</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SEGURIDAD Y AUDITORÍA -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🔐 Seguridad y Auditoría</h2>
    
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">📋 Historial de Accesos</h3>
        <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">Sistema registra cada login:</p>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 ml-4">
          <li>✓ Quién inició sesión</li>
          <li>✓ Cuándo (fecha y hora exacta)</li>
          <li>✓ De dónde (IP)</li>
          <li>✓ Cuándo cerró sesión</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">🔒 Cambios de Contraseña</h3>
        <p className="text-green-800 dark:text-green-200 text-sm mb-3">Seguridad obligatoria:</p>
        <ul className="text-sm text-green-800 dark:text-green-200 space-y-1 ml-4">
          <li>✓ Primera vez: Debe cambiar contraseña temporal</li>
          <li>✓ Periódicamente: Sistema puede requerir cambios</li>
          <li>✓ Contraseñas hasheadas: Ni administrador puede verlas</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">📝 Auditoría Completa</h3>
        <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">Cada acción queda registrada:</p>
        <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1 ml-4">
          <li>✓ Cambios de rol</li>
          <li>✓ Creación/desactivación de usuarios</li>
          <li>✓ Cambios de permisos</li>
          <li>✓ Intentos de acceso no autorizado</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- MEJORES PRÁCTICAS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">✅ Mejores Prácticas</h2>
    
    <div className="space-y-4">
      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-bold text-green-900 dark:text-green-300 mb-1">Desactiva antes de eliminar</p>
          <p className="text-sm text-green-800 dark:text-green-200">Mantén historial para auditoría</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-bold text-green-900 dark:text-green-300 mb-1">Usa roles predefinidos</p>
          <p className="text-sm text-green-800 dark:text-green-200">Más fácil que crear permisos personalizados</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-bold text-green-900 dark:text-green-300 mb-1">Revisa auditoría regularmente</p>
          <p className="text-sm text-green-800 dark:text-green-200">Identifica accesos sospechosos</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-bold text-green-900 dark:text-green-300 mb-1">Contraseñas fuertes</p>
          <p className="text-sm text-green-800 dark:text-green-200">Mayúsculas, números, símbolos, 8+ caracteres</p>
        </div>
      </div>

      <div className="flex gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-bold text-green-900 dark:text-green-300 mb-1">Límita permisos administrativos</p>
          <p className="text-sm text-green-800 dark:text-green-200">Solo 1-2 admins, resto en roles menores</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🔑 Control = Seguridad</h2>
    
    <ul className="space-y-4 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">1️⃣</span>
        <span><strong>Cada usuario necesita acceso</strong> - Pero solo lo que necesita para su rol</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">2️⃣</span>
        <span><strong>Usa roles predefinidos</strong> - Más fácil y más seguro que permisos manuales</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">3️⃣</span>
        <span><strong>Desactiva en lugar de eliminar</strong> - Mantén historial para auditoría</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">4️⃣</span>
        <span><strong>Revisa auditoría regularmente</strong> - Identifica accesos o cambios sospechosos</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0 text-2xl">5️⃣</span>
        <span><strong>Contraseñas fuertes siempre</strong> - Sistema obliga a cambiar la temporal</span>
      </li>
    </ul>
  </section>
</div>
  `,
};