let totalTrips = 0;
let inventory = { cookie: 0, elixir: 0, dna: 0 };

// INICIAR APLICACIÓN
function startApp() {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('hidden');
}

const petData = {
  'a': { 
    name: 'FERRO', 
    identity: 'Representa la visión a futuro y el progreso. El reflejo universal de la ambición sana y la astucia financiera.', 
    lore: {
      2: 'Ferro parece un pequeño y elegante hombre de negocios estilo "chibi", vistiendo siempre un traje sastre plateado impecable que le queda ligeramente grande.',
      3: 'No obstante, este inofensivo mercader es el financiador más grande del Distrito Bajo y quien sostiene en secreto al Sindicato del Silencio.',
      4: 'Bajo su tierno aspecto, lleva los nudillos vendados y un contrato ardiendo eternamente en su bolsillo izquierdo. Conoce el valor exacto de los secretos.',
      5: 'A veces, intercambia oro por juguetes rotos de madera, los cuales guarda como tesoros para una antigua guardiana que prometió regresar para proteger a todos.'
    },
    oracle: [
      '"El progreso favorece a las mentes preparadas. Pronto, una puerta inesperada se abrirá ante ti."',
      '"La astucia no es trampa, es saber leer el tablero. Revisa bien tus próximos movimientos."',
      '"Tus inversiones darán frutos, pero paciencia: el oro no brilla si está cubierto de dudas."',
      '"Un aliado silencioso está observando tu esfuerzo y pronto te ofrecerá su respaldo."',
      '"El valor de un secreto a veces es mayor que el de la verdad revelada. Guarda tus cartas."',
      '"Tu visión a futuro te salvará de un error que los demás están a punto de cometer."',
      '"La riqueza llegará no por azar, sino por tu inquebrantable persistencia en el detalle."',
      '"Los contratos no escritos son los más peligrosos. Asegúrate de con quién haces tratos hoy."',
      '"Un pequeño sacrificio material hoy te evitará una pérdida enorme mañana."',
      '"Escucha más de lo que hablas. El silencio de tu adversario revela sus debilidades."',
      '"No persigas el brillo instantáneo; busca el oro que está enterrado profundo."',
      '"Las reglas del juego están a punto de cambiar. Mantén tus nudillos preparados."',
      '"Tu ambición es una brújula perfecta. No dejes que la duda desvíe tu rumbo."',
      '"Ese riesgo financiero que temes tomar podría ser la llave de tu próximo imperio."',
      '"Hasta los imperios caen si no tienen buenos cimientos. Revisa tus bases."'
    ],
    f5Title: 'Visión Maestra'
  },
  'b': { 
    name: 'NOPI', 
    identity: 'Representa la resiliencia pura. Es el reflejo de la capacidad humana para salir adelante sin importar los obstáculos del día a día.', 
    lore: {
      2: 'Nopi nació en medio del áspero Desierto de Fuego, demostrando que la vida y la ternura siempre encuentran un camino. Es un pequeño cactus adorable que lleva una hermosa flor rosada en su cabeza.',
      3: 'Aunque parece inofensivo, su semilla sobrevivió al Gran Borrado envuelta en un cristal protector. Quienes lo crían notan que al acariciarlo, emite un dulce zumbido rítmico.',
      4: 'Se dice que ese hermoso zumbido es una canción mágica que viaja bajo la arena, sanando las raíces enfermas de otros seres caídos.',
      5: 'Pronto, su llamado invitará a las flores ocultas del desierto a un Gran Florecimiento que llenará de color y vida toda la región.'
    },
    oracle: [
      '"Incluso en la arena más árida, la resiliencia es capaz de crear un jardín."',
      '"No subestimes el poder de un pequeño paso. Hoy estás más cerca del oasis."',
      '"Tu flor interior está a punto de abrirse; solo necesitaba pasar por esta sequía para fortalecerse."',
      '"Los que parecen frágiles suelen ser los que sobreviven a las peores tormentas de arena."',
      '"Una sonrisa amable puede ser el escudo que necesitas frente a una palabra cortante."',
      '"Encontrarás agua donde otros solo ven espejismos. Confía en tu instinto de supervivencia."',
      '"La vida siempre encuentra un camino. Ese problema que creías imposible, ya tiene solución."',
      '"No apresures tu crecimiento. Las raíces fuertes necesitan tiempo en la oscuridad."',
      '"Tu sola presencia ya es un consuelo para alguien que atraviesa una tormenta."',
      '"Bebe la sabiduría de los días malos; te hidratarán en el futuro."',
      '"Las espinas no te hacen cruel, te protegen mientras floreces."',
      '"Aunque el terreno parezca yermo, una pequeña gota de fe lo cambiará todo."',
      '"Tu canto interior es más fuerte que el ruido del caos externo. Escúchalo."',
      '"La paciencia no es pasividad, es la fuerza concentrada antes del florecimiento."',
      '"Incluso si te sientes pequeño hoy, tu impacto en el ecosistema de otros es gigante."'
    ] 
  },
  'c': { 
    name: 'PYRO', 
    identity: 'Representa la vitalidad imparable, la hiperactividad positiva y la pasión ardiente por vivir al máximo.', 
    lore: {
      2: 'Pyro es un ser hipnótico y etéreo; no tiene piel ni huesos, solo llamas de colores cian y naranja que bailan con una elegancia y fluidez fascinante.',
      3: 'Esta pura expresión de energía estelar es un regalo del cosmos que cayó del cielo en los Páramos, iluminando las llanuras grises con su fuego alegre.',
      4: 'Pyro es un ente que comparte su calor para iluminar los caminos. Quienes se acercan a admirar su belleza sienten una energía renovadora e inagotable.',
      5: 'En su núcleo arde un cristal de hielo que nunca se derrite, el cual Pyro usa para equilibrar su poder y ser el faro que guía a todos durante las noches más oscuras.'
    },
    oracle: [
      '"Una chispa de pasión es suficiente para quemar las excusas. Empieza hoy."',
      '"La energía que envías al mundo regresará a ti multiplicada. Sigue brillando."',
      '"No temas destacar. Tu fuego interno no fue hecho para iluminar en secreto."',
      '"Una idea repentina iluminará tu mente hoy; no la dejes apagar."',
      '"Abraza tu hiperactividad, pero recuerda que incluso el fuego más vivo necesita respirar."',
      '"Tu vitalidad será el catalizador para que alguien más salga de su letargo."',
      '"Controla tus llamas: la pasión puede calentar un hogar o quemar un puente."',
      '"Tu entusiasmo contagiará a alguien que necesita desesperadamente tu calor hoy."',
      '"No temas consumirte por tus sueños, de tus cenizas nacerá algo más brillante."',
      '"Aprovecha esta ola de energía inagotable para terminar lo que dejaste a medias."',
      '"Eres el faro en la niebla de otra persona, aunque no te des cuenta."',
      '"Deja de medir tu luz con la de los demás. Un incendio no compite con una vela."',
      '"El hielo en tu núcleo te dará la calma necesaria para no explotar antes de tiempo."',
      '"Corre, baila, crea. Tu espíritu no fue forjado para quedarse quieto."',
      '"Hoy es un día para actuar primero y pensar después; confía en tu impulso."'
    ],
    f5Title: 'Energía Absoluta'
  },
  'd': { 
    name: 'MONO', 
    identity: 'Representa la inteligencia analítica y la observación minuciosa. Ideal para mentes estrategas que actúan en silencio.', 
    lore: {
      2: 'Mono es una bola de pelaje violeta increíblemente suave y abrazable, dominada por un gigantesco ojo central que le da un aspecto torpe, curioso y muy tierno.',
      3: 'En las oscuras fosas abisales, su especie evolucionó para observar cada detalle del mundo. Los criadores juran que el ojo de Mono siempre busca nuevas maravillas.',
      4: 'Por las noches, cuando nadie lo ve, su tierno ojo se dilata y escupe pequeñas perlas de cristal negro.',
      5: 'Estas perlas contienen fragmentos de historias antiguas que recolecta con mimo para que los archiveros las conviertan en cuentos mágicos.'
    },
    oracle: [
      '"Las respuestas no siempre gritan; a veces solo se dejan ver por el ojo que sabe mirar en silencio."',
      '"Observa antes de actuar. La prisa es enemiga de la estrategia perfecta."',
      '"Alguien te mostrará solo la mitad de la verdad. Tu intuición revelará el resto."',
      '"No busques atención hoy; la verdadera ventaja está en pasar desapercibido y analizar el entorno."',
      '"Una pequeña perla de conocimiento llegará a tus manos de la fuente menos esperada."',
      '"Mantén los ojos abiertos a las coincidencias. Nada sucede por puro azar."',
      '"La claridad de tu visión disipará las dudas de los que te rodean. Eres su guía en las sombras."',
      '"Esa persona que parece no saber nada, en realidad está ocultando todo. Obsérvala."',
      '"Tu capacidad de análisis descubrirá el patrón que resolverá el laberinto."',
      '"No malgastes tus perlas de sabiduría con quienes solo buscan entretenimiento."',
      '"Un secreto a voces llegará a ti; usa esa información para mover tu próxima pieza."',
      '"La torpeza aparente es el mejor camuflaje para una mente brillante."',
      '"Dedica tiempo a observar los detalles más pequeños; ahí está la respuesta gigante."',
      '"El conocimiento que recolectes hoy en silencio te salvará de un gran problema mañana."',
      '"Cierra los ojos y confía en tu tercer sentido. La lógica no siempre tiene la razón."'
    ],
    f5Title: 'Mente Estratega'
  }
};

let registry = {
  'a': { level: 1, unlocked: false, clicks: 0, totalFeeds: 0 },
  'b': { level: 1, unlocked: false, clicks: 0, totalFeeds: 0 },
  'c': { level: 1, unlocked: false, clicks: 0, totalFeeds: 0 },
  'd': { level: 1, unlocked: false, clicks: 0, totalFeeds: 0 }
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
  const g = registry[viewingGroup];
  const data = petData[viewingGroup];
  const overlay = document.getElementById('full-overlay');
  
  // Limpiar clases previas
  overlay.classList.remove('overlay-lore', 'overlay-oracle');
  
  // Aplicar fondo y contenido según tipo
  if (type === 'lore') {
    overlay.classList.add('overlay-lore');
    document.getElementById('overlay-title').innerText = 'HISTORIA';
    
    // Armar la historia progresiva
    let story = '';
    for (let i = 2; i <= g.level; i++) {
       if (data.lore[i]) {
         story += data.lore[i] + '\n\n';
       }
    }
    if (g.level < 2) {
      story = "Este ser aún no despierta su verdadera naturaleza...";
    }
    document.getElementById('overlay-text').innerText = story.trim();
  } else {
    overlay.classList.add('overlay-oracle');
    document.getElementById('overlay-title').innerText = 'EL ORÁCULO';
    
    // Mostrar el oráculo generado tras la última comida
    let oracleIndex = g.lastOracleIndex !== undefined ? g.lastOracleIndex : 0;
    document.getElementById('overlay-text').innerText = data.oracle[oracleIndex];
  }
  
  overlay.style.display = 'flex';
}

function closeOverlay() { 
  document.getElementById('full-overlay').style.display = 'none'; 
}

// VIAJES AHORA OTORGAN DROPS ORGÁNICOS
function completeTrip() {
  totalTrips++;
  
  // Probabilidad de Drop: 45% Galleta, 45% Elixir, 10% ADN
  const rand = Math.random();
  let dropIcon = '';
  
  if (rand < 0.45) {
    inventory.cookie++;
    dropIcon = '🍪';
  } else if (rand < 0.90) {
    inventory.elixir++;
    dropIcon = '🧪';
  } else {
    inventory.dna++;
    dropIcon = '🧬';
  }

  // Notificación de drop
  const dropMsg = document.getElementById('drop-msg');
  dropMsg.innerText = `+1 ${dropIcon}`;
  dropMsg.classList.remove('show');
  void dropMsg.offsetWidth; // Reflow para reiniciar animación
  dropMsg.classList.add('show');
    
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
    }, 1000);
  }

  render();
}

function showAlert() {
  const alertMsg = document.getElementById('alert-msg');
  alertMsg.classList.remove('show');
  void alertMsg.offsetWidth;
  alertMsg.classList.add('show');
}

// ALIMENTAR MASCOTA (CONVERTIR ITEM A PUNTOS DE EVOLUCIÓN)
function feedPet(type) {
  if (!activeGroup || !registry[activeGroup].unlocked) {
    showAlert();
    return;
  }
  const g = registry[activeGroup];
  
  if (g.level >= 5 || inventory[type] <= 0) return;
  
  // Consumir el item del inventario
  inventory[type]--;

  // Aumentar contador de alimentación
  g.totalFeeds = (g.totalFeeds || 0) + 1;
  
  // Generar y guardar la nueva frase del oráculo cada vez que come
  const data = petData[activeGroup];
  g.lastOracleIndex = Math.floor(Math.random() * data.oracle.length);

  // Ganar progreso (ADN da 2, el resto da 1)
  let points = (type === 'dna') ? 2 : 1;
  g.clicks += points;

  let clicksNeeded = g.level + 1;

  if (g.clicks >= clicksNeeded) {
    g.level++;
    g.clicks = 0; // Se resetea el progreso al subir
    triggerLevelUp(g.level);
  }

  render();
}

function triggerLevelUp(level) {
  // CELEBRACIONES
  if (level === 2) {
      confetti({
          particleCount: 200, spread: 160, origin: { y: 0.5 },
          colors: ['#9d50bb', '#FFD700', '#ffffff'],
          startVelocity: 45, gravity: 1, scalar: 1.2
      });
      var duration = 2 * 1000;
      var animationEnd = Date.now() + duration;
      var interval = setInterval(function() {
          var timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) return clearInterval(interval);
          confetti({ 
              particleCount: 40, spread: 100, origin: { y: 0, x: Math.random() }, 
              colors: ['#FFD700', '#ffffff'], shapes: ['star'], scalar: 1.2, gravity: 0.4 
          });
      }, 150);
  } else if (level === 3) {
      var duration = 3 * 1000;
      var animationEnd = Date.now() + duration;
      var interval = setInterval(function() {
          var timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) return clearInterval(interval);
          confetti({ 
              particleCount: 25, spread: 100, origin: { y: -0.1, x: Math.random() }, 
              colors: ['#9d50bb', '#FFD700', '#ffffff'], gravity: 2.0, startVelocity: 30, scalar: 0.7, ticks: 300
          });
      }, 100);
  } else if (level === 4) {
      confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#9d50bb', '#ffffff'] });
      confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#9d50bb', '#ffffff'] });
  } else if (level === 5) {
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

  // Actualizar UI del inventario
  document.getElementById('inv-cookie').innerText = inventory.cookie;
  document.getElementById('inv-elixir').innerText = inventory.elixir;
  document.getElementById('inv-dna').innerText = inventory.dna;

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
  const feedRow = document.getElementById('feed-row');
  const resetBtn = document.getElementById('btn-reset');

  // Mostrar Botones Lore/Oráculo si la mascota está activa y nivel >= 2
  if (g.unlocked && viewingGroup === activeGroup && g.level >= 2) {
    btnsRow.classList.add('visible');
  } else {
    btnsRow.classList.remove('visible');
  }

  // Hint de desbloqueo/alimentación
  const unlockHint = document.getElementById('unlock-hint');
  if (!activeGroup || viewingGroup !== activeGroup) {
    unlockHint.style.display = 'block';
    unlockHint.innerText = '↑ HAZ DOBLE CLIC ARRIBA PARA SELECCIONAR ↑';
    unlockHint.style.color = '#ff4d4d';
  } else if (g.level < 5) {
    unlockHint.style.display = 'block';
    unlockHint.innerText = '↑ TOCA TU INVENTARIO PARA ALIMENTAR ↑';
    unlockHint.style.color = '#00ff00';
  } else {
    unlockHint.style.display = 'none';
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

  // Botón de viaje universal
  const tripBtn = document.getElementById('btn-trip');
  tripBtn.disabled = false; // El viaje ahora es universal y siempre habilitado
  tripBtn.innerText = "SIGUIENTE VIAJE";
  
  // Barra de progreso ahora refleja los puntos de alimentación
  const evoContainer = document.getElementById('evolution-progress-container');
  const evoBar = document.getElementById('evo-progress-bar');
  const evoText = document.getElementById('progress-text');
  const currentLvl = document.getElementById('current-lvl');
  
  if (evoContainer) {
    if (g.unlocked && viewingGroup === activeGroup) {
      evoContainer.style.display = 'block';
      currentLvl.innerText = g.level;
      if (g.level === 5) {
        evoBar.style.width = '100%';
        evoText.innerText = 'MÁX';
      } else {
        let clicksNeeded = g.level + 1;
        let progress = (g.clicks / clicksNeeded) * 100;
        if (progress > 100) progress = 100;
        evoBar.style.width = `${progress}%`;
        evoText.innerText = `${g.clicks} / ${clicksNeeded}`;
      }
    } else {
      evoContainer.style.display = 'none';
    }
  }
}

render();
