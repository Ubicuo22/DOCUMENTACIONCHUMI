export const clientes = {
  title: "Módulo Clientes",
  icon: "Users",
  content: `
<div class="space-y-12">
  <!-- INTRO -->
  <section className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg border border-green-200 dark:border-green-800">
    <h2 className="text-3xl font-bold text-green-900 dark:text-green-300 mb-4">Módulo Clientes</h2>
    <p className="text-green-800 dark:text-green-200 text-lg leading-relaxed">
      Sistema central para administrar toda la información de tus clientes. Organiza, categoriza y aplica descuentos automáticos. 
      Una base de datos bien estructurada = negocio organizado y rentable.
    </p>
  </section>

  <!-- QUÉ ES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">¿Qué es el Módulo Clientes?</h2>
    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        El módulo Clientes es tu <strong>centro de información</strong> para todas las personas y empresas que compran tus productos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <span className="text-3xl flex-shrink-0">📝</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Crear Clientes</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Registra nuevos clientes con su información</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <span className="text-3xl flex-shrink-0">📊</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Organizar en Grupos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Agrupa clientes por zona, tipo o categoría</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <span className="text-3xl flex-shrink-0">💰</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Aplicar Descuentos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Descuentos automáticos según tipo de cliente</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <span className="text-3xl flex-shrink-0">🔍</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Buscar Rápido</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Encuentra clientes al instante</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WORKFLOW PRINCIPAL -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🎯 Workflow Principal</h2>
    <p className="text-lg text-gray-600 dark:text-gray-400">Este es el flujo que SIEMPRE debes seguir:</p>
    
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
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Crear Tipos de Cliente</h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">Define cuántos descuentos habrá en tu negocio.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 space-y-2 text-sm font-mono">
                <div><strong>Mayorista</strong> → 15% descuento</div>
                <div><strong>Minorista</strong> → 5% descuento</div>
                <div><strong>VIP</strong> → 20% descuento</div>
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
              <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">Crear Grupos</h3>
              <p className="text-green-800 dark:text-green-200 mb-4">Organiza clientes por categorías y asigna tipos.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 space-y-2 text-sm font-mono">
                <div><strong>Zona Centro</strong> → Tipo: Mayorista</div>
                <div><strong>Zona Periférica</strong> → Tipo: Minorista</div>
                <div><strong>Especiales</strong> → Tipo: VIP</div>
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
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">Crear Clientes</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">Registra cada cliente en su grupo correspondiente.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 space-y-2 text-sm font-mono">
                <div><strong>Mercado Los Mangos</strong> → Zona Centro</div>
                <div><strong>Tienda Doña María</strong> → Zona Periférica</div>
                <div><strong>Rest. El Ceviche</strong> → Especiales</div>
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
          </div>
          <div className="pt-2">
            <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">✅ ¡Listo! Usa en Recibos</h3>
              <p className="text-amber-800 dark:text-amber-200 mb-4">Los descuentos se aplican automáticamente.</p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded border border-amber-200 dark:border-amber-800 space-y-2 text-sm font-mono">
                <div>Mercado Los Mangos → 15% descuento</div>
                <div>Tienda Doña María → 5% descuento</div>
                <div>Rest. El Ceviche → 20% descuento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONCEPTOS CLAVE -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📚 Conceptos Clave</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Cliente -->
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">👤 Cliente</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">Persona o empresa que compra de ti.</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-blue-200 dark:border-blue-800 space-y-2 text-sm">
          <div className="font-semibold text-gray-900 dark:text-white">Información Básica:</div>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>• Nombre</li>
            <li>• Grupo</li>
            <li>• Teléfono</li>
            <li>• Email</li>
          </ul>
        </div>
      </div>

      <!-- Grupo -->
      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">📁 Grupo</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">Categoría para organizar clientes.</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-green-200 dark:border-green-800 space-y-2 text-sm">
          <div className="font-semibold text-gray-900 dark:text-white">Ejemplos:</div>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>• Zona Centro</li>
            <li>• Mayoristas</li>
            <li>• Restaurantes</li>
            <li>• VIP</li>
          </ul>
        </div>
      </div>

      <!-- Tipo de Cliente -->
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">💳 Tipo de Cliente</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">Define descuentos automáticos.</p>
        <div className="bg-white dark:bg-slate-900 p-4 rounded border border-purple-200 dark:border-purple-800 space-y-2 text-sm">
          <div className="font-semibold text-gray-900 dark:text-white">Descuentos:</div>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>• Mayorista: 15%</li>
            <li>• Minorista: 5%</li>
            <li>• VIP: 20%</li>
          </ul>
        </div>
      </div>

      <!-- Por qué importa -->
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
        <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-4">⚡ ¿Por qué importa?</h3>
        <ul className="text-amber-800 dark:text-amber-200 space-y-2">
          <li>✓ Descuentos sin errores</li>
          <li>✓ Encontrar clientes rápido</li>
          <li>✓ Historial de compras</li>
          <li>✓ Reportes precisos</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PASOS PRÁCTICOS -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🛠️ Pasos Prácticos</h2>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Paso 1: Crear Tipo de Cliente</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Abre Gestionar Clientes</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">En el menú → Módulos → Gestionar Clientes</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a Tipos de Cliente</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Haz clic en la pestaña "Tipos de Cliente"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [+ Nuevo]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario para crear tipo</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Completa el formulario</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Nombre: "Mayorista" | Descuento: 15</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-blue-200 dark:border-blue-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda [Guardar]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tipo creado. ✅</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-6">Paso 2: Crear Grupo</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a Grupos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pestaña "Grupos"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [+ Nuevo]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Se abre formulario</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ingresa datos</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Clave: ZONA_CENTRO | Descripción: Clientes zona centro | Tipo: Mayorista</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-green-200 dark:border-green-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Grupo creado. ✅</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-6">Paso 3: Crear Cliente</h3>
      <div className="space-y-4">
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">1️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Ve a Clientes</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pestaña "Clientes"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">2️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Clic en [+ Nuevo]</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Abre formulario de cliente</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">3️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Datos Obligatorios</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Nombre: "Mercado Los Mangos" | Grupo: "Zona Centro"</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">4️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Datos Opcionales (pero útiles)</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Teléfono, Email, RFC, Dirección</p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-purple-200 dark:border-purple-800">
          <span className="text-2xl flex-shrink-0">5️⃣</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Guarda</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cliente listo. ✅ Descuentos se aplican automáticamente.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ERRORES COMUNES -->
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">⚠️ Errores Comunes y Soluciones</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No puedo crear cliente</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Falta nombre o grupo</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Verifica que ingresaste NOMBRE y seleccionaste GRUPO</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ No aparece tipo en grupo</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">El tipo no existe</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Primero crea el tipo, luego el grupo</p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
        <p className="font-bold text-red-900 dark:text-red-300 mb-2">❌ Error en email</p>
        <p className="text-red-800 dark:text-red-200 text-sm mb-3">Formato inválido</p>
        <p className="text-red-700 dark:text-red-300 text-sm">✓ Debe tener @ (ej: contacto@empresa.com)</p>
      </div>
    </div>
  </section>

  <!-- TIPS -->
  <section className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-lg border border-orange-200 dark:border-orange-800">
    <h2 className="text-3xl font-bold text-orange-900 dark:text-orange-300 mb-6">💡 Tips y Mejores Prácticas</h2>
    
    <div className="space-y-4">
      <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-orange-200 dark:border-orange-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">ANTES de crear cliente, BUSCA si existe</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Evita duplicados</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-orange-200 dark:border-orange-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Completa información gradualmente</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Día 1: Nombre + Grupo | Día 2: Teléfono | Día 3: Email</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-orange-200 dark:border-orange-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">DESACTIVA, no elimines</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mantiene historial. Puedes reactivar después</p>
        </div>
      </div>

      <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded border border-orange-200 dark:border-orange-800">
        <span className="text-2xl flex-shrink-0">✓</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Sigue el orden: Tipos → Grupos → Clientes</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">No saltes pasos</p>
        </div>
      </div>
    </div>
  </section>

  <!-- LO MÁS IMPORTANTE -->
  <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg shadow-xl">
    <h2 className="text-3xl font-bold mb-6">🎯 Lo MÁS Importante</h2>
    
    <ul className="space-y-3 text-lg">
      <li className="flex gap-3">
        <span className="flex-shrink-0">1️⃣</span>
        <span><strong>Orden correcto:</strong> Tipos → Grupos → Clientes</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0">2️⃣</span>
        <span><strong>Información básica:</strong> Nombre + Grupo = OBLIGATORIO</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0">3️⃣</span>
        <span><strong>Descuentos automáticos:</strong> Se aplican por tipo</span>
      </li>
      <li className="flex gap-3">
        <span className="flex-shrink-0">4️⃣</span>
        <span><strong>Base de datos limpia:</strong> = Negocio organizado</span>
      </li>
    </ul>
  </section>
</div>
  `,
};