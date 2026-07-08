// TU BASE DE DATOS DE ARCHIVOS COMPLETA
const listaArchivos = [
  {
    proyecto: "Postproducción de Sesiones en Vivo",
    categoria: "comercial",
    marca: "Flakkaboem",
    tag: "Short Form",
    año: "2024",
    descripcion: "Edición de fragmentos y reels dinámicos optimizados para Instagram.",
    mediaHTML: '<img src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=600" alt="Ejemplo de video">'
  },
  {
    proyecto: "Estrategia Visual BRKV",
    categoria: "comercial",
    marca: "BRKV",
    tag: "UX/UI",
    año: "2025",
    descripcion: "Prototipado de pantallas de la app en Figma bajo sus brand guidelines.",
    mediaHTML: '<img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600" alt="UI en Figma">'
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

// TEXTO PARA TU SECCIÓN "INFO / BIO"
const textoBio = `
    <div class="bio-content">
        <p><strong>Wanda Acevedo</strong> es Diseñadora Audiovisual especializada en edición de video, diseño gráfico y producción de contenido digital para marcas y proyectos culturales.</p>
        <br>
        <p>Egresada de la Universidad de Buenos Aires (UBA) y con estudios en Producción Musical en la Universidad Nacional de Quilmes (UNQ), su enfoque cruza la cultura digital con las tecnologías creativas emergentes.</p>
    </div>
`;

// AL ENTRAR POR PRIMERA VEZ (HOME), DEJA LA PANTALLA EN BLANCO
function irAHome() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = '';
}

// MUESTRA LA BIOGRAFÍA
function mostrarInfo() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = textoBio;
}

// RENDERIZA LA LISTA DE ARCHIVOS EN LA COLUMNA DERECHA
function renderizarArchivos(archivosFiltrados) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';
    
    archivosFiltrados.forEach(itemArch => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-item';

        tarjeta.innerHTML = `
            <div class="proyecto-meta">
                <span>${itemArch.marca !== 'personal' ? itemArch.marca + ' // ' : ''} ${itemArch.tag || ''}</span>
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
        contenedor.appendChild(tarjeta);
    });
}

// FILTRADO POR MENÚ PRINCIPAL
function filtrarCategoria(cat) {
    const menuFiltros = document.getElementById('filtros-comerciales');
    
    if (cat === 'comercial') {
        menuFiltros.classList.remove('hidden');
    } else {
        menuFiltros.classList.add('hidden');
    }

    const filtrados = listaArchivos.filter(a => a.categoria === cat);
    renderizarArchivos(filtrados);
}

// FILTRADO POR METADATOS INTERNOS (SOLO COMERCIAL)
function filtrarPorMetadato(tipo, valor) {
    let filtrados = listaArchivos.filter(a => a.categoria === 'comercial');
    
    if (tipo === 'marca' && valor !== 'todas') {
        filtrados = filtrados.filter(a => a.marca === valor);
    } else if (tipo === 'tag' && valor !== 'todos') {
        filtrados = filtrados.filter(a => a.tag === valor);
    }
    
    renderizarArchivos(filtrados);
}

// INICIALIZACIÓN: ARRANCAR EN BLANCO (HOME)
irAHome();
