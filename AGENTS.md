## 🚀 HANDOFF - Lee esto y ya puedes trabajar

### Qué es este proyecto
NUVA Pets - Evolution Dashboard - Dashboard interactivo de evolución de mascotas NUVA simulado en una interfaz móvil premium, construido con HTML, CSS y JS vainilla.

### Dónde quedamos
- Archivo: [AGENTS.md](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/AGENTS.md)
- Método/función: N/A
- Línea aproximada: 1
- Qué hace: El proyecto base está completamente funcional. Se ha escaneado la estructura inicial del proyecto y creado este archivo de control de agentes.
- Qué falta: Esperar directrices del usuario para añadir nuevas características o realizar modificaciones.

### Qué ya funciona (no repetir)
- Interfaz móvil adaptativa premium con glassmorphism y efectos de luz ambiental.
- Pantalla de carga (Splash screen) táctil.
- Selección, desbloqueo interactivo y navegación por pestañas de 4 mascotas (Ferro, Nopi, Pyro, Mono).
- Lógica de evolución (niveles 1 a 5) que progresa completando viajes mediante clics.
- Barra de progreso interactiva para el nivel actual.
- Modales informativos premium de Historia (Lore) y Oráculo para cada personaje.
- Integración de canvas-confetti con efectos personalizados para cada nivel de evolución superado.
- Recompensa de "Viaje gratis" al alcanzar el nivel máximo (nivel 5).
- Contador global de viajes y desbloqueo del botón secreto "+ Personajes" a los 56 viajes acumulados.

### Código a medias (si hay)
Ninguno. El código base está en estado óptimo y funcional.

### Reglas críticas
- NO tocar: Los archivos PNG de los assets de las mascotas en el directorio raíz.
- SÍ puedes modificar: `index.html`, `style.css` y `script.js` para añadir nuevas características, refactorizar o resolver bugs solicitados.

### Siguiente paso concreto
Esperar las instrucciones específicas del usuario para iniciar nuevas tareas.

### Meta info
- Última sesión: Antigravity - 2026-05-20

<!-- END HANDOFF -->

---

# NUVA PETS - EVOLUTION DASHBOARD

## Project Overview
- Purpose: Simulador interactivo en formato de aplicación móvil que permite a los usuarios seleccionar, desbloquear y evolucionar sus mascotas virtuales a través de viajes, visualizando historias y oráculos personalizados en un entorno de alta fidelidad estética.
- Target: Usuarios del ecosistema NUVA / Demostración interactiva premium para web y móvil.
- Timeline: Fase inicial completada. Listo para iteración y escalado de features.
- Status: Near completion (Dashboard base completado y 100% interactivo).

## Tech Stack
- Frontend: HTML5 (Semántico), CSS3 (Variables de diseño, animaciones avanzadas, responsive), JavaScript (Vainilla ES6+, manipulaciones del DOM).
- Backend: Ninguno (completamente local y del lado del cliente).
- Database: Estado temporal en memoria volátil de JS.
- APIs: Canvas Confetti CDN para efectos visuales premium.
- Hosting: Local.

## Project Structure
- [index.html](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/index.html) - Estructura principal y maquetación de pantallas (Splash, Overlays, Modal de confirmación, App UI).
- [style.css](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/style.css) - Reglas CSS personalizadas, variables globales, diseño responsivo, efectos de brillo y animaciones de evolución.
- [script.js](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/script.js) - Control de estado del juego (registro de niveles, clics, viajes), renderizado de UI dinámica y control de confetti.
- Archivos de imagen PNG (Assets):
  - `a1-removebg-preview.png` a `a5-removebg-preview.png` (Evoluciones de FERRO)
  - `b1-removebg-preview.png` a `b5-removebg-preview.png` (Evoluciones de NOPI)
  - `c1-removebg-preview.png` a `c5-removebg-preview.png` (Evoluciones de PYRO)
  - `d1-removebg-preview.png` a `d5-removebg-preview.png` (Evoluciones de MONO)
  - `nuva_user_app_mockup.png` (Imagen de la pantalla de bienvenida/splash screen)
- [AI_INSTRUCTIONS.md](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/AI_INSTRUCTIONS.md) - Sistema universal de contexto y comandos para control de sesiones de IA.

## Critical Files (NO MODIFICAR sin entender)
- [script.js](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/script.js) - Define el registro global de estados (`registry`), la lógica de evolución y los umbrales de clics.

## Safe to Modify (OK para cualquier IDE)
- [index.html](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/index.html) - Para expandir la UI, menús u otros elementos interactivos.
- [style.css](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/style.css) - Para mejorar la maquetación estética o añadir temas.

## IDE Routing (qué IDE usar para qué)
- Lógica compleja / arquitectura → Claude Code / Windsurf
- Bugfix rápido / UI            → Cursor
- Feature nueva / scaffolding   → Antigravity
- Tutorial / aprender           → VS Code

## Current Status

### Features Completed
- Pantalla Splash interactiva de inicio de app.
- Navegación e intercambio fluido entre los grupos de mascotas (A, B, C, D) con animaciones.
- Modal de confirmación para desbloquear mascotas (doble clic en su pestaña de navegación).
- Sistema de progresión de niveles (Nivel 1 a Nivel 5) basado en completar un número incremental de clics ("Viajes").
- Barra de progreso que se ajusta dinámicamente.
- Overlays temáticos elegantes para visualizar el Lore (Historia) y el Oráculo de cada personaje una vez desbloqueado y evolucionado (Nivel >= 2).
- Celebración con confetti especial en cada nivel:
  - Nivel 2: Ráfaga dorada y púrpura persistente.
  - Nivel 3: Lluvia supersónica rápida y ligera de estrellas.
  - Nivel 4: Explosiones laterales en abanico (izquierda y derecha).
  - Nivel 5: Explosión estelar aleatoria masiva continua y mensaje de premio.
- Botón de reinicio completo para mascotas al llegar al nivel 5.
- Hito secreto a los 56 viajes: Desbloquea un botón especial "+ Personajes" que abre un overlay con el listado detallado de personajes y fusiones planeados para la Temporada 1.

### Features In Progress
Ninguna en este momento.

### Features Not Started
Esperando requerimientos de ampliación de funcionalidades por parte del usuario (por ejemplo, guardar en localStorage, añadir sonido, etc.).

## Known Issues

### Active Bugs
Ninguno detectado en el escaneo base del código.

### Architectural Decisions
- Se utiliza JavaScript Vainilla sin dependencias pesadas para garantizar un rendimiento óptimo de carga y animaciones en cualquier dispositivo.
- El uso de Confetti desde CDN simplifica el mantenimiento del bundle local de scripts.
- Almacenamiento temporal en variables locales: la recarga de la página restablece el progreso (a menos que se implemente persistencia con localStorage).

## Session History

### Session 1 - Antigravity - 2026-05-20
- Completed: Escaneo de proyecto inicial e inicialización exitosa de `AGENTS.md` de acuerdo con las especificaciones de `AI_INSTRUCTIONS.md`.
- In Progress: Ninguno.
- Modified: [AGENTS.md](file:///d:/Antigravity/NUVA/generacion%20pets%20imagenes/pets%20dashboard/AGENTS.md) (creado).
- Bugs: Ninguno.
- Important: El proyecto está listo y estructurado para recibir nuevas features.
- Next Steps: Esperar indicaciones del usuario.
