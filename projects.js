const listaProyectos = [
  // ----------------------------------------------------
  // MARCAS / COMERCIAL
  // ----------------------------------------------------
  {
    id: "com-brkv",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
    publicaciones: [
      {
        idPub: "brkv-p1",
        año: "2025",
        titulo: "BRKV Co-Living Platform",
        tags: ["Branding", "UX/UI", "AI Tools"],
        descripcionES: "<p>Diseño de interfaz de usuario en Figma y assets promocionales globales adaptados siguiendo estrictamente las brand guidelines de la firma internacional para su lanzamiento en el mercado europeo.</p>",
        descripcionEN: "<p>User interface design in Figma and global promotional assets adapted strictly following the international firm's brand guidelines for its European market launch.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800">'
      }
    ]
  },
  {
    id: "com-techround",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500",
    publicaciones: [
      {
        idPub: "tech-p1",
        año: "2025",
        titulo: "TechRound UK Video Editorial",
        tags: ["Short Form", "Motion Graphics", "AI Tools"],
        descripcionES: "<p>Edición dinámica a partir de crudos periodísticos y optimización masiva de flujos de trabajo de subtitulado automatizado con herramientas de inteligencia artificial avanzadas.</p>",
        descripcionEN: "<p>Dynamic editing based on journalistic raw footage and massive optimization of automated subtitling workflows using advanced artificial intelligence tools.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=800">'
      }
    ]
  },
  {
    id: "com-cosecha",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500",
    publicaciones: [
      {
        idPub: "cos-p1",
        año: "2025",
        titulo: "La Cosecha - Hotelería Digital",
        tags: ["Short Form", "Branding", "Color Grading"],
        descripcionES: "<p>Postproducción visual adaptada a formatos móviles verticales enfocada en generar engagement orgánico y retención de audiencia en el nicho de turismo de lujo.</p>",
        descripcionEN: "<p>Visual postproduction adapted to vertical mobile formats focused on driving organic engagement and audience retention in the luxury tourism niche.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800">'
      }
    ]
  },
  {
    id: "com-flakka",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
    publicaciones: [
      {
        idPub: "flak-p1",
        año: "2024",
        titulo: "Flakkaboem Live Sessions",
        tags: ["Motion Graphics", "Short Form", "Color Grading"],
        descripcionES: "<p>Sincronización de múltiples cámaras en set, corrección de color de estilo cinematográfico y curaduría de fragmentos de alto impacto para distribución multiplataforma.</p>",
        descripcionEN: "<p>Multi-camera synchronization on set, cinematic-style color correction, and curation of high-impact snippets for cross-platform digital distribution.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800">'
      }
    ]
  },
  // ----------------------------------------------------
  // FREELANCE
  // ----------------------------------------------------
  {
    id: "free-lucuma",
    categoria: "freelance",
    portadaImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
    publicaciones: [
      {
        idPub: "luc-p1",
        año: "2026",
        titulo: "Lúcuma Medio Digital",
        tags: ["Branding", "UX/UI", "Layout Design"],
        descripcionES: "<p>Generación de identidad visual completa y plantillas editoriales fijas destinadas a la difusión de reseñas críticas y lanzamientos discográficos independientes.</p>",
        descripcionEN: "<p>Complete visual identity generation and static editorial templates aimed at promoting critical reviews and independent album releases.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800">'
      }
    ]
  },
  { id: "free-2", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500", publicaciones: [{ idPub: "fr2-p1", año: "2024", titulo: "Indie Clip: Solitary Boy", tags: ["Short Form", "Color Grading", "Directing"], descripcionES: "<p>Registro audiovisual de campo y montaje rítmico final para el lanzamiento del videoclip oficial de la banda.</p>", descripcionEN: "<p>Audiovisual field recording and final rhythmic editing for the band's official music video launch.</p>", mediaHTML: "" }] },
  { id: "free-3", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", publicaciones: [{ idPub: "fr3-p1", año: "2023", titulo: "Concierto Niceto Club", tags: ["Fotografía", "Concert Music", "Documentary"], descripcionES: "<p>Cobertura fotográfica documental en condiciones de iluminación complejas dentro del marco del festival de música emergente.</p>", descripcionEN: "<p>Documentary photographic coverage in complex lighting conditions within the framework of the emerging music festival.</p>", mediaHTML: "" }] },
  { id: "free-4", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=500", publicaciones: [{ idPub: "fr4-p1", año: "2024", titulo: "Identidad Visual: AlmaSense", tags: ["UX/UI", "AI Tools", "Branding"], descripcionES: "<p>Optimización técnica de bibliotecas digitales y catalogación integral de assets automatizados asistidos por modelos de IA.</p>", descripcionEN: "<p>Technical optimization of digital libraries and comprehensive cataloging of automated assets assisted by AI models.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // AUDIOVISUAL
  // ----------------------------------------------------
  {
    id: "aud-universo-supermercado",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-universo - supermercado.png",
    publicaciones: [
      {
        idPub: "aud-uni-p1",
        año: "2020",
        titulo: "universo - supermercado",
        tags: ["animación", "experimental"],
        descripcionES: "<p>Proyecto de animación y diseño experimental desarrollado en el marco de la materia Proyecto Audiovisual I de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA).</p>",
        descripcionEN: "<p>Experimental animation and design project developed as part of the Audiovisual Project I course in the Image and Sound Design program at the University of Buenos Aires (UBA).</p>",
        mediaHTML: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/cDYyfddqidw" title="universo - supermercado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:4px;"></iframe>'
      }
    ]
  },
  {
    id: "aud-albores",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-albores.png",
    publicaciones: [
      {
        idPub: "aud1-p1",
        año: "2023",
        titulo: "Albores",
        tags: ["documental", "ficción", "dirección", "diseño sonoro", "edición de video"],
        descripcionES: `
          <p>Me desempeñé como directora, montajista y diseñadora de sonido de Albores, un cortometraje de docuficción estrenado en diciembre de 2023 en el Festival de Cortos de Amorina Cine Bar, un espacio dedicado a la exhibición del cine independiente argentino que reúne a realizadores y realizadoras emergentes.</p>
          <p>La historia sigue a Juan, un estudiante de una escuela agrotécnica que se siente cada vez más condicionado por la religiosidad de su entorno. A lo largo de una jornada escolar aparentemente cotidiana, deberá enfrentarse a una decisión que marcará su camino.</p>
          <p>El proyecto fue realizado junto a Delfina Di Giacomo, Inés Emery, Clara Rapela y Luna Ciravegna, quienes formaron parte del equipo creativo y de producción.</p>
        `,
        descripcionEN: `
          <p>I worked as the director, editor, and sound designer of Albores, a docufiction short film that premiered in December 2023 at the Amorina Cine Bar Short Film Festival, an event dedicated to showcasing independent Argentine cinema and bringing together emerging filmmakers.</p>
          <p>The film follows Juan, a student at an agricultural high school who feels increasingly constrained by the religious environment surrounding him. As he goes through what seems to be an ordinary school day, he is ultimately confronted with a decision that will shape his future.</p>
          <p>The project was developed in collaboration with Delfina Di Giacomo, Inés Emery, Clara Rapela, and Luna Ciravegna, who were part of the film's creative and production team.</p>
        `,
        mediaHTML: '<iframe width="100%" height="450" src="https://www.youtube.com/embed/fLpjvvWXApA" title="Albores" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:4px;"></iframe>'
      }
    ]
  },
  { id: "aud-2", categoria: "audiovisual", portadaImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500", publicaciones: [{ idPub: "aud2-p1", año: "2024", titulo: "FADU / IDIS Investigación", tags: ["Audiovisual", "Research", "Archiving"], descripcionES: "<p>Pasantía académica orientada al diseño de imagen y sonido experimental, focalizando en el rescate de archivos multimediales.</p>", descripcionEN: "<p>Academic internship oriented towards experimental image and sound design, focusing on the rescue of multimedia archives.</p>", mediaHTML: "" }] },
  { id: "aud-3", categoria: "audiovisual", portadaImg: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500", publicaciones: [{ idPub: "aud3-p1", año: "2025", titulo: "Sinfonía Urbana", tags: ["Motion Graphics", "Urban Architecture", "Editing"], descripcionES: "<p>Pieza rítmica de montaje continuo basada en el pulso visual frenético de las grandes metrópolis contemporáneas.</p>", descripcionEN: "<p>Rhythmic piece of continuous editing based on the frenetic visual pulse of major contemporary metropolises.</p>", mediaHTML: "" }] },
  { id: "aud-4", categoria: "audiovisual", portadaImg: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500", publicaciones: [{ idPub: "aud4-p1", año: "2025", titulo: "Ensayo Sonoro UNQ", tags: ["Audiovisual", "Synthesis", "Real Time"], descripcionES: "<p>Composición electroacústica avanzada manipulada con tecnologías digitales y síntesis interactiva en tiempo real.</p>", descripcionEN: "<p>Advanced electroacoustic composition manipulated with digital technologies and interactive real-time synthesis.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // INSTALACIONES
  // ----------------------------------------------------
  {
    id: "inst-bajo-sur",
    categoria: "instalaciones",
    portadaImg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500",
    publicaciones: [
      {
        idPub: "inst1-p1",
        año: "2025",
        titulo: "Bajo Sur - Instalación",
        tags: ["Instalación", "Nuevas Tecnologías", "Fine Arts"],
        descripcionES: "<p>Montaje espacial multimedia inmersivo que investiga de forma crítica las tensiones directas entre la contaminación acústica y las luces artificiales fijas.</p>",
        descripcionEN: "<p>Immersive multimedia spatial staging that critically investigates the direct tensions between acoustic pollution and fixed artificial lights.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800">'
      }
    ]
  },
  { id: "inst-2", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=500", publicaciones: [{ idPub: "inst2-p1", año: "2024", titulo: "Urdimbre - Madrid", tags: ["Instalación", "Vector Art", "Textiles"], descripcionES: "<p>Exhibición interactiva en la muestra colectiva que cruza texturas analógicas pesadas con proyecciones vectoriales de código vivo.</p>", descripcionEN: "<p>Interactive exhibition in the collective showcase that crosses heavy analog textures with live-coded vector projections.</p>", mediaHTML: "" }] },
  { id: "inst-3", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500", publicaciones: [{ idPub: "inst3-p1", año: "2025", titulo: "Frecuencias Latentes", tags: ["Nuevas Tecnologías", "Granular Sound", "Immersive"], descripcionES: "<p>Performance espacial de carácter interactivo que utiliza síntesis granular manipulada mediante sensores de movimiento corporales.</p>", descripcionEN: "<p>Interactive spatial performance using granular synthesis manipulated through body motion sensors.</p>", mediaHTML: "" }] },
  { id: "inst-4", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", publicaciones: [{ idPub: "inst4-p1", año: "2026", titulo: "Humedades Digitales", tags: ["Instalación", "Generative Art", "Algorithms"], descripcionES: "<p>Instalación de arte generativo basada estrictamente en algoritmos biológicos simulados que mutan según la temperatura ambiente de la sala.</p>", descripcionEN: "<p>Generative art installation strictly based on simulated biological algorithms that mutate according to the room's ambient temperature.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // DISEÑO GRÁFICO
  // ----------------------------------------------------
  { id: "dis-1", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500", publicaciones: [{ idPub: "dis1-p1", año: "2025", titulo: "Branding Residencial", tags: ["Branding", "Typography", "Editorial Layout"], descripcionES: "<p>Desarrollo de identidad de marca premium y sistemas tipográficos limpios orientados al sector de desarrollos inmobiliarios de lujo.</p>", descripcionEN: "<p>Premium brand identity development and clean typographic systems tailored for the luxury real estate development sector.</p>", mediaHTML: "" }] },
  { id: "dis-2", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500", publicaciones: [{ idPub: "dis2-p1", año: "2025", titulo: "UI/UX Camping App", tags: ["UX/UI", "Figma Design", "Prototyping"], descripcionES: "<p>Prototipado interactivo de alta fidelidad y desarrollo detallado del sistema de componentes responsivos para aplicaciones móviles de turismo aventura.</p>", descripcionEN: "<p>High-fidelity interactive prototyping and detailed development of the responsive component system for adventure tourism mobile applications.</p>", mediaHTML: "" }] },
  { id: "dis-3", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500", publicaciones: [{ idPub: "dis3-p1", año: "2025", titulo: "AdeaHealth Interface", tags: ["UX/UI", "Product Design", "Healthcare"], descripcionES: "<p>Rediseño de flujos funcionales y optimización de interfaces críticas para sistemas globales de historias clínicas digitales.</p>", descripcionEN: "<p>Redesign of functional flows and optimization of critical interfaces for global digital medical record systems.</p>", mediaHTML: "" }] },
  { id: "dis-4", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500", publicaciones: [{ idPub: "dis4-p1", año: "2025", titulo: "Packaging La Cosecha", tags: ["Branding", "Sustainability", "Die-cuts"], descripcionES: "<p>Diseño estructural de empaques sustentables utilizando troqueles mínimos y una paleta tipográfica restrictiva de alta gama.</p>", descripcionEN: "<p>Structural sustainable packaging design using minimal die-cuts and a restrictive high-end typographic palette.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // FOTOGRAFÍA
  // ----------------------------------------------------
  { id: "foto-1", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500", publicaciones: [{ idPub: "fot1-p1", año: "2024", titulo: "Conciertos Under 2024", tags: ["Fotografía", "Analog Film", "High Contrast"], descripcionES: "<p>Registro fotográfico en blanco y negro de alto contraste capturado íntegramente con película analógica de alta sensibilidad forzada.</p>", descripcionEN: "<p>High-contrast black and white photographic registry entirely captured with pushed analog high-sensitivity film.</p>", mediaHTML: "" }] },
  { id: "foto-2", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500", publicaciones: [{ idPub: "fot2-p1", año: "2025", titulo: "Arquitectura Simétrica", tags: ["Fotografía", "Geometry", "Urban Architecture"], descripcionES: "<p>Ensayo visual enfocado en la ortogonalidad y la rigidez estructural de las fachadas brutalistas sobrevivientes en centros urbanos.</p>", descripcionEN: "<p>Visual essay focused on the orthogonality and structural rigidity of surviving brutalist facades in urban centers.</p>", mediaHTML: "" }] },
  { id: "foto-3", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500", publicaciones: [{ idPub: "fot3-p1", año: "2024", titulo: "Retratos de Artistas", tags: ["Fotografía", "Lighting", "Portraits"], descripcionES: "<p>Sesiones de estudio personalizadas para músicos utilizando iluminación puntual indirecta para acentuar el carácter dramático de la pieza.</p>", descripcionEN: "<p>Custom studio sessions for musicians utilizing precise indirect lighting to enhance the dramatic character of the piece.</p>", mediaHTML: "" }] },
  { id: "foto-4", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500", publicaciones: [{ idPub: "fot4-p1", año: "2026", titulo: "Espacios Vacíos", tags: ["Fotografía", "Industrial Decay", "Fine Arts"], descripcionES: "<p>Exploración estética sobre el deterioro institucional a través del registro analógico detallado de locaciones industriales en desuso.</p>", descripcionEN: "<p>Aesthetic exploration regarding institutional decay through detailed analog registry of defunct industrial locations.</p>", mediaHTML: "" }] }
];

const textoBio = `
    <div class="bio-content-view">
        <div class="bio-es">
            <p><strong>Wanda Acevedo</strong> es Diseñadora Audiovisual especializada en edición de video, diseño gráfico y producción de contenido digital para diferentes marcas, proyectos y empresas.</p>
            <p>Especializada en la Universidad de Buenos Aires (UBA) y con un fuerte enfoque técnico, investiga narrativas contemporáneas y las tecnologías creativas emergentes.</p>
        </div>
        <div class="bio-en">
            <p><strong>Wanda Acevedo</strong> is an Audiovisual Designer specializing in video editing, graphic design, and digital content production for various brands, projects, and companies.</p>
            <p>Formed at the University of Buenos Aires (UBA) and with a strong technical focus, she researches contemporary narratives and emerging creative technologies.</p>
        </div>
    </div>
`;

let categoriaActual = 'todos';

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

// NIVEL 1: RENDER DE PROYECTOS INTEGRALES EN LA GRILLA DE CATEGORÍA
function renderizarGrillaProyectos(proyectosAVisualizar) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';

    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';

    proyectosAVisualizar.forEach(proy => {
        const primeraPub = proy.publicaciones[0];
        if (!primeraPub) return;

        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyecto('${proy.id}')`);

        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${proy.portadaImg}" alt="${primeraPub.titulo}">
            <div class="pub-ano">${primeraPub.año}</div>
            <h3>${primeraPub.titulo}</h3>
            <div class="line-clamp-preview">
                ${primeraPub.descripcionES} <span class="mas-link">[+]</span>
            </div>
        `;
        divGrilla.appendChild(tarjeta);
    });

    contenedor.appendChild(divGrilla);
}

// NIVEL 1 MODIFICADO: CUANDO FILTRAS POR UN TAG ESPECÍFICO
function renderizarGrillaPublicacionesFiltradas(publicacionesFiltradas) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';

    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';

    publicacionesFiltradas.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyecto('${item.padreId}')`);

        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${item.padreImg}" alt="${item.pub.titulo}">
            <div class="pub-ano">${item.pub.año}</div>
            <h3>${item.pub.titulo}</h3>
            <div class="line-clamp-preview">
                ${item.pub.descripcionES} <span class="mas-link">[+]</span>
            </div>
        `;
        divGrilla.appendChild(tarjeta);
    });

    contenedor.appendChild(divGrilla);
}

// NIVEL 2: VISTA INTERNA DEL PROYECTO
function verProyecto(idProyecto) {
    const proy = listaProyectos.find(p => p.id === idProyecto);
    if (!proy) return;

    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.remove('hidden');

    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';

    const divProyecto = document.createElement('div');
    divProyecto.className = 'proyecto-interno';
    
    let contenidoHTML = '';

    proy.publicaciones.forEach(pub => {
        let mediaRenderizado = pub.mediaHTML;
        if (mediaRenderizado && mediaRenderizado.includes('<img')) {
            mediaRenderizado = mediaRenderizado.replace('<img', '<img data-lightbox="true" style="cursor:pointer;"');
        }

        // APLICAMOS MARGEN INFERIOR A CADA PÁRRAFO DE LAS DESCRIPCIONES PARA QUE NO SE VEAN PEQUEÑOS Y PEGADOS EN NINGÚN TEXTO
        let descES = pub.descripcionES.replaceAll('<p>', '<p style="margin-bottom: 16px;">');
        let descEN = pub.descripcionEN.replaceAll('<p>', '<p style="margin-bottom: 16px;">');

        contenidoHTML += `
            <div class="publicacion-item">
                <div class="pub-ano">${pub.año}</div>
                <div class="pub-titulo-interno">${pub.titulo}</div>
                <div class="pub-tags" style="margin-bottom: 30px;">${pub.tags.join(' - ')}</div>
                
                <div class="descripcion-bloque-es">${descES}</div>
                <div class="descripcion-bloque-en">${descEN}</div>
                
                <div class="pub-media-container">
                    ${mediaRenderizado || '<div style="font-size:11px;color:#999999;padding:20px;border:1px dashed #ddd;text-align:center;">[ espacio multimedia vacío / empty media slot ]</div>'}
                </div>
            </div>
        `;
    });

    divProyecto.innerHTML = contenidoHTML;
    contenedor.appendChild(divProyecto);
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

function filtrarPorMetadato(tagBuscado) {
    document.getElementById('back-button-container').classList.add('hidden');
    let publicacionesCoincidentes = [];

    listaProyectos.forEach(proy => {
        if (proy.categoria === 'comercial') {
            proy.publicaciones.forEach(pub => {
                if (pub.tags.includes(tagBuscado)) {
                    publicacionesCoincidentes.push({
                        padreId: proy.id,
                        padreImg: proy.portadaImg,
                        pub: pub
                    });
                }
            });
        }
    });
    
    renderizarGrillaPublicacionesFiltradas(publicacionesCoincidentes);
}

// EVENTO DE ESCUCHA EXCLUSIVO PARA IMÁGENES CON ATRIBUTO 'data-lightbox'
document.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-lightbox')) {
        const urlImagen = event.target.getAttribute('src');
        const modal = document.getElementById('lightbox-modal');
        const imagenModal = document.getElementById('lightbox-img');
        
        if (modal && imagenModal) {
            imagenModal.src = urlImagen;
            modal.classList.remove('hidden');
        }
    }
});

function cerrarImagen() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

irAHome();
