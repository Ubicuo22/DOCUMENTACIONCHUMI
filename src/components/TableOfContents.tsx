import { useEffect, useState, useRef } from 'react';

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLElement>;
}

export function TableOfContents({ contentRef }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  // ✅ OPTIMIZACIÓN 4: Guardar referencia al observer para limpiar correctamente
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll('h2, h3');
    const headingList = Array.from(elements).map((el, index) => {
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1])
      };
    });

    setHeadings(headingList);
  }, [contentRef]);

  useEffect(() => {
    // ✅ Limpiar observer anterior si existe
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // ✅ Crear nuevo observer solo si hay headings
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    document.querySelectorAll('h2, h3').forEach((el) => {
      observerRef.current?.observe(el);
    });

    // ✅ Limpiar observer en unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 pl-8 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
        En esta página
      </div>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${
              activeId === heading.id
                ? 'text-orange-600 dark:text-orange-400 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            } ${heading.level === 3 ? 'pl-4' : ''}`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
