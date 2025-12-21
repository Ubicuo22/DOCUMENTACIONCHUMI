import { useState, useMemo, useCallback } from 'react';
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

// ✅ OPTIMIZACIÓN 1: Mover FAQs FUERA del componente (una sola vez)
const MODULE_FAQS: ModuleFAQ[] = [
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
];

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // ✅ OPTIMIZACIÓN 2: Memoizar búsqueda para no filtrar en cada render
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return MODULE_FAQS;

    const query = searchQuery.toLowerCase();
    return MODULE_FAQS.map(module => ({
      ...module,
      faqs: module.faqs.filter(
        faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      ),
    })).filter(module => module.faqs.length > 0);
  }, [searchQuery]);

  // ✅ OPTIMIZACIÓN 3: Memoizar toggle callback
  const toggleFAQ = useCallback((id: string) => {
    setExpandedFAQ(prev => (prev === id ? null : id));
  }, []);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Preguntas Frecuentes
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Encuentra respuestas a las preguntas más comunes sobre CHUMI
        </p>
      </section>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-600" size={20} />
        <input
          type="text"
          placeholder="Busca en todas las preguntas frecuentes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />
      </div>

      {/* Results Counter */}
      {searchQuery && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Se encontraron {filteredFAQs.reduce((acc, m) => acc + m.faqs.length, 0)} preguntas
        </div>
      )}

      {/* FAQs by Module */}
      {filteredFAQs.length > 0 ? (
        <div className="space-y-8">
          {filteredFAQs.map(module => (
            <section key={module.moduleId} className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {module.icon} {module.moduleName}
              </h2>
              <div className="space-y-3">
                {module.faqs.map((faq, idx) => {
                  const faqId = `${module.moduleId}-${idx}`;
                  const isExpanded = expandedFAQ === faqId;

                  return (
                    <div
                      key={faqId}
                      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faqId)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white text-left">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-orange-500 transition-transform flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
                          <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No se encontraron resultados
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}
    </div>
  );
}

export default FAQPage;
