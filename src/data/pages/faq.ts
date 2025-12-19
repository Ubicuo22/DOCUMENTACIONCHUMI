export const faq = {
  general: {
    title: "¿Qué es CHUMI y cómo funciona?",
    content: `
<div class="space-y-8">
  <section className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-8 rounded-lg border border-orange-200 dark:border-orange-800">
    <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4">¿Qué es CHUMI?</h3>
    <p className="text-orange-800 dark:text-orange-200 leading-relaxed">
      CHUMI es tu sistema completo de gestión comercial diseñado para empresas pequeñas y medianas.
      Integra 10 módulos especializados que trabajan juntos para simplificar tus operaciones diarias,
      ahorrar tiempo administrativo y proporcionarte información en tiempo real para tomar mejores decisiones.
    </p>
  </section>

  <section>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Los 10 Módulos de CHUMI</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- RECIBOS -->
      <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">💰</div>
          <div>
            <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300">Recibos</h4>
            <p className="text-sm text-blue-700 dark:text-blue-400 font-semibold">EL MÁS IMPORTANTE</p>
          </div>
        </div>
        <p className="text-blue-800 dark:text-blue-200 mb-3">
          Gestiona todas tus ventas en un solo lugar. Crea recibos, rastrea transacciones y mantén control total de ingresos.
        </p>
        <p className="text-sm text-blue-700 dark:text-blue-300 italic border-l-4 border-blue-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Es la piedra angular de tu negocio. Sin registrar correctamente las ventas, no puedes tomar decisiones informadas.
        </p>
      </div>

      <!-- CLIENTES -->
      <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">👥</div>
          <div>
            <h4 className="text-xl font-bold text-green-900 dark:text-green-300">Clientes</h4>
            <p className="text-sm text-green-700 dark:text-green-400 font-semibold">FUNDAMENTAL</p>
          </div>
        </div>
        <p className="text-green-800 dark:text-green-200 mb-3">
          Base de datos centralizada con historial completo, límites de crédito y preferencias de cada cliente.
        </p>
        <p className="text-sm text-green-700 dark:text-green-300 italic border-l-4 border-green-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Conocer a tus clientes es clave. Permite personalizar atención, gestionar créditos y detectar patrones de compra.
        </p>
      </div>

      <!-- INVENTARIO -->
      <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">📦</div>
          <div>
            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-300">Inventario</h4>
            <p className="text-sm text-purple-700 dark:text-purple-400 font-semibold">CRÍTICO</p>
          </div>
        </div>
        <p className="text-purple-800 dark:text-purple-200 mb-3">
          Control de stock en tiempo real con alertas automáticas cuando el inventario es bajo.
        </p>
        <p className="text-sm text-purple-700 dark:text-purple-300 italic border-l-4 border-purple-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Evita perder ventas por falta de stock o tener dinero atrapado en productos que no se venden.
        </p>
      </div>

      <!-- PRECIOS -->
      <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">🏷️</div>
          <div>
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-300">Precios</h4>
            <p className="text-sm text-amber-700 dark:text-amber-400 font-semibold">IMPORTANTE</p>
          </div>
        </div>
        <p className="text-amber-800 dark:text-amber-200 mb-3">
          Gestiona precios, márgenes y descuentos. Aplica diferentes estrategias de pricing según cliente o temporada.
        </p>
        <p className="text-sm text-amber-700 dark:text-amber-300 italic border-l-4 border-amber-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Los precios correctos determinan tu rentabilidad. Optimizar márgenes es ganar más sin vender más.
        </p>
      </div>

      <!-- DEUDAS -->
      <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">📊</div>
          <div>
            <h4 className="text-xl font-bold text-red-900 dark:text-red-300">Deudas</h4>
            <p className="text-sm text-red-700 dark:text-red-400 font-semibold">CRÍTICO</p>
          </div>
        </div>
        <p className="text-red-800 dark:text-red-200 mb-3">
          Control total de créditos, seguimiento de vencimientos y recordatorios automáticos de cobro.
        </p>
        <p className="text-sm text-red-700 dark:text-red-300 italic border-l-4 border-red-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Las deudas incobrables pueden quebrar un negocio. Gestiona créditos efectivamente.
        </p>
      </div>

      <!-- REPORTES -->
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">📈</div>
          <div>
            <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-300">Reportes</h4>
            <p className="text-sm text-indigo-700 dark:text-indigo-400 font-semibold">ESENCIAL</p>
          </div>
        </div>
        <p className="text-indigo-800 dark:text-indigo-200 mb-3">
          Análisis profundo de ventas, ganancias, tendencias y métricas clave de tu negocio.
        </p>
        <p className="text-sm text-indigo-700 dark:text-indigo-300 italic border-l-4 border-indigo-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Los datos transforman en inteligencia. Entiende qué funciona y optimiza.
        </p>
      </div>

      <!-- FACTURAS -->
      <div className="bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-300 dark:border-cyan-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">📄</div>
          <div>
            <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-300">Facturas</h4>
            <p className="text-sm text-cyan-700 dark:text-cyan-400 font-semibold">RECOMENDADO</p>
          </div>
        </div>
        <p className="text-cyan-800 dark:text-cyan-200 mb-3">
          Generación automática de facturas, archivo digital y cumplimiento normativo.
        </p>
        <p className="text-sm text-cyan-700 dark:text-cyan-300 italic border-l-4 border-cyan-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Documentación legal correcta protege tu negocio y facilita auditorías.
        </p>
      </div>

      <!-- VENTAS -->
      <div className="bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-300 dark:border-pink-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">💹</div>
          <div>
            <h4 className="text-xl font-bold text-pink-900 dark:text-pink-300">Ventas</h4>
            <p className="text-sm text-pink-700 dark:text-pink-400 font-semibold">IMPORTANTE</p>
          </div>
        </div>
        <p className="text-pink-800 dark:text-pink-200 mb-3">
          Seguimiento de vendedores, comisiones, metas y performance de ventas.
        </p>
        <p className="text-sm text-pink-700 dark:text-pink-300 italic border-l-4 border-pink-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Motiva a tu equipo y mide desempeño real. La transparencia aumenta productividad.
        </p>
      </div>

      <!-- PROVEEDORES -->
      <div className="bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-300 dark:border-rose-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-rose-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">🤝</div>
          <div>
            <h4 className="text-xl font-bold text-rose-900 dark:text-rose-300">Proveedores</h4>
            <p className="text-sm text-rose-700 dark:text-rose-400 font-semibold">RECOMENDADO</p>
          </div>
        </div>
        <p className="text-rose-800 dark:text-rose-200 mb-3">
          Gestión de proveedores, órdenes de compra y control de adquisiciones.
        </p>
        <p className="text-sm text-rose-700 dark:text-rose-300 italic border-l-4 border-rose-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Relaciones efectivas con proveedores = mejores precios y stock confiable.
        </p>
      </div>

      <!-- CONFIGURACIÓN -->
      <div className="bg-slate-50 dark:bg-slate-900/20 border-2 border-slate-300 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-slate-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">⚙️</div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-slate-300">Configuración</h4>
            <p className="text-sm text-slate-700 dark:text-slate-400 font-semibold">FUNDAMENTAL</p>
          </div>
        </div>
        <p className="text-slate-800 dark:text-slate-200 mb-3">
          Personaliza CHUMI según tus necesidades: usuarios, permisos, datos de empresa y preferencias.
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-300 italic border-l-4 border-slate-500 pl-3">
          <strong>¿Por qué es imprescindible?</strong> Cada negocio es único. Personalización = mejor adaptación.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cómo Funciona CHUMI</h3>
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="text-3xl font-bold text-orange-500">1</div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Cliente llega a tu negocio</p>
          <p className="text-gray-700 dark:text-gray-400">El módulo de Recibos registra la venta automáticamente</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-3xl font-bold text-orange-500">2</div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Sistema actualiza Inventario y Clientes</p>
          <p className="text-gray-700 dark:text-gray-400">Stock se reduce, historial del cliente se registra</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-3xl font-bold text-orange-500">3</div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Reportes se actualizan en tiempo real</p>
          <p className="text-gray-700 dark:text-gray-400">Ves métricas actualizadas al instante</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-3xl font-bold text-orange-500">4</div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">Tomas decisiones informadas</p>
          <p className="text-gray-700 dark:text-gray-400">Datos reales = mejores estrategias</p>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 p-8 rounded-lg border border-orange-300 dark:border-orange-700">
    <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4">Beneficios de CHUMI</h3>
    <ul className="space-y-3 text-orange-800 dark:text-orange-200">
      <li className="flex gap-3">
        <span className="font-bold">✓</span>
        <span><strong>Ahorra 2.5 horas diarias</strong> en tareas administrativas</span>
      </li>
      <li className="flex gap-3">
        <span className="font-bold">✓</span>
        <span><strong>Información en tiempo real</strong> para tomar decisiones rápidas</span>
      </li>
      <li className="flex gap-3">
        <span className="font-bold">✓</span>
        <span><strong>Seguridad garantizada</strong> con respaldos automáticos</span>
      </li>
      <li className="flex gap-3">
        <span className="font-bold">✓</span>
        <span><strong>Control total</strong> de todas tus operaciones</span>
      </li>
      <li className="flex gap-3">
        <span className="font-bold">✓</span>
        <span><strong>Crece sin stress</strong> mientras CHUMI escala contigo</span>
      </li>
    </ul>
  </section>
</div>
    `,
  },
  tecnico: { 
    title: "Preguntas Técnicas", 
    content: `
<div class="space-y-6">
  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded">
    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">¿Qué sistemas operativos soporta CHUMI?</h4>
    <p className="text-blue-800 dark:text-blue-200">Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)</p>
  </div>

  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded">
    <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">¿Necesito conexión a internet?</h4>
    <p className="text-green-800 dark:text-green-200">
      Sí, se recomienda conexión estable para sincronización de datos. CHUMI cuenta con caché local para operaciones offline básicas.
    </p>
  </div>

  <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded">
    <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">¿Mis datos están seguros?</h4>
    <p className="text-purple-800 dark:text-purple-200">
      Todos tus datos se respaldan automáticamente. CHUMI usa encriptación de nivel empresarial y cumple con estándares de seguridad internacionales.
    </p>
  </div>

  <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded">
    <h4 className="font-bold text-amber-900 dark:text-amber-300 mb-2">¿Puedo acceder desde múltiples dispositivos?</h4>
    <p className="text-amber-800 dark:text-amber-200">
      Sí, accede desde escritorio, tablet o móvil. Tu información se sincroniza automáticamente.
    </p>
  </div>

  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded">
    <h4 className="font-bold text-red-900 dark:text-red-300 mb-2">¿Qué navegadores son compatibles?</h4>
    <p className="text-red-800 dark:text-red-200">
      Chrome, Firefox, Safari, Edge. Se recomienda versiones actualizadas para mejor rendimiento.
    </p>
  </div>
</div>
    ` 
  },
  soporte: { 
    title: "Soporte y Contacto", 
    content: `
<div class="space-y-8">
  <section className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-6">Contacta con Ubicuo Studio</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg text-center border border-blue-200 dark:border-blue-800">
        <div className="text-3xl mb-3">📧</div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Email</p>
        <p className="font-bold text-gray-900 dark:text-white break-all">ubicuoluzestrategica@gmail.com</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg text-center border border-green-200 dark:border-green-800">
        <div className="text-3xl mb-3">💬</div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">WhatsApp</p>
        <p className="font-bold text-gray-900 dark:text-white">+52 4431187975</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg text-center border border-gray-200 dark:border-gray-800">
        <div className="text-3xl mb-3">💻</div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">GitHub</p>
        <p className="font-bold text-gray-900 dark:text-white">github.com/Ubicuo22</p>
      </div>
    </div>
  </section>

  <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg border border-orange-200 dark:border-orange-800">
    <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4">¿Necesitas Capacitación?</h3>
    <p className="text-orange-800 dark:text-orange-200 mb-4">
      Si tienes dudas después de revisar los módulos y preguntas frecuentes, Ubicuo Studio ofrece:
    </p>
    <ul className="space-y-2 text-orange-800 dark:text-orange-200">
      <li className="flex gap-2">
        <span className="font-bold">→</span>
        <span>Capacitación presencial en tu ubicación</span>
      </li>
      <li className="flex gap-2">
        <span className="font-bold">→</span>
        <span>Sesiones de entrenamiento personalizado</span>
      </li>
      <li className="flex gap-2">
        <span className="font-bold">→</span>
        <span>Soporte técnico dedicado</span>
      </li>
      <li className="flex gap-2">
        <span className="font-bold">→</span>
        <span>Optimización de procesos según tu negocio</span>
      </li>
    </ul>
  </section>

  <section className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg border border-gray-200 dark:border-gray-800">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sobre Ubicuo Studio</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      Somos un equipo de profesionales dedicados a crear soluciones tecnológicas que transforman negocios.
      CHUMI es el resultado de años de experiencia trabajando con empresas como la tuya.
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>Nuestra misión:</strong> Simplificar la gestión comercial para que te enfoques en crecer tu negocio.
    </p>
  </section>
</div>
    ` 
  }
};