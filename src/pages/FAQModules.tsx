import { useState, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MODULES = [
  { id: 'recibos', label: 'Generar Recibos', icon: '💾' },
  { id: 'clientes', label: 'Gestionar Clientes', icon: '👥' },
  { id: 'inventario', label: 'Control de Inventario', icon: '📦' },
  { id: 'precios', label: 'Gestionar Precios', icon: '💰' },
  { id: 'deudas', label: 'Controlar Deudas', icon: '💳' },
];

const MODULE_FAQS = [
  {
    module: 'recibos',
    faqs: [
      { id: 'r1', question: '¿Quién puede usar este módulo?', answer: 'Todos: Vendedores, Cajeros y Administradores.' },
      { id: 'r2', question: '¿Necesito capacitación especial?', answer: 'No, es muy intuitivo. Solo 30 minutos.' },
      { id: 'r3', question: '¿Qué pasa si el cliente no está registrado?', answer: 'Se crea automáticamente.' },
    ]
  },
  {
    module: 'clientes',
    faqs: [
      { id: 'c1', question: '¿Cómo agrego un cliente?', answer: 'Click en "Nuevo Cliente" y completa el formulario.' },
      { id: 'c2', question: '¿Puedo importar clientes?', answer: 'Sí, desde Excel o CSV.' },
    ]
  },
  {
    module: 'inventario',
    faqs: [
      { id: 'i1', question: '¿En tiempo real?', answer: 'Sí, se actualiza instantáneamente.' },
      { id: 'i2', question: '¿Alertas de stock bajo?', answer: 'Sí, configurables por producto.' },
    ]
  },
  {
    module: 'precios',
    faqs: [
      { id: 'p1', question: '¿Múltiples precios?', answer: 'Sí, por categoría, cliente o cantidad.' },
      { id: 'p2', question: '¿Descuentos automáticos?', answer: 'Sí, por volumen o cliente.' },
    ]
  },
  {
    module: 'deudas',
    faqs: [
      { id: 'd1', question: '¿Vencimiento automático?', answer: 'Sí, configurable.' },
      { id: 'd2', question: '¿Recordatorios?', answer: 'Sí, automáticos.' },
    ]
  },
];

interface FAQModulesProps {
  onNavigate?: (path: string) => void;
}

export function FAQModules({ onNavigate }: FAQModulesProps) {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // ✅ OPTIMIZACIÓN 1: Memoizar active module
  const activeModuleData = useMemo(() => MODULES[activeModule], [activeModule]);
  const activeModuleFAQs = useMemo(
    () => MODULE_FAQS.find(m => m.module === activeModuleData.id)?.faqs || [],
    [activeModuleData.id]
  );

  // ✅ OPTIMIZACIÓN 2: Memoizar callbacks
  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  }, [checkScroll]);

  const toggleFAQ = useCallback((id: string) => {
    setExpandedFAQ(prev => (prev === id ? null : id));
  }, []);

  const handleNavigateToModule = useCallback(() => {
    const newPath = `/modulos/${activeModuleData.id}`;
    if (onNavigate) {
      onNavigate(newPath);
    } else {
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new Event('navigate') as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeModuleData.id, onNavigate]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Preguntas Frecuentes por Módulo</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Resuelve tus dudas específicas de cada módulo. Selecciona uno para ver sus FAQs.
        </p>
      </section>

      {/* MODULE CAROUSEL */}
      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {MODULES.map((module, idx) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(idx)}
              className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap ${
                activeModule === idx
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {module.icon} {module.label}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* FAQS */}
      <div className="space-y-4">
        {activeModuleFAQs.map(faq => (
          <button
            key={faq.id}
            onClick={() => toggleFAQ(faq.id)}
            className="w-full text-left p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 transition bg-white dark:bg-gray-900"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <span className={`text-2xl transition ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {expandedFAQ === faq.id && (
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={handleNavigateToModule}
        className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition"
      >
        Ver Documentación Completa de {activeModuleData.label}
      </button>
    </div>
  );
}

export default FAQModules;