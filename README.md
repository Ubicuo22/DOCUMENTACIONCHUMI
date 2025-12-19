# 🚀 CHUMI - Sitio de Documentación

Réplica exacta del diseño **Figma** con toda la **documentación CHUMI** integrada.

## ✨ Características

- ✅ **Diseño Figma replicado exactamente** - Header, Sidebar, Footer y layout
- ✅ **Dark Mode / Light Mode** - Cambio de tema en tiempo real
- ✅ **Documentación completa** - 66 archivos markdown integrados
- ✅ **Responsive Design** - Funciona en desktop, tablet y móvil
- ✅ **Navegación dinámica** - Router SPA sin recarga
- ✅ **Tabla de contenidos automática** - Se genera con headings
- ✅ **Performance** - Vite + React optimizado

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
cd proyecto-final
npm install
```

### 2. Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 3. Build para producción

```bash
npm run build
```

Los archivos compilados estarán en `dist/`.

## 📁 Estructura del Proyecto

```
proyecto-final/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Header con breadcrumbs
│   │   ├── Sidebar.tsx      # Sidebar con navegación
│   │   ├── Footer.tsx       # Footer
│   │   └── TableOfContents.tsx  # TOC automática
│   ├── pages/               # Páginas
│   │   ├── HomePage.tsx     # Página de inicio
│   │   └── GenericPage.tsx  # Plantilla para contenido
│   ├── contexts/            # Context API
│   │   └── ThemeContext.tsx # Dark mode
│   ├── data/
│   │   └── docs.ts          # Contenido de documentación
│   ├── App.tsx              # Router principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globales
├── index.html               # HTML
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Personalización

### Cambiar colores

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      orange: {
        500: '#FF9500',  // Color principal
      }
    },
  },
}
```

### Agregar nuevas páginas

1. Agrega el contenido en `src/data/docs.ts`
2. Agrega la ruta en `App.tsx` renderPage()
3. Agrega el enlace en sidebar (también en `src/data/docs.ts`)

### Editar componentes

Todos los componentes están en `src/components/` y son reutilizables.

## 🔧 Tecnologías

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **Dark Mode** - CSS custom properties

## 📝 Contenido

Todo el contenido está en `src/data/docs.ts`:

- **10 Módulos** - Recibos, Clientes, Inventario, etc.
- **8 Guías** - Primeros pasos, Instalación, etc.
- **3 Introducciones** - Overview, Arquitectura, Requisitos
- **3 FAQ** - General, Técnico, Soporte

## 🌐 Rutas disponibles

```
/                          Home
/introduccion/overview     Overview
/introduccion/arquitectura Arquitectura
/introduccion/requisitos   Requisitos
/guias/primeros-pasos      Primeros Pasos
/guias/instalacion         Instalación
/guias/configuracion       Configuración
/guias/flujos              Flujos
/guias/integracion         Integración
/guias/respaldos           Respaldos
/guias/seguridad           Seguridad
/guias/troubleshooting     Solución de Problemas
/modulos/recibos           Recibos ⭐
/modulos/clientes          Clientes
/modulos/inventario        Inventario
/modulos/precios           Precios
/modulos/cotizaciones      Cotizaciones
/modulos/reportes          Reportes
/modulos/deudas            Deudas
/modulos/dispositivos      Dispositivos
/modulos/usuarios          Usuarios
/modulos/ubicuoai          UbicuoAI
/faq/general               FAQ General
/faq/tecnico               FAQ Técnico
/faq/soporte               FAQ Soporte
```

## 📦 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta 'dist/' a Netlify
```

### Servidor estático

```bash
npm run build
# Serve la carpeta 'dist/' con cualquier servidor HTTP
```

## 🎯 Características Destacadas

### Sidebar Colapsable
- Se colapsa a 64px mostrando solo iconos
- Toggle con botón en el header
- Se adapta automáticamente en móvil

### Dark Mode
- Almacenado en localStorage
- Switch en el header
- CSS variables para fácil personalización

### Responsive
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Sidebar se convierte a drawer en móvil

### SEO Friendly
- Meta tags en index.html
- URLs semánticas
- Breadcrumbs estructurados

## 📚 Documentación Original

Este proyecto integra la documentación de:
- docs.zip - Archivos markdown de CHUMI
- FIGMA_DESIGN_COMPLETO.zip - Diseño original en Figma

## 🤝 Contribuir

Para agregar más contenido:

1. Edita `src/data/docs.ts`
2. Agrega las rutas necesarias en `App.tsx`
3. Los cambios se ven en tiempo real con `npm run dev`

## 📄 Licencia

Este proyecto es una réplica del sitio de documentación CHUMI.

---

**¡Listo para usar!** 🎉

Para más información, visita `http://localhost:5173` después de ejecutar `npm run dev`.
