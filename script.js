let totalTrips = 0;

// INICIAR APLICACIÓN
function startApp() {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('hidden');
}

const petData = {
  'a': { 
    name: 'FERRO', 
    identity: 'Representa la visión a futuro y el progreso. El reflejo universal de la ambición sana y la astucia financiera.', 
    lore: 'Ferro parece un pequeño y elegante hombre de negocios estilo "chibi", vistiendo siempre un traje sastre plateado impecable que le queda ligeramente grande, dándole un aire tierno de oficinista. No obstante, este inofensivo mercader es el financiador más grande del Distrito Bajo y quien sostiene en secreto al Sindicato del Silencio. Bajo su tierno aspecto, lleva los nudillos vendados y un contrato ardiendo eternamente en su bolsillo izquierdo. Conoce el valor exacto de los secretos. A veces, intercambia oro por juguetes rotos de madera, los cuales guarda como tesoros para una antigua guardiana que prometió regresar para proteger a todos los habitantes de NUVA.', 
    oracle: '"Se dice que cuando seleccionas a Ferro, tus ojos se abrirán a una riqueza oculta. Es el augurio supremo de que detectarás una oportunidad de oro donde otros solo ven tierra, atrayendo fortuna imparable a tu vida."',
    f5Title: 'Visión Maestra'
  },
  'b': { 
    name: 'NOPI', 
    identity: 'Representa la resiliencia pura. Es el reflejo de la capacidad humana para salir adelante sin importar los obstáculos del día a día.', 
    lore: 'Nopi nació en medio del áspero Desierto de Fuego, demostrando que la vida y la ternura siempre encuentran un camino. Es un pequeño cactus adorable and regordete que lleva una hermosa flor rosada en su cabeza, la cual nunca se marchita. Aunque parece inofensivo, su semilla sobrevivió al Gran Borrado envuelta en un cristal protector. Quienes lo crían notan que, al acariciarlo, sus espinitas son suaves como algodón y emiten un dulce zumbido rítmico, similar a un ronroneo reconfortante. Se dice que ese hermoso zumbido es una canción mágica que viaja bajo la arena, invitando a las flores ocultas del desierto a un Gran Florecimiento que pronto llenará todo de color.', 
    oracle: '"Se dice que cuando seleccionas a Nopi, es porque enfrentas un momento de gran exigencia. Elegirlo como tu compañero augura que tienes la fuerza oculta para sobrevivir al vacío y florecer frente a cualquier adversidad."' 
  },
  'c': { 
    name: 'PYRO', 
    identity: 'Representa la vitalidad imparable, la hiperactividad positiva y la pasión ardiente por vivir al máximo.', 
    lore: 'Pyro es un ser hipnótico y etéreo; no tiene piel ni huesos, solo llamas de colores cian y naranja que bailan con una elegancia y fluidez fascinante. Esta pura expresión de energía estelar es un regalo del cosmos que cayó del cielo en los Páramos. Pyro es un ente que comparte su calor para iluminar los caminos, y quienes se acercan a admirar la belleza de su fuego sienten una energía renovadora y cálida. En su núcleo arde un cristal de hielo que nunca se derrite, el cual Pyro usa para equilibrar su poder y ser el faro que guía a todos los habitantes durante las noches más oscuras.', 
    oracle: '"Se dice que cuando seleccionas a Pyro, el fuego despierta in ti. Augura un ciclo inmediato de intensidad arrasadora, hiper-productividad inagotable o una nueva pasión que consumirá tu rutina."',
    f5Title: 'Energía Absoluta'
  },
  'd': { 
    name: 'MONO', 
    identity: 'Representa la inteligencia analítica y la observación minuciosa. Ideal para mentes estrategas que actúan en silencio.', 
    lore: 'Mono es una bola de pelaje violeta increíblemente suave y abrazable, dominada por un gigantesco ojo central que le da un aspecto torpe, curioso y muy tierno. En las oscuras fosas abisales, su especie evolucionó para observar cada detalle del mundo. Los criadores juran que el gigantesco ojo de Mono siempre está buscando nuevas maravillas que compartir. Por las noches, cuando nadie lo ve, su tierno ojo se dilata y escupe pequeñas perlas de cristal negro, las cuales contienen fragmentos de historias antiguas y hermosas que recolecta para que Glop las convierta en cuentos mágicos.', 
    oracle: '"Se dice que cuando seleccionas a Mono, el velo de las mentiras caerá. Su presencia augura que pronto descubrirás una gran verdad oculta a simple vista, dándote ventaja absoluta sobre tus rivales."',
    f5Title: 'Mente Estratega'
  }
};

let registry = {
  'a': { level: 1, unlocked: false, clicks: 0 },
  'b': { level: 1, unlocked: false, clicks: 0 },
  'c': { level: 1, unlocked: false, clicks: 0 },
  'd': { level: 1, unlocked: false, clicks: 0 }
};

let activeGroup = null;
let viewingGroup = 'a';
let clickCount = 0;

function handleNavClick(group) {
  if (viewingGroup === group) {
    clickCount++;
    if (clickCount === 2) {
      document.getElementById('confirm-modal').style.display = 'flex';
      clickCount = 0;
    }
  } else {
    viewingGroup = group;
    clickCount = 1;
    render();
  }
}

function confirmSelection() {
  activeGroup = viewingGroup;
  registry[activeGroup].unlocked = true;
  document.getElementById('confirm-modal').style.display = 'none';
  
  // Mostrar mensaje de desbloqueo
  const uMsg = document.getElementById('unlock-msg');
  uMsg.style.display = 'block';
  uMsg.style.opacity = '1';
  
  setTimeout(() => {
    uMsg.style.opacity = '0'; // Inicia desvanecimiento lento
    setTimeout(() => { uMsg.style.display = 'none'; }, 1500); 
  }, 1000);
  
  render();
}

function cancelSelection() { 
  document.getElementById('confirm-modal').style.display = 'none'; 
  clickCount = 0; 
}

function openOverlay(type) {
  const data = petData[viewingGroup];
  const overlay = document.getElementById('full-overlay');
  
  // Limpiar clases previas
  overlay.classList.remove('overlay-lore', 'overlay-oracle');
  
  // Aplicar fondo según tipo
  if (type === 'lore') {
    overlay.classList.add('overlay-lore');
    document.getElementById('overlay-title').innerText = 'HISTORIA';
    document.getElementById('overlay-text').innerText = data.lore;
  } else {
    overlay.classList.add('overlay-oracle');
    document.getElementById('overlay-title').innerText = 'EL ORÁCULO';
    document.getElementById('overlay-text').innerText = data.oracle;
  }
  
  overlay.style.display = 'flex';
}

function closeOverlay() { 
  document.getElementById('full-overlay').style.display = 'none'; 
}

function completeTrip() {
  if (!activeGroup) return;
  const g = registry[activeGroup];
  if (g.unlocked && g.level < 5) {
    g.clicks++;
    totalTrips++;
    
    let clicksNeeded = g.level + 1;

    if (g.clicks >= clicksNeeded) {
      g.level++;
      g.clicks = 0;
      
      // CELEBRACIONES
      if (g.level === 2) {
          confetti({
              particleCount: 200,
              spread: 160,
              origin: { y: 0.5 },
              colors: ['#9d50bb', '#FFD700', '#ffffff'],
              startVelocity: 45,
              gravity: 1,
              scalar: 1.2
          });
          var duration = 2 * 1000;
          var animationEnd = Date.now() + duration;
          var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();
              if (timeLeft <= 0) return clearInterval(interval);
              confetti({ 
                  particleCount: 40, spread: 100, 
                  origin: { y: 0, x: Math.random() }, 
                  colors: ['#FFD700', '#ffffff'], 
                  shapes: ['star'], scalar: 1.2, gravity: 0.4 
              });
          }, 150);
      } else if (g.level === 3) {
          // AHORA FASE 3: Lluvia Supersónica y Ligera
          var duration = 3 * 1000;
          var animationEnd = Date.now() + duration;
          var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();
              if (timeLeft <= 0) return clearInterval(interval);
              confetti({ 
                  particleCount: 25, // MENOS PARTÍCULAS
                  spread: 100, 
                  origin: { y: -0.1, x: Math.random() }, 
                  colors: ['#9d50bb', '#FFD700', '#ffffff'],
                  gravity: 2.0, // ¡MUCHO MÁS RÁPIDO!
                  startVelocity: 30, // IMPULSO EXTRA
                  scalar: 0.7,
                  ticks: 300
              });
          }, 100);
      } else if (g.level === 4) {
          confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#9d50bb', '#ffffff'] });
          confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#9d50bb', '#ffffff'] });
      } else if (g.level === 5) {
          var duration = 4 * 1000;
          var end = Date.now() + duration;
          var frame = setInterval(function() {
              if (Date.now() > end) return clearInterval(frame);
              confetti({ startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, particleCount: 60, origin: { x: Math.random(), y: Math.random() - 0.2 }, colors: ['#9d50bb', '#FFD700', '#ffffff'] });
          }, 200);
          
          const msg = document.getElementById('free-trip-msg');
          msg.style.display = 'block';
          setTimeout(() => msg.style.display = 'none', 3000);
      }

      const img = document.getElementById('pet-img');
      img.classList.remove('epic-enter');
      void img.offsetWidth; // Trigger reflow
      img.classList.add('epic-enter');
    }
    
    // HITO 56 VIAJES: ANUNCIO DIFERIDO
    if (totalTrips === 56) {
      setTimeout(() => {
        const mMsg = document.getElementById('milestone-msg');
        mMsg.style.display = 'block';
        mMsg.style.opacity = '1';
        
        setTimeout(() => {
          mMsg.style.opacity = '0';
          setTimeout(() => { mMsg.style.display = 'none'; }, 1000);
        }, 3000);
      }, 8000);
    }

    render();
  }
}

function resetMascot() {
  if (!activeGroup) return;
  registry[activeGroup].level = 1;
  registry[activeGroup].unlocked = false;
  registry[activeGroup].clicks = 0;
  render();
}

function openUpcoming() { document.getElementById('upcoming-overlay').style.display = 'flex'; }
function closeUpcoming() { document.getElementById('upcoming-overlay').style.display = 'none'; }

function render() {
  const g = registry[viewingGroup];
  const data = petData[viewingGroup];

  // Desbloqueo botón + PERSONAJES
  const upBtn = document.getElementById('btn-upcoming');
  if (totalTrips >= 56) {
    upBtn.style.display = 'block';
  } else {
    upBtn.style.display = 'none';
  }

  document.getElementById('pet-name').innerText = data.name;
  document.getElementById('pet-img').src = `${viewingGroup}${g.level}-removebg-preview.png`;
  document.getElementById('identity-text').innerText = data.identity;
  document.getElementById('trip-counter').innerText = `VIAJES: ${totalTrips}`;

  const btnsRow = document.getElementById('btns-row');
  const resetBtn = document.getElementById('btn-reset');

  if (g.unlocked && viewingGroup === activeGroup && g.level >= 2) {
    btnsRow.classList.add('visible');
  } else {
    btnsRow.classList.remove('visible');
  }

  if (g.unlocked && viewingGroup === activeGroup && g.level === 5) {
    resetBtn.style.display = 'flex';
  } else {
    resetBtn.style.display = 'none';
  }

  document.querySelectorAll('.nav-item').forEach(el => {
    const groupId = el.id.split('-')[1];
    el.classList.remove('active', 'attention');
    
    if (groupId === viewingGroup) {
      el.classList.add('active');
    } else if (!registry[groupId].unlocked) {
      el.classList.add('attention');
    }
  });

  const tripBtn = document.getElementById('btn-trip');
  if (viewingGroup !== activeGroup) {
    tripBtn.disabled = true;
    tripBtn.innerText = `TOCA NUEVAMENTE (${viewingGroup.toUpperCase()})`;
  } else {
    tripBtn.disabled = g.level === 5 || !g.unlocked;
    
    if (g.level === 5) {
      tripBtn.innerText = "MAX EVOLUCIÓN";
    } else {
      let clicksNeeded = g.level + 1;
      let remaining = clicksNeeded - g.clicks;
      tripBtn.innerText = `SIGUIENTE VIAJE (${remaining})`;
    }
  }
  
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    if (g.level === 5) {
      progressBar.style.width = '100%';
    } else {
      let clicksNeeded = g.level + 1;
      let progress = (g.clicks / clicksNeeded) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }
}

render();
