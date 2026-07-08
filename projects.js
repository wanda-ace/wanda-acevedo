// NUEVA ESTRUCTURA: PROYECTOS QUE CONTIENEN ARCHIVOS ADJUNTOS
const listaProyectos = [
  {
    id: "bajo-sur",
    titulo: "Bajo Sur - Instalación Audiovisual",
    categoria: "instalacion",
    marca: "personal",
    año: "2025",
    portadaImg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600", // Foto miniatura en la grilla
    resumenES: "Obra multimedia exhibida en la Muestra MAGMA dentro del espacio CHEla.",
    resumenEN: "Multimedia work exhibited at the MAGMA Exhibition inside CHEla space.",
    descripcionCompletaES: "Bajo Sur es una instalación audiovisual que explora las narrativas de la cultura digital y las tecnologías creativas emergentes en entornos urbanos periféricos.",
    descripcionCompletaEN: "Bajo Sur is an audiovisual installation that explores the narratives of digital culture and emerging creative technologies in peripheral urban environments.",
    // Aquí adentro listas todos los archivos de este proyecto específico:
    archivos: [
      {
        tag: "Registro Fotográfico",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=900" alt="Bajo Sur 1">'
      },
      {
        tag: "Video de la Instalación",
        mediaHTML: '<iframe height="500" src="https://www.youtube.com/embed/EJEMPLO_BAJO_SUR" frameborder="0" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "flakkaboem",
    titulo: "Postproducción de Sesiones en Vivo",
    categoria: "comercial",
    marca: "Flakkaboem",
    año: "2024",
    portadaImg: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=600",
    resumenES: "Edición, corrección de color y sincronización multicámara de sesiones de música en vivo.",
    resumenEN: "Editing, color correction, and multicam synchronization of live music sessions.",
    descripcionCompletaES: "Trabajo continuo de postproducción audiovisual para las sesiones en vivo de artistas independientes, adaptando las piezas a múltiples plataformas.",
    descripcionCompletaEN: "Ongoing audiovisual postproduction work for live sessions of independent artists, adapting pieces across multiple platforms.",
    archivos: [
      {
        tag: "Short Form / Reel",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=900" alt="Sesión">'
      }
    ]
  }
];

// TEXTO BIOGRAFÍA BILINGÜE
const textoBio = `
    <div class="bio-content">
        <p><strong>Wanda Acevedo</strong> es Diseñadora Audiovisual especializada en edición de video, diseño gráfico y producción de contenido digital.</p>
        <p class="en-text"><strong>Wanda Acevedo</strong> is an Audiovisual Designer specializing in video editing, graphic design, and digital content production.</p>
    </div>
`;

let categoriaActual = 'todos';

// AL INICIAR: PANTALLA EN BLANCO
function irAHome() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = '';
}

function mostrarInfo() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = textoBio;
}

// NIVEL 1: RENDERIZAR LA GRILLA DE PROYECTOS (3 COLUMNAS)
function renderizarGrillaProyectos(proyectosAVisualizar) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';

    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';

    proyectosAVisualizar.forEach(proy => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyectoInmersion('${proy.id}')`);

        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${proy.portadaImg}" alt="${proy.titulo}">
            <h3>${proy.titulo}</h3>
            <div class="ano">${proy.año}</div>
            <p>${proy.resumenES} <span class="mas-link">[+]</span></p>
        `;
        divGrilla.appendChild(tarjeta);
    });

    contenedor.appendChild(divGrilla);
}

// NIVEL 2: VER UN PROYECTO AL DETALLE CON SUS PUBLICACIONES INTERNAS
function verProyectoInmersion(idProyecto) {
    const proy = listaProyectos.find(p => p.id === idProyecto);
    if (!proy) return;

    // Ocultar filtros si se entra al detalle, mostrar botón atrás
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.remove('hidden');

    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';

    let archivosHTML = '';
    proy.archivos.forEach(arch => {
        archivosHTML += `
            <div class="archivo-container">
                <div class="archivo-meta">${arch.tag}</div>
                <div class="archivo-display">${arch.mediaHTML}</div>
            </div>
        `;
    });

    contenedor.innerHTML = `
        <div class="proyecto-interno">
            <div class="proyecto-interno-header">
                <h1>${proy.titulo} (${proy.año})</h1>
                <p class="descripcion-es">${proy.descripcionCompletaES}</p>
                <p class="descripcion-en">${proy.descripcionCompletaEN}</p>
            </div>
            <div class="proyecto-interno-media">
                ${archivosHTML}
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

function volverALaGrilla() {
    document.getElementById('back-button-container').classList.add('hidden');
    filtrarCategoria(categoriaActual);
}

function filtrarCategoria(cat) {
    categoriaActual = cat;
    document.getElementById('back-button-container').classList.add('hidden');
    
    if (cat === 'comercial') {
        document.getElementById('filtros-comerciales').classList.remove('hidden');
    } else {
        document.getElementById('filtros-comerciales').classList.add('hidden');
    }

    const filtrados = listaProyectos.filter(p => p.categoria === cat);
    renderizarGrillaProyectos(filtrados);
}

function filtrarPorMetadato(tipo, valor) {
    let filtrados = listaProyectos.filter(p => p.categoria === 'comercial');
    
    if (tipo === 'marca' && valor !== 'todas') {
        filtrados = filtrados.filter(p => p.marca === valor);
    } else if (tipo === 'tag' && valor !== 'todos') {
        // Filtra si al menos uno de sus archivos internos coincide con el tag buscado
        filtrados = filtrados.filter(p => p.archivos.some(a => a.tag.includes(valor)));
    }
    
    renderizarGrillaProyectos(filtrados);
}

// Arrancar en Home vacío
irAHome();
