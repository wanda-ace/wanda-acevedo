// CADA OBJETO AQUÍ ES UN ARCHIVO / MEDIA INDIVIDUAL
const listaArchivos = [
  {
    proyecto: "Postproducción de Sesiones en Vivo",
    categoria: "comercial",
    marca: "Flakkaboem",
    tag: "Short Form",
    año: "2024",
    descripcion: "Edición de fragmentos y reels dinámicos optimizados para Instagram.",
    // Tu código embed de este video específico:
    mediaHTML: '<iframe height="400" src="https://www.youtube.com/embed/EJEMPLO_REEL" frameborder="0" allowfullscreen></iframe>'
  },
  {
    proyecto: "Postproducción de Sesiones en Vivo",
    categoria: "comercial",
    marca: "Flakkaboem",
    tag: "Motion Graphics",
    año: "2024",
    descripcion: "Animación de títulos y assets gráficos integrados para la identidad de las sesiones.",
    // Tu código embed de este otro video específico:
    mediaHTML: '<iframe height="400" src="https://www.youtube.com/embed/EJEMPLO_MOTION" frameborder="0" allowfullscreen></iframe>'
  },
  {
    proyecto: "Estrategia Visual BRKV",
    categoria: "comercial",
    marca: "BRKV",
    tag: "UX/UI",
    año: "2025",
    descripcion: "Prototipado de pantallas de la app en Figma bajo sus brand guidelines.",
    mediaHTML: '<img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500" alt="UI en Figma">'
  },
  {
    proyecto: "Estrategia Visual BRKV",
    categoria: "comercial",
    marca: "BRKV",
    tag: "Branding",
    año: "2025",
    descripcion: "Diseño de presentaciones corporativas y assets gráficos generales.",
    mediaHTML: '<img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" alt="Diseño de marca">'
  },
  {
    proyecto: "Bajo Sur",
    categoria: "instalacion",
    marca: "personal",
    tag: "Instalación",
    año: "2025",
    descripcion: "Obra multimedia exhibida en la Muestra MAGMA dentro del espacio CHEla.",
    mediaHTML: '<img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800" alt="Instalación Bajo Sur">'
  }
];

// LÓGICA DE FILTRADO REESTRUCTURADA
let categoriaActual = 'todos';

function renderizarArchivos(archivosFiltrados) {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';
    
    archivosFiltrados.forEach(itemArch => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-item';

        // Estructura limpia: metadatos del archivo arriba, el media al medio, textos abajo
        tarjeta.innerHTML = `
            <div class="proyecto-meta">
                <span>${itemArch.marca !== 'personal' ? itemArch.marca + ' // ' : ''} ${itemArch.tag}</span>
                <span>${itemArch.año}</span>
            </div>
            <div class="proyecto-grid-media">
                ${itemArch.mediaHTML}
            </div>
            <div class="proyecto-descripcion">
                <h3>${itemArch.proyecto}</h3>
                <p>${itemArch.descripcion}</p>
            </div>
        `;
        grid.appendChild(tarjeta);
    });
}

function filtrarCategoria(cat) {
    categoriaActual = cat;
    const menuFiltros = document.getElementById('filtros-comerciales');
    
    if (cat === 'comercial') {
        menuFiltros.classList.remove('hidden');
    } else {
        menuFiltros.classList.add('hidden');
    }

    if (cat === 'todos') {
        renderizarArchivos(listaArchivos);
    } else {
        const filtrados = listaArchivos.filter(a => a.categoria === cat);
        renderizarArchivos(filtrados);
    }
}

function filtrarPorMetadato(tipo, valor) {
    // Primero nos aseguramos de trabajar solo sobre los comerciales
    let filtrados = listaArchivos.filter(a => a.categoria === 'comercial');
    
    if (tipo === 'marca' && valor !== 'todas') {
        filtrados = filtrados.filter(a => a.marca === valor);
    } else if (tipo === 'tag' && valor !== 'todos') {
        filtrados = filtrados.filter(a => a.tag === valor);
    }
    
    renderizarArchivos(filtrados);
}

// Carga inicial
renderizarArchivos(listaArchivos);
