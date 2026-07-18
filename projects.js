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
  // AUDIOVISUAL
  // ----------------------------------------------------
  {
    id: "aud-memoria",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-memoria.png",
    publicaciones: [
      {
        idPub: "aud-mem-p1",
        año: "2023",
        titulo: "memoria",
        tags: ["animación experimental"],
        descripcionES: "<p>“memoria” es un proyecto de animación resultado de una experimentación de diferentes técnicas audiovisuales: fotografía, imagen en movimiento, dibujos en papel y digitales. Fue realizado para la Universidad de Buenos Aires en el marco de los 40 años de Democracia en Argentina.</p>",
        descripcionEN: "<p>“memoria” is an animation project resulting from experimentation with various audiovisual techniques: photography, moving images, and both paper and digital drawings. It was produced for the University of Buenos Aires in the context of the 40th anniversary of democracy in Argentina.</p>",
        mediaHTML: '<iframe src="https://www.youtube.com/embed/_fNHM4maVpA" title="memoria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-moyo",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-moyo.png",
    publicaciones: [
      {
        idPub: "aud-moyo-p1",
        año: "2023",
        titulo: "Moyo",
        tags: ["cortos de animación 2D"],
        descripcionES: `
          <p>Proyecto de animación 2d que mezcla técnicas de dibujo en papel con dibujo digital.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #000; margin-top: 25px;">Proceso de construcción:</div>
        `,
        descripcionEN: `
          <p>2D animation project blending paper-based drawing techniques with digital drawing.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #777; margin-top: 25px;">Construction process:</div>
        `,
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/1_h0tL3hrfA" title="Moyo Video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/e0nDvOtpPjM" title="Moyo Video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%; margin-top: 15px;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/-K0N8nFII5Y" title="Proceso 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/BC_WIf5bPTQ" title="Proceso 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/oUgn8nPFbTo" title="Proceso 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "aud-cero-nueve",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-cero-nueve.png",
    publicaciones: [
      {
        idPub: "aud-cero-p1",
        año: "2023",
        titulo: "cero, nueve",
        tags: ["video experimental"],
        descripcionES: "<p>Interpretación audiovisual de un sueño.</p>",
        descripcionEN: "<p>Audiovisual interpretation of a dream.</p>",
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000; margin-bottom: 25px;">
              <iframe src="https://www.youtube.com/embed/jHQmMj2uQmo" title="cero, nueve" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-urdimbre-morfologias",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-urdimbre.png",
    publicaciones: [
      {
        idPub: "aud-urdimbre-p1",
        año: "2022",
        titulo: "urdimbre: morfologías e identidad en el espacio público",
        tags: ["video experimental"],
        descripcionES: `
          <p>"Urdimbre" es un collage audiovisual desarrollada durante 2022 junto a Delfina Di Giacomo. Explora las líneas, los recorridos y las formas que configuran el espacio público. El proyecto surge de una inquietun por observar las morfologías de la ciudad e imaginar las lógicas que subyacen a su organización.</p>
          <p>A partir del tránsito reiterado por los mismos espacios urbanos, la obra dirige su mirada hacia los no-lugares: ámbitos de circulación donde la identidad individual se diluye en el flujo constante de personas. La infraestructura urbana y sus trazados conducen nuestros desplazamientos a través de recorridos aparentemente mecánicos, que por momentos parecen abrir la posibilidad de ser interrumpidos o transformados.</p>
          <p><b>Exhibiciones</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">Muestra MAGMA</a>, Centro Hipermediático Experimental Latinoamericano (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, España.</p>
        `,
        descripcionEN: `
          <p>"Urdimbre" is an audiovisual collage developed throughout 2022 in collaboration with Delfina Di Giacomo. It explores the lines, pathways, and forms that shape public space. The project emerged from a fascination with the city's morphologies and a desire to imagine the hidden logics underlying its organization.</p>
          <p>Through the repeated experience of moving through the same urban environments, the work turns its attention to non-places: spaces of circulation where individual identity becomes diluted within the continuous flow of people. The city's infrastructure and network of lines guide our movements along seemingly mechanical paths that occasionally reveal the possibility of disruption and transformation.</p>
          <p><b>Exhibitions</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">MAGMA Exhibition</a>, Latin American Experimental Hypermedia Center (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, Spain.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/GC83fCLqHPs" title="Urdimbre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Imágenes:</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-01.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-entre-las-dos",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-entre-las-dos.png",
    publicaciones: [
      {
        idPub: "aud-entre-p1",
        año: "2022",
        titulo: "entre las dos",
        tags: ["corto ficcional experimental"],
        descripcionES: `
          <p>"Entre las Dos" es un corto realizado en el marco de la materia Iluminación y Cámara 2 (Cátedra Valansi) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA). En este proyecto me desempeñé como <b>directora</b> y <b>diseñadora de iluminación</b>.</p>
        `,
        descripcionEN: `
          <p>“Entre las Dos” is a short film developed as part of the Lighting and Camera 2 course in the Image and Sound Design career at the University of Buenos Aires (UBA). For this project, I worked as the <b>director</b> and <b>lighting designer</b>.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/okDMsnwzYII" title="Entre las Dos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-04.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-05.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-06.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-la-grulla",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-la grulla.png",
    publicaciones: [
      {
        idPub: "aud-grulla-p1",
        año: "2022",
        titulo: "la grulla",
        tags: ["docu-ficción"],
        descripcionES: `
          <p>La Grulla es mi abuela. Desde la productora Doña Mutante realizamos este proyecto con el objetivo de construir un retrato íntimo de su espiritualidad y su templanza en el contexto de una ciudad sonora, invasiva y constantemente agitada.</p>
          <p>Más que presentar ese entorno como un conflicto o una fuente de incomodidad, el retrato pone el foco en la manera en que ella habita ese espacio a través de sus rituales cotidianos.</p>
        `,
        descripcionEN: `
          <p>La Grulla is my grandmother. Produced by Doña Mutante, this project aims to create an intimate portrait of her spirituality and inner strength within the context of a noisy, intrusive, and constantly bustling city.</p>
          <p>Rather than portraying this environment as a source of conflict or discomfort, the portrait focuses on the way she inhabits it through her daily rituals, revealing a quiet coexistence between her inner world and the city's relentless rhythm.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/ey6VMglwguY" title="La Grulla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
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
        titulo: "albores",
        tags: ["docu-ficción"],
        descripcionES: `
          <p>Trabajé como <b>directora</b>, <b>montajista</b> y <b>diseñadora de sonido</b> de "Albores", un cortometraje de docu-ficción estrenado en diciembre de 2023 en el Festival de Cortos de Amorina Cine Bar, un espacio dedicado a la exhibición del cine independiente argentino que reúne a realizadores y realizadoras emergentes.</p>
        `,
        descripcionEN: `
          <p>I worked as the <b>director</b>, <b>editor</b>, and <b>sound designer</b> of "Albores", a docfiction short film that premiered in December 2023 at the Amorina Cine Bar Short Film Festival, an event dedicated to showcasing independent Argentine cinema and bringing together emerging filmmakers.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/fLpjvvWXApA" title="Albores" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-documental-del-azar",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-documentaldelazar.png",
    publicaciones: [
      {
        idPub: "aud-azar-p1",
        año: "2020",
        titulo: "documental del azar",
        tags: ["mixed-media"],
        descripcionES: `
          <p>"Documental del azar" es un video experimental realizado como proyecto final de la materia Proyecto Audiovisual 1 (Cátedra Campos/Trilnick) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA).</p>
          <p>El proyecto explora el cruce entre el registro documental y la intervención plástica, combinando imágenes documentales con manipulaciones realizadas directamente sobre los fotogramas para cuestionar los límites entre la representación y la experimentación visual.</p>
          <p>Realizado en colaboración con Javiera Ceniceros y Clara Bunge.</p>
        `,
        descripcionEN: `
          <p>"Documental del azar" is an experimental video created as the final project for the Audiovisual Project 1 course in the Image and Sound Design career at the University of Buenos Aires (UBA).</p>
          <p>The project explores the intersection of documentary filmmaking and visual experimentation by combining documentary footage with hand-crafted interventions applied directly to individual frames, blurring the boundaries between documentation and artistic expression.</p>
          <p>Created in collaboration with Javiera Ceniceros and Clara Bunge.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/FKYOi1UyxpY" title="Documental del azar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },

  // ----------------------------------------------------
  // FREELANCE
  // ----------------------------------------------------
  {
    id: "free-flakkaboem-sessions",
    categoria: "freelance",
    portadaImg: "img/portadas/portada-cero-nueve.png",
    publicaciones: [
      {
        idPub: "free-flak-p1",
        año: "2024",
        titulo: "Flakkaboem Sessions",
        tags: ["live music sessions"],
        descripcionES: "<p>Postproducción de material audiovisual para sesiones de música en vivo, incluyendo <b>edición de video</b>, <b>corrección de color</b>, <b>sincronización multicámara</b> y selección de fragmentos para la creación de contenido en formato vertical destinado a Instagram Reels y YouTube Shorts.</p>",
        descripcionEN: "<p>Post-production of audiovisual content for live music sessions, including <b>video editing</b>, <b>color correction</b>, <b>multicamera synchronization</b>, and the selection of highlights for short-form vertical content on Instagram Reels and YouTube Shorts.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <!-- Fila 1: Videos 1 -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/S5clh2xefZw" title="Flakkaboem Session 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.instagram.com/reel/C--qANCoZuu/embed" title="Flakkaboem Reel 1" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <!-- Fila 2: Videos 2 -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/KIdcWdvYJI" title="Flakkaboem Session 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.instagram.com/reel/C9m0jSiofec/embed" title="Flakkaboem Reel 2" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <!-- Fila 3: Videos 3 -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/4ShSn0kQJeE" title="Flakkaboem Session 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.instagram.com/reel/C6wLgRnIE0y/embed" title="Flakkaboem Reel 3" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <!-- Fila 4: Videos 4 -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/WMMbMiQEcWA" title="Flakkaboem Session 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.instagram.com/reel/C5EKt3_oolW/embed" title="Flakkaboem Reel 4" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <!-- Fila 5: Videos 5 -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/EA6wyKV7xs4" title="Flakkaboem Session 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.instagram.com/reel/C3-b801Ivpj/embed" title="Flakkaboem Reel 5" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
          </div>
        `
      }
    ]
  },

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
  { id: "inst-3", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", publicaciones: [{ idPub: "inst3-p1", año: "2025", titulo: "Frecuencias Latentes", tags: ["Nuevas Tecnologías", "Granular Sound", "Immersive"], descripcionES: "<p>Performance espacial de carácter interactivo que utiliza síntesis granular manipulada mediante sensores de movimiento corporales.</p>", descripcionEN: "<p>Interactive spatial performance using granular synthesis manipulated through body motion sensors.</p>", mediaHTML: "" }] },
  { id: "inst-4", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", publicaciones: [{ idPub: "inst4-p1", año: "2026", titulo: "Humedades Digitales", tags: ["Instalación", "Generative Art", "Algorithms"], descripcionES: "<p>Instalación de arte generativo basada estrictamente en algoritmos biológicos simulados que mutan según la temperatura ambiente de la sala.</p>", descripcionEN: "<p>Generative art installation strictly based on simulated biological algorithms that mutate according to the room's ambient temperature.</p>", mediaHTML: "" }] },

  // ----------------------------------------------------
  // DISEÑO GRÁFICO
  // ----------------------------------------------------
  { id: "dis-1", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500", publicaciones: [{ idPub: "dis1-p1", año: "2025", titulo: "Branding Residencial", tags: ["Branding", "Typography", "Editorial Layout"], descripcionES: "<p>Desarrollo de identidad de marca premium y sistemas tipográficos limpios orientados al sector de desarrollos inmobiliarios de lujo.</p>", descripcionEN: "<p>Premium brand identity development and clean typographic systems tailored for the luxury real estate development sector.</p>", mediaHTML: "" }] },
  { id: "dis-2", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500", publicaciones: [{ idPub: "dis2-p1", año: "2025", titulo: "UI/UX Camping App", tags: ["UX/UI", "Figma Design", "Prototyping"], descripcionES: "<p>Prototipado interactivo de alta fidelidad y desarrollo detallado del sistema de componentes responsivos para aplicaciones móviles de turismo aventura.</p>", descripcionEN: "<p>High-fidelity interactive prototyping and detailed development of the responsive component system for adventure tourism mobile applications.</p>", mediaHTML: "" }] },
  { id: "dis-3", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500", publicaciones: [{ idPub: "dis3-p1", año: "2025", titulo: "AdeaHealth Interface", tags: ["UX/UI", "Product Design", "Healthcare"], descripcionES: "<p>Rediseño de flujos funcionales y optimización de interfaces críticas para sistemas globales de historias clínicas digitales.</p>", descripcionEN: "<p>Redesign of functional flows and optimization of critical interfaces for global digital medical record systems.</p>", mediaHTML: "" }] },
  { id: "dis-4", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500", publicaciones: [{ idPub: "dis4-p1", año: "2025", titulo: "Packaging La Cosecha", tags: ["Branding", "Sustainability", "Die-cuts"], descripcionES: "<p>Diseño estructural de empaques sustentables utilizando troqueles mínimos y una paleta tipográfica restrictiva.</p>", descripcionEN: "<p>Sustainable structural packaging design using minimal die-cuts and a restrictive typographic palette.</p>", mediaHTML: "" }] }
];
