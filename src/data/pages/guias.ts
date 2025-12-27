export const guias = {
  "primeros-pasos": {
    title: "Primeros Pasos",
    content: `
<div class="space-y-8">
  <div class="prose dark:prose-invert max-w-none">
    <h2>🚀 Bienvenido a CHUMI</h2>
    <p class="text-lg">
      Cloud Hybrid Unified Management Infrastructure es tu solución integral para gestión comercial inteligente.
      Esta guía te llevará paso a paso para dominar CHUMI en 10 días.
    </p>
    
    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 my-6">
      <h3 class="mt-0">🎯 ¿Qué es CHUMI?</h3>
      <p>
        CHUMI es un sistema diseñado específicamente para <strong>Disfruleg (Distribuidora Castruita)</strong>
        que optimiza procesos administrativos, reduce tiempos de gestión y mejora la toma de decisiones con datos en tiempo real.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-sm">
        <div class="flex items-center gap-2">
          <span class="text-2xl">⚡</span>
          <span>Reduce tiempo de 3h a 30min diarios</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">📊</span>
          <span>Reportes en tiempo real</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔒</span>
          <span>Seguridad garantizada</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎨</span>
          <span>Diseño único de Disfruleg</span>
        </div>
      </div>
    </div>

    <h2>📋 Los 10 Módulos de CHUMI</h2>
    <p>
      CHUMI está compuesto por 10 módulos especializados que trabajan en perfecta armonía.
      A continuación, te presentamos cada módulo en el orden recomendado de aprendizaje:
    </p>

    <!-- MÓDULO 1: GENERADOR DE RECIBOS -->
    <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">1</div>
        <div>
          <h3 class="mt-0 mb-1">🧾 Generador de Recibos</h3>
          <p class="text-sm text-red-700 dark:text-red-300 m-0"><strong>CRÍTICO</strong> - El corazón de tu negocio</p>
        </div>
      </div>
      <p>
        <strong>El módulo más importante.</strong> Aquí registras TODAS tus ventas. Sin este módulo, no hay negocio.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Crea órdenes de venta con búsqueda en tiempo real</li>
        <li>✅ Organiza productos por secciones</li>
        <li>✅ Genera folios únicos automáticamente</li>
        <li>✅ Procesa ventas con seguridad (requiere admin)</li>
        <li>✅ Consulta historial completo de notas procesadas</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 2-3 días | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/recibos" class="text-red-600 dark:text-red-400 hover:underline">Ver documentación detallada →</a>
      </p>
    </div>

    <!-- MÓDULO 2: ADMINISTRAR CLIENTES -->
    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">2</div>
        <div>
          <h3 class="mt-0 mb-1">👥 Administrar Clientes</h3>
          <p class="text-sm text-blue-700 dark:text-blue-300 m-0"><strong>ALTO</strong> - Base de datos completa</p>
        </div>
      </div>
      <p>
        Gestiona todos tus clientes con grupos personalizados y límites de crédito.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Crea grupos de clientes (Mayoristas, Minoristas, etc.)</li>
        <li>✅ Asigna límites de crédito individuales</li>
        <li>✅ Consulta historial completo de compras</li>
        <li>✅ Busca clientes en tiempo real</li>
        <li>✅ Exporta listas de clientes</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1-2 días | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/clientes" class="text-blue-600 dark:text-blue-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 3: REGISTRO DE COMPRAS (INVENTARIO) -->
    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">3</div>
        <div>
          <h3 class="mt-0 mb-1">📦 Registro de Compras (Inventario)</h3>
          <p class="text-sm text-indigo-700 dark:text-indigo-300 m-0"><strong>ALTO</strong> - Control de stock</p>
        </div>
      </div>
      <p>
        Controla tu inventario en tiempo real con alertas automáticas de stock bajo.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Registra compras a proveedores</li>
        <li>✅ Actualiza stock automáticamente</li>
        <li>✅ Alertas de stock mínimo</li>
        <li>✅ Historial completo de movimientos</li>
        <li>✅ Busca productos instantáneamente</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1-2 días | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/inventario" class="text-indigo-600 dark:text-indigo-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 4: EDITOR DE PRECIOS -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">4</div>
        <div>
          <h3 class="mt-0 mb-1">💰 Editor de Precios</h3>
          <p class="text-sm text-emerald-700 dark:text-emerald-300 m-0"><strong>ALTO</strong> - Gestión flexible</p>
        </div>
      </div>
      <p>
        Define precios por grupo de cliente y protege productos críticos.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Establece precios por grupo de clientes</li>
        <li>✅ Bloquea precios críticos (requiere admin)</li>
        <li>✅ Calcula márgenes de ganancia automáticamente</li>
        <li>✅ Actualiza precios masivamente</li>
        <li>✅ Historial de cambios de precios</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/precios" class="text-emerald-600 dark:text-emerald-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 5: GESTIÓN DE DEUDAS -->
    <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">5</div>
        <div>
          <h3 class="mt-0 mb-1">💳 Gestión de Deudas</h3>
          <p class="text-sm text-rose-700 dark:text-rose-300 m-0"><strong>ALTO</strong> - Control de créditos</p>
        </div>
      </div>
      <p>
        Monitorea créditos, vencimientos y evita morosidad con recordatorios automáticos.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Consulta deudas por cliente</li>
        <li>✅ Sistema de recordatorios automáticos</li>
        <li>✅ Registra abonos parciales o totales</li>
        <li>✅ Monitorea fechas de vencimiento</li>
        <li>✅ Exporta reportes de cobranza</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/deudas" class="text-rose-600 dark:text-rose-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 6: ANÁLISIS DE VENTAS (REPORTES) -->
    <div class="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 p-6 rounded-xl border-2 border-cyan-200 dark:border-cyan-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">6</div>
        <div>
          <h3 class="mt-0 mb-1">📊 Análisis de Ventas (Reportes)</h3>
          <p class="text-sm text-cyan-700 dark:text-cyan-300 m-0"><strong>ALTO</strong> - Inteligencia de negocio</p>
        </div>
      </div>
      <p>
        Ve ganancias en tiempo real, identifica productos estrella y toma decisiones con datos.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Dashboard con métricas clave</li>
        <li>✅ Productos más vendidos</li>
        <li>✅ Análisis de ganancias por periodo</li>
        <li>✅ Comparativas de ventas</li>
        <li>✅ Exporta reportes a Excel</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/reportes" class="text-cyan-600 dark:text-cyan-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 7: IMPORTAR COTIZACIÓN -->
    <div class="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">7</div>
        <div>
          <h3 class="mt-0 mb-1">📄 Importar Cotización</h3>
          <p class="text-sm text-violet-700 dark:text-violet-300 m-0"><strong>MEDIO</strong> - Automatización</p>
        </div>
      </div>
      <p>
        Importa PDFs de proveedores y actualiza precios automáticamente.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Sube PDFs de cotizaciones</li>
        <li>✅ Extracción automática de datos</li>
        <li>✅ Actualiza precios de compra</li>
        <li>✅ Compara con precios anteriores</li>
        <li>✅ Historial de cotizaciones</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/cotizaciones" class="text-violet-600 dark:text-violet-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 8: UBICUOAI -->
    <div class="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">8</div>
        <div>
          <h3 class="mt-0 mb-1">🤖 UbicuoAI - Procesador Inteligente</h3>
          <p class="text-sm text-purple-700 dark:text-purple-300 m-0"><strong>MEDIO</strong> - IA que aprende</p>
        </div>
      </div>
      <p>
        Procesa pedidos con inteligencia artificial, busca productos con errores y aprende de tus correcciones.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Procesa listas de pedidos automáticamente</li>
        <li>✅ Busca productos aunque estén mal escritos</li>
        <li>✅ Aprende de tus correcciones</li>
        <li>✅ 5 tipos de recuadros de confirmación</li>
        <li>✅ Genera órdenes listas para procesar</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 2-3 horas | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/ubicuoai" class="text-purple-600 dark:text-purple-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 9: ADMINISTRAR USUARIOS -->
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">9</div>
        <div>
          <h3 class="mt-0 mb-1">👨‍💼 Administrar Usuarios</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 m-0"><strong>MEDIO</strong> - Solo administradores</p>
        </div>
      </div>
      <p>
        Crea usuarios, asigna roles y controla permisos por módulo.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Crea usuarios con contraseñas seguras</li>
        <li>✅ Asigna roles (Admin, Vendedor, etc.)</li>
        <li>✅ Controla acceso por módulo</li>
        <li>✅ Monitorea actividad de usuarios</li>
        <li>✅ Resetea contraseñas cuando sea necesario</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/usuarios" class="text-slate-600 dark:text-slate-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- MÓDULO 10: ADMINISTRADOR DE DISPOSITIVOS -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 my-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">10</div>
        <div>
          <h3 class="mt-0 mb-1">🔒 Administrador de Dispositivos</h3>
          <p class="text-sm text-amber-700 dark:text-amber-300 m-0"><strong>MEDIO</strong> - Seguridad</p>
        </div>
      </div>
      <p>
        Controla quién accede desde dónde, autoriza y bloquea equipos.
      </p>
      <ul class="text-sm space-y-1">
        <li>✅ Lista de dispositivos autorizados</li>
        <li>✅ Autoriza nuevos equipos</li>
        <li>✅ Bloquea dispositivos sospechosos</li>
        <li>✅ Monitorea intentos de acceso</li>
        <li>✅ Historial de conexiones</li>
      </ul>
      <p class="text-sm mt-3 mb-0">
        <strong>⏱️ Tiempo para dominar:</strong> 1 día | 
        <strong>📖 Guía completa:</strong> <a href="/modulos/dispositivos" class="text-amber-600 dark:text-amber-400 hover:underline">Ver documentación →</a>
      </p>
    </div>

    <!-- RUTA DE APRENDIZAJE -->
    <div class="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-xl text-white my-8">
      <h2 class="text-white mt-0">📚 Ruta de Aprendizaje Recomendada</h2>
      <p class="text-orange-50">
        Sigue este orden para dominar CHUMI en <strong>10 días</strong>:
      </p>
      <div class="space-y-3 mt-4">
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p class="font-bold mb-1">📅 Días 1-3: Lo Básico</p>
          <p class="text-sm text-orange-50">Recibos + Clientes → Puedes crear ventas y gestionar clientes</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p class="font-bold mb-1">📅 Días 4-6: Operaciones</p>
          <p class="text-sm text-orange-50">Inventario + Precios → Control total de ventas y precios</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p class="font-bold mb-1">📅 Días 7-8: Financiero</p>
          <p class="text-sm text-orange-50">Deudas + Reportes → Visibilidad completa financiera</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p class="font-bold mb-1">📅 Días 9-10: Avanzado</p>
          <p class="text-sm text-orange-50">Cotizaciones + UbicuoAI → Automatización inteligente</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
          <p class="font-bold mb-1">📅 Día 11+: Administración</p>
          <p class="text-sm text-orange-50">Usuarios + Dispositivos → Sistema seguro (solo admins)</p>
        </div>
      </div>
    </div>

    <!-- INSTALACIÓN -->
    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 my-6">
      <h3 class="mt-0">⚠️ Instalación - Información Importante</h3>
      <p>
        <strong>Versión Actual (v1.0):</strong> CHUMI debe ser instalado de forma física por un técnico capacitado de Ubicuo Studio.
        No está disponible la descarga directa por internet en esta versión.
      </p>
      <p>
        Una vez completada la instalación, recibirás credenciales y capacitación básica para comenzar.
      </p>
      <p class="mb-0">
        <strong>Próxima Versión (v2.0):</strong> Incluirá descarga e instalación automática por internet.
      </p>
    </div>

    <!-- CONTACTO -->
    <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-xl text-white my-8">
      <h3 class="text-white mt-0">📞 Contacto - Soporte y Capacitación</h3>
      <p class="text-blue-50 mb-4">
        Si tienes dudas o necesitas capacitación adicional, contacta con Ubicuo Studio:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div class="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <p class="font-bold mb-1">📧 Email</p>
          <p class="text-blue-50 m-0">ubicuoluzestrategica@gmail.com</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <p class="font-bold mb-1">💬 WhatsApp</p>
          <p class="text-blue-50 m-0">+52 4431187975</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <p class="font-bold mb-1">🌐 Sitio Web</p>
          <p class="text-blue-50 m-0">ubicuomexico.com</p>
        </div>
        <div class="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <p class="font-bold mb-1">💻 GitHub</p>
          <p class="text-blue-50 m-0">github.com/Ubicuo22</p>
        </div>
      </div>
      <p class="text-blue-50 mt-4 mb-0">
        Estamos aquí para ayudarte a aprovechar al máximo CHUMI en Disfruleg (Distribuidora Castruita).
      </p>
    </div>

    <!-- CTA FINAL -->
    <div class="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
      <h3>🚀 ¿Listo para Comenzar?</h3>
      <p class="text-lg mb-6">
        Haz clic en el botón para explorar todos los módulos en detalle
      </p>
      <a href="/modulos" class="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
        Ver Todos los Módulos →
      </a>
    </div>
  </div>
</div>
    `,
  },
  instalacion: { 
    title: "Instalación", 
    content: `
<div class="space-y-6">
  <div class="prose dark:prose-invert max-w-none">
    <h2>⚙️ Instalación de CHUMI</h2>
    
    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 my-6">
      <h3 class="mt-0">📦 Versión Actual (v1.0)</h3>
      <p>
        La versión actual de CHUMI requiere <strong>instalación presencial</strong> por un técnico capacitado de Ubicuo Studio.
      </p>
      <p>
        <strong>No está disponible</strong> la descarga directa por internet en esta versión.
      </p>
    </div>

    <h3>🔧 Proceso de Instalación</h3>
    <ol>
      <li><strong>Contacta con Ubicuo Studio</strong> para solicitar la instalación</li>
      <li><strong>Agenda una cita</strong> con el técnico capacitado</li>
      <li><strong>Instalación física</strong> en tu equipo (2-3 horas)</li>
      <li><strong>Recibe credenciales</strong> y capacitación básica</li>
      <li><strong>¡Comienza a usar CHUMI!</strong></li>
    </ol>

    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 my-6">
      <h3 class="mt-0">🚀 Próxima Versión (v2.0)</h3>
      <p class="mb-0">
        Incluirá <strong>descarga e instalación automática</strong> por internet para mayor comodidad.
        Estará disponible próximamente.
      </p>
    </div>

    <h3>📞 Solicitar Instalación</h3>
    <p>Contacta con Ubicuo Studio:</p>
    <ul>
      <li><strong>Email:</strong> ubicuoluzestrategica@gmail.com</li>
      <li><strong>WhatsApp:</strong> +52 4431187975</li>
      <li><strong>Web:</strong> ubicuomexico.com</li>
    </ul>
  </div>
</div>
    ` 
  },
  troubleshooting: { 
    title: "Solución de Problemas", 
    content: `
<div class="space-y-6">
  <div class="prose dark:prose-invert max-w-none">
    <h2>🔧 Solución de Problemas Comunes</h2>
    
    <h3>🐛 Problemas Frecuentes</h3>
    
    <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 my-4">
      <h4 class="mt-0">❌ CHUMI no inicia</h4>
      <p><strong>Soluciones:</strong></p>
      <ol>
        <li>Verifica tu conexión a internet</li>
        <li>Reinicia la aplicación</li>
        <li>Reinicia tu computadora</li>
        <li>Contacta con soporte si persiste</li>
      </ol>
    </div>

    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 my-4">
      <h4 class="mt-0">⚠️ No puedo procesar ventas</h4>
      <p><strong>Posibles causas:</strong></p>
      <ul>
        <li>No tienes permisos de administrador</li>
        <li>Falta confirmar la venta en 2 pasos</li>
        <li>No ingresaste la contraseña correcta</li>
      </ul>
      <p><strong>Solución:</strong> Verifica tus permisos o solicita al administrador que procese la venta.</p>
    </div>

    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 my-4">
      <h4 class="mt-0">🔍 No encuentro un producto</h4>
      <p><strong>Soluciones:</strong></p>
      <ol>
        <li>Verifica que el producto exista en Inventario</li>
        <li>Busca con palabras clave diferentes</li>
        <li>Usa UbicuoAI para búsquedas inteligentes</li>
        <li>Revisa el código de barras</li>
      </ol>
    </div>

    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 my-4">
      <h4 class="mt-0">💾 Problemas con reportes</h4>
      <p><strong>Soluciones:</strong></p>
      <ol>
        <li>Limpia la caché del navegador</li>
        <li>Verifica el rango de fechas seleccionado</li>
        <li>Intenta exportar a Excel</li>
        <li>Reinicia CHUMI</li>
      </ol>
    </div>

    <h3>📞 ¿Necesitas Más Ayuda?</h3>
    <p>Si el problema persiste, contacta con Ubicuo Studio:</p>
    <ul>
      <li><strong>Email:</strong> ubicuoluzestrategica@gmail.com</li>
      <li><strong>WhatsApp:</strong> +52 4431187975</li>
    </ul>
    
    <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 my-6">
      <p class="font-bold mb-2">💡 Consejo Pro</p>
      <p class="mb-0">
        Antes de contactar con soporte, toma capturas de pantalla del error para acelerar la solución.
      </p>
    </div>
  </div>
</div>
    ` 
  }
};