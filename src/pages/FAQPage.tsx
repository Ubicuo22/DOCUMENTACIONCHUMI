import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ModuleFAQ {
  moduleId: string;
  moduleName: string;
  icon: string;
  faqs: FAQItem[];
}

// FAQ para cada módulo
const moduleFAQs: ModuleFAQ[] = [
  {
    moduleId: 'recibos',
    moduleName: 'Recibos',
    icon: '🧾',
    faqs: [
      {
        question: '¿Cómo creo un nuevo recibo?',
        answer: 'Haz clic en el botón [+ Nuevo Recibo] y completa el workflow paso a paso: selecciona cliente, agrega productos, aplica descuentos si aplica, revisa bien y confirma.',
      },
      {
        question: '¿Puedo editar un recibo después de guardarlo?',
        answer: 'No, los recibos son inmutables por razones de auditoría y cumplimiento fiscal. Si necesitas hacer cambios, debes crear un nuevo recibo.',
      },
      {
        question: '¿Qué pasa si me equivoco en una cantidad?',
        answer: 'Por eso existe la sección "REVISA 2X ANTES". Verifica bien antes de confirmar: cliente, productos, cantidades, precios y descuentos.',
      },
      {
        question: '¿Cómo aplico descuentos?',
        answer: 'En el paso 4 del workflow puedes aplicar descuentos. Los automáticos se aplican según reglas. Los manuales requieren aprobación del supervisor.',
      },
      {
        question: '¿Puedo emitir un recibo sin cliente?',
        answer: 'Sí, pero es recomendable asignar cliente para que el sistema pueda rastrear la venta, actualizar deudas y mantener historial.',
      },
    ],
  },
  {
    moduleId: 'clientes',
    moduleName: 'Clientes',
    icon: '👥',
    faqs: [
      {
        question: '¿Cómo creo un nuevo cliente?',
        answer: 'Ve a Clientes, haz clic en [+ Nuevo Cliente] e ingresa: nombre, email, teléfono, dirección y límite de crédito permitido.',
      },
      {
        question: '¿Cuál es el límite de crédito?',
        answer: 'Es el máximo que un cliente puede deber. Lo defines cuando creas el cliente. El sistema alerta si se intenta superar.',
      },
      {
        question: '¿Cómo edito información de un cliente?',
        answer: 'Encuentra el cliente en la lista, haz clic en él y edita los campos que necesites. Los cambios se guardan automáticamente.',
      },
      {
        question: '¿Puedo eliminar un cliente?',
        answer: 'Puedes desactivar clientes, no eliminarlos completamente. Esto preserva el historial de transacciones para auditoría.',
      },
      {
        question: '¿Cómo veo el historial de un cliente?',
        answer: 'Abre el perfil del cliente y verás todas sus transacciones, deudas y recibos emitidos en orden cronológico.',
      },
    ],
  },
  {
    moduleId: 'inventario',
    moduleName: 'Inventario',
    icon: '📦',
    faqs: [
      {
        question: '¿Cómo agrego nuevos productos?',
        answer: 'Ve a Inventario, haz clic en [+ Nuevo Producto] e ingresa: código, nombre, descripción, stock inicial, precio de compra.',
      },
      {
        question: '¿Cómo actualizo el stock?',
        answer: 'Puedes actualizar manualmente en el módulo de inventario, o el sistema actualiza automáticamente cuando haces una venta.',
      },
      {
        question: '¿Qué es una alerta de inventario?',
        answer: 'Es un aviso que se dispara cuando el stock de un producto cae por debajo de un nivel mínimo que definas.',
      },
      {
        question: '¿Puedo importar productos?',
        answer: 'Sí, el sistema permite importar desde CSV o Excel. El formato se especifica en la sección de importación.',
      },
      {
        question: '¿Cómo veo productos con bajo stock?',
        answer: 'Filtra en Inventario por "Stock bajo" para ver todos los productos que necesitan reorden.',
      },
    ],
  },
  {
    moduleId: 'precios',
    moduleName: 'Precios',
    icon: '💰',
    faqs: [
      {
        question: '¿Cómo establezco precios?',
        answer: 'En Precios, define el precio de venta de cada producto. Puedes hacerlo individualmente o en lote.',
      },
      {
        question: '¿Qué es el margen de ganancia?',
        answer: 'Es la diferencia entre el precio de venta y el costo. Ejemplo: si cuesta $100 y lo vendes a $150, el margen es 50%.',
      },
      {
        question: '¿Puedo tener precios diferentes por cliente?',
        answer: 'Sí, puedes definir precios especiales para clientes VIP o al por mayor en la sección de Precios por Cliente.',
      },
      {
        question: '¿Cómo aplico descuentos masivos?',
        answer: 'Usa la herramienta "Descuentos Masivos" para aplicar porcentajes o montos fijos a múltiples productos.',
      },
      {
        question: '¿Cómo veo la rentabilidad de un producto?',
        answer: 'Ve a Reportes → TOP Productos para ver el margen, ganancia total y rentabilidad de cada producto.',
      },
    ],
  },
  {
    moduleId: 'cotizaciones',
    moduleName: 'Cotizaciones',
    icon: '📋',
    faqs: [
      {
        question: '¿Cómo creo una cotización?',
        answer: 'Haz clic en [+ Nueva Cotización], selecciona cliente, agrega productos y el sistema genera automáticamente un PDF.',
      },
      {
        question: '¿Cómo convierto una cotización en venta?',
        answer: 'Abre la cotización y haz clic en "Convertir a Recibo". El cliente y productos se transfieren automáticamente.',
      },
      {
        question: '¿Puedo enviar cotizaciones por email?',
        answer: 'Sí, cada cotización tiene un botón "Enviar por Email" que abre la cotización en PDF y la puedes compartir.',
      },
      {
        question: '¿Cómo expiro una cotización?',
        answer: 'Define una fecha de vencimiento al crear la cotización. Después de esa fecha, no se puede convertir a venta.',
      },
      {
        question: '¿Qué formato tiene el PDF?',
        answer: 'El PDF es profesional con logo, datos del cliente, productos, totales y términos de pago. Es imprimible y envíable.',
      },
    ],
  },
  {
    moduleId: 'reportes',
    moduleName: 'Reportes',
    icon: '📊',
    faqs: [
      {
        question: '¿Qué reportes están disponibles?',
        answer: 'Dashboard general, TOP Productos (más vendidos), TOP Clientes (mejores compradores) y análisis por Grupo o categoría.',
      },
      {
        question: '¿Puedo exportar los reportes?',
        answer: 'Sí, todos los reportes pueden exportarse a Excel o PDF desde el botón "Exportar" en cada reporte.',
      },
      {
        question: '¿Cómo filtro reportes por fecha?',
        answer: 'Usa el selector de fechas en la parte superior del reporte. Selecciona rango de fechas y el reporte se actualiza automáticamente.',
      },
      {
        question: '¿Qué significa "Margen"?',
        answer: 'Es el porcentaje de ganancia. Margen = (Precio - Costo) / Precio × 100. Más alto = más rentable.',
      },
      {
        question: '¿Con qué frecuencia se actualizan los reportes?',
        answer: 'Los reportes se actualizan en tiempo real. Cada venta que hagas aparece inmediatamente en los reportes.',
      },
    ],
  },
  {
    moduleId: 'deudas',
    moduleName: 'Deudas',
    icon: '💳',
    faqs: [
      {
        question: '¿Cómo sé cuánto me debe un cliente?',
        answer: 'Ve a Deudas y busca el cliente. Verás el total pendiente, deudas vencidas y próximas a vencer.',
      },
      {
        question: '¿Cómo registro un pago?',
        answer: 'Abre la deuda del cliente, haz clic en "Registrar Pago" e ingresa monto y método de pago. Se descuenta automáticamente.',
      },
      {
        question: '¿Cómo envío recordatorios de deuda?',
        answer: 'Selecciona deudas vencidas y haz clic en "Enviar Recordatorio". Se envía automáticamente por email al cliente.',
      },
      {
        question: '¿Qué pasa si un cliente no paga?',
        answer: 'El sistema marca la deuda como vencida y puede generar intereses según tus políticas configuradas.',
      },
      {
        question: '¿Puedo condonar una deuda?',
        answer: 'Sí, pero requiere aprobación de gerente/admin. Esto se registra en auditoría con motivo y autorización.',
      },
    ],
  },
  {
    moduleId: 'dispositivos',
    moduleName: 'Dispositivos',
    icon: '🔐',
    faqs: [
      {
        question: '¿Cómo autorizo un dispositivo?',
        answer: 'Ve a Dispositivos y haz clic en [+ Autorizar Dispositivo]. Ingresa nombre y descripción del dispositivo.',
      },
      {
        question: '¿Puedo tener múltiples dispositivos?',
        answer: 'Sí, puedes autorizar varios dispositivos (computadora, tablet, teléfono, etc) para acceder desde múltiples lugares.',
      },
      {
        question: '¿Cómo revoco acceso a un dispositivo?',
        answer: 'Ve a Dispositivos, encuentra el dispositivo y haz clic en "Revocar Acceso". Ese dispositivo no podrá acceder más.',
      },
      {
        question: '¿Qué pasa si pierdo un dispositivo?',
        answer: 'Revoca el acceso inmediatamente. Así proteges los datos si alguien más tiene acceso a ese dispositivo.',
      },
      {
        question: '¿Hay límite de dispositivos?',
        answer: 'El sistema permite múltiples dispositivos. Solo revocar los que ya no uses para mantener seguridad.',
      },
    ],
  },
  {
    moduleId: 'usuarios',
    moduleName: 'Usuarios',
    icon: '👤',
    faqs: [
      {
        question: '¿Cómo creo un nuevo usuario?',
        answer: 'Ve a Usuarios, haz clic en [+ Nuevo Usuario], ingresa email, nombre, asigna rol y el sistema envía email de bienvenida.',
      },
      {
        question: '¿Qué roles existen?',
        answer: 'Vendedor (vende), Bodeguero (gestiona stock), Gerente (reportes), Administrador (todo). Cada rol tiene permisos específicos.',
      },
      {
        question: '¿Puedo cambiar permisos de un usuario?',
        answer: 'No cambias permisos individuales. Los permisos vienen definidos por el rol. Puedes cambiar el rol del usuario.',
      },
      {
        question: '¿Cómo elimino un usuario?',
        answer: 'No elimines usuarios activos. Desactívalos para preservar historial. Se pueden reactivar si es necesario.',
      },
      {
        question: '¿Qué es la auditoría?',
        answer: 'Es el registro de todas las acciones de los usuarios: quién vendió qué, cuándo, cambios, etc. Para transparencia y seguridad.',
      },
    ],
  },
  {
    moduleId: 'ubicuoai',
    moduleName: 'UbicuoAI',
    icon: '🤖',
    faqs: [
      {
        question: '¿Cómo uso UbicuoAI?',
        answer: 'Pega información de un pedido (de email, WhatsApp, PDF, etc). UbicuoAI extrae los datos y busca los productos automáticamente.',
      },
      {
        question: '¿Qué significa el color verde/amarillo/rojo?',
        answer: 'Verde 🟢 = Coincidencia exacta (seguro). Amarillo 🟡 = Aproximado (revisa). Rojo 🔴 = No encontrado (busca manualmente).',
      },
      {
        question: '¿Cómo corrijo un error?',
        answer: 'Haz clic en el producto rojo y elige el correcto de las opciones. El sistema aprende y usará tu corrección la próxima vez.',
      },
      {
        question: '¿Mejora con el tiempo?',
        answer: 'Sí, cuantas más correcciones hagas, más aprende. La primera corrección es manual, pero las siguientes son automáticas.',
      },
      {
        question: '¿Puedo usar con cualquier formato?',
        answer: 'UbicuoAI es flexible. Acepta: "2x iPhone 13", "Dos iphones", "iPhone x2", etc. Busca lo mejor que puede.',
      },
    ],
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function FAQModulesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedModules, setExpandedModules] = useState<ExpandedState>({});

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  // Filtrar FAQs por búsqueda
  const filteredFAQs = moduleFAQs.map(module => ({
    ...module,
    faqs: module.faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.moduleName.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(module => module.faqs.length > 0);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ❓ Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Encuentra respuestas a las preguntas más comunes sobre cada módulo de CHUMI.
          </p>
        </div>

        {/* Búsqueda */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
          <input
            type="text"
            placeholder="Busca una pregunta o módulo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{moduleFAQs.length}</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Módulos documentados</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{moduleFAQs.reduce((sum, m) => sum + m.faqs.length, 0)}</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Preguntas totales</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">~5 min</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Lectura promedio</p>
        </div>
      </div>

      {/* FAQs por Módulo */}
      <section className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No encontramos resultados para "{searchQuery}"
            </p>
          </div>
        ) : (
          filteredFAQs.map(module => (
            <div
              key={module.moduleId}
              className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              {/* Header del módulo */}
              <button
                onClick={() => toggleModule(module.moduleId)}
                className="w-full p-6 flex items-center justify-between bg-gray-50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-900 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{module.icon}</span>
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{module.moduleName}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{module.faqs.length} preguntas</p>
                  </div>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${expandedModules[module.moduleId] ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>

              {/* FAQs del módulo */}
              {expandedModules[module.moduleId] && (
                <div className="p-6 space-y-3 bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800">
                  {module.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-gray-200 dark:border-gray-800 rounded-lg"
                    >
                      <summary
                        className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition"
                      >
                        <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                        <ChevronDown className="transform group-open:rotate-180 transition-transform" size={20} />
                      </summary>
                      <p className="p-4 pt-0 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-900/50">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </section>

      {/* CTA */}
      <section className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-xl border border-orange-200 dark:border-orange-800">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">¿No encontraste respuesta?</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Revisa la documentación completa de cada módulo o contacta al equipo de soporte.
        </p>
        <div className="flex gap-4">
          <a
            href="/modulos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium"
          >
            Ver Documentación Completa
          </a>
        </div>
      </section>
    </div>
  );
}