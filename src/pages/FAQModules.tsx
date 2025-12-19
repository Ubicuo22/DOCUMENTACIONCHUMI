import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const FAQModules = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      id: 'recibos',
      name: 'Generar Recibos',
      color: 'from-blue-500 to-cyan-500',
      faqs: [
        {
          question: '¿Quién usa este módulo?',
          answer: 'TODOS en el negocio: Vendedores (usan diariamente), Cajero/Caja (procesa pagos), Dueño/Administrador (revisa resultados), Contador (auditoría de ventas). Si eres vendedor, este es tu herramienta principal.'
        },
        {
          question: '¿Necesito capacitación especial?',
          answer: 'No, pero sí es crítico que entiendas bien: Cómo seleccionar cliente correcto, Cómo buscar productos, Cómo verificar cantidad y precio, Cómo procesar pagos. Recomendación: Haz primeras 10 recibos con supervisor.'
        },
        {
          question: '¿Qué pasa si el cliente no está registrado?',
          answer: 'Dos opciones: Opción 1 (Recomendada): Registra rápidamente en módulo Clientes, luego vuelve a Generar Recibos. Opción 2: Venta General (anónima) - selecciona grupo, cliente "Venta General", completa venta. Después puedes registrar cliente si quieres historial.'
        },
        {
          question: '¿Cómo sé qué grupo seleccionar?',
          answer: 'Haz estas preguntas: ¿Cuánto compra? Mucho (>50kg) = Mayorista, Poco (<10kg) = Minorista. ¿Cuál es su negocio? Tienda/Mercado = Mayorista, Restaurante pequeño = Minorista. ¿Qué descuento? 15%+ = Mayorista, <10% = Minorista. ¿Cuándo paga? 30+ días = Mayorista, Contado = Minorista.'
        },
        {
          question: '¿Puedo vender menos del stock mínimo?',
          answer: 'Sí. Sistema muestra: "Stock bajo - solo 5 kg disponibles". Significa que probablemente necesites comprar pronto. Pero puedes vender los 5 kg. El sistema no bloquea la venta si hay stock disponible, aunque esté por debajo del mínimo.'
        },
        {
          question: '¿De dónde salen los precios?',
          answer: 'Automático del sistema: Cliente "Mercado Los Mangos" (Mayorista) → Sistema consulta: ¿Cuál es precio de Papa para Mayorista? → Respuesta: $15/kg (registrado en módulo Precios) → Muestra en carrito: $15/kg. NUNCA cambies manualmente a menos que supervisor autorice.'
        },
        {
          question: '¿Puedo aplicar un descuento no autorizado?',
          answer: 'Técnicamente sí, pero: Sistema puede registrar quién lo hizo, Supervisor revisa después, Cuenta de caja no cierra, Puede afectar tu evaluación. Respuesta corta: NO, a menos que supervisor autorice Y esté presente.'
        },
        {
          question: '¿Qué pasa si hago mal un descuento?',
          answer: 'Opciones: Si aún no confirmas - Edita el carrito, elimina el descuento incorrecto, aplica el correcto. Si ya confirmaste - Contacta supervisor, que cree nota de crédito, vuelve a procesar. Lesson: Verifica 2x antes de confirmar.'
        },
        {
          question: '¿Puedo usar crédito si el cliente NO lo tiene?',
          answer: 'No, sistema rechaza: Mensaje de error "Cliente no tiene crédito disponible", "Límite: $0", "Crédito usado: $0". Soluciones: Cliente paga total en efectivo, Cliente paga parcial resto espera, Supervisor aumenta límite.'
        }
      ]
    },
    {
      id: 'precios',
      name: 'Gestionar Precios',
      color: 'from-emerald-500 to-teal-500',
      faqs: [
        {
          question: '¿Cómo establezco el primer precio?',
          answer: 'Abre módulo Gestionar Precios, En tabla de productos busca el producto, Haz clic para editar, Ingresa: Costo (precio que pagaste), Precio (precio de venta), El margen se calcula automático, Guardar.'
        },
        {
          question: '¿Necesito precios diferentes por grupo?',
          answer: 'Depende de tu negocio: SÍ si - Vendes a mayoristas Y minoristas, Tienes clientes con descuentos especiales, Necesitas precios competitivos por segmento. NO si - Todos los clientes pagan igual, Tienes un solo tipo de cliente, Es un negocio simple.'
        },
        {
          question: '¿Cómo funciona el margen?',
          answer: 'Fórmula: Margen = (Precio Venta - Costo) / Precio Venta * 100%. Ejemplo: Costo: $10, Precio: $20, Margen: (20-10)/20 * 100 = 50%. Interpretación: 50% margen = ganancia de $10 por cada unidad vendida.'
        },
        {
          question: '¿Por qué crear precios por grupo?',
          answer: 'Ventajas: Mayoristas pagan menos = Volumen vs margen, Minoristas pagan más = Servicio personalizado, Clientes VIP especiales = Lealtad y retención. Ejemplo: Papa Blanca - Mayorista: $15/kg, Minorista: $25/kg, VIP: $20/kg.'
        },
        {
          question: '¿Puedo tener muchos precios por producto?',
          answer: 'Sí. Puedes tener: 1 precio por cada grupo de cliente, Múltiples ajustes y descuentos, Histórico de cambios. Límite: No hay límite técnico, pero evita demasiadas variaciones (es confuso).'
        },
        {
          question: '¿Cuántos grupos de precios debo crear?',
          answer: 'Recomendación: Pequeño = 1-2 grupos, Mediano = 2-4 grupos, Grande = 4-6 grupos. Ejemplos: Mayorista, Minorista. O Mayorista, Minorista, VIP. O Zona Norte, Zona Sur, Restaurantes, VIP.'
        },
        {
          question: '¿Cuándo debo bloquear un precio?',
          answer: 'Bloquea cuando: Precio negociado especialmente, Cliente VIP importante, Precio crítico que no debe cambiar, Requiere aprobación para cambios. No bloquees: Precios de oferta (temporales), Precios que cambiarán frecuentemente, Todos los precios (pierde flexibilidad).'
        },
        {
          question: '¿Puedo aumentar todos los precios a la vez?',
          answer: 'Sí. Opción "Ajuste Masivo" o "Aplicar Aumento": Haz clic en Ajuste Masivo, Selecciona: Tipo (Aumento o Reducción), Porcentaje (5 para 5%), Productos (Todos o seleccionados), Grupos (Todos o seleccionados), REVISA qué se va a cambiar, Haz clic Aplicar. Advertencia: Esto afecta muchos precios, revisa bien antes.'
        },
        {
          question: '¿Cómo encuentro productos con margen bajo?',
          answer: 'Opción 1: Ordenar tabla por margen - Haz clic en columna "Margen %", se ordena de menor a mayor. Opción 2: Filtro por rango - Selecciona rango "0-20%", se muestran productos en ese rango. Opción 3: Búsqueda manual - Revisa tabla y busca rojos/amarillos.'
        }
      ]
    },
    {
      id: 'clientes',
      name: 'Gestionar Clientes',
      color: 'from-purple-500 to-pink-500',
      faqs: [
        {
          question: '¿Cómo accedo al módulo?',
          answer: 'Abre BodegaDisfruleg, Inicia sesión, En el menú principal busca "Gestionar Clientes" o "Clientes", Se abrirá la ventana.'
        },
        {
          question: '¿En qué orden debo crear las cosas?',
          answer: 'El orden correcto es: Primero: Tipos de Cliente (ej: Mayorista, Minorista), Segundo: Grupos (ej: Zona Centro, Zona Sur), Tercero: Clientes (asigna a grupo y tipo). Por qué: Un grupo necesita un tipo, y un cliente necesita un grupo.'
        },
        {
          question: '¿Cuál es la diferencia entre Tipo y Grupo?',
          answer: 'Tipo de Cliente - Define descuentos ("Mayorista" = 15% dto), Se aplica automáticamente, Ejemplo: Mayorista, Minorista. Grupo - Define categoría/organización ("Zona Centro" = ubicación), Solo es una etiqueta, Ejemplo: Restaurantes, Tiendas.'
        },
        {
          question: '¿Puedo cambiar el descuento después?',
          answer: 'Sí. Pero afectará a futuras cotizaciones/recibos, no a los pasados. Pasos: Abre el tipo, Edita el porcentaje, Guarda, Listo.'
        },
        {
          question: '¿Cuántos grupos debo crear?',
          answer: 'Depende de cómo quieras organizar: Por zona geográfica - Zona Norte, Zona Sur, Zona Centro. Por tipo de cliente - Mayoristas, Minoristas, Restaurantes. Mixto - Mayoristas Zona Centro, Minoristas Zona Sur, Restaurantes VIP. Crea los que necesites.'
        },
        {
          question: '¿Puedo mover un cliente de grupo?',
          answer: 'Sí. Pasos: Abre el cliente, Cambia el campo "Grupo", Selecciona nuevo grupo, Guarda. El cliente se moverá al nuevo grupo y adoptará el tipo de cliente del nuevo grupo.'
        },
        {
          question: '¿Cuál es la información obligatoria?',
          answer: 'OBLIGATORIO: Nombre del cliente, Grupo. OPCIONAL: Teléfono, Email, RFC, Razón social, Dirección fiscal, Notas, Etc. Puedes agregar información opcional después.'
        },
        {
          question: '¿Cómo busco un cliente?',
          answer: 'Opción 1: Campo de búsqueda - En la tabla de clientes, Escribe el nombre o parte de él, Se filtra automáticamente. Ejemplo: Escribe "Mercado" → Aparecen "Mercado Los Mangos", "Mercado Central".'
        },
        {
          question: '¿Por qué no puedo eliminar un cliente?',
          answer: 'Razón: Tiene recibos/facturas asociados. Por qué no se puede: Afectaría el historial y auditoría contable. Soluciones: Mejor opción - Desactiva en lugar de eliminar. Si REALMENTE necesitas eliminar - Borra primero sus recibos.'
        }
      ]
    },
    {
      id: 'inventario',
      name: 'Gestionar Inventario',
      color: 'from-orange-500 to-red-500',
      faqs: [
        {
          question: '¿Cómo empiezo a usar el inventario?',
          answer: 'Abre módulo Gestionar Inventario, Registra tu primera compra: Producto (elige uno), Cantidad (ingresa cuánto compraste), Proveedor (quién la vendió), Costo (cuánto pagaste), Sistema actualiza stock automáticamente, ¡Listo! Ya tienes control.'
        },
        {
          question: '¿Qué pasa cuando vendo un producto?',
          answer: 'Automático: Cuando se registra una venta en Recibos/Cotizaciones, Sistema reduce el stock automáticamente, Movimiento queda registrado, No tienes que hacer nada manual.'
        },
        {
          question: '¿Necesito crear productos primero?',
          answer: 'Sí. Los productos deben existir antes de registrar compras. Donde crear productos: Módulo de "Gestionar Productos" o "Catálogo", Allí definas nombre, unidad, stock mínimo, etc. Luego en Inventario solo registras movimientos.'
        },
        {
          question: '¿Qué datos son obligatorios en una compra?',
          answer: 'OBLIGATORIO: Producto, Cantidad, Fecha. OPCIONAL: Proveedor, Costo unitario, Notas. Puedes dejar opcionales en blanco si no tienes la info.'
        },
        {
          question: '¿Puedo registrar una compra de hace varios días?',
          answer: 'Sí. En el campo "Fecha de Compra" selecciona la fecha real. Ejemplo: Hoy es 13 de diciembre, pero la compra fue el 11, Selecciona 11 en el calendario, Registra la compra con fecha 11.'
        },
        {
          question: '¿Cómo sé cuánto tengo en stock?',
          answer: 'Tabla de productos (pantalla principal): Columna "Stock Actual" muestra cantidad disponible. Stock en color: Verde = normal, Amarillo = bajo, Rojo = crítico.'
        },
        {
          question: '¿Qué es "Stock Mínimo"?',
          answer: 'Cantidad mínima recomendada de un producto. Propósito: Evitar desabastecimiento, Alertar cuando comprar, Calcular necesidad. Ejemplo: Papa Blanca - Stock Mínimo: 30 kg, Stock Actual: 25 kg = ¡ALERTA! Está bajo.'
        },
        {
          question: '¿Cómo calculo el Stock Mínimo correcto?',
          answer: 'Fórmula: Stock Mínimo = Consumo Diario × Días para Compra. Pasos: Analiza cuánto consumes por día, ¿Cuántos días tarda llegar nueva compra?, Multiplica: Diario × Días = Mínimo. Ejemplo: Papa - Consumo diario: 10 kg, Demora compra: 3 días, Stock Mínimo: 10 × 3 = 30 kg.'
        },
        {
          question: '¿Cómo funciona el ajuste manual?',
          answer: 'Cuándo hacer un ajuste manual: Hay diferencia entre sistema y conteo físico, Producto se dañó o perdió, Cliente devolvió producto, Error anterior que necesita corregir. No es para: Registrar ventas (automático), Registrar compras (usa "Registrar Compra"). Siempre ingresa un "Motivo": "Devolución cliente", "Producto dañado en transporte", "Merma/evaporación", "Diferencia conteo físico", "Error de 15 kg anterior".'
        }
      ]
    },
    {
      id: 'deudas',
      name: 'Gestionar Deudas',
      color: 'from-red-500 to-orange-500',
      faqs: [
        {
          question: '¿Cuándo registrar una deuda?',
          answer: 'Inmediatamente después de la venta: Cliente compra a crédito, Se genera factura, Registras deuda en el sistema, Especificas cuándo debe pagar.'
        },
        {
          question: '¿Cuál es la diferencia entre deuda y pago?',
          answer: 'Deuda = Lo que el cliente debe (pendiente). Pago = Lo que el cliente pagó (reducción). Ejemplo: Deuda inicial: $10,000, Pago del cliente: $3,000, Deuda restante: $7,000.'
        },
        {
          question: '¿Qué es un vencimiento?',
          answer: 'La fecha en que debe pagar. Ejemplo: Venta: 13 diciembre, Vencimiento: 30 días después = 12 enero, Si no paga el 12 enero → Deuda vencida.'
        },
        {
          question: '¿Debo registrar todas las deudas?',
          answer: 'Sí. Incluso si el cliente dice que pagará después. Es importante para: Llevar control, Conocer cartera total, Seguimiento de pagos.'
        },
        {
          question: '¿Puedo registrar pagos parciales?',
          answer: 'Sí. Es muy común. Proceso: Registra pago, Monto: lo que el cliente pagó (parcial), Deuda reduce automáticamente, Sigue pendiente si no es total.'
        },
        {
          question: '¿Cuál es el vencimiento ideal?',
          answer: 'Depende del cliente: Mayorista = 30-45 días, Minorista = 7-15 días, Cliente VIP = 60 días, Efectivo = 0 días (contado).'
        },
        {
          question: '¿Qué pasa en la fecha de vencimiento?',
          answer: 'Automático: Si no pagó → Deuda se marca como VENCIDA, Sistema puede enviar recordatorio, Deuda seguirá vencida hasta que pague.'
        },
        {
          question: '¿Qué significa "vencida"?',
          answer: 'Que pasó la fecha de pago sin pagar. Ejemplo: Vencimiento: 12 enero, Hoy es: 20 enero, Deuda está VENCIDA (8 días vencida).'
        },
        {
          question: '¿Cuál es una morosidad saludable?',
          answer: 'Porcentaje de lo adeudado que está vencido: <10% = Excelente, 10-20% = Buena, 20-30% = Aceptable, 30-50% = Preocupante, >50% = Crisis.'
        }
      ]
    },
    {
      id: 'usuarios',
      name: 'Administrar Usuarios',
      color: 'from-indigo-500 to-blue-500',
      faqs: [
        {
          question: '¿Cómo creo un nuevo usuario?',
          answer: 'En el módulo Administrar Usuarios, haz clic en "+ Crear Usuario", Completa los campos: Nombre Completo (Nombre y apellido), Email (Correo corporativo único), Usuario (Nombre para login sin espacios), Contraseña (Temporal, mínimo 8 caracteres), Elige un Rol (Vendedor, Bodeguero, Gerente, etc.), Haz clic en "Guardar". El usuario recibirá un email para confirmar su cuenta.'
        },
        {
          question: '¿El usuario se tiene que cambiar la contraseña?',
          answer: 'Sí, es obligatorio. Cuando un usuario inicia sesión por primera vez con la contraseña temporal que estableciste, el sistema le pide que cree su propia contraseña segura. Requisitos de contraseña: Mínimo 8 caracteres, Una mayúscula, Una minúscula, Un número.'
        },
        {
          question: '¿Puedo crear un usuario sin email?',
          answer: 'No, el email es obligatorio. El email es importante porque: Es el identificador único del usuario, Se usa para notificaciones, Se usa para resetear contraseñas. Si el usuario no tiene email corporativo, contacta al administrador principal.'
        },
        {
          question: '¿Cómo reseteo una contraseña?',
          answer: 'Si un usuario olvidó su contraseña: Ve a Administrar Usuarios, Busca al usuario, Haz clic en "Más opciones" (⋮), Selecciona "Resetear Contraseña", Se enviará un email con un link para cambiarla. El usuario tendrá 24 horas para establecer su nueva contraseña.'
        },
        {
          question: '¿Qué diferencia hay entre los roles?',
          answer: 'Vendedor = Ventas, clientes, precios. Sin acceso a finanzas. Bodeguero = Inventario, compras, recibos. Sin reportes avanzados. Gerente = Reportes, análisis, todas las ventas del equipo. Administrador = Acceso total al sistema incluyendo configuraciones. Soporte = Solo lectura. Puede ver información pero no modificar.'
        },
        {
          question: '¿Cómo cambio el rol de un usuario?',
          answer: 'Ve a Administrar Usuarios, Encuentra el usuario a editar, Haz clic en "Editar" (lápiz), En la sección "Rol", selecciona el nuevo rol, Haz clic en "Guardar". Los permisos se actualizarán automáticamente.'
        },
        {
          question: '¿Puedo dar permisos personalizados?',
          answer: 'Sí, tienes dos opciones: Opción A: Roles Predefinidos - Rápido y recomendado, Asigna un rol automáticamente con permisos típicos. Opción B: Permisos Personalizados - Al crear/editar un usuario, activa "Permisos Personalizados", Verás cada módulo con checkboxes de Ver, Crear, Editar, Eliminar, Marca solo lo que el usuario necesita. Recomendación: Usa permisos personalizados solo si es necesario.'
        },
        {
          question: '¿Cuál es la diferencia entre desactivar y eliminar?',
          answer: 'Desactivar = El usuario NO puede acceder. Su historial se guarda. Puede reactivarse. Eliminar = El usuario se borra completamente del sistema. No hay vuelta atrás. Recomendación: Siempre desactiva en lugar de eliminar. El historial es importante para auditoría.'
        },
        {
          question: '¿Cómo reactivo un usuario desactivado?',
          answer: 'En la lista de usuarios, ve a la pestaña "Inactivos", Busca al usuario, Haz clic en "Reactivar", Confirma. El usuario podrá acceder de nuevo.'
        }
      ]
    },
    {
      id: 'compras',
      name: 'Gestionar Compras',
      color: 'from-sky-500 to-blue-500',
      faqs: [
        {
          question: '¿Cuándo usar este módulo?',
          answer: 'Siempre que: Compres productos a un proveedor, Necesites registrar entrada de inventario, Quieras historizar tus compras.'
        },
        {
          question: '¿Debo crear la orden ANTES o DESPUÉS de comprar?',
          answer: 'Lo ideal es ANTES. Ventajas: Documentas intención, Tienes referencia clara, Seguimiento más fácil, Control de inventario. Pero también puedes: Crear después (si olvidaste), Importar desde factura.'
        },
        {
          question: '¿Quién puede crear órdenes?',
          answer: 'Normalmente: Administrador o comprador. Si no puedes crear, contacta al administrador para obtener permisos.'
        },
        {
          question: '¿Puedo editar una orden?',
          answer: 'Depende del estado: Pendiente = Sí, Puedo editar. Recibida = Parcialmente, puedo editar algunas cosas. Completada = No, No puedo editar.'
        },
        {
          question: '¿Cuándo debo registrar recepción?',
          answer: 'Inmediatamente después de recibir los productos. Importante para: Actualizar inventario correctamente, Registrar fecha real de llegada, Validar cantidad.'
        },
        {
          question: '¿Qué pasa si recibí menos de lo esperado?',
          answer: 'Registro correctamente: Cantidad Esperada: 100 kg, Cantidad Recibida: 90 kg, Diferencia: -10 kg (falta). Sistema registra discrepancia y alerta. Acción: Contacta proveedor, Reclama los 10 kg faltantes, Documenta incidente.'
        },
        {
          question: '¿Qué formatos acepta la importación?',
          answer: 'Recomendados: Excel (.xlsx) ← Mejor opción, CSV (.csv), PDF con tabla.'
        },
        {
          question: '¿Puedo importar sin crear orden primero?',
          answer: 'Sí. Importación crea todo automáticamente: Órdenes, Líneas de productos, Actualiza inventario.'
        },
        {
          question: '¿Cómo se calcula el costo total?',
          answer: 'Costo Total = Cantidad × Precio Unitario. Ejemplo: 100 kg × $10/kg = $1,000. Sistema calcula automáticamente.'
        }
      ]
    },
    {
      id: 'reportes',
      name: 'Análisis y Reportes',
      color: 'from-violet-500 to-purple-500',
      faqs: [
        {
          question: '¿Por qué necesito análisis?',
          answer: 'Para: Saber dónde está tu dinero, Ver qué funciona y qué no, Tomar decisiones con datos, Crecer enfocado, no al azar.'
        },
        {
          question: '¿Qué datos usa el módulo?',
          answer: 'Fuentes: Todas las facturas/recibos emitidos, Detalles de cada venta, Información de clientes, Costos de productos. Período: Personalizables por fechas.'
        },
        {
          question: '¿Qué significan las métricas?',
          answer: 'Ganancias Totales = Suma de ganancias en período. Transacciones = Número de recibos emitidos. Ticket Promedio = Gasto promedio por cliente. Margen Promedio = Margen medio de todos productos.'
        },
        {
          question: '¿Cómo calcula las ganancias?',
          answer: 'Ganancia = Ingresos - Costos. Ingresos = Precio de venta. Costos = Costo de adquisición del producto. Ejemplo: Papa Blanca vendida a $25, Costo de papa: $10, Ganancia: $15.'
        },
        {
          question: '¿Por qué mi ganancia es baja?',
          answer: 'Razones posibles: Margen bajo (Productos con poco margen), Volumen bajo (Pocos productos vendidos), Descuentos (Clientes con descuentos especiales), Costos altos (Proveedores caros). Soluciones: Aumenta precios (si es posible), Negocia costos con proveedores, Vende más (más volumen), Descontinúa productos no rentables.'
        },
        {
          question: '¿Cómo se ordena la lista TOP?',
          answer: 'Por: Ganancia neta (mayor a menor). Papa Blanca genera $8,000 = aparece primero. Chile Serrano genera $5,500 = aparece segundo.'
        },
        {
          question: '¿Qué es "Margen %"?',
          answer: 'Fórmula: Margen = (Precio - Costo) / Precio * 100%. Interpretación: 60% = Excelente margen, 30% = Margen aceptable, 10% = Margen bajo, revisar.'
        },
        {
          question: '¿Puedo ver un solo día?',
          answer: 'Sí. Desde: 13 diciembre, Hasta: 13 diciembre, Filtra: Ver solo ese día.'
        },
        {
          question: '¿Cómo interpreto los datos?',
          answer: 'Si Dashboard dice "Bajo": ¿Es período corto? (semana/día) → Busca período más largo. ¿Hay poco volumen? → Ve TOP Clientes, ¿Faltan grandes clientes? ¿Margen bajo? → Ve TOP Productos, ¿Hay productos no rentables? ¿Descuentos excesivos? → Revisa política de descuentos, ¿Son justificados?'
        }
      ]
    },
    {
      id: 'ubicuoai',
      name: 'UbicuoAI',
      color: 'from-green-500 to-emerald-500',
      faqs: [
        {
          question: '¿Cómo accedo a UbicuoAI?',
          answer: 'Abre BodegaDisfruleg, Inicia sesión con tu usuario, En el menú principal, selecciona "UbicuoAI" o "Procesador de Pedidos", Se abrirá la ventana del módulo. Nota: Debes estar autenticado. Si no aparece la opción, verifica tus permisos.'
        },
        {
          question: '¿Necesito hacer algo especial para empezar?',
          answer: 'No. El módulo funciona automáticamente: Carga los productos de la base de datos al abrir, Carga el diccionario de aprendizaje, Listo para usar. Solo tienes que pegar el texto con los productos.'
        },
        {
          question: '¿Qué formato debo usar para los productos?',
          answer: 'El más simple y recomendado: Producto Cantidad Unidad. Chile serrano 6 kg, Papa Cambray 12 kg, Limón 3 kg. Pero también funciona: 6 kg Chile serrano, 12 kg Papa Cambray, 3 kg Limón. O Chile serrano - 6 kg, Papa Cambray (12 kg), 3 kg of Limón. El sistema es flexible y entiende variaciones.'
        },
        {
          question: '¿Cuántos productos puedo procesar a la vez?',
          answer: 'Sin límite técnico. Puedes procesar: 5 productos, 50 productos, 100+ productos. El tiempo depende de la cantidad, pero generalmente es muy rápido (segundos).'
        },
        {
          question: '¿Puedo copiar y pegar directamente de emails?',
          answer: 'Sí, absolutamente. El sistema acepta: Listados de emails, Mensajes de WhatsApp, Documentos de Word, PDFs (copia el texto), Hojas de cálculo. Solo copia y pega sin editar.'
        },
        {
          question: '¿Qué pasa si hay errores ortográficos?',
          answer: 'El sistema maneja errores: "aguacte" → "Aguacate" (95% confianza, aprendido), "agucate" → "Aguacate" (85% confianza, fuzzy), "cebolla bca" → "Cebolla Blanca" (90% confianza), "papa blanca" → "Papa Blanca" (100% confianza). Si es error conocido (aprendido), lo corrige automáticamente.'
        },
        {
          question: '¿Qué unidades reconoce?',
          answer: 'Peso: kg, kilogramo, k, g, gr, gramo. Ejemplos: "6 kg", "300 gr", "2.5 k". Volumen: L, litro, ml, mililitro. Ejemplos: "1 L", "500 ml". Cantidad: pza, pieza, unidad, docena, caja, manojo, bolsa, paquete, lata, atado, buche. Ejemplos: "2 pza", "1 docena", "3 cajas".'
        },
        {
          question: '¿Cómo decide si un producto existe?',
          answer: 'El sistema usa 3 niveles de búsqueda: 1. Exacto (100%) - Buscas: "Aguacate", Base de datos: "Aguacate", Resultado: 100% (coincidencia exacta). 2. Aprendizaje (95%) - Buscas: "aguacte" (error conocido), Sistema sabe: "aguacte" = "Aguacate", Resultado: 95% (aprendido). 3. Fuzzy Logic (75%+) - Buscas: "agucate" (error desconocido), Similitud calculada: 85%, Resultado: 85% (búsqueda aproximada). Si nada coincide ≥75%, aparece como rojo.'
        },
        {
          question: '¿Cómo corrijo un producto?',
          answer: 'Método 1: Haz clic en la fila - Haz clic en el producto a corregir, Se abre un dropdown/selector, Selecciona el producto correcto de la lista, Se guarda automáticamente. Método 2: Botón Editar - Haz clic en el botón "Editar" (lápiz) o "...", Se abre un diálogo, Busca y selecciona el correcto, Haz clic "Guardar". Método 3: Búsqueda Rápida - Algunos sistemas permiten escribir, Empieza a escribir el nombre, Selecciona de las opciones que aparecen.'
        }
      ]
    },
    {
      id: 'dispositivos',
      name: 'Administración de Dispositivos',
      color: 'from-pink-500 to-rose-500',
      faqs: [
        {
          question: '¿Quién puede acceder a este módulo?',
          answer: 'Solo administradores. Si eres administrador, verás la opción en menú. Si no eres administrador, contacta a tu supervisor.'
        },
        {
          question: '¿Qué es un dispositivo en este contexto?',
          answer: 'Una computadora, tablet o teléfono que accede a BodegaDisfruleg. Identificado por: IP (dirección de internet), Navegador (Chrome, Firefox, Safari), Sistema operativo (Windows, Mac, Linux).'
        },
        {
          question: '¿Por qué un dispositivo está "Pendiente"?',
          answer: 'Porque es la primera vez que intenta acceder. Sistema de seguridad: Dispositivo nuevo intenta conectarse, Sistema lo marca como "Pendiente", Administrador debe aprobar, Una vez aprobado, puede acceder siempre.'
        },
        {
          question: '¿Puedo autorizar múltiples dispositivos?',
          answer: 'Sí, sin límite. Un empleado puede tener: Computadora de escritorio, Laptop, Tablet, Teléfono. Todos pueden autorizarse.'
        },
        {
          question: '¿Qué información veo antes de autorizar?',
          answer: 'Importante para verificar: IP (¿Es de la oficina? ¿Domicilio del empleado?), Navegador (¿Es estándar? Chrome, Firefox, Edge), SO (¿Windows? ¿Mac? ¿Está desactualizado?), Fecha (¿Cuándo intentó acceder?). Si algo parece extraño → NO autorices.'
        },
        {
          question: '¿Qué pasa cuando desautorizo un dispositivo?',
          answer: 'Inmediatamente: Dispositivo NO puede acceder más, Si estaba en línea, se desconecta, Necesitaría re-autorización (poco probable).'
        },
        {
          question: '¿Cuándo debo desautorizar un dispositivo?',
          answer: 'Estas situaciones: Empleado se va = Desautorizar inmediatamente. Cambió de computadora = Desautorizar la vieja. Dispositivo robado = Desautorizar inmediatamente. Acceso no autorizado = Investigar + desautorizar. Dispositivo fuera de servicio = Desautorizar y eliminar.'
        },
        {
          question: '¿Cómo busco un dispositivo específico?',
          answer: 'Tres formas: Por nombre - "Dell XPS de Juan". Por IP - "192.168.1.100". Por usuario - "juan@empresa.com". Escribe cualquier dato en búsqueda y filtra.'
        },
        {
          question: '¿Es seguro autorizar dispositivos?',
          answer: 'Sí, si verificas bien: Verificar que sea dispositivo legítimo, Verificar IP válida, Verificar usuario conocido, Desautorizar cuando no sea necesario. No autorices sin verificar, No dejes dispositivos robados autorizados.'
        }
      ]
    }
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const currentModule = modules[activeModule];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Centro de Preguntas Frecuentes
          </h1>
          <p className="text-lg text-slate-400">
            Encuentra respuestas rápidas para cada módulo de CHUMI
          </p>
        </div>

        {/* Chips Deslizables */}
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-slate-900 to-transparent pl-4 pr-8 py-2 rounded-r-lg hover:from-slate-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          >
            {modules.map((module, idx) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(idx)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeModule === idx
                    ? `bg-gradient-to-r ${module.color} shadow-lg shadow-blue-500/50 scale-105`
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                }`}
              >
                {module.name}
              </button>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-slate-900 to-transparent pr-4 pl-8 py-2 rounded-l-lg hover:from-slate-800 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Contenido del Módulo Activo */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
          {/* Header del módulo */}
          <div className={`bg-gradient-to-r ${currentModule.color} p-8 relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-2">{currentModule.name}</h2>
              <p className="text-white/90 text-lg">
                {currentModule.faqs.length} preguntas frecuentes
              </p>
            </div>
          </div>

          {/* Lista de FAQs - Preguntas y Respuestas Siempre Visibles */}
          <div className="p-8">
            <div className="space-y-6">
              {currentModule.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600/30 rounded-lg p-6 hover:border-slate-500/60 transition-all duration-300"
                >
                  {/* Pregunta */}
                  <div className="flex items-start gap-3 mb-4">
                    <MessageCircle className="w-5 h-5 flex-shrink-0 text-blue-400 mt-0.5" />
                    <h3 className="text-lg font-semibold text-slate-100">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Respuesta - SIEMPRE VISIBLE */}
                  <div className="ml-8">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota al pie */}
            <div className="mt-12 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-200">
                <strong>Tip:</strong> Desplázate hacia abajo para ver más preguntas. Usa los chips de arriba para cambiar de módulo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">{modules.length}</div>
            <p className="text-slate-400 text-sm mt-1">Módulos</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {modules.reduce((sum, m) => sum + m.faqs.length, 0)}
            </div>
            <p className="text-slate-400 text-sm mt-1">Preguntas</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">24/7</div>
            <p className="text-slate-400 text-sm mt-1">Disponible</p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-400">100%</div>
            <p className="text-slate-400 text-sm mt-1">Actualizado</p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FAQModules;
