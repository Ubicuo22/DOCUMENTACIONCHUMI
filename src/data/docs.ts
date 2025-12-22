export const docsContent = {
  index: { title: "CHUMI - Cloud Hybrid Unified Management", content: `CHUMI es una solución integral de gestión comercial. Sistema todo en uno que centraliza todas las operaciones.` },
  introduccion: {
    overview: { title: "¿Qué es CHUMI?", content: `CHUMI integra 10 módulos diferentes que trabajan juntos.` },
    arquitectura: { title: "Arquitectura Técnica", content: `Backend: Python, Frontend: React + TypeScript, Base de datos: PostgreSQL, Cloud: AWS/Azure` },
    requisitos: { title: "Requisitos del Sistema", content: `Procesador: 2 núcleos, RAM: 4 GB, Almacenamiento: 50 GB` }
  },
  guias: {
    "primeros-pasos": { title: "Primeros Pasos", content: `Descarga, ejecuta instalador, sigue instrucciones.` },
    instalacion: { title: "Instalación", content: `Python 3.8+, Node.js 16+, Base de datos` },
    configuracion: { title: "Configuración", content: `Ve a Configuración, agrega datos de empresa.` },
    flujos: { title: "Flujos de Operación", content: `Cliente llega, creas recibo, agregas productos.` },
    integracion: { title: "Integración", content: `Predicciones de ventas, análisis de tendencias.` },
    respaldos: { title: "Respaldos", content: `Diarios, semanales, mensuales.` },
    seguridad: { title: "Seguridad", content: `Contraseñas fuertes, cambia cada 3 meses.` },
    troubleshooting: { title: "Solución de Problemas", content: `Verifica internet, limpia caché.` }
  },
  modulos: {
    recibos: { title: "Módulo Recibos", icon: "DollarSign", content: `Gestión de recibos. Crear automáticamente, personalizar diseño, reportes.` },
    clientes: { title: "Módulo Clientes", icon: "Users", content: `Base de datos centralizada, historial de compras, segmentación.` },
    inventario: { title: "Módulo Inventario", icon: "Package", content: `Stock en tiempo real, alertas automáticas, precios.` },
    precios: { title: "Módulo Precios", icon: "Wallet", content: `Precios por grupo, especiales por cliente, márgenes.` },
    cotizaciones: { title: "Módulo Cotizaciones", icon: "ClipboardList", content: `Presupuestos, seguimiento, conversión a venta.` },
    reportes: { title: "Módulo Reportes", icon: "BarChart3", content: `Análisis de ventas, productos, ganancias.` },
    deudas: { title: "Módulo Deudas", icon: "CreditCard", content: `Control de créditos, recordatorios automáticos.` },
    dispositivos: { title: "Módulo Dispositivos", icon: "Lock", content: `Autorización de equipos, monitoreo en tiempo real.` },
    usuarios: { title: "Módulo Usuarios", icon: "User", content: `Gestión de acceso, roles y permisos.` },
    ubicuoai: { title: "Módulo UbicuoAI", icon: "Bot", content: `IA y predicciones, análisis automático, automatización.` }
  },
  faq: {
    general: { title: "Preguntas Generales", content: `¿Cuánto cuesta? Diferentes planes. ¿Necesito internet? Sí.` },
    tecnico: { title: "Preguntas Técnicas", content: `Python, React, PostgreSQL.` },
    soporte: { title: "Soporte", content: `Email: support@chumi.com, Chat disponible.` }
  }
};

export const sidebarItems = [
  {
    section: "Módulos",
    items: [
      { label: "Generar Recibos", href: "/modulos/recibos", icon: "DollarSign" },
      { label: "Gestionar Clientes", href: "/modulos/clientes", icon: "Users" },
      { label: "Gestionar Inventario", href: "/modulos/inventario", icon: "Package" },
      { label: "Gestionar Precios", href: "/modulos/precios", icon: "Wallet" },
      { label: "Gestionar Cotizaciones", href: "/modulos/cotizaciones", icon: "ClipboardList" },
      { label: "Análisis y Reportes", href: "/modulos/reportes", icon: "BarChart3" },
      { label: "Gestionar Deudas", href: "/modulos/deudas", icon: "CreditCard" },
      { label: "Administración de Dispositivos", href: "/modulos/dispositivos", icon: "Lock" },
      { label: "Administrar Usuarios", href: "/modulos/usuarios", icon: "User" },
      { label: "UbicuoAI", href: "/modulos/ubicuoai", icon: "Bot" }
    ]
  },
  {
    section: "Preguntas Frecuentes",
    items: [
      { label: "Centro de FAQs", href: "/faq", icon: "HelpCircle" }
    ]
  }
];